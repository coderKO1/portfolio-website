import { useEffect, useState } from 'react';
import '../styles/loader.css';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((previousProgress) => {
        const nextProgress = Math.min(previousProgress + 1, 100);

        if (nextProgress === 100) {
          clearInterval(intervalId);
          window.setTimeout(() => onComplete?.(), 180);
        }

        return nextProgress;
      });
    }, 20);

    return () => clearInterval(intervalId);
  }, [onComplete]);

  return (
    <div className="loader" role="status" aria-live="polite" aria-label="Loading portfolio">
      <div className="loader-text">{progress}%</div>
    </div>
  );
};

export default Loader;