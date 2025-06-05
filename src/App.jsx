import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import UserLogin from "./Pages/UserLogin"
import UserRegister from './Pages/UserRegister';
import Otp from './Pages/Otp';
import UserHome from './Pages/UserHome';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/forgot-password" element={<Otp />} />
        <Route path='/Home' element={<UserHome/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;