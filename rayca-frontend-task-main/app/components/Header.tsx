import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-semibold">Mia de Silva</h1>
        <p className="text-gray-400">Manage your details and personal preferences here.</p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            className="bg-gray-800 text-gray-400 rounded-md pl-10 pr-4 py-1 outline-slate-500 outline outline-1 focus:outline-none"
            placeholder="Search"
            type="text"
          />
          <i className="fas fa-search absolute left-3 top-2.5 text-gray-400"></i>
        </div>
        <button className="bg-gray-800 text-gray-400 px-4 py-1 rounded-md outline-slate-500 outline outline-1">+ Invite</button>
        <button className="bg-blue-500 text-white px-4 py-1 rounded-md">Upgrade</button>
        <div className="w-10 h-10 bg-gray-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default Header;
