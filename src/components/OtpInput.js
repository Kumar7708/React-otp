import React, {useState, useEffect, useRef} from 'react';


export default function OtpInput({length = 4, onOtpSubmit = () => {}}) {
  
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);


  useEffect(() => {
    if(inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [])

  const handleChange = (e, index) => {
    const value = e.target.value;
    if(isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length-1);
    setOtp(newOtp);
    const combinedOtp = newOtp.join("");
    if(combinedOtp.length === length) onOtpSubmit(combinedOtp);
    if(value && index < length-1 && inputRefs.current[index+1]) inputRefs.current[index+1].focus();

  }

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1)
  }

  const handleKeyDown = (e, index) => {
      if(e.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index-1]) {
        inputRefs.current[index-1].focus();
      }
  }

  return (
  <div>
    {
      otp.map((value,index) => {
        return <input 
          key={index}
          type="text" 
          ref={(el) => inputRefs.current[index] = el}
          value={value}
          onChange={(e) => handleChange(e, index)}
          onClick={()=> handleClick(index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="OtpInput"
        />
      })
    }
  </div>
  )
}
