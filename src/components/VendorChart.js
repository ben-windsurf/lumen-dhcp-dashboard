const VendorChart = () => {
  // Mock data for vendor distribution
  const vendors = [
    { name: 'Apple', count: 45, color: '#001e60' },
    { name: 'Dell', count: 32, color: '#0047bb' },
    { name: 'HP', count: 28, color: '#0066ff' },
    { name: 'Lenovo', count: 18, color: '#3385ff' },
    { name: 'Microsoft', count: 12, color: '#66a3ff' },
    { name: 'Other', count: 8, color: '#99c2ff' }
  ];

  const maxCount = Math.max(...vendors.map(v => v.count));
  const totalDevices = vendors.reduce((sum, vendor) => sum + vendor.count, 0);

  return (
    <div style={{
      height: '280px',
      padding: '16px',
      background: '#ffffff',
      borderRadius: '8px',
      border: '1px solid #E5E7EB'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px',
        paddingBottom: '8px',
        borderBottom: '1px solid #F3F4F6'
      }}>
        <h4 style={{
          margin: 0,
          fontSize: '16px',
          fontWeight: '600',
          color: '#1F2937'
        }}>Device Vendors</h4>
        <span style={{
          fontSize: '12px',
          color: '#6B7280',
          background: '#F3F4F6',
          padding: '4px 8px',
          borderRadius: '12px'
        }}>{totalDevices} devices</span>
      </div>
      
      <div style={{
        height: 'calc(100% - 50px)'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          {vendors.map((vendor, index) => {
            const percentage = (vendor.count / maxCount) * 100;
            return (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <div style={{
                  minWidth: '70px',
                  fontSize: '12px',
                  color: '#374151',
                  fontWeight: '500'
                }}>{vendor.name}</div>
                <div style={{
                  flex: 1,
                  height: '20px',
                  background: '#F3F4F6',
                  borderRadius: '10px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    height: '100%',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    paddingRight: '8px',
                    minWidth: '30px',
                    transition: 'width 0.3s ease',
                    width: `${percentage}%`,
                    backgroundColor: vendor.color
                  }}>
                    <span style={{
                      color: 'white',
                      fontSize: '11px',
                      fontWeight: '600',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                    }}>{vendor.count}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>


    </div>
  );
};

export default VendorChart;
