import { Outlet } from 'react-router-dom';
import Header from './Header';
import Loader from './Loader';
import Overlay from './Overlay';
import BackgroundCircles from './BackgroundCircles';


export default function Layout() {
  return (
    <>
        
        <Header />
        <Overlay />
        <BackgroundCircles />
        <Loader />
        <main className="main">
            <Outlet />
        </main>
    </>
  );
}