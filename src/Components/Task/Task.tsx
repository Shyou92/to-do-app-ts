import React, { ReactElement } from 'react';

interface Props {
  key: number;
  text: string;
  id: number;
  isDone: boolean;
}

export default function Task({ text, id }: Props): ReactElement {
  return (
    <section className='task'>
      <div className='container'>
        <button className='task__done' type='button'>
          Done!
        </button>
        <button className='task__remove' type='button'>
          X
        </button>
      </div>
      <div className='task__textContainer'>
        <span className='task__id'>{id}</span>
        <p className='task__text'>{text}</p>
      </div>
    </section>
  );
}
