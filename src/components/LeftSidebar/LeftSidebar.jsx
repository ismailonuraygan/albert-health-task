import "./LeftSidebar.css";
import profilePicture from "../../assets/images/profilePicture.png";
import logout from "../../assets/images/logout-svgrepo-com.svg";
import { family, sidebarItem } from "./constants";

function LeftSidebar() {
  return (
    <div className="leftSidebar">
      <div className="profile">
        <div className="profile-image">
          <img
            src={profilePicture}
            alt="Bill Terner"
            width="48px"
            height="48px"
          />
        </div>
        <div className="profile-body">
          <h2>Bill Terner</h2>
        </div>
        <div className="family">
          <p>Family</p>
        </div>
        <div className="sub-image" >
        {family.map(item => (
          <div className="sub-image-item" key={item.id}>
            <img
              src={item.img}
              width="24px"
              height="24px"
              alt="profilePicture"
            />
          </div>
        ))}
        </div>
      </div>
      <nav>
        {sidebarItem.map((item) => (
          <a className="nav-item active" href="#" key={item.id}>
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
  );
}

export default LeftSidebar;
