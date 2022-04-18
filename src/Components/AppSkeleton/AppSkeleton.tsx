import React, { ReactChildren, ReactElement } from 'react';

import cs from 'classnames';
import s from './style.module.scss';

import Header from '../Page/Header';
import Footer from '../Page/Footer';
import Exclusive from '../Page/Exclusive';

import Logo from '../Page/assets/10.png';

type PropType = {
  children: ReactElement | ReactElement[] | ReactChildren;
};

export default function AppSkeleton(prop: PropType): ReactElement {
  return (
    <>
      <div className="">
        <Header />
        <img
          src={Logo}
          alt="Logo"
          className={(cs(s.Logo), 'd-flex flex-row justify-content-end')}
        />
        <Exclusive />
        <div className="">{prop.children}</div>
        <Footer />
      </div>
    </>
  );
}
