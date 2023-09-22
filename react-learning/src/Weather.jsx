import React, { useState } from "react";
import axios from "axios";
const Weather = () => {
  // const axios = require("axios");
  const [ans, setAns] = useState();
  const [inp, setInp] = useState();
  const [code, setCode] = useState();
  const [dt, setDt] = useState([]);
  const [del, setDel] = useState([]);

  const onChange = (e) => {
    setInp(e.target.value);
  };

  const fetchData = () => {
    let menuData = null;
    axios(
      `https://api.opencagedata.com/geocode/v1/json?q=${inp}&key=faed4d9eb29d483a866000c901ccb680`,

      { title: "json-server", author: "typicode" }
    ).then((data) => {
      // if (data?.data?.results) {
      //   setDt(data?.data?.results);
      // }

      menuData = data?.data?.results.map((i) => {
        return;
      });

      // if (data.status.code == 200 && data.results.length > 0) {
      //   setAns(true);
      //   // console.log("state_code",data.results[0].components.state_code);
      //   setCode(data.results[0].components.state_code);
      // } else {
      //   setAns(false);
      // }
    });
    return menuData;
  };

  // const renderData = () => {};

  return (
    <div>
      <br />
      ..........
      {/* {renderData()} */}
      {/* <p>{ans ? "success" : "no-data"}</p> */}
      {/* <p>{code}</p> */}
      <input type="text onchan" onChange={(e) => onChange(e)} />
      <button onClick={fetchData}>BTN</button>
      {/* imp : {JSON.stringify(inp)} */}
      {/* {dt.map((item) => (
        <>
          <h1>Country : {item?.components.country}</h1>
          <h1>Country-Code : {item?.components.country_code}</h1>
          <h1>State-Code : {item?.components.state_code}</h1>
          <h1>State-District : {item?.components.state_district}</h1>
        </>
      ))} */}
    </div>
  );
  {
    /* // fetch(
  //   `https://api.opencagedata.com/geocode/v1/json?q=${e.target.value}&key=faed4d9eb29d483a866000c901ccb680`
  // )
  //   .then((res) => res.json())
  //   .then((data) => { */
  }
  {
    /* //     // console.log("data", data);

  //     console.log("statuscode", data.status.code);

  //     console.log(data.results.length);
  //     //  console.log();
  //     // console.log(data.results[0]);

  //     if (data.status.code == 200 && data.results.length > 0) { */
  }
  {
    /* //       setAns(true);
  //       // console.log("state_code",data.results[0].components.state_code);
  //       setCode(data.results[0].components.state_code);
  //     } else { */
  }
  {
    /* //       setAns(false);
  //     }
  //   }); */
  }
};

export default Weather;
