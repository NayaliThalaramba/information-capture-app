import React, {useState} from 'react';
import './App.css';

const InfoForm = () => {
    const [name, setName]= useState('');
    const [district, setDistrict]= useState('');
    const [userInfo, setUserInfo]= useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserInfo({name, district});
        setName('');
        setDistrict('');
    };

    return(
        <div>
            <h1> Information Capture </h1>
            <div className='info-container'>
                <h2 className='Name'>Name:- Nayali Thalaramba</h2>
                <h2 className='District'>District:- Colombo</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <label className='Namelbl'>Name: <input type='text' value={name} onChange={(e) => setName(e.target.value)}/> </label>
                <label className='Districtlbl'>District: <input type='text' value={district} onChange={(e) => setDistrict(e.target.value)}/></label>
                <div className='button-container'> 
                    <button type='submit'>Submit</button>
                </div>
            </form>
            {userInfo && (
                <div className='Display'>
                    <h2 className='User'> User Information</h2>
                    <p className='Username'> Name:- {userInfo.name}</p>
                    <p className='UserDistrict'>District:- {userInfo.district}</p>
                </div>
            )}
        </div>
    );
};

export default InfoForm;