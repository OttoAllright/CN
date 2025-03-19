import PropTypes from 'prop-types';

export const Crypto = ({ token, price, isLoading, error, updateInterval }) => {
  const formatInterval = (ms) => {
    if (ms < 60000) return `${ms / 1000} segundos`;
    if (ms === 60000) return '1 minuto';
    return `${ms / 60000} minutos`;
  };

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="crypto-price">
      <h3>{token}/USD {isLoading ? '...' : `$${price}`}</h3>
      <p>
        {updateInterval
          ? `Actualizando cada ${formatInterval(updateInterval)}`
          : 'Actualización detenida'}
      </p>
    </div>
  );
};

Crypto.propTypes = {
  token: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  updateInterval: PropTypes.number,
};
