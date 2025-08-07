import { FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <h1>EXPERT DHCP</h1>
      </div>
      <div className="header-right">
        <select className="server-dropdown">
          <option>172.16.0.86</option>
        </select>
        <div className="user-icon">
          <FaUser />
        </div>
      </div>
    </div>
  );
};

export default Header;
