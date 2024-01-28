import {Routes,Route} from 'react-router-dom'
import './App.css';
import ContactMain from './components/ContactMain';
import ServicesMain from './components/ServicesMain';
import Main from './components/Main';
import Layout from './components/shared/Layout';

import Team from './components/Team'
import Mid from './components/Mid'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Main />} />
        <Route path='contact' element={<ContactMain/>}/>
        <Route path='about' element={<Mid/>}/>
        <Route path='services' element={<ServicesMain/>}/>
        <Route path='team' element={<Team/>}/>
        </Route>
       
      </Routes>
    </div>
  );
}

export default App;
