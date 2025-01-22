import React from "react";
import Link from "next/link";

//Internal import 
import Style from './Discover.module.css'

const Discover = () =>{

    // DISCOVER NAIGATION MENU
    const discover = [
      {
        name: "Collection",
        link: "collection"
      },
      {
        name: "Search",
        link: "search"
      },
      {
        name: "Author Profile",
        link: "author-profile"
      },
      {
        name: "NFT Details",
        link: "NFT-detais"
      },
      {
        name: "Account Setting",
        link: "account-setting"
      },
      {
        name: "Connect Wallet",
        link: "connect-wallet"
      },
      {
        name: "Blog",
        link: "blog"
      }
    ]
    return(
        <div>
          {discover.map((el,i) =>(
            <div key={i+1} className={Style.discover}>
                <Link href={{pathname: `/${el.link}`}}>
                  <p>{el.name}</p>
                </Link>
            </div>
          ))}
        </div>
    );
};
export default Discover;