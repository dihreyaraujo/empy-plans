import React from 'react';
import '../styles/Sidebar.css';
import logoBranca from '../assets/logobranca.png';
import perfil from '../assets/perfil.png';
import lupa from '../assets/icons/lupa.png';
import dinheiro from '../assets/icons/dinheiro.png';
import items from '../assets/icons/items.png';
import configuracao from '../assets/icons/configuracoes.png';
import desligar from '../assets/icons/desligar.png';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();
  return (
    <aside className="sidebar">
      <img src={logoBranca} className="sidebar-logo" alt="Logo" />
      <nav className="sidebar-menu">
        <img className='btn-sidebar-large hoversidebar' src={lupa} alt="Dashboard" />
        <img className='btn-sidebar hoversidebar-large' src={dinheiro} alt="Cartões" />
        <img className='item-logo btn-sidebar' src={items} alt="Histórico" />
        <button className='inv-button' onClick={() => navigate('/admin/planos')}><img className='btn-sidebar-large hoversidebar' src={configuracao} alt="Suporte" /></button>
        <img className='btn-sidebar' src={perfil} alt="Perfil"/>
        <img className='btn-sidebar-large hoversidebar' src={desligar} alt="Logout" />
      </nav>
    </aside>
  );
}

export default Sidebar;
