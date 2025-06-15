import React from "react";

export default function Sidebar() {
  return (
        <div className="sidebar">
            <div className="title3">VIT BHOPAL</div>

            <div className="list">
                <div className="menu-item1">
                    <div className="smol">Discover</div>
                </div>

                <div className="menu-item1">
                    <img className="home-icon" alt="Home" src="/house.svg" />
                    <div className="home">Home</div>
                </div>

                <div className="menu-item1">
                    <img className="home-icon" alt="Notifications" src="/bell.svg" />
                    <div className="home">Notifications</div>
                </div>

                <div className="menu-item1">
                    <img className="home-icon" alt="Status" src="/radio.svg" />
                    <div className="home">Status</div>
                </div>
            </div>

            <div className="list1">
                <div className="title2">
                    <div className="service">Service</div>
                </div>

                <div className="menu-item1">
                    <img className="smile-icon" alt="" src="/smile.svg" />
                    <div className="home">Feedbacks</div>
                </div>

                <div className="menu-item1">
                    <img className="smile-icon" alt="" src="/list.svg" />
                    <div className="home">Complaint History</div>
                </div>
            </div>
        </div>
  );}