import React from "react";

export default function Music() {
  return (
    <>  <div className="issues-wrapper">
        <div className="issue-title"><p>Select Your Issues</p></div>

        <div className="large-grid">
            <div className="card">
                <img className="large-grid-image" alt = 'HOSTEL CHANGE' src="/Hostel.jpg" />
                <div className="text-design"><p>HOSTEL CHANGE</p></div>
            </div>

            <div className="card">
                <img className="large-grid-image" alt = 'RAGGING' src="/Ragging.jpg" />
                <div className="text-design"><p>RAGGING</p></div>
            </div>

            <div className="card">
                <img className="large-grid-image" alt = 'WATER SUPPLY' src="/Water.jpg" />
                <div className="text-design"><p>WATER SUPPLY</p></div>
            </div>

            <div className="card">
                <img className="large-grid-image" alt = 'CLEANING/HYGIENE' src="/Cleaning.jpg" />
                <div className="text-design"><p>CLEANING/HYGIENE</p></div>
            </div>
        </div>

        <div className="other-issue-title"><p>Other Issues</p></div>

        <div className="small-grid">
            <div className="album">
                <img className="small-grid-image" alt = 'Security' src="/Security.jpg" />
                <div className="text-design"><p>SECURITY</p></div>
            </div>

            <div className="album">
                <img className="small-grid-image" alt = 'Laundry' src="/Laundry.jpg" />
                <div className="text-design"><p>LAUNDRY</p></div>
            </div>

            <div className="album">
                <img className="small-grid-image" alt = 'Furniture' src="/Furniture.jpg" />
                <div className="text-design"><p>FURNITURE</p></div>
            </div>

            <div className="album">
                <img className="small-grid-image" alt="Maintainence" src="/Maintainence.jpg"/>
                <div className="text-design"><p>MAINTAINENCE</p></div>
            </div>

            <div className="album">
                <img className="small-grid-image" alt="Roommate change" src="/Roommate.jpg" />
                <div className="text-design"><p>ROOMMATE CHANGE </p></div>
            </div>

            <div className="album">
                <img className="small-grid-image" alt="Food related" src="/Food.jpg" />
                <div className="text-design"><p>FOOD</p></div>
            </div>
        </div> 
        </div>                   
    </>
  );
}
