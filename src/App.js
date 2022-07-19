import React from 'react';
import AuthContextProvider from './context/AuthContext';
import AppRouter from './router/AppRouter';

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </div>
  );
};

export default App;
