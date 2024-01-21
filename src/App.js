import React from 'react';
import './style.css';
import PhoneOtpForm from './components/PhoneOtpForm';
import OtpInput from './components/OtpInput';

export default function App() {
  return (
    <div className="App">
      <h1>Login with Phone</h1>
      <PhoneOtpForm />
    </div>
  );
}
