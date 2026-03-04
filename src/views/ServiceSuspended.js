import React from 'react';

const ServiceSuspended = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#f8f9fa',
    color: '#343a40',
    fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
    boxSizing: 'border-box'
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
    maxWidth: '600px',
    width: '100%'
  };

  const iconStyle = {
    fontSize: '64px',
    color: '#dc3545',
    marginBottom: '20px'
  };

  const titleStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#000'
  };

  const messageStyle = {
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '25px',
    color: '#555'
  };

  const contactStyle = {
    fontSize: '16px',
    fontWeight: '600',
    color: '#007bff'
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={iconStyle}>⚠️</div>
        <h1 style={titleStyle}>Service Temporarily Suspended</h1>
        <p style={messageStyle}>
          Access to this website has been temporarily suspended due to outstanding payments to the developer.
        </p>
        <p style={messageStyle}>
          <strong>Note to Website Owner:</strong> Please settle the dues to restore full access to your website.
        </p>
        <div style={{ marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
          <p style={contactStyle}>Contact your developer to resolve this matter.</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSuspended;
