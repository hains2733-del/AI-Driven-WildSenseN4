import React, { useState } from 'react';

const UserProfile = () => {
  // Giả định dữ liệu người dùng hiện tại lấy từ DB
  const [user, setUser] = useState({
    fullname: 'Nguyễn Văn A',
    email: 'vanya@example.com',
    phone: '0987654321',
    role: 'User'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    setIsEditing(false);
    alert("Cập nhật hồ sơ thành công!");
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Hồ Sơ Cá Nhân</h2>
      <form onSubmit={handleUpdate}>
        <div style={{ marginBottom: '12px' }}>
          <label><strong>Họ và tên:</strong></label>
          <input type="text" value={user.fullname} disabled={!isEditing} onChange={(e) => setUser({...user, fullname: e.target.value})} style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
        </div>
        <div style={{ marginBottom: '12px' }}>
          <label><strong>Email:</strong></label>
          <input type="email" value={user.email} disabled style={{ width: '100%', padding: '8px', marginTop: '5px', backgroundColor: '#eee' }} />
        </div>
        <div style={{ marginBottom: '12px' }}>
          <label><strong>Số điện thoại:</strong></label>
          <input type="text" value={user.phone} disabled={!isEditing} onChange={(e) => setUser({...user, phone: e.target.value})} style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
        </div>
        <div style={{ marginBottom: '12px' }}>
          <label><strong>Vai trò hệ thống:</strong></label>
          <span style={{ marginLeft: '10px', padding: '4px 8px', backgroundColor: '#e2e3e5', borderRadius: '4px' }}>{user.role}</span>
        </div>

        {isEditing ? (
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Lưu thay đổi</button>
        ) : (
          <button type="button" onClick={() => setIsEditing(true)} style={{ padding: '10px 20px', backgroundColor: '#17a2b8', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Chỉnh sửa hồ sơ</button>
        )}
      </form>
    </div>
  );
};

export default UserProfile;