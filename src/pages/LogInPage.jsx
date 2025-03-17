import React from 'react';
import DarkLogo from '../images/LogInDark-img.svg';
import LightLogo from '../images/LogInLight-img.svg';
const LogInPage = () => {
  return (
  <div className='container flex items-center justify-center min-h-screen'>
    {/* left Logo and Text */}
    <div className='left-container w-1/2 flex flex-col items-center text-center justify-center'>
      <img src={DarkLogo} alt="Dark_Logo" className='w-[500px] h-[500px] mb-4'/>
      <p>Welcome to LYNk!</p>
      <p>We List What You Wish</p>
    </div>

    <div className='right-container'>
      <p>Hello</p>
    </div>

  </div>
  );
};

export default LogInPage;
