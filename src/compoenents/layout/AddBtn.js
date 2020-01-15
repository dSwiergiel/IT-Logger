import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

const AddBtn = () => {
  useEffect(() => {
    // Create a timeline with default parameters
    const floatingButton = anime.timeline({
      loop: true,
      direction: 'alternate',
      delay: 100,
      easing: 'spring(1, 80, 10, 0)'
    });
    // Add children
    floatingButton
      .add({
        targets: 'a.blue.modal-trigger',
        scale: 1.1,
        rotate: '1turn'
      })
      .add({
        targets: 'a.green.modal-trigger',
        scale: 1.1,
        rotate: '1turn'
      })
      .add({
        targets: 'a.red.modal-trigger',
        scale: 1.1,
        rotate: '1turn'
      });

    // eslint-disable-next-line
  }, []);
  return (
    <div className='fixed-action-btn'>
      <a
        href='#add-log-modal'
        className='btn-floating btn-large blue darken-2 modal-trigger'>
        <i className='large material-icons'>add</i>
      </a>
      <ul>
        <li>
          <a
            href='#tech-list-modal'
            className='btn-floating green modal-trigger'>
            <i className='material-icons'>person</i>
          </a>
        </li>
        <li>
          <a href='#add-tech-modal' className='btn-floating red modal-trigger'>
            <i className='material-icons'>person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
