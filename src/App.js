import React from 'react';
import {Routes, Route} from 'react-router';

import firebase, {FirebaseContext} from './firebase'; 

import Ordenes from './componets/paginas/Ordenes';
import Menu from './componets/paginas/Menu';
import NuevoPlatillo from './componets/paginas/NuevoPlatillo';
import SideBar from './componets/ui/SideBar';
import FireBaseContext from './firebase/context';

function App() {
  return (
    <FireBaseContext.Provider
      value = {{
        firebase
      }}
    >
      <div className='md:flex min-h-screen'>
        <SideBar/>
        <div className='md:w-3/5 xl:w-4/5 p-6'>
          <Routes>
            <Route path="/ordenes" element={<Ordenes/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/nuevo-platillo" element={<NuevoPlatillo/>}/>
          </Routes>
        </div>
      </div>
    </FireBaseContext.Provider>
  );
}

export default App;
