import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Receipt.css';
import logoescrita from '../assets/logo-escrito.png';
import logoBranca from '../assets/logobranca.png';

function Receipt() {

  const navigate = useNavigate();

  const onClickBtn = () => {
    navigate('/meu-plano')
  }

  const plan = JSON.parse(localStorage.getItem('paidPlan'));

  const verifyIcon = <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8897 6.67112C13.128 6.92088 13.1187 7.31649 12.8689 7.55476L8.28298 11.9298C8.04135 12.1603 7.66119 12.1601 7.41976 11.9294L5.1307 9.74189C4.88115 9.50341 4.87217 9.10779 5.11065 8.85824C5.34913 8.60869 5.74475 8.59971 5.99431 8.83819L7.85193 10.6134L12.0061 6.65032C12.2558 6.41205 12.6515 6.42137 12.8897 6.67112Z" fill="#0C0C0D"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 2.10254C5.20304 2.10254 2.125 5.18058 2.125 8.97754C2.125 12.7745 5.20304 15.8525 9 15.8525C12.797 15.8525 15.875 12.7745 15.875 8.97754C15.875 5.18058 12.797 2.10254 9 2.10254ZM0.875 8.97754C0.875 4.49023 4.51269 0.852539 9 0.852539C13.4873 0.852539 17.125 4.49023 17.125 8.97754C17.125 13.4649 13.4873 17.1025 9 17.1025C4.51269 17.1025 0.875 13.4649 0.875 8.97754Z" fill="#0C0C0D"/>
</svg>

  const line = <svg width="256" height="2" viewBox="0 0 256 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="0.999989" height="256" rx="0.499994" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 256 1.97754)" fill="#121929" fill-opacity="0.12"/>
</svg>

  return (
    <div className="receipt-wrapper">
      <header className="receipt-header">
        <img src={logoescrita} alt="Empy Logo" className="logo" />
      </header>

      <main className="receipt-container">
        <div className="receipt-left">
          <div className="receipt-blue-box">
            <img src={logoBranca} alt="Empy" className="receipt-icon" />
            <h2>Comprovante Empy</h2>
            <p className="subtitle">Pagamento via Cartão</p>
          </div>

          <p className="card-info">
            Cartão de crédito<br />
            <strong>Mastercard - final XXXX</strong>
          </p>

          <button className="btn-primary" onClick={onClickBtn}>Ir para meu plano</button>
        </div>

        <div className="receipt-right">
          <h3>{plan.name}</h3>
          <p className="benefit-title">{verifyIcon} Consulta de benefícios do INSS</p>
          <ul className="benefits-list">
            <li><span className="dot green" /> 10 Créditos Offline</li>
            <li><span className="dot red" /> 30 Créditos Offline</li>
          </ul>
          {line}
          <div className="pricePlan">
            <div>
              <p className='valuePlan'>Valor <strong>R$ {plan.price}</strong></p>
            </div>
            {line}
            <div>
              <p className="totalPlan">Total <strong>R$ {plan.price}</strong></p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Receipt;
