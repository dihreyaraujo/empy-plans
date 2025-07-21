import React from 'react';
import SidebarAdmin from '../components/SidebarAdmin';
import PlanTable from '../components/PlanTable';
import '../styles/PlanAdmin.css';


const PlanAdmin = () => {
  return (
    <div className="plan-admin-container">
      <SidebarAdmin />
      <div className="plan-admin-content">
        <div className="plan-admin-header">
          <h1>Planos</h1>
          <span className="badge">ADM</span>
        </div>
        <div className="plan-admin-table">
          <PlanTable />
        </div>
      </div>
    </div>
  );
};

export default PlanAdmin;
