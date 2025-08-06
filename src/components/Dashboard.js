import React from 'react';

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
            {/* Placeholder for chart - would need a charting library for actual implementation */}
            <div style={{
              height: '120px',
              background: 'linear-gradient(45deg, #e2e8f0 25%, transparent 25%), linear-gradient(-45deg, #e2e8f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e2e8f0 75%), linear-gradient(-45deg, transparent 75%, #e2e8f0 75%)',
              backgroundSize: '20px 20px',
              backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#718096',
              fontSize: '14px'
            }}>
              Chart Placeholder
            </div>
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
        <div style={{
          height: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#718096',
          fontSize: '14px',
          background: '#f7fafc',
          borderRadius: '8px'
        }}>
          Vendor Chart Placeholder
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
