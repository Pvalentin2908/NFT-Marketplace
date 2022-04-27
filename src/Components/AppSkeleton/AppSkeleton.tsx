import React, { ReactChildren, ReactElement } from 'react';

import cs from 'classnames';
import s from './style.module.scss';

import Header from '../Page/Header';
import Footer from '../Page/Footer';

type PropType = {
  children: ReactElement | ReactElement[] | ReactChildren;
};

export default function AppSkeleton(prop: PropType): ReactElement {
  return (
    <>
      <div className={cs(s.Background)}>
        <Header />
        <div>{prop.children}</div>
        <Footer />
      </div>
    </>
  );
}
