import React, { ReactElement } from 'react';

interface Props {
  children: React.ReactNode;
}

export default function Container({ children }: Props): ReactElement {
  return <section>{children}</section>;
}
