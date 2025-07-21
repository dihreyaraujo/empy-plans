import React, { useEffect, useState } from 'react';
import '../styles/AccessPlans.css';
import logo from '../assets/logo.png';
import plano from '../assets/plano.png';
import ponte from '../assets/ponte.png';
import logoescrito from '../assets/logo-escrito.png';
import PlanCard from '../components/PlanCard';
import api from '../services/api';

const whatsappLogo = <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2879 5.47412C13.2323 2.00545 8.73751 0.856028 5.26951 2.91203C1.87188 4.9258 0.70016 9.28064 2.58617 12.7183L1.9901 14.8236C1.93029 15.0291 1.93029 15.2459 1.9901 15.4515C2.16322 16.0441 2.78603 16.3848 3.37365 16.2131L5.48274 15.6155C6.57775 16.2159 7.78747 16.5164 8.99718 16.5164C10.2864 16.5164 11.5757 16.1757 12.7256 15.4937C14.4054 14.4977 15.5975 12.907 16.081 11.0143C16.5651 9.12157 16.2829 7.15425 15.2872 5.47341L15.2879 5.47412ZM14.9909 10.7355C14.5813 12.3368 13.5736 13.6826 12.152 14.5252C10.2069 15.6781 7.78958 15.6781 5.84375 14.5252C5.75579 14.4731 5.65656 14.4463 5.55663 14.4463C5.50526 14.4463 5.45388 14.4534 5.40321 14.4675L3.07456 15.127L3.73396 12.7979C3.77618 12.6494 3.75507 12.4903 3.67625 12.3573C1.93732 9.42282 2.90918 5.61982 5.84375 3.88056C8.77762 2.14129 12.5799 3.11334 14.3188 6.04847C15.1612 7.47029 15.3998 9.13494 14.9902 10.7355H14.9909Z" fill="white"/>
<path d="M12.6953 10.2541L11.2576 9.42986C10.9057 9.23207 10.4715 9.23771 10.1232 9.44464L9.28501 9.9465C8.85644 9.69944 8.50105 9.34399 8.25404 8.91533L8.75651 8.07562C8.9627 7.72861 8.96763 7.29432 8.76777 6.93746L7.94581 5.50438C7.76002 5.17286 7.40815 4.96803 7.03377 4.97226C5.64178 4.97226 4.50525 6.10478 4.50032 7.49704V7.52871C4.50455 9.1814 5.15198 10.7334 6.323 11.899C7.49049 13.0611 9.03941 13.7002 10.6854 13.7002C10.6918 13.7002 10.6981 13.7002 10.7037 13.7002C12.0894 13.6904 13.221 12.5543 13.2259 11.1705C13.2287 10.7904 13.0254 10.4399 12.6939 10.2541H12.6953ZM10.6981 12.574H10.6869C9.3399 12.574 8.07318 12.0511 7.11822 11.1008C6.16043 10.1471 5.63052 8.87803 5.627 7.52519V7.50126C5.62982 6.7439 6.23503 6.12519 6.99014 6.09915L7.78958 7.49281L7.79028 7.49844L7.12877 8.60352C7.03447 8.76119 7.02251 8.95545 7.09851 9.12368C7.49401 10.0042 8.19704 10.7067 9.07741 11.103C9.2456 11.1783 9.43983 11.167 9.59747 11.0727L10.703 10.4096L12.1014 11.2114C12.0739 11.9617 11.4546 12.5684 10.6988 12.5748L10.6981 12.574Z" fill="white"/>
</svg>

const AccessPlans = () => {

  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const getPlans = async () => {
      const res = await api.get('/plans');
      setPlans(res.data.slice(0,3));
    }
    getPlans();
  }, []);

  return (
    <div className="access-plans-container">
      <div className="main-content">
        <div className="back-button">
          <button>Voltar</button>
          <img src={logoescrito} alt="Logo Escrito" className="logo-escrito" />
        </div>
        <div className='container-plans-access'>
          <div className="header-strip" />
          <div className="images-container">
            <img src={logo} alt="Logo Empy" className="logo" />
            <img src={ponte} alt="ponte" className="ponte-image" />
            <img src={plano} alt="plano" className="plan-image" />
          </div>
          <h2>Planos de acesso</h2>
          <div className='plan-cards'>
            {plans.map((plan, index) => (
              <PlanCard key={index} plan={plan} />
            ))}
          </div>
          <button className="help-button">{whatsappLogo} Tire suas dúvidas</button>
        </div>
      </div>
    </div>
  );
};

export default AccessPlans;
