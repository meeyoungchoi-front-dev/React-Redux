
import { useDispatch, useSelector} from "react-redux";
import './App.css';
import Box from "./component/Box";

function App() {
  const count = useSelector(state => state.count);
  const id = useSelector(state => state.id);
  const password = useSelector(state => state.password);
  const dispatch =  useDispatch();
  const increase = () => {
    dispatch({type: "INCREMENT", payload: {num: 5}})
  }
  const decrease = () => {
    dispatch({type: "DECRECEMENT", payload: {num: 1}})
  }

  const login = () => {
    dispatch({type: "LOGIN", payload: {id: "test", password: "123"
    }})
  }
  return (
    <div>
      <h1>{id}님, 환영합니다.</h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
      <button onClick={login}>로그인</button>
      <Box/>
    </div>
  );
}

export default App;
