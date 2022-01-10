import React, { ReactElement } from 'react';

interface HeaderTitle {
  title: string;
}

const Header = ({ title }: HeaderTitle): ReactElement => {
  return (
    <section className='header'>
      <h1 className='header__name'>{title}</h1>
    </section>
  );
};

export default Header;
