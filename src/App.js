import React, { Fragment, useEffect } from 'react';
import SearchBar from './compoenents/layout/SearchBar';
import Logs from './compoenents/logs/Logs';
import AddBtn from './compoenents/layout/AddBtn';
import AddLogModel from './compoenents/logs/AddLogModal';
import EditLogModal from './compoenents/logs/EditLogModal';
import AddTechModel from './compoenents/techs/AddTechModal';
import TechListModal from './compoenents/techs/TechListModal';
import { Provider } from 'react-redux';
import store from './store';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    // Initializes Materialize JS
    M.AutoInit();

    // eslint-disable-next-line
  }, []);

  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <AddBtn></AddBtn>
          <AddLogModel></AddLogModel>
          <EditLogModal></EditLogModal>
          <AddTechModel></AddTechModel>
          <TechListModal></TechListModal>
          <Logs></Logs>
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
