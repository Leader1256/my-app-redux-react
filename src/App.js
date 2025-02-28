import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Counter } from './component/Counter';

function App() {
//  const dispatch=useDispatch();
//  const count=useSelector((state)=>state.count);
  return (
     <div className="App">
   {/* <h1>Counter App using react-redux</h1>
   <h2>count is {count}</h2>
   <div > <button className='btn btn-primary' onClick={()=>dispatch({type:"increment"})}>increment</button>
   <button className='btn btn-secondary' style={{marginLeft:"1rem"}} onClick={()=>dispatch({type:"decrement"})}>decrement</button>
   </div> */}
    <Counter/>
    </div>
  );
}

export default App;
