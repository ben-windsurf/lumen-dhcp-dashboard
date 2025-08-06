import React from 'react';
import { FaTachometerAlt, FaServer } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        EXPERT DHCP
      </div>
      <nav>
        <ul className="sidebar-nav">
          <li>
            <a href="#" className="active">
              <FaTachometerAlt className="icon" />
              Dashboard
            </a>
          </li>
          <li>
            <a href="#">
              <FaServer className="icon" />
              DHCP Server
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
