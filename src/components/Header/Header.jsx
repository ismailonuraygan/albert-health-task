import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import profilePicture from "../../assets/images/profilePicture.png";
import { openHamburgerMenu } from "../../utils/utils";
import MenuIcon from "../../assets/images/icon-menu.svg";
import './Header.css'

export default function Header() {
  return (
    <>
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
    </>
  );
}
