import React, { useState } from 'react';
import OtpInput from "./OtpInput"

export default function PhoneOtpForm() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /^[0-9]/g;
    if (phoneNumber.length < 10 || !regex.test(phoneNumber)) {
      alert('Invalid Phone Number');
      return;
    }
    setShowOtpInput(true);
  };

  const onOtpSubmit = (otp) => {
    console.log(`Login Successful with otp ${otp}`)
  }


  return (
    <div>
      {!showOtpInput ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Phone Number"
            value={phoneNumber}
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Enter OTP sent to {phoneNumber}</p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
}
