import React, { useState } from 'react';

const UserPreferences = () => {
  const [preferences, setPreferences] = useState({
    seasons: [],
    animals: [],
    safariType: ''
  });

  const handleCheckboxChange = (category, value) => {
    const updatedCategory = preferences[category].includes(value)
      ? preferences[category].filter(item => item !== value)
      : [...preferences[category], value];
    setPreferences({ ...preferences, [category]: updatedCategory });
  };

  const handleSave = () => {
    console.log("Sở thích người dùng để AI phân tích:", preferences);
    alert("Đã lưu sở thích! Hệ thống AI sẽ cập nhật gợi ý địa điểm cho bạn.");
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Cá Nhân Hóa Sở Thích (AI Input)</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h4>1. Mùa du lịch bạn yêu thích:</h4>
        <label><input type="checkbox" onChange={() => handleCheckboxChange('seasons', 'Xuân')} /> Mùa Xuân </label> <br />
        <label><input type="checkbox" onChange={() => handleCheckboxChange('seasons', 'Hạ')} /> Mùa Hạ (Hè) </label> <br />
        <label><input type="checkbox" onChange={() => handleCheckboxChange('seasons', 'Thu')} /> Mùa Thu </label> <br />
        <label><input type="checkbox" onChange={() => handleCheckboxChange('seasons', 'Đông')} /> Mùa Đông (Winter Safari) </label>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h4>2. Nhóm động vật hoang dã bạn quan tâm:</h4>
        <label><input type="checkbox" onChange={() => handleCheckboxChange('animals', 'Thú săn mồi')} /> Thú săn mồi (Sư tử, Báo, Hổ) </label> <br />
        <label><input type="checkbox" onChange={() => handleCheckboxChange('animals', 'Động vật gặm cỏ')} /> Động vật lớn (Voi, Tê giác, Hươu cao cổ) </label> <br />
        <label><input type="checkbox" onChange={() => handleCheckboxChange('animals', 'Chim')} /> Các loài chim quý hiếm (Bird watching) </label>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h4>3. Hình thức Safari ưa thích:</h4>
        <select onChange={(e) => setPreferences({...preferences, safariType: e.target.value})} style={{ width: '100%', padding: '8px' }}>
          <option value="">-- Chọn hình thức --</option>
          <option value="Car">Di chuyển bằng ô tô chuyên dụng</option>
          <option value="Trekking">Đi bộ xuyên rừng (Trekking)</option>
          <option value="Camping">Cắm trại dã ngoại qua đêm (Camping)</option>
        </select>
      </div>

      <button onClick={handleSave} style={{ width: '100%', padding: '10px', backgroundColor: '#ffc107', color: '#000', fontWeight: 'bold', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Lưu Cấu Hình Sở Thích</button>
    </div>
  );
};

export default UserPreferences;