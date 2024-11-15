import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import NavComponent from './Components/NavComponent/NavComponent';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>

      <NavComponent />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
