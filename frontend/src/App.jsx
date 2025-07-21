import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AccessPlans from './pages/AccessPlans';
import Payment from './pages/Payment';
import Receipt from './pages/Receipt';
import MyPlan from './pages/MyPlan';
import PlanAdmin from './pages/PlanAdmin';
import CreatePlan from './pages/CreatePlan';
import PlanHistory from './pages/PlanHistory';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AccessPlans />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/receipt" element={<Receipt />} />
        <Route path="/meu-plano" element={<MyPlan />} />
        <Route path="/admin/planos" element={<PlanAdmin />} />
        <Route path="/historic" element={<PlanHistory />} />'
        <Route path="/admin/criar-plano" element={<CreatePlan />} />
      </Routes>
    </Router>
  );
};

export default App;
