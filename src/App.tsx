import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import './App.scss';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
