import React, { ReactElement } from 'react';
import cs from 'classnames';
import s from './style.module.scss';
import Collections from '../../Components/Collections';

export default function CollectionsSection(): ReactElement {
  return (
    <div className={cs(s.marginBottom128, 'container')}>
      <div className="d-flex flex-row justify-content-between text-white mb-4 mt-5">
        <h3>Top collections</h3>
        <div className="">
          <a href="#link" className={cs(s.textFooter)}>
            View All
          </a>
        </div>
      </div>
      <Collections />
      <div className={cs(s.rectangleBox, 'position-absolute')}>
        <div className={s.rectangle} />
      </div>
    </div>
  );
}
