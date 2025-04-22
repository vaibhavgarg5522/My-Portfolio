import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import confetti from 'canvas-confetti';

const ConfettiOnNavigate = () => {
  const location = useLocation();

  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, [location.pathname]);

  return null;
};

export default ConfettiOnNavigate;
