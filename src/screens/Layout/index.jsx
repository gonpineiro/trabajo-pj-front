import { useLocation } from 'react-router';
import Header from './header';

const Layout = ({ children }) => {
    const pathname = useLocation().pathname;

    const getNameByLocation = (pathname) => {
        switch (pathname) {
            case '/dependencias':
                return 'Dependencias';
            case '/edificios':
                return 'Edificios';
            default:
                return 'Menu';
        }
    };

    return (
        <div className="Main" style={{ backgroundColor: '#edf7fa' }}>
            <Header />
            <div className="container pt-5">
                <h2 className="titulo text-center mb-5">{getNameByLocation(pathname)}</h2>
                <div className="row mt-5">{children}</div>
            </div>
        </div>
    );
};

export default Layout;
