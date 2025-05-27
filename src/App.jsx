import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLogin from "./Pages/UserLogin"
import UserRegister from './Pages/UserRegister';
import Otp from './Pages/Otp';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/forgot-password" element={<Otp />} />
      </Routes>
    </Router>
  );
};

export default App;