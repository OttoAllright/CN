import PropTypes from 'prop-types';

const INTERVALS = [
  { duration: 1000, label: '1 segundo' },
  { duration: 60000, label: '1 minuto' },
  { duration: 180000, label: '3 minutos' },
  { duration: 300000, label: '5 minutos' },
  { duration: 1800000, label: '30 minutos' },
];

export const Buttons = ({ startUpdate, stopUpdates, isLoading }) => {
  return (
    <div className="button-container">
      {INTERVALS.map(({ duration, label }) => (
        <button
          key={duration}
          onClick={() => startUpdate(duration)}
          disabled={isLoading}
        >
          {label}
        </button>
      ))}
      <button
        onClick={stopUpdates}
        className="stop-button"
        disabled={isLoading}
      >
        Detener
      </button>
    </div>
  );
};

Buttons.propTypes = {
  startUpdate: PropTypes.func.isRequired,
  stopUpdates: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
