import React, { useState } from 'react';
import '../styles/Payment.css';
import { useNavigate } from 'react-router-dom';
import logoescrito from '../assets/logo-escrito.png';
import api from '../services/api'

function Payment() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    number: '',
    expiry: '',
    cvv: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const planSelected = JSON.parse(localStorage.getItem('paidPlan'));
    const body = { name: form.name, planId: planSelected.planId }
    const res = await api.post('/purchase', body);
    if (res.data.status !== 'pago') {
      setError(res.data.status);
    } else {
      localStorage.setItem('userId', JSON.stringify(res.data.userId));
      setError('');
      navigate('/receipt');
    }
  };

  const line = <svg className='line' width="68" height="3" viewBox="0 0 68 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="67.5" y="0.977539" width="2" height="67" rx="1" transform="rotate(90 67.5 0.977539)" fill="#121929" fill-opacity="0.12"/>
</svg>


  const indicatorCheck = <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.977539" width="32" height="32" rx="16" fill="#7BC625"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.8536 13.124C22.0488 13.3192 22.0488 13.6358 21.8536 13.8311L14.8536 20.8311C14.6583 21.0264 14.3417 21.0264 14.1464 20.8311L10.6464 17.3311C10.4512 17.1358 10.4512 16.8192 10.6464 16.624C10.8417 16.4287 11.1583 16.4287 11.3536 16.624L14.5 19.7704L21.1464 13.124C21.3417 12.9287 21.6583 12.9287 21.8536 13.124Z" fill="#121929"/>
</svg>

  const alertIndicator = <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 0C4.0374 0 0 4.0374 0 9C0 13.9635 4.0374 18 9 18C13.9626 18 18 13.9635 18 9C18 4.0374 13.9626 0 9 0ZM8.1 3.6H9.9V9.9H8.1V3.6ZM9 13.725C8.379 13.725 7.875 13.2219 7.875 12.6C7.875 11.979 8.379 11.475 9 11.475C9.621 11.475 10.125 11.979 10.125 12.6C10.125 13.2219 9.621 13.725 9 13.725Z" fill="#FAA61A"/>
</svg>



  return (
    <div className="payment-container">
      <div className='main-content'>
        <div className="back-button">
          <button>Voltar</button>
          <img src={logoescrito} alt="Logo Escrito" className="logo-escrito" />
        </div>
        <div className="payment-card">
          <div className="step-indicator">
            <div className='step-container'>
              <div className='step-indicator-line'>{indicatorCheck}</div>
              <span className="step done">Cadastro</span>
            </div>
            {line}
            <div className='step-container'>
              <div className='step-indicator-line-2'><p>2</p></div>
              <span className="step active">Pagamento</span>
            </div>
          </div>
          {error && <div className="alert">{alertIndicator}{error}</div>}
          <div className='row labelsPayment1'>
            <p>Nome do titular</p>
            <p>Número do cartão</p>
          </div>
          <div className='row'>
            <input name="name" placeholder="John Doe" onChange={handleChange} />
            <input name="number" placeholder="5175 2411 3310 8264" onChange={handleChange} />
          </div>
          <div className='row labelsPayment2'>
            <p>Validade</p>
            <p>Código de segurança</p>
          </div>
          <div className="row">
            <input name="expiry" placeholder="MM/AAAA" onChange={handleChange} />
            <input name="cvv" placeholder="CVV" onChange={handleChange} />
          </div>
          <button className="submit-btn" onClick={handleSubmit}>Continuar</button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
