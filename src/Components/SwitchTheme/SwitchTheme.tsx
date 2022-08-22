import React, { ReactElement } from 'react';
import s from './style.module.scss';

export default function SwitchTheme(): ReactElement {
  return (
    <label className="switch">
      <input
        type="checkbox"
        onChange={(event) => console.log(event.target.checked)}
      />
      <span className="slider" />
    </label>
  );
}
