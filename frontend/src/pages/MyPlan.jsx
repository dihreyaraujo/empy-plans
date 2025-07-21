import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/MyPlan.css';
import whatsappIcon from '../assets/icons/whatsapp.png';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

function addOneMonthAndFormat(dateString) {
  const originalDate = new Date(dateString);

  // Cria nova data adicionando 1 mês
  const newDate = new Date(originalDate);
  newDate.setMonth(newDate.getMonth() + 1);

  // Corrige se cair em um mês inválido (ex: 31 de fevereiro)
  if (newDate.getDate() !== originalDate.getDate()) {
    newDate.setDate(0); // Último dia do mês anterior
  }

  // Formata para dd/mm/aaaa
  const day = String(newDate.getDate()).padStart(2, '0');
  const month = String(newDate.getMonth() + 1).padStart(2, '0');
  const year = newDate.getFullYear();

  return `${day}/${month}/${year}`;
}

function formatDate(dateString) {
  const newDate = new Date(dateString)
  const day = String(newDate.getDate()).padStart(2, '0');
  const month = String(newDate.getMonth() + 1).padStart(2, '0');
  const year = newDate.getFullYear();

  return `${day}/${month}/${year}`;
}

function MyPlan() {
  const navigate = useNavigate();
  const [userLastHistoric, setUserLastHistoric] = useState({});

  useEffect(() => {
    const getLastPlanUser = async () => {
      const userId = JSON.parse(localStorage.getItem('userId'));
      const res = await api.get(`/users/${userId}/current-plan`);
      localStorage.setItem('actualPlan', JSON.stringify(res.data));
      setUserLastHistoric(res.data);
    }
    getLastPlanUser()
  }, []);


  return (
    <div className="myplan-page">
      <Sidebar />
      <main className="myplan-content">
        <header className="myplan-header">
          <h2>Meu Plano</h2>
          <div className="plan-status">
            <div><p>Plano: {userLastHistoric.plan?.name}</p></div>
            <img src={whatsappIcon} alt="WhatsApp" />
          </div>
        </header>

        <section className="plan-box">
          <div className="plan-title-row">
            <h3><span className="plan-name">{userLastHistoric.plan?.name} (ATIVO)</span></h3>
            <button className="btn-alter" onClick={() => navigate('/')}>Alterar Plano</button>
          </div>

          <div className="plan-expire">Assinatura expira em {addOneMonthAndFormat(userLastHistoric.plan?.createdAt)}</div>

          <div className="plan-grid">
            <div className="plan-row">
              <div className='plan-lastrow'>
                <span>Frequência de Pagamento</span>
                <span>R$ 800,00 MENSAL</span>
              </div>
              <div className='plan-lastrow'>
                <a href="/historic">Ver histórico completo</a>
                <button className="btn-orange">Pagar agora</button>
              </div>
            </div>
            <div className="plan-row plan-lastrow">
              <span>Acesso</span>
              <span>30 dias</span>
            </div>
            <div className="plan-row plan-lastrow">
              <span>Créditos Online</span>
              <span>10 Créditos recarregados automaticamente</span>
            </div>
            <div className="plan-row plan-lastrow">
              <span>Créditos Offline</span>
              <span>10 Créditos recarregados automaticamente</span>
            </div>
            <div className="plan-row">
              <div className='plan-lastrow'>
                <span>Tipo de Pagamento</span>
                <span>Cartão - 4321</span>
              </div>
              <button className="btn-outline">Meus Cartões</button>
            </div>
            <div className="plan-row plan-lastrow">
              <span>E-mail de Cobrança</span>
              <span>EMPBANK@google.com</span>
            </div>
            <div className="plan-row triple">
              <div className='plan-lastrow'>
                <span>Recarga da Assinatura</span>
                <span>{formatDate(userLastHistoric.plan?.createdAt)}</span>
              </div>
              <div className='plan-lastrow'>
                <span>Última cobrança enviada</span>
                <span>{formatDate(userLastHistoric.plan?.createdAt)}</span>
              </div>
              <div className='plan-lastrow'>
                <span>Parcelamento da Assinatura Ativa</span>
                <span>-</span>
              </div>
            </div>
          </div>

          <div className="footer-actions">
            <div>
              <button className="btn-red">Cancelar Plano</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MyPlan;
