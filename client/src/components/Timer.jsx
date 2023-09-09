
const Timer = () => {
  return (
    <div className="timer-container">
      <div className="timer-display" aria-live="polite">
        <time>00:00</time>
      </div>
      <div className="timer-controls">
        <button className="start-button" aria-label="Başlat">
          Başlat
        </button>
        <button className="pause-button" aria-label="Duraklat" disabled>
          Duraklat
        </button>
      </div>
    </div>
  );
};

export default Timer;



