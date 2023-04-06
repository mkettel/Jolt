import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Home } from './pages/home';
import { Space } from './pages/space';
import { Navbar } from './components/navbar';

function App() {

  console.log("Hi from App.js")


  const client = new QueryClient();

  return (
    <div className="App">

      <QueryClientProvider client={client}>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/Space' element={<Space />} />
            <Route path='*' element={<Home />} />
          </Routes>
          {/* <Navbar /> */}
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
