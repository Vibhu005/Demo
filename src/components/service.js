import React from "react";
import { AiFillHome, AiFillMessage, AiFillSetting } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BiHelpCircle } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import { GoSignOut } from "react-icons/go";

function Service() {
  return (
    <>
      <div className="navigation">
        <ul>
          <li className="list active">
            <a href="#">
              <span className="icon">
                <AiFillHome />
              </span>
              <span className="title">Home</span>
            </a>
          </li>
          <li className="list">
            <a href="#">
              <span className="icon">
                <CgProfile />
              </span>
              <span className="title">Profile</span>
            </a>
          </li>
          <li className="list">
            <a href="#">
              <span className="icon">
                <AiFillMessage />
              </span>
              <span className="title">Messages</span>
            </a>
          </li>
          <li className="list">
            <a href="#">
              <span className="icon">
                <AiFillSetting />
              </span>
              <span className="title">Setting</span>
            </a>
          </li>
          <li className="list">
            <a href="#">
              <span className="icon">
                <BiHelpCircle />
              </span>
              <span className="title">Help</span>
            </a>
          </li>
          <li className="list">
            <a href="#">
              <span className="icon">
                <RiLockPasswordFill />
              </span>
              <span className="title">password</span>
            </a>
          </li>
          <li className="list">
            <a href="#">
              <span className="icon">
                <GoSignOut />
              </span>
              <span className="title">SignOut</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Service;
