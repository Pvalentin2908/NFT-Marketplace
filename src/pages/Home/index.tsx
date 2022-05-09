/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import cs from 'classnames';
import s from './style.module.scss';

import AppSkeleton from '../../Components/AppSkeleton/AppSkeleton';
import CollectionsSection from './Collections';
import Create from './Create';
import Discover from './Discover';
import Exclusive from './Exclusive';
import Gems from './Gems';
import Ball from './assets/10.png';

const Home = () => {
  return (
    <AppSkeleton>
      <div className="zIndex4">
        <div className={cs(s.ballPosition, 'position-absolute')}>
          <img src={Ball} alt="Ball" />
        </div>
        <Exclusive />
        <Gems />
        <CollectionsSection />
        <div className={s.backgroundCreate}>
          <Create />
        </div>
        <Discover />
      </div>
    </AppSkeleton>
  );
};

export default Home;
