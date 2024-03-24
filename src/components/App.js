import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public pages */}
        <Route exact path="/" element={<Home />} default></Route>
        <Route exact path="" element=""></Route>

        {/* Member pages */}
        <Route exact path="" element=""></Route>
        <Route exact path="" element=""></Route>

        {/* Error page */}
        <Route path="*" element=""></Route>
      </Routes>
    </Router>
  );
}

export default App;
