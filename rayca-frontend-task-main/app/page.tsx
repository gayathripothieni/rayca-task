import React from "react";
import BasicCard from "./components/BasicCard";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import SecurityCard from "./components/SecurityCard";
import DeviceCard from "./components/DeviceCard";

const Home = () => {
  const basicCards = [
    {
      title: "Password",
      description: "Set a password to protect your account.",
      value: "•••••••••••••••",
      status: "Very secure",
      buttonText: "Edit",
    },
    {
      title: "Two-step verification",
      description:
        "We recommend requiring a verification code in addition to your password.",
      value: "",
      status: "",
      buttonText: "Edit",
    },
  ];

  const deviceCards = [
    {
      icon: "fab fa-brave text-orange-500",
      title: "Brave on Mac OS X",
      location: "Ninh Binh, Vietnam",
      status: "Current session",
    },
    {
      icon: "fab fa-apple text-gray-400",
      title: "Mia's MacBook Pro",
      location: "Ninh Binh, Vietnam",
      status: "Current session",
    },
    {
      icon: "fab fa-brave text-orange-500",
      title: "Brave on Mac OS X",
      location: "Mexico City, Mexico",
      time: "1 month ago",
    },
    {
      icon: "fab fa-apple text-gray-400",
      title: "Mia's MacBook Pro",
      location: "Mexico City, Mexico",
      time: "1 month ago",
    },
  ];

  return (
    <main className="bg-[#FBFBFB] flex min-h-screen flex-col items-center text-[#1A1A1A]">
      <div className="bg-gray-800 text-white flex w-full">
        <Sidebar />
        <div className="flex-1 p-6 max-h-screen overflow-y-scroll">
          <Header />
          <div className="bg-gray-900 rounded-lg p-4">
            <Tabs />
            <SecurityCard />
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Basics</h3>
              {basicCards.map((card, index) => (
                <BasicCard
                  key={index}
                  title={card.title}
                  description={card.description}
                  value={card.value}
                  status={card.status}
                  buttonText={card.buttonText}
                />
              ))}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Browsers and devices
              </h3>
              <p className="text-gray-500 mb-4">
                These browsers and devices are currently signed in to your
                account. Remove any unauthorized devices.
              </p>
              {deviceCards.map((card, index) => (
                <DeviceCard
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  location={card.location}
                  status={card.status}
                  time={card.time}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
