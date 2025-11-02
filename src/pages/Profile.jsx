import React, { useState } from 'react';
import '../style.css';
import LogoImg from '../assets/images/logo.jpg';
const Profile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+123456789',
    address: 'Kigali, Rwanda'
  });

  const [editMode, setEditMode] = useState(false);
  const [tempUser, setTempUser] = useState({...user});

  const saveProfile = () => {
    setUser({...tempUser});
    setEditMode(false);
  };

  return (
    <div>
      <h2 className="section-title">Your Profile</h2>
      <section style={{maxWidth:'600px', margin:'auto', background:'#fff', padding:'20px', borderRadius:'15px', boxShadow:'0 5px 15px rgba(0,0,0,0.1)'}}>
        <img src={LogoImg} alt="User" style={{width:'100px', borderRadius:'50%', display:'block', margin:'auto'}}/>
        {editMode ? (
          <div style={{marginTop:'15px'}}>
            <input type="text" value={tempUser.name} onChange={e => setTempUser({...tempUser, name: e.target.value})} placeholder="Name"/>
            <input type="email" value={tempUser.email} onChange={e => setTempUser({...tempUser, email: e.target.value})} placeholder="Email"/>
            <input type="text" value={tempUser.phone} onChange={e => setTempUser({...tempUser, phone: e.target.value})} placeholder="Phone"/>
            <input type="text" value={tempUser.address} onChange={e => setTempUser({...tempUser, address: e.target.value})} placeholder="Address"/>
            <div style={{textAlign:'center', marginTop:'15px'}}>
              <button className="btn" onClick={saveProfile}>Save</button>
              <button className="btn" style={{marginLeft:'10px', background:'#888'}} onClick={() => setEditMode(false)}>Cancel</button>
            </div>
          </div>
        ) : (
          <div style={{textAlign:'center', marginTop:'15px'}}>
            <h3>{user.name}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Address:</strong> {user.address}</p>
            <button className="btn" onClick={() => setEditMode(true)}>Edit Profile</button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Profile;