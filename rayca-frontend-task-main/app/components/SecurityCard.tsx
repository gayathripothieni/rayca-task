import React from "react";

const SecurityCard = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full mr-4 border-blue-400 border-4 border-solid"></div>
          <div>
            <h3 className="text-lg font-semibold">Your account security is 90%</h3>
            <p className="text-gray-400">
              Please review your account security settings regularly and update your password.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-gray-700 text-gray-400 px-4 py-1 rounded-md outline-slate-500 outline outline-">Dismiss</button>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-md">Review security</button>
        </div>
      </div>
    </div>
  );
};

export default SecurityCard;
