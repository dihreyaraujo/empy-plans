import React, { useState } from 'react';
import SidebarAdmin from '../components/SidebarAdmin';
import '../styles/CreatePlan.css';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const warningLogo = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 0C4.0374 0 0 4.0374 0 9C0 13.9635 4.0374 18 9 18C13.9626 18 18 13.9635 18 9C18 4.0374 13.9626 0 9 0ZM8.1 3.6H9.9V9.9H8.1V3.6ZM9 13.725C8.379 13.725 7.875 13.2219 7.875 12.6C7.875 11.979 8.379 11.475 9 11.475C9.621 11.475 10.125 11.979 10.125 12.6C10.125 13.2219 9.621 13.725 9 13.725Z" fill="#FAA61A" />
  </svg>
);

const CreatePlan = () => {
  const navigate = useNavigate();
  const [tituloComercial, setTituloComercial] = useState('');
  const [tituloInterno, setTituloInterno] = useState('');
  const [desconto, setDesconto] = useState('');
  const [precoMensal, setPrecoMensal] = useState('');
  const [precoAnual, setPrecoAnual] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const novoPlano = {
      name: tituloComercial,
      type: tituloInterno,
      discount: Number(desconto),
      price: Number(precoMensal),
      annualPrice: parseFloat(precoAnual)
    };
    await api.post('/plans', novoPlano);
    navigate('/admin/planos')
  };

  return (
    <div className="create-plan-container">
      <SidebarAdmin />
      <main className="create-plan-content">
        <div className="plan-admin-header">
          <h1>Planos</h1>
          <span className="badge">ADM</span>
        </div>
        <div className="create-plan-box">
          <div className="create-plan-header">
            <h2>Criar Plano</h2>
          </div>

          <form className="plan-form" onSubmit={handleSubmit}>
            <section className="form-section">
              <div className="warning-box">
                <p>{warningLogo} Seu plano terá as configurações do plano base.</p>
              </div>
              <p>Defina um plano base para seu novo plano:</p>
              <label>Escolher plano base (Obrigatório)</label>
              <select disabled>
                <option>Standard</option>
              </select>
            </section>

            <section className="form-section">
              <p>Defina um título para seu novo plano:</p>
              <label>Título Comercial (Público)</label>
              <input
                type="text"
                placeholder="Placeholder"
                value={tituloComercial}
                onChange={(e) => setTituloComercial(e.target.value)}
              />
              <hr />
              <label>Título Interno (Privado)</label>
              <input
                type="text"
                placeholder="Placeholder"
                value={tituloInterno}
                onChange={(e) => setTituloInterno(e.target.value)}
              />
              <hr />
            </section>

            <section className="form-section">
              <p className='line-bottom-p'>Aplicar desconto:</p>
              <p>Exemplo, se deseja um desconto de 30% basta inserir 30 no campo de desconto.</p>
              <p>Desconto em porcentagem:</p>
              <input
                type="text"
                placeholder="Placeholder"
                value={desconto}
                onChange={(e) => setDesconto(e.target.value)}
              />
              <hr />
            </section>

            <section className="form-section">
              <p className='line-bottom-p'>Configurar valores:</p>
              <label>Preço Mensal</label>
              <input
                type="text"
                placeholder="Placeholder"
                value={precoMensal}
                onChange={(e) => setPrecoMensal(e.target.value)}
              />
              <hr />
              <label>Preço Anual</label>
              <input
                type="text"
                placeholder="Placeholder"
                value={precoAnual}
                onChange={(e) => setPrecoAnual(e.target.value)}
              />
              <hr />
            </section>

            <button type="submit" className="save-button">
              Salvar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CreatePlan;
