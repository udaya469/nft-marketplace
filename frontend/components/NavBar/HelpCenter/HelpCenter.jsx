import React from "react";
import Link from "next/link";

//Internal import 
import Style from './HelpCenter.module.css'

const HelpCenter = () =>{
    const helpCenter = [
      {
        name: "About",
        link: "about"
      },
      {
        name: "Contact Us",
        link: "contact-us"
      },
      
    ] 
    return(
        <div>
            <h1>HelpCenter</h1>
        </div>
    )
}
export default HelpCenter;