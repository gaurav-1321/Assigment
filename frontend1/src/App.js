import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import Maintenance from './pages/Maintenance';
import Membership from './pages/Membership';
import Reports from './pages/Reports';
import Transactions from './pages/Transactions';
import UserDashboard from './pages/UserDashboard';
import VendorDashboard from './pages/VendorDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/vendor" element={<VendorDashboard />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </Router>
  );
}

export default App;
