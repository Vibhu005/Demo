import React, { useState } from "react";
import { BsList } from "react-icons/bs";
import Sidebar from "../container/sideBar";

function Home() {
  const [show, setShow] = useState(true);
  return (
    <>
      {show ? <Sidebar /> : null}

      {/* <button onClick={() => setShow(true)}>Show</button>
      <button onClick={() => setShow(false)}>hide</button> */}
      {/* <button onClick={() => setShow(!show)}>
        <BsList />
      </button> */}
      <i onClick={() => setShow(!show)}>
        <BsList />
      </i>
    </>
  );
}
export default Home;
