import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PlanCard.css';

function PlanCard({ plan }) {

  const svgVerify = <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8897 5.89768C13.128 6.14744 13.1187 6.54306 12.8689 6.78132L8.28298 11.1563C8.04135 11.3868 7.66119 11.3867 7.41976 11.156L5.1307 8.96845C4.88115 8.72998 4.87217 8.33435 5.11065 8.0848C5.34913 7.83525 5.74475 7.82627 5.99431 8.06475L7.85193 9.83996L12.0061 5.87688C12.2558 5.63862 12.6515 5.64793 12.8897 5.89768Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 1.3291C5.20304 1.3291 2.125 4.40714 2.125 8.2041C2.125 12.0011 5.20304 15.0791 9 15.0791C12.797 15.0791 15.875 12.0011 15.875 8.2041C15.875 4.40714 12.797 1.3291 9 1.3291ZM0.875 8.2041C0.875 3.71679 4.51269 0.0791016 9 0.0791016C13.4873 0.0791016 17.125 3.71679 17.125 8.2041C17.125 12.6914 13.4873 16.3291 9 16.3291C4.51269 16.3291 0.875 12.6914 0.875 8.2041Z" fill="white"/>
        </svg>

  const svgGreenPoint = <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.704102" width="8" height="8" rx="4" fill="#7BC625"/>
</svg>

  const svgRedPoint = <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.704102" width="8" height="8" rx="4" fill="#FF4E3A"/>
</svg>

  const navigate = useNavigate();

  const onClickAnnualBtn = () => {
    const objPlanSelected = {
      planId: plan.id,
      name: plan.name,
      price: plan.annualPrice
    }
    localStorage.setItem("paidPlan", JSON.stringify(objPlanSelected));
    navigate("/payment");
  }

  const onClickMonthlyBtn = () => {
    const objPlanSelected = {
      planId: plan.id,
      name: plan.name,
      price: plan.price
    }
    localStorage.setItem("paidPlan", JSON.stringify(objPlanSelected));
    window.location.href = "/payment";
  }

  return (
    <div className="plan-card">
      <h3>Plano <br/> <strong className='strong-name'>{plan.name}</strong></h3>
      <div className="plan-badge">
        <p className='description-plan'>Ganhe 2 meses de desconto na contratação anual com 12 meses de fidelidade</p>
        <p className='plan-price-container'><span className='anual'>Anual R$</span> <span className='anualPrice'>{(plan.annualPrice / 12).toFixed(2).toString().replace(".", ",")}</span> <span className='mensais'>/ mensais</span></p>
      </div>
      <div className="plan-price">
        <p className='plan-price-container'><span className='mensais'>Mensal R$</span> <span className='mensalPrice'>{plan.price.toString().replace(".", ",")}</span> <span className='mensais'>/ mensais</span></p>
      </div>

      <div className="plan-benefits">
        <h4>{svgVerify}Consulta de benefícios do INSS</h4>
        <p className='beneficts'>{svgGreenPoint} 2 Créditos Offline</p>
        <p className='beneficts'>{svgRedPoint} 20 Créditos Offline</p>
      <div className="plan-buttons">
        <button className="annual" onClick={onClickAnnualBtn}>Assinar anual</button>
        <button className="monthly" onClick={onClickMonthlyBtn}>Assinar mensal</button>
      </div>
      </div>
    </div>
  );
}

export default PlanCard;
