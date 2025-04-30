import './App.css';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <p>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </p>
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/about' element={<h1>About</h1>} />
      </Routes>
    </div>
  );
}

export default App;
