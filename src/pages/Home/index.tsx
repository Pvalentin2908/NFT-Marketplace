/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import s from './style.module.scss';

import AppSkeleton from '../../Components/AppSkeleton/AppSkeleton';
import Collections from './Collections';
import Create from './Create';
import Discover from './Discover';
import Exclusive from './Exclusive';
import Gems from './Gems';

const Home = () => {
  return (
    <AppSkeleton>
      <div>
        <Exclusive />
        <Gems />
        <Collections />
        <Create />
        <Discover />
      </div>
    </AppSkeleton>
  );
};

export default Home;
