import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home'
import Services from './components/Services';
import Contact from './components/Contact';
import Clients from './components/Clients';
import Work from './components/Work';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path='/services' element={<Layout />}>
        <Route index element={<Services />} />
      </Route>
      <Route path='/work' element={<Layout />}>
        <Route index element={<Work />} />
      </Route>
      <Route path='/clients' element={<Layout />}>
        <Route index element={<Clients />} />
      </Route>
      <Route path='/contact' element={<Layout />}>
        <Route index element={<Contact />} />
      </Route>
    </Routes>
    
  );
}

export default App;
