import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Coffee from './Coffee';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/:name' element={<Home />}></Route>
          <Route path='/coffee' element={<Coffee />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
