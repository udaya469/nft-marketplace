import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from "next/link";
//---- IMPORT ICON 
import {MdNotificationsNone} from 'react-icons/md';
import {BsSearch} from 'react-icons/bs';
import { CgMenuLeft, CgMenuRight} from 'react-icons/cg';

//Internal import 
import Style from './NavBar.module.css'
import { Discover, HelpCenter, Notification, Profile, Sidebar } from "./index";
import { Button } from "../compomnentsindex";
const NavBar = () =>{
    return(
        <div>
            <h1>NavBar</h1>
        </div>
    )
}
export default NavBar;