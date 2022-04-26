import React, { ReactChildren, ReactElement } from 'react';

import cs from 'classnames';
import s from './style.module.scss';

import Header from '../Page/Header';
import Footer from '../Page/Footer';
import Exclusive from '../Page/Exclusive';
import Gems from '../Page/Gems';
import Collections from '../Page/Collections';
import Create from '../Page/Create';
import Discover from '../Page/Discover';

import Logo from '../Page/assets/10.png';

type PropType = {
  children: ReactElement | ReactElement[] | ReactChildren;
};

export default function AppSkeleton(prop: PropType): ReactElement {
  return (
    <>
      <div className={cs(s.Background)}>
        <Header />
        <Exclusive />
        <Gems />
        <Collections />
        <Create />
        <Discover />
        <div className="">{prop.children}</div>
        <Footer />
      </div>
    </>
  );
}
