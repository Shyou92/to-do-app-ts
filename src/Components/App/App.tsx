import { ReactElement } from 'react';
import todo from '../../mock';
import Container from '../Container/Container';
import Header from '../Header/Header';
import Input from '../Input/Input';
import Main from '../Main/Main';
import Task from '../Task/Task';
import TaskList from '../TaskList/TaskList';

function App(): ReactElement {
  console.log(todo);

  return (
    <div className='App'>
      <Main>
        <Header title='Awesome Typescript App' />
        <Container>
          <Input />
          <TaskList
            children={
              todo.length === 0 ? (
                <p>No tasks available</p>
              ) : (
                todo.map((i) => {
                  return (
                    <Task
                      key={i.index}
                      id={i.index}
                      text={i.text}
                      isDone={i.isDone}
                    />
                  );
                })
              )
            }
          />
        </Container>
      </Main>
    </div>
  );
}

export default App;
