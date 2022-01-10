import React, { ReactElement } from 'react';

interface Props {
  children: React.ReactNode;
}

export default function TaskList({ children }: Props): ReactElement {
  return <section className='taskList'>{children}</section>;
}
