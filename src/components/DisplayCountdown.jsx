/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Date from "../utils/Date";

function CountdownTimer({ event }) {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const today = Date();
      const deadline = event.lastDateofReg;
      const difference = deadline - today;

      if (difference <= 0) {
        setTimeLeft("Registration closed");
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    calculateTimeLeft(); // Calculate time left immediately

    return () => clearInterval(timer);
  }, [event.lastDateofReg]);

  return (
    <div>
      <h2>Countdown Timer</h2>
      <p>{timeLeft}</p>
    </div>
  );
}

export default CountdownTimer;
