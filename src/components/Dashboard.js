import IPAllocationChart from './IPAllocationChart';
import VendorChart from './VendorChart';

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Overview Section */}
      <div className="dashboard-section">
        <div className="section-header">OVERVIEW - [172.16.0.86]</div>
        <div className="overview-grid">
          <div className="stat-card">
            <div className="stat-number">1</div>
            <div className="stat-label">SUBNETS</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">200</div>
            <div className="stat-label">TOTAL IP<br />ADDRESSES</div>
          </div>
          <div className="ip-allocation">
            <h3>IP Address Allocation</h3>
            <IPAllocationChart />
          </div>
        </div>
      </div>

      {/* DHCP Servers Section */}
      <div className="dashboard-section">
        <div className="section-header">DHCP Servers</div>
        <table className="dhcp-servers-table">
          <thead>
            <tr>
              <th>IP</th>
              <th>Status</th>
              <th>Name</th>
              <th>Lab</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>172.16.0.86</td>
              <td>
                <span className="status-indicator status-online"></span>
                Online
              </td>
              <td>multiserver1631</td>
              <td>Denver</td>
            </tr>
            <tr>
              <td>10.189.134.56</td>
              <td>
                <span className="status-indicator status-offline"></span>
                Offline
              </td>
              <td>kea-dhcp01</td>
              <td>Denver</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Leases Section */}
      <div className="dashboard-section">
        <div className="section-header">Leases</div>
        <div className="lease-bar">
          <div className="lease-fill" style={{ width: '95%' }}>
            <div className="lease-label">192.0.2.0/24 [1]</div>
          </div>
        </div>
        <div className="lease-info">
          <span>Subnet</span>
          <span>Usage</span>
        </div>
      </div>

      {/* Vendor Chart Section */}
      <div className="dashboard-section">
        <div className="section-header">VENDOR CHART</div>
        <VendorChart />
      </div>
    </div>
  );
};

export default Dashboard;
