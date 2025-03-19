export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>CRYPTODAY</h3>
          <p>Tu fuente confiable de precios de criptomonedas en tiempo real</p>
        </div>
        <div className="footer-section">
          <h4>Enlaces</h4>
          <a href="#home">Home</a>
          <a href="#info">Info</a>
          <a href="#soon">Soon</a>
        </div>
        <div className="footer-section">
          <p>&copy; {new Date().getFullYear()} CRYPTODAY. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
