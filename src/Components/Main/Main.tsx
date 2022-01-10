import React, { ReactElement } from 'react';

interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps): ReactElement => {
  return <section className='main'>{children}</section>;
};

export default Main;
