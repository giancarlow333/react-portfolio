import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <div className='header-image'></div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
