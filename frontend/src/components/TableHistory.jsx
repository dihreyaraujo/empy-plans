import React, { useEffect, useState } from 'react';
import '../styles/PlanTable.css';
import '../styles/TableHistory.css';
import api from '../services/api'

const lupa = <svg className='lupasvg-history' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 1.5C3.62665 1.5 1.5 3.62665 1.5 6.25C1.5 8.87335 3.62665 11 6.25 11C8.87335 11 11 8.87335 11 6.25C11 3.62665 8.87335 1.5 6.25 1.5ZM0.5 6.25C0.5 3.07436 3.07436 0.5 6.25 0.5C9.42564 0.5 12 3.07436 12 6.25C12 9.42564 9.42564 12 6.25 12C3.07436 12 0.5 9.42564 0.5 6.25Z" fill="#121929"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.60885 9.60897C9.80411 9.41371 10.1207 9.41371 10.316 9.60897L13.3535 12.6465C13.5487 12.8417 13.5487 13.1583 13.3535 13.3536C13.1582 13.5488 12.8416 13.5488 12.6463 13.3536L9.60885 10.3161C9.41359 10.1208 9.41359 9.80423 9.60885 9.60897Z" fill="#121929"/>
</svg>

const setaCimaBaixo = <svg className='setaCimaBaixoHistory' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 5L8 2.5L10.5 5" stroke="#1C1C1E" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 11L8 13.5L5.5 11" stroke="#1C1C1E" stroke-linecap="round" stroke-linejoin="round"/>
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

function formatDateWithTimeAndTimezone(dateString) {
  const date = new Date(dateString);

  const localDate = new Date(date.getTime() - 3 * 60 * 60 * 1000);

  const day = String(localDate.getDate()).padStart(2, '0');
  const month = String(localDate.getMonth() + 1).padStart(2, '0');
  const year = localDate.getFullYear();
  const hours = String(localDate.getHours()).padStart(2, '0');
  const minutes = String(localDate.getMinutes()).padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}



const TableHistory = () => {
    const [userHistoric, setUserHistoric] = useState([]);
    useEffect(() => {
      const getUserHistoric = async () => {
        const userId = JSON.parse(localStorage.getItem('userId'));
        const res = await api.get(`users/${userId}/purchases`);
        setUserHistoric(res.data);
      }
      getUserHistoric();
      
    }, []);
  return (
    <div className="table-wrapper-history">
      <div className="table-header">
        <div className='header-content'>
          <h2>Histórico de Compras</h2>
          {lupa}
          <input type="text" placeholder="Plano, Status" className="search-input" />
        </div>
      </div>
      <table className="history-table">
        <thead>
          <tr>
            <th>Nº Pedido {setaCimaBaixo}</th>
            <th>Data {setaCimaBaixo}</th>
            <th>Plano {setaCimaBaixo}</th>
            <th>Pagamento {setaCimaBaixo}</th>
            <th>Valor {setaCimaBaixo}</th>
            <th>Status {setaCimaBaixo}</th>
          </tr>
        </thead>
        <tbody>
          {userHistoric?.map((historic) => (
            <tr key={historic.id}>
              <td>{historic.id}</td>
              <td>{formatDateWithTimeAndTimezone(historic.createdAt)}</td>
              <td>{historic.plan.name}</td>
              <td>Cartão</td>
              <td>R$ {historic.plan.price}</td>
              {historic.status === 'pago' ? (
                <td><div className="status-paid">{historic.status}</div></td>
              ) : (
                <td><div className="status-unpaid">{historic.status}</div></td>
              )}
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

export default TableHistory;
