import Global from './styles/Global';
import TodoList from './components/TodoList';

function App() {

  return (
    <>
      <Global />
      <h1 className="flex items-center justify-center text-7xl mt-20">TodoList</h1>
      <div className='flex justify-center items-center mt-10'>
        <TodoList />
      </div>
    </>
  );
}

export default App;
