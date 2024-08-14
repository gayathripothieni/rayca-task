const express = require('express');
const Ticket = require('../models/ticketModel');
const auth = require('../middlewares/auth');
const roleAuth = require('../middlewares/roleAuth');
const sendMail = require('../utils/mailer'); // Import the mailer
const User = require('../models/User');

const mongoose = require('mongoose'); // To access the MongoDB driver

const router = express.Router();

// API 1 - Create a Ticket (Allowed for: customers, support agents, admins)
/**
 * @swagger
 * paths:
 *     /tickets/create:
 *         post:
 *             summary: This API creates a new ticket
 *             description: This API to create new tickets
 *             parameters:
 *                  - in: query
 *                    name: ticket
 *                    required: true
 *                    description: Ticket Details
 *                    schema:
 *                          type: object
 *                          properties:
 *                                     title:
 *                                           type: string
 *                                     assignedTo:
 *                                                type: string
 *                                     status:
 *                                            type: string
 *                                     createdAt:
 *                                               type: string
 *                                     updatedAt:
 *                                               type: string
 *             responses:
 *                  200:
 *                      description: ticket info
 *                      content: 
 *                          application/json: 
 *                              schema: 
 *                                  type: object
 *                                  properties:
 *                                             title:
 *                                                   type: string
 *                                             assignedTo:
 *                                                        type: string
 *                                             status:
 *                                                    type: string
 *                                             _id:
 *                                                 type: string
 *                                             createdAt:
 *                                                       type: string
 *                                             updatedAt:
 *                                                       type: string
 */
router.post('/create', auth, roleAuth(['customer', 'support agent', 'admin']), async (req, res) => {
  const { title } = req.body;
  try {
    const newTicket = new Ticket({ title });
    await newTicket.save();
    res.status(201).send(newTicket);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// API 2 - Update a Ticket (Allowed for: support agents, admins)
router.patch('/update/:id', auth, roleAuth(['support agent', 'admin']), async (req, res) => {
  const { id } = req.params;
  const { status, title } = req.body;

  try {
    const ticket = await Ticket.findById(id);
    if (!ticket) {
      return res.status(404).send('Ticket not found');
    }

    if (status) ticket.status = status;
    if (title) ticket.title = title;
    ticket.updatedAt = new Date();

    await ticket.save();

    // Get the support agent's email, user email, and admin emails
    const supportAgent = await User.findById(ticket.assignedTo);
    const user = await User.findById(ticket.userId); // Assuming ticket.userId exists
    const admins = await User.find({ role: 'admin' }); // Get all admins

    // Send email notification
    sendMail(
      supportAgent.email,
      'Ticket Status Updated',
      `The status of ticket "${ticket.title}" has been changed to ${ticket.status}.`
    );

    sendMail(
      user.email,
      'Your Ticket Status Updated',
      `The status of your ticket "${ticket.title}" has been changed to ${ticket.status}.`
    );

    admins.forEach(admin => {
      sendMail(
        admin.email,
        'Ticket Status Updated',
        `The status of ticket "${ticket.title}" has been changed to ${ticket.status}.`
      );
    });

    res.send(ticket);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// API 3 - Delete a Ticket (Allowed for: admins)
router.delete('/delete/:id', auth, roleAuth(['admin']), async (req, res) => {
  const { id } = req.params;
  try {
    const ticket = await Ticket.findByIdAndDelete(id);
    if (!ticket) {
      return res.status(404).send('Ticket not found');
    }
    res.send('Ticket deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// API 4 - Assign a Ticket (Allowed for: support agents, admins)
router.patch('/assign/:id', auth, roleAuth(['support agent', 'admin']), async (req, res) => {
  const { id } = req.params;
  const { assignedTo } = req.body;

  try {
    const ticket = await Ticket.findById(id);
    if (!ticket) {
      return res.status(404).send('Ticket not found');
    }

    // Access the users collection directly via Mongoose connection
    const usersCollection = mongoose.connection.collection('users');

    // Find the support agent by username
    const supportAgent = await usersCollection.findOne({ username: assignedTo });
    if (!supportAgent) {
      return res.status(404).send('Support agent not found');
    }

    ticket.assignedTo = supportAgent._id; // Store the ObjectId reference
    ticket.updatedAt = new Date();

    await ticket.save();

    // Find the user associated with the ticket
    const user = await usersCollection.findOne({ _id: ticket.userId });

    // Send email notifications
    sendMail(
      supportAgent.email,
      'Ticket Assigned',
      `You have been assigned a new ticket: ${ticket.title}`
    );

    sendMail(
      user.email,
      'Ticket Assigned to Support Agent',
      `Your ticket "${ticket.title}" has been assigned to ${supportAgent.username}.`
    );

    res.send(ticket);
  } catch (error) {
    res.status(400).send(error.message);
  }
});


module.exports = router;
