import React from 'react';
import AuthContextProvider from './context/AuthContext';
import AppRouter from './router/AppRouter';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <ToastContainer/>
        <AppRouter />
      </AuthContextProvider>
    </div>
  );
};

export default App;
