import React from "react";

import NavBar from "../../NavBar";
import Dashboard from "../../Dashboard";

const artworks = [
  { _id: "1", title: "In the event of sinking" },
  { _id: "2", title: "Refugees in a nutshell" },
  { _id: "3", title: "Solidarity" },
  { _id: "4", title: "The rehearsal" }
];

export default props => (
  <div>
    <NavBar />
    <Dashboard data={artworks} keyData={"artworks"} />
  </div>
);
