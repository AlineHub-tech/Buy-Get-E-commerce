import React, { useState } from 'react';
import '../style.css';

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('user@example.com');

  const saveSettings = () => {
    alert('Settings saved!');
  };

  return (
    <div>
      <h2 className="section-title">Settings</h2>

      <section style={{
        maxWidth:'600px',
        margin:'auto',
        background:'#fff',
        padding:'20px',
        borderRadius:'15px',
        boxShadow:'0 5px 15px rgba(0,0,0,0.1)'
      }}>

        {/* Notifications */}
        <div style={{marginBottom:'20px'}}>
          <label style={{fontWeight:'bold', display:'block', marginBottom:'8px'}}>Notifications</label>
          <label style={{display:'flex', alignItems:'center', gap:'10px'}}>
            <input 
              type="checkbox" 
              checked={notifications} 
              onChange={() => setNotifications(!notifications)}
            />
            Enable notifications
          </label>
        </div>

        {/* Change Email */}
        <div style={{marginBottom:'20px'}}>
          <label style={{fontWeight:'bold', display:'block', marginBottom:'8px'}}>Email</label>
          <input 
            type="email" 
            placeholder="Enter new email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            style={{width:'100%', padding:'8px', borderRadius:'10px', border:'1px solid #ccc'}}
          />
        </div>

        {/* Change Password */}
        <div style={{marginBottom:'20px'}}>
          <label style={{fontWeight:'bold', display:'block', marginBottom:'8px'}}>Password</label>
          <input 
            type="password" 
            placeholder="New Password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            style={{width:'100%', padding:'8px', borderRadius:'10px', border:'1px solid #ccc'}}
          />
        </div>

        {/* Save Button */}
        <div style={{textAlign:'center'}}>
          <button className="btn" onClick={saveSettings}>Save Settings</button>
        </div>

      </section>
    </div>
  );
};

export default Settings;