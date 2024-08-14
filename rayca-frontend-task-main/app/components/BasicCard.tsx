import React from "react";

const BasicCard = ({ title, description, value, status, buttonText }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-4">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-gray-400">{title}</h4>
          <p className="text-gray-500">{description}</p>
        </div>
        <div>
        <span className="text-gray-400">{value}</span>
          <span
            className={`text-${status === "Very secure" ? "green" : "red"}-500`}
          >
            {status === "Very secure" && <i className="far fa-circle-check mx-2" />}
            {status}
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-gray-700 text-gray-400 px-4 py-1 rounded-md outline-slate-500 outline outline-1">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasicCard;
