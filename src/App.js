import React, { Fragment, useEffect } from 'react';
import SearchBar from './compoenents/layout/SearchBar';
import Logs from './compoenents/logs/Logs';

import anime from 'animejs/lib/anime.es.js';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    // Initializes Materialize JS
    M.AutoInit();

    // Create a timeline with default parameters
    const tl = anime.timeline({
      loop: true,
      direction: 'alternate',
      easing: 'spring(1, 80, 10, 0)'
    });
    // Add children
    tl.add({
      targets: 'a',
      scale: 0.5,
      rotate: '1turn'
    })
      .add({
        targets: 'a',
        scale: 1,
        rotate: '2turn'
      })
      .add({
        targets: 'a',
        scale: 1.5,
        rotate: '3turn'
      })
      .add({
        targets: 'a',
        scale: 2,
        rotate: '4turn'
      });

    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <SearchBar />
      <div className='container'>
        <Logs></Logs>
      </div>
    </Fragment>
  );
};

export default App;
