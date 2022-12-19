import { useEffect } from "react";
import axios from "axios";
import logout from "../../assets/images/logout-svgrepo-com.svg";
import "./Main.css";
import CloseIcon from "../../assets/images/icon-menu-close.svg";
import { footerItem} from "./constant";
import { sidebarItem } from "../LeftSidebar/constants";
import { closeHamburgerMenu} from '../../utils/utils'
import Table from "../Table/Table";
import Header from "../Header/Header";


function Main() {

  return (
    <div className="main-wrapper">
      <Header />
      <Table />
      <div className="footer">
        <div className="footer-header">
          <h1>Prescribed</h1>
          <h1>Examinations and</h1>
          <h1>Medications</h1>
        </div>
        {footerItem.map((item) => (
          <div className="footer-item" key={item.id}>
            <h2>{item.day}</h2>
            <h3>{item.treatment}</h3>
            <p>{item.adress}</p>
          </div>
        ))}
      </div>
      <div className="hamburger-menu-wrapper">
        <div className="overlay"></div>
        <div className="mobile-nav-wrapper">
          <img
            src={CloseIcon}
            onClick={closeHamburgerMenu}
            className="close-icon"
            width="24px"
            alt=""
          />
          <nav className="mobile-nav">
            {sidebarItem.map((item) => (
              <a href="#" key={item.id}>
                {item.title}
              </a>
            ))}
            <a href="#" className="nav-item">
              Logout
              <div className="nav-item-icon">
                <img src={logout} width="20px" height="20px" alt="logout" />
              </div>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Main;
