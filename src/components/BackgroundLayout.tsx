import React from "react";
import backgroundImage from "../assets/images/pexels-kseniachernaya-3965548.jpg";

const BackgroundLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default BackgroundLayout;
