import React from 'react';
import { Router } from './router'
import { FormProvider } from './contexts/FormContext'

import './App.css';


function App() {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  );
}

export default App;
