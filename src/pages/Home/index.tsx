/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { GiSpiderMask } from 'react-icons/gi';
import s from './style.module.scss';
import AppSkeleton from '../../Components/AppSkeleton/AppSkeleton';

const Home = () => {
  return (
    <AppSkeleton>
      <div>
        <div> </div>
      </div>
    </AppSkeleton>
  );
};

export default Home;
