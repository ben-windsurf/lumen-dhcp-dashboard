const IPAllocationChart = () => {
  // Mock data for IP allocation
  const data = [
    { label: 'Used', value: 150, color: '#0066ff', percentage: 75 },
    { label: 'Available', value: 50, color: '#99c2ff', percentage: 25 }
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div style={{
      height: '120px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
      }}>
        {/* Donut Chart */}
        <div style={{ position: 'relative' }}>
          <svg width="120" height="120" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r="45"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="20"
            />
            {/* Used portion */}
            <circle
              cx="60"
              cy="60"
              r="45"
              fill="none"
              stroke="#0066ff"
              strokeWidth="20"
              strokeDasharray={`${(data[0].percentage / 100) * 283} 283`}
              strokeDashoffset="0"
              transform="rotate(-90 60 60)"
              strokeLinecap="round"
            />
            {/* Available portion */}
            <circle
              cx="60"
              cy="60"
              r="45"
              fill="none"
              stroke="#99c2ff"
              strokeWidth="20"
              strokeDasharray={`${(data[1].percentage / 100) * 283} 283`}
              strokeDashoffset={`-${(data[0].percentage / 100) * 283}`}
              transform="rotate(-90 60 60)"
              strokeLinecap="round"
            />
            {/* Center text */}
            <text x="60" y="55" textAnchor="middle" style={{
              fontSize: '18px',
              fontWeight: 'bold',
              fill: '#1F2937'
            }}>
              {total}
            </text>
            <text x="60" y="70" textAnchor="middle" style={{
              fontSize: '10px',
              fill: '#6B7280'
            }}>
              Total IPs
            </text>
          </svg>
        </div>

        {/* Legend */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          {data.map((item, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '12px'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '2px',
                backgroundColor: item.color
              }}></div>
              <span style={{
                color: '#374151',
                minWidth: '60px'
              }}>{item.label}</span>
              <span style={{
                color: '#6B7280',
                fontWeight: '500'
              }}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default IPAllocationChart;
