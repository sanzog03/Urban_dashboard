import { Fragment } from 'react';

import './App.css';
import CssBaseline from '@mui/material/CssBaseline';

import Dashboard from './components/dashboard';

function App() {
  return (
    <Fragment>
      <CssBaseline />
        <Dashboard />
    </Fragment>
  );
}

export default App;
