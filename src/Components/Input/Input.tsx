import React, { ReactElement } from 'react';

export default function Input(): ReactElement {
  return (
    <section className='input'>
      <form className='input__form'>
        <input type='text' className='input__text' />
        <button className='input__submit' type='submit'>
          Create Task
        </button>
      </form>
    </section>
  );
}
