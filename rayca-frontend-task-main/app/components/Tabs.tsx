import React from "react";

const Tabs = () => {
  const tabs = [
    { label: "General", link: "#" },
    { label: "Security", link: "#", active: true },
    { label: "Billing", link: "#" },
    { label: "Notifications", link: "#" },
    { label: "Apps", link: "#" },
    { label: "Branding", link: "#" },
    { label: "Refer a friend", link: "#" },
    { label: "Sharing", link: "#" },
  ];

  return (
    <div className="flex space-x-4 mb-6">
      {tabs.map((tab, index) => (
        <a
          key={index}
          className={`text-gray-400 hover:text-white ${tab.active ? "text-white border-b-2 border-blue-500" : ""}`}
          href={tab.link}
        >
          {tab.label}
        </a>
      ))}
    </div>
  );
};

export default Tabs;
