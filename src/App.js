import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import { CreateContainer, Header, MainContainer } from './components';
import { actionType } from './context/reducer';
import { useStateValue } from './context/StateProvider';
import { getAllFoodItems } from './utils/firebaseFunction';

const App = () => {

  const [{}, dispatch] = useStateValue();

  const fetchData = async () =>{
    await getAllFoodItems().then(data =>{
     dispatch({
      type: actionType.SET_FOOD_ITEMS,
      foodItems: data,
     })
    })
  };

  useEffect (() => {
    fetchData();
  })
  
  return (
    <AnimatePresence mode='wait'>
      <div className='w-screen h-auto flex flex-col bg-primary'>
   <Header/>
   <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
    <Routes>
      <Route path='/*' element={<MainContainer/>} />
      <Route path='/createItem' element={<CreateContainer/>} />
    </Routes>
   </main>

  </div>
    </AnimatePresence>
  
  )
};

export default App;