import { useState, useEffect, useRef } from 'react';

export const useCryptoPrice = (initialToken = 'BTC') => {
  const [price, setPrice] = useState('0');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [updateInterval, setUpdateInterval] = useState(null);
  const intervalRef = useRef(null);

  const fetchPrice = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${initialToken}USDT`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPrice(Number(data.price).toFixed(4));
    } catch (error) {
      setError(error.message);
      console.error("Error fetching price:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const startUpdate = (duration) => {
    stopUpdates();
    fetchPrice();
    intervalRef.current = setInterval(fetchPrice, duration);
    setUpdateInterval(duration);
  };

  const stopUpdates = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setUpdateInterval(null);
    }
  };

  // Efecto para la carga inicial y limpieza
  useEffect(() => {
    fetchPrice();
    return () => stopUpdates();
  }, [initialToken]); // Dependencia en initialToken

  // Efecto para reiniciar el intervalo cuando cambia el token
  useEffect(() => {
    if (updateInterval) {
      stopUpdates();
      startUpdate(updateInterval);
    }
  }, [initialToken]); // Dependencia en initialToken

  return {
    price,
    isLoading,
    error,
    updateInterval,
    startUpdate,
    stopUpdates
  };
};
