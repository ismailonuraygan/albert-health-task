import { useEffect, useState } from "react";
import axios from "axios";
import { table } from "../Main/constant";
import profilePicture from "../../assets/images/profilePicture.png";
import './Table.css';

export default function Table() {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const response = await axios.get("https://dummyjson.com/users");
      const data = response.data.users.slice(0, 3);
      setData(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
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
    </>
  );
}
