import React from 'react'
import { useState } from 'react';
import Modal from 'react-modal';
import { addCannabis } from '../../services/api';
import '../../index.css';


function ModalAdd({ isOpen, onRequestClose }) {
  const [name, setName] = useState('');
  const [information, setInformation] = useState('');
  const [amount, setAmount] = useState('');
  const [jarWeight, setJarWeight] = useState('');
  const [avatar, setAvatar] = useState('');
  const [error, setError] = useState(null);

  const handleClick = async () => {
    if (!name || !amount || !jarWeight) {
      setError('*Incomplete information');
      return;
    }

    setError(null);

    const newCannabis = {
      name,
      information,
      old_amount: parseFloat(amount),
      new_amount: parseFloat(amount),
      jar_weight: parseFloat(jarWeight),
      avatar,
    };

    try {
      await addCannabis(newCannabis);
      onRequestClose(); // Close the modal after successful addition
    } catch (error) {
      console.error('Error adding cannabis:', error);
      // Handle the error, you can set an error state or display an error message
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        },
        content: {
          width: '60%',
          height: '531px',
          borderRadius: '15px',
          margin: 'auto',
          background: 'white',
          position: 'relative'
        },
      }}
    >
      <div>
        <div className='my-2'>
          <label>Name :</label>
          <input className=' w-full ml-1 border-[1px] border-black rounded-sm ' type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='my-2'>
          <label>Information :</label>
          <textarea className='w-full ml-1 border-[1px] border-black rounded-sm ' value={information} onChange={(e) => setInformation(e.target.value)} />
        </div >
        <div className='my-2'>
          <label>Amount :</label>
          <input className='w-full ml-1 border-[1px] border-black rounded-sm ' type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div className='my-2'>
          <label>Jar Weight:</label>
          <input className='w-full ml-1 border-[1px] border-black rounded-sm ' type="number" value={jarWeight} onChange={(e) => setJarWeight(e.target.value)} />
        </div>
        <div className='my-2'>
          <label>Avatar:</label>
          <input className='w-full ml-1 border-[1px] border-black rounded-sm ' type="text" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
      <div className='w-full flex justify-center'>
        <button className={`mt-28 bottom-0 left-0 ${window.innerWidth < 1000 ? 'w-full' : 'w-[40%]'} flex justify-center items-center bg-[#355A20] text-white rounded-md py-2`} onClick={handleClick}>Add new cannabis +</button>
      </div>
      
    </Modal>
  );
}

export default ModalAdd