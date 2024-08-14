import React from "react";

const Sidebar = () => {
  const menuItems = [
    { icon: "fas fa-home", label: "Home", link: "#home" },
    { icon: "fas fa-folder", label: "All files", link: "#all-files" },
    { icon: "fas fa-lock", label: "Private files", link: "#private-files" },
    { icon: "fas fa-share-alt", label: "Shared with me", link: "#shared-with-me" },
    { icon: "fas fa-trash", label: "Deleted files", link: "#deleted-files" },
    { icon: "fas fa-paint-brush", label: "Design", link: "#design" },
    { icon: "fas fa-bell", label: "Notifications", link: "#notifications", badge: 8 },
    { icon: "fas fa-cog", label: "Settings", link: "#", active: true },
  ];

  return (
    <div className="w-64 bg-gray-900 p-4 max-h-screen">
      <div className="flex items-center mb-8">
        <div className="w-10 h-10 bg-blue-500 rounded-full mr-3"></div>
        <span className="font-semibold">Untitled UI</span>
        <span className="text-sm ml-7">v4.0</span>
        <i className="fas fa-up-right-from-square ml-2 text-sm" />
      </div>
      <nav className="space-y-2">
        {menuItems.map((item, index) => (
          <a
            key={index}
            className={`flex items-center p-2 text-gray-400 hover:bg-gray-700 rounded ${item.active ? "bg-gray-700" : ""}`}
            href={item.link}
          >
            <i className={`${item.icon} mr-3`}></i>
            {item.label}
            {item.badge && (
              <span className="ml-auto bg-blue-500 text-white text-xs rounded-full px-2 py-1">
                {item.badge}
              </span>
            )}
          </a>
        ))}
      </nav>
      <div className="mt-8">
        <h3 className="text-gray-400 text-sm mb-2">FILE BROWSER</h3>
        <a className="flex items-center p-2 text-gray-400 hover:bg-gray-700 rounded" href="#">
          <i className="fas fa-angle-right mr-3"></i>
          Folders
        </a>
      </div>
      <footer className="sticky top-[100vh] bg-gray-700 rounded p-2">
        <div className="flex items-center justify-between text-gray-400 text-sm">
          <span className="text-lg">Storage</span>
          <a className="text-blue-500" href="#">
            Upgrade
          </a>
        </div>
        <div className="w-full bg-gray-500 rounded-full h-2 mt-2">
          <div className="bg-white h-2 rounded-full" style={{ width: "92%" }}></div>
        </div>
        <div className="text-gray-400 text-xs mt-1">9.2 GB of 10 GB used</div>
      </footer>
    </div>
  );
};

export default Sidebar;
