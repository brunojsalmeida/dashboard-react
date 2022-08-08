import "./Sidebar.css";
import mulher from "../../assets/mulher-de-oculos.svg";
import { Link } from 'react-router-dom';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
      <img className="img" src={mulher} alt="Mulher" />
        <div className="sidebar__img">
          <h1>Jane Rotanson</h1>
          <p>Your plan: <a href="#" className="link">Premium</a></p>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="#">Dashboard</a>
        </div>
        <h2>GENERAL</h2>
        <div className="sidebar__link">
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          <Link to="/">Overview</Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-building-o"></i>
          <a href="#">Analytics</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-wrench"></i>
          <a href="#">Finance</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-archive"></i>
          <a href="#">Account</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-handshake-o"></i>
          <a href="#">Contracts</a>
        </div>
        <h2>MANAGEMENT</h2>
        <div className="sidebar__link">
          <i className="fa fa-users"></i>
          <Link to="/users"> Customers</Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-shopping-cart"></i>
          <a href="#">Products</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-folder-open"></i>
          <a href="#">Oders</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-file-text"></i>
          <a href="#">Invoices</a>
        </div>
        <h2>LEAVE</h2>
        <div className="sidebar__link">
          <i className="fa fa-question"></i>
          <a href="#">Requests</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-sign-out"></i>
          <a href="#">Leave Policy</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-calendar-check-o"></i>
          <a href="#">Special Days</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-files-o"></i>
          <a href="#">Apply for leave</a>
        </div>
        <h2>PAYROLL</h2>
        <div className="sidebar__link">
          <i className="fa fa-money"></i>
          <a href="#">Payroll</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-briefcase"></i>
          <a href="#">Paygrade</a>
        </div>
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="#">Log out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
