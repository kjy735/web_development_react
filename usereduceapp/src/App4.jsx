import './App.css'
import { useReducer } from 'react'
import Reducer from './reducer/Reducer';
import LoginForm from './components/LoginForm';

function App() {

  const [state, dispatch] = useReducer(Reducer, {isLogin: false, message: ''});

  return (
    <div>
      {state.isLogin ? (
        <>
          <strong>welcome</strong>
          <button onClick={() => dispatch({type: "LOGOUT"})}>로그아웃</button>
        </>
      ) : (
          <LoginForm state={state} dispatch={dispatch}/>
      )}
    </div>
  );
}

export default App;


