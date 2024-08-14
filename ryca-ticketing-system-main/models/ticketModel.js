const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  title: { type: String, required: true },
  assignedTo: { type: String, default: null },
  status: { type: String, enum: ['Todo', 'InProgress', 'Done', 'Blocked', 'Rejected'], default: 'Todo' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

ticketSchema.pre('save', function (next) {
  if (!this.isModified('updatedAt')) {
    this.updatedAt = this.createdAt;
  }
  next();
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
