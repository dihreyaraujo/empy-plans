import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import whatsappIcon from '../assets/icons/whatsapp.png';
import TableHistory from '../components/TableHistory';

function PlanHistory() {
  const [actualPlan, setActualPlan] = useState('');

  useEffect(() => {
    const getUserHistoric = async () => {
      const actualPlan = JSON.parse(localStorage.getItem('actualPlan')).plan.name;
      setActualPlan(actualPlan);
    }
    getUserHistoric();
    
  }, []);

  return (
    <div className="plan-admin-container">
      <Sidebar />
      <div className="plan-admin-content">
        <header className="plan-history-header">
          <h2>Meu Plano</h2>
          <div className="plan-status">
            <div><p>Plano: {actualPlan}</p></div>
            <img src={whatsappIcon} alt="WhatsApp" />
          </div>
        </header>
        <div className="plan-admin-table">
          <TableHistory />
        </div>
      </div>
    </div>
  );
}

export default PlanHistory;
