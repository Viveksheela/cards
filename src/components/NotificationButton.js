import React from 'react';
import './NotificationButton.css';

const NotificationButton = ({ name }) => {
  return (
    <button className="notification-button">
      {name}
    </button>
  );
};

export default NotificationButton;
