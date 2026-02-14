import "./component_styling/navbar.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function NavBar() {
  let path = window.location.pathname;
  console.log(path);
  useEffect(() => {
    let curr = 0;
    switch (path) {
      case '/':
        curr = 0;
        break;
      case '/symptom-check':
        curr = 1;
        break;
      case '/drug-finder':
        curr = 2;
        break;
      case '/health-insights':
        curr = 3;
        break;
      case '/skin-scan':
        curr = 4;
        break;
      case '/medibot':
        curr = 5;
        break;
      default:
        break;
    }

    let arr = []
    for (let i=0; i<6; i++) {
        arr.push(i === curr);
    }
    setActiveArray(arr);
  }, [path]);

  let navigate = useNavigate();
  let [activeArray, setActiveArray] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);
  const activeStyle = {
    backgroundColor: "#9F2B2B",
    width: "16%",
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
            navigate("/");
          }}
        >
          Home
        </div>
        <div
          className="tab"
          style={activeArray[1] ? activeStyle : {}}
          onClick={() => {
            navigate("/symptom-check");
          }}
        >
          Symptom Check
        </div>
        <div
          className="tab"
          style={activeArray[2] ? activeStyle : {}}
          onClick={() => {
            navigate("/drug-finder");
          }}
        >
          Drug finder
        </div>
        <div
          className="tab"
          style={activeArray[3] ? activeStyle : {}}
          onClick={() => {
            navigate("/health-insights");
          }}
        >
          Health insights
        </div>
        <div
          className="tab"
          style={activeArray[4] ? activeStyle : {}}
          onClick={() => {
            navigate("/skin-scan");
          }}
        >
          Skin scan
        </div>
        <div
          className="tab"
          style={activeArray[5] ? activeStyle : {}}
          onClick={() => {
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