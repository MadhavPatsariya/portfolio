import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import PersonalDetails from './components/PersonalDetails';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Projects from './components/Projects';
import ProfileAndInsights from './components/ProfileAndInsights';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<PersonalDetails/>}/>
        <Route exact path='/project' element={<Projects/>}/>
        <Route exact path='/resume' element={<ProfileAndInsights/>}/>
      </Routes>
    </Router>
  );
}

export default App;
