import React, { useEffect, useState } from 'react';
import '../styles/PlanTable.css';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const lupa = <svg className='lupasvg' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 1.5C3.62665 1.5 1.5 3.62665 1.5 6.25C1.5 8.87335 3.62665 11 6.25 11C8.87335 11 11 8.87335 11 6.25C11 3.62665 8.87335 1.5 6.25 1.5ZM0.5 6.25C0.5 3.07436 3.07436 0.5 6.25 0.5C9.42564 0.5 12 3.07436 12 6.25C12 9.42564 9.42564 12 6.25 12C3.07436 12 0.5 9.42564 0.5 6.25Z" fill="#121929"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.60885 9.60897C9.80411 9.41371 10.1207 9.41371 10.316 9.60897L13.3535 12.6465C13.5487 12.8417 13.5487 13.1583 13.3535 13.3536C13.1582 13.5488 12.8416 13.5488 12.6463 13.3536L9.60885 10.3161C9.41359 10.1208 9.41359 9.80423 9.60885 9.60897Z" fill="#121929"/>
</svg>

const setaCimaBaixo = <svg className='setaCimaBaixo' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 5L8 2.5L10.5 5" stroke="#1C1C1E" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 11L8 13.5L5.5 11" stroke="#1C1C1E" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

const linkLogo = <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 0.875C2.25 0.667893 2.41789 0.5 2.625 0.5H8.625C8.83211 0.5 9 0.667893 9 0.875V6.875C9 7.08211 8.83211 7.25 8.625 7.25H6.375C6.16789 7.25 6 7.08211 6 6.875C6 6.66789 6.16789 6.5 6.375 6.5H8.25V1.25H3V3.125C3 3.33211 2.83211 3.5 2.625 3.5C2.41789 3.5 2.25 3.33211 2.25 3.125V0.875Z" fill="#1C1C1E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 3.125C0 2.91789 0.167893 2.75 0.375 2.75H6.375C6.58211 2.75 6.75 2.91789 6.75 3.125V9.125C6.75 9.33211 6.58211 9.5 6.375 9.5H0.375C0.167893 9.5 0 9.33211 0 9.125V3.125ZM0.75 3.5V8.75H6V3.5H0.75Z" fill="#1C1C1E"/>
</svg>

const setaBaixo = <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.646446 0.146447C0.841708 -0.0488153 1.15829 -0.0488153 1.35355 0.146447L6 4.79289L10.6464 0.146447C10.8417 -0.0488157 11.1583 -0.0488157 11.3536 0.146447C11.5488 0.341709 11.5488 0.658291 11.3536 0.853553L6.35355 5.85355C6.15829 6.04882 5.84171 6.04882 5.64645 5.85355L0.646446 0.853554C0.451184 0.658292 0.451184 0.341709 0.646446 0.146447Z" fill="#121929"/>
</svg>

const setaHorizontalOne = <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 10.5C5 10.1548 5.27982 9.875 5.625 9.875H17.5C17.8452 9.875 18.125 10.1548 18.125 10.5C18.125 10.8452 17.8452 11.125 17.5 11.125H5.625C5.27982 11.125 5 10.8452 5 10.5Z" fill="#121929"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.6919 4.43306C11.936 4.67714 11.936 5.07286 11.6919 5.31694L6.50888 10.5L11.6919 15.6831C11.936 15.9271 11.936 16.3229 11.6919 16.5669C11.4479 16.811 11.0521 16.811 10.8081 16.5669L5.18306 10.9419C4.93898 10.6979 4.93898 10.3021 5.18306 10.0581L10.8081 4.43306C11.0521 4.18898 11.4479 4.18898 11.6919 4.43306Z" fill="#121929"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.125 3C3.47018 3 3.75 3.27982 3.75 3.625V17.375C3.75 17.7202 3.47018 18 3.125 18C2.77982 18 2.5 17.7202 2.5 17.375V3.625C2.5 3.27982 2.77982 3 3.125 3Z" fill="#121929"/>
</svg>

const setaHorizontalTwo = <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.9419 3.80806C13.186 4.05214 13.186 4.44786 12.9419 4.69194L7.13388 10.5L12.9419 16.3081C13.186 16.5521 13.186 16.9479 12.9419 17.1919C12.6979 17.436 12.3021 17.436 12.0581 17.1919L5.80806 10.9419C5.56398 10.6979 5.56398 10.3021 5.80806 10.0581L12.0581 3.80806C12.3021 3.56398 12.6979 3.56398 12.9419 3.80806Z" fill="#121929"/>
</svg>

const PlanTable = () => {
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);
    useEffect(() => {
      const getPlans = async () => {
        const res = await api.get(`/plans`);
        setPlans(res.data);
      }
      getPlans();
      
    }, []);

  const getPaidPlan = (obj) => {
    const objPlan = {
      name: obj.name,
      planId: obj.id,
      price: obj.price
    }
    localStorage.setItem('paidPlan', JSON.stringify(objPlan));
    navigate('/payment')
  }
  return (
    <div className="table-wrapper">
      <div className="table-header">
        <div className='header-content'>
          <h2>Tabela de Planos</h2>
          {lupa}
          <input type="text" placeholder="Busque pelo cliente" className="search-input" />
        </div>
        <button className="btn-create" onClick={() => navigate('/admin/criar-plano')}>Criar plano</button>
      </div>
      <table className="plan-table">
        <thead>
          <tr>
            <th>Id {setaCimaBaixo}</th>
            <th>Nome {setaCimaBaixo}</th>
            <th>Preço {setaCimaBaixo}</th>
            <th>Preço Anual {setaCimaBaixo}</th>
            <th>Qtd. Créditos off {setaCimaBaixo}</th>
            <th>Qtd. Créditos on {setaCimaBaixo}</th>
            <th>Ativo {setaCimaBaixo}</th>
            <th>Recomendado {setaCimaBaixo}</th>
            <th>Links {setaCimaBaixo}</th>
          </tr>
        </thead>
        <tbody>
          {plans.map((plan) => (
            <tr key={plan.id}>
              <td>{plan.id}</td>
              <td>{plan.name}</td>
              <td>{plan.price}</td>
              <td>{plan.annualPrice}</td>
              <td>-</td>
              <td>-</td>
              <td>Sim</td>
              <td>Sim</td>
              <td>
                <button className="link-btn" onClick={() => getPaidPlan(plan)}>
                  {linkLogo}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <span className='showItems'>Mostrando <div className='selectDiv'>10 {setaBaixo}</div> de 6 itens</span>
        <div className="pages">
          <button>{setaHorizontalOne}</button>
          <button>{setaHorizontalTwo}</button>
          <span>1 de 1</span>
          <button className='espelharSeta'>{setaHorizontalTwo}</button>
          <button className='espelharSeta'>{setaHorizontalOne}</button>
        </div>
      </div>
    </div>
  );
};

export default PlanTable;
