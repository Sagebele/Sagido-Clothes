import React from 'react';
import backgroundImage from '../assets/images/pexels-kseniachernaya-3965548.jpg'; // Adjust path and filename

const BackgroundLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="fixed inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="fixed inset-0 bg-black/20" />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default BackgroundLayout;