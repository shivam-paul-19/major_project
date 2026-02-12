import "./component_styling/navbar.css";
import { useState } from "react";
import { useNavigate } from "react-router";

function NavBar() {
  let navigate = useNavigate();
  let [activeArray, setActiveArray] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);
  const activeStyle = {
    backgroundColor: "#9F2B2B",
    width: "20%",
    height: "80%",
    display: "flex",
    alignItems: "center",
    fontWeight: 700,
    color: "white",
    justifyContent: "center",
    borderRadius: "10px",
  };

  return (
    <div className="navbar">
      <div className="tab-box">
        <div
          className="tab"
          style={activeArray[0] ? activeStyle : {}}
          onClick={() => {
            setActiveArray([true, false, false, false, false]);
            navigate("/symptom-check");
          }}
        >
          Symptom Check
        </div>
        <div
          className="tab"
          style={activeArray[1] ? activeStyle : {}}
          onClick={() => {setActiveArray([false, true, false, false, false])
            navigate("/drug-finder");
          }}
        >
          Drug finder
        </div>
        <div
          className="tab"
          style={activeArray[2] ? activeStyle : {}}
          onClick={() => {
            setActiveArray([false, false, true, false, false]);
            navigate("/health-insights");
          }}
        >
          Health insights
        </div>
        <div
          className="tab"
          style={activeArray[3] ? activeStyle : {}}
          onClick={() => {
            setActiveArray([false, false, false, true, false]);
            navigate("/skin-scan");
          }}
        >
          Skin scan
        </div>
        <div
          className="tab"
          style={activeArray[4] ? activeStyle : {}}
          onClick={() => {
            setActiveArray([false, false, false, false, true])
            navigate("/medibot");
          }}
        >
          Medibot
        </div>
      </div>
    </div>
  );
}

export default NavBar;