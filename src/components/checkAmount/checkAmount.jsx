import React, { useState, useEffect } from 'react';
import Cannabis_menu from './cannabis_menu'
import { getCannabisData } from '../../services/api'
import ModalAdd from './modalAdd';

function CheckAmount() {
  const [cannabisData, setCannabisData] = useState([]);
  const [isOpenAdd, setIsOpenAdd] = useState([false]);
  function handleClickAdd() {
    setIsOpenAdd(true);
  }

  function handleCloseAdd() {
    setIsOpenAdd(false);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCannabisData();
        setCannabisData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <body className='px-[66px] pt-[40px] relative'>
      <div className='flex justify-between'>
        <h1 className=' text-4xl'>Check the current amount</h1>
        <button onClick={handleClickAdd}
        className='h-10 w-10 rounded-lg text-3xl bg-[#355A20] text-white flex items-center justify-center pb-1'> + </button>
      </div>
      <div className='w-[screen] h-full flex flex-wrap '>
        {cannabisData.map((cannabis) => (
          <div key={cannabis.id}>
            <Cannabis_menu name={cannabis.name}/>
          </div>
        ))}
      </div>
      {isOpenAdd == true && <ModalAdd isOpen={isOpenAdd} onRequestClose={handleCloseAdd} />}
      
    </body>
  )
}

export default CheckAmount