import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Yêu cầu đặt lại mật khẩu đã được gửi tới email: ${email}`);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Quên Mật Khẩu</h2>
      <p style={{ fontSize: '14px', color: '#666' }}>Vui lòng nhập email đăng ký. Chúng tôi sẽ gửi liên kết khôi phục mật khẩu cho bạn.</p>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>Email của bạn:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Gửi Yêu Cầu</button>
      </form>
    </div>
  );
};

export default ForgotPassword;