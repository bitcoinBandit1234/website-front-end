import React from "react";
import Vehicles from "../components/Vehicles";
import Information from "../components/Information";

function VehicelList() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="vehicles-container">
          <Information />
        </div>
        <div className="information-container">
          <Vehicles />
        </div>
      </div>
    </div>
  );
}

export default VehicelList;
