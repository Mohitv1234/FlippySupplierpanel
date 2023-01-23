
import './App.css';
// import Home from './components/Home/Home';
import Sidebar from './components/Include/Sidebar/Sidebar';
import { BrowserRouter} from "react-router-dom";

  
function App() {
  return (
    <div className="App">
       <BrowserRouter>
        {/* <Home/> */}
     <Sidebar/>
       </BrowserRouter>
     
    </div>
  );
}

export default App;
