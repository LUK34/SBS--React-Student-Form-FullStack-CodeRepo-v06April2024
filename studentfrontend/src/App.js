import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import StudentList from './components/StudentList';

function App() 
{
  return (
    <BrowserRouter>
      <div>
      <Routes>
        <Route exact path='/' element={<StudentList />} />
      
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
