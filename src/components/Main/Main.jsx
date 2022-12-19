import { useEffect, useState } from "react";
import axios from "axios";
import "./Main.css";
import profilePicture from "../../assets/images/profilePicture.png";
import CloseIcon from "../../assets/images/icon-menu-close.svg";
import MenuIcon from "../../assets/images/icon-menu.svg";
import logout from "../../assets/images/logout-svgrepo-com.svg";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import { footerItem, table } from "./constant";
import { sidebarItem } from "../LeftSidebar/constants";
import {openHamburgerMenu, closeHamburgerMenu} from '../../utils/utils'


function Main() {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const response = await axios.get("https://dummyjson.com/users");
      const data = response.data.users.slice(0, 3);
      setData(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="main-wrapper">
      <header className="header">
        <div className="search-bar">
          <SearchIcon id="search-icon" />
          <input
            className="search-input"
            type="text"
            placeholder="Enter your search request"
          />
          <SettingsIcon />
        </div>
        <div className="consultant">
          Get consultant
          <div className="consultant-image">
            <img
              src={profilePicture}
              width="40px"
              height="40px"
              alt="Get consultant"
            />
          </div>
        </div>
        <img
          src={MenuIcon}
          onClick={openHamburgerMenu}
          className="hamburger-menu-open"
          width="20px"
          alt=""
        />
      </header>
      <div className="main-section">
        <div className="left-wrapper">
          <section id="order-history">
            <h2 class="section-title">Order History</h2>
            <p class="section-description">
              Manage billing information and view receips
            </p>
            <div class="section-content">
              <div class="table">
                <div class="row">
                  <div class="column">
                    <h2>Date</h2>
                  </div>
                  <div class="column">
                    <h2>Type</h2>
                  </div>
                  <div class="column">
                    <h2>Receipt</h2>
                  </div>
                </div>
                {table.map((item) => (
                  <div class="row" key={item.id}>
                    <div class="column">
                      <p>{item.date}</p>
                    </div>
                    <div class="column">
                      <p>{item.type}</p>
                    </div>
                    <div class="column">
                      <button>Download</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <div className="right-wrapper">
          <div className="right-up-wrapper">
            <img src={profilePicture} width="96px" height="96px" alt="" />
            <h1>Sync with your </h1>
            <h1 id="up-wrapper-header">medical record</h1>
            <p>Keep your doctor </p>
            <p>informed abort the</p>
            <p>condition</p>
            <button>Sync</button>
          </div>
          <div className="right-down-wrapper">
            <h1>Consultations</h1>
            {data?.map((item) => (
              <div className="consultant-item" key={item.id}>
                <img src={item.image} width="25px" alt="" />
                <div className="description">
                  <h2>Dr. {item.firstName}</h2>
                  <p>{item.bank.cardExpire}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
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
