import React from 'react';
import style from './Footer.module.css';

export interface FooterProps {
  name?: string,
  href?: string | undefined,
  year?: string,
  children?: any,
}

export default function Footer(props: FooterProps) {
  const { name, children, year, href } = props;
  return (
    <div className={style.footr}>
      {children}
      <div>
        Licensed under MIT. (Yes it & acute; s free and
      <a href="https://github.com/jaywcjlove/hotkeys"> open-sourced</a>
      </div>
      <div>
        ©
        <a target="_blank" rel="noopener noreferrer" href={href}>{name}</a>
        {year}
      </div>
    </div>


  )
}