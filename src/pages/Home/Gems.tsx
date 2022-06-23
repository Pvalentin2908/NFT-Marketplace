import React, { ReactElement } from 'react';
import cs from 'classnames';
import s from './style.module.scss';
import Gems from '../../Components/Gems';

export default function GemsSection(): ReactElement {
  return (
    <div className="container mb-5 position-relative zIndex4">
      <div className="d-flex flex-row justify-content-between text-white mb-4 mt-5">
        <h3>Hidden Gems</h3>
        <div className="">
          <a href="#link" className={cs(s.textFooter)}>
            View All
          </a>
        </div>
      </div>
      <Gems />
    </div>
  );
}
