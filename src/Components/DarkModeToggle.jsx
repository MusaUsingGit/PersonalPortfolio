import React, { useEffect, useState } from 'react';
import { PiSunLight } from "react-icons/pi";
import { PiMoonLight } from "react-icons/pi";
function DarkModeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)}>
      {dark ? <PiMoonLight className='text-xl' /> : <PiSunLight className='text-xl'/>}
    </button>
  );
}

export default DarkModeToggle;
