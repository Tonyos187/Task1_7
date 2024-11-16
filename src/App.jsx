import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import NavComponent from './Components/NavComponent/NavComponent';
import Footer from './Components/Footer/Footer';
import FooterDiv from './Components/FooterDiv/FooterDiv';

const App = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
