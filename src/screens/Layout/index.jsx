import Header from './header';

const Layout = ({ children }) => (
    <div className="Main" style={{ backgroundColor: '#edf7fa' }}>
        <Header />
        <div className="container pt-5">
            <h2 className="titulo text-center mb-5">OPCION</h2>
            <div className="row mt-5">{children}</div>
        </div>
    </div>
);

export default Layout;
