import React from "react";

const DeviceCard = ({ icon, title, location, status, time }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <i className={`${icon} text-2xl mr-4`}></i>
          <div>
            <h4 className="text-gray-400">{title}</h4>
            <p className="text-gray-500">{location}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-500">
            {status || time}
          </span>
          <i className="fas fa-trash text-gray-400"></i>
        </div>
      </div>
    </div>
  );
};

export default DeviceCard;
