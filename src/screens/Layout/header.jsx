import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-logo text-center">
          <Link
            className="menu-link col-12 text-center"
            to={"/apps/formmaker/"}
          >
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
