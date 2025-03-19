import { useState } from 'react';
import './App.css';
import './styles/layout.css';
import { Crypto } from './components/Crypto';
import { Buttons } from './components/Buttons';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useCryptoPrice } from './hooks/useCryptoPrice';

function App() {
  const [selectedToken, setSelectedToken] = useState('BTC');
  const {
    price,
    error,
    updateInterval,
    startUpdate,
    stopUpdates,
  } = useCryptoPrice(selectedToken);

  const tokens = ['BTC', 'ETH', 'XRP', 'DOGE', 'ADA'];

  const handleTokenChange = (newToken) => {
    setSelectedToken(newToken);
    stopUpdates();
  };

  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content">
        <h1 className="page-title">CRYPTODAY</h1>
        
        <div className="crypto-container">
          <div className="token-selector">
            <label htmlFor="token-select">Seleccionar Criptomoneda: </label>
            <select
              id="token-select"
              value={selectedToken}
              onChange={(e) => handleTokenChange(e.target.value)}
            >
              {tokens.map(token => (
                <option key={token} value={token}>{token}</option>
              ))}
            </select>
          </div>

          <Crypto
            token={selectedToken}
            price={price}
            isLoading={false}
            error={error}
            updateInterval={updateInterval}
          />
          
          <Buttons
            startUpdate={startUpdate}
            stopUpdates={stopUpdates}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;