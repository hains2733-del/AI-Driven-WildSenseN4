import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import UserProfile from './components/UserProfile';
import UserPreferences from './components/UserPreferences';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  return (
    <div className="App">
      <nav style={{ padding: '15px', backgroundColor: '#343a40', color: '#fff', textAlign: 'center' }}>
        <button onClick={() => setCurrentPage('login')} style={{ margin: '0 10px', padding: '5px 10px' }}>Đăng Nhập</button>
        <button onClick={() => setCurrentPage('register')} style={{ margin: '0 10px', padding: '5px 10px' }}>Đăng Ký</button>
        <button onClick={() => setCurrentPage('forgot')} style={{ margin: '0 10px', padding: '5px 10px' }}>Quên MK</button>
        <button onClick={() => setCurrentPage('profile')} style={{ margin: '0 10px', padding: '5px 10px' }}>Hồ Sơ</button>
        <button onClick={() => setCurrentPage('preferences')} style={{ margin: '0 10px', padding: '5px 10px' }}>Sở Thích AI</button>
      </nav>

      <div style={{ padding: '20px' }}>
        {currentPage === 'login' && <Login />}
        {currentPage === 'register' && <Register />}
        {currentPage === 'forgot' && <ForgotPassword />}
        {currentPage === 'profile' && <UserProfile />}
        {currentPage === 'preferences' && <UserPreferences />}
      </div>
    </div>
  );
}

export default App;