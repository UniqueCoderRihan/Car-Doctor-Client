import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Nabvar from '../Pages/Shared/Nabvar/Nabvar';

const Main = () => {
    return (
        <div>
            <Nabvar></Nabvar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;