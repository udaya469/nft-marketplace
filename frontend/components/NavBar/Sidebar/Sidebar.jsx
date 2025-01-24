import React,{ useState } from "react";
import Image from "next/image";
import { GrClose } from 'react-icons/gr';
import{ TiSocialFacebook,TiSocialLinkedin,TiSocialInstagram,TiSocialTwitter,TiSocialYoutube, TiArrowSortedDown,TiArrowSortedUp } from "react-icons/ti";
import Style from './Sidebar.module.css';
import images from "../../../img";
import Button from "../../Button/Button";
import Link from "next/link";

// connect with navbar.js
const Sidebar = ({setOpenSideMenu}) =>{
    //usestate
    const [openDiscover,setOpenDiscover] = useState(false);
    const [openHelp,setOpenHelp] = useState(false);
    //discovernav
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
          link: "NFT-details"
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
      ];
    //helpcenternav
     const helpCenter = [
          {
            name: "About",
            link: "about"
          },
          {
            name: "Contact Us",
            link: "contact-us"
          },
          {
            name: "Sign Up",
            link: "sign-up"
          },
          {
            name: "Sign In",
            link: "sign-in"
          },
          {
            name: "Subscription",
            link: "subscription"
          },
        ];

    
    const OpenDiscoverMenu = ()=> setOpenDiscover(!openDiscover);
    const OpenHelpMenu = ()=> setOpenHelp(!openHelp);
    const CloseSideBar = () => {
    if(setOpenSideMenu){
        setOpenSideMenu(false);
    }
    };
    return(
        <div className={Style.sideBar}>
            <GrClose className={Style.sideBar_closeBtn} onClick={()=> {CloseSideBar()}}/>
            <div className={Style.sideBar_box}>
                <Image src={images.logo} alt="logo" width={150} height={150}/>
                <p>Discover the most outstanding articles on all topices of NFT marketplace and share own stories and build the nft commodities.</p>
            <div className={Style.sideBar_social}>   
                <a href="#">
                    <TiSocialFacebook/>
                </a>
                <a href="#">
                    <TiSocialLinkedin/>
                </a>
                <a href="#">
                    <TiSocialTwitter/>
                </a>
                <a href="#">
                    <TiSocialInstagram/>
                </a>
                <a href="#">
                    <TiSocialYoutube/>
                </a>

            </div> 
        </div>


        <div className={Style.sideBar_menu}>
            <div>
                <div className={Style.sideBar_menu_box} onClick={()=>OpenDiscoverMenu()}>
                    <p>discover</p>
                    <TiArrowSortedDown/>
                </div>

                {
                    openDiscover && (
                        <div className={Style.sideBar_discover}>
                            {discover.map((el,i) => (
                                <p key={i+1}>
                                    <Link href={{pathname: `${el.link}` }}>{el.name}</Link>
                                </p>
                            ))}
                            </div>
                    )
                }
            </div>            <div>
            <div className={Style.sideBar_menu_box} onClick={()=>OpenHelpMenu()}>
                    <p>HelpCenter</p>
                    <TiArrowSortedDown/>
                </div>

                {
                    openHelp && (
                        <div className={Style.sideBar_discover}>
                            {helpCenter.map((el,i) => (
                                <p key={i+1}>
                                    <Link href={{pathname: `${el.link}`}}>{el.name}</Link>
                                </p>
                            ))}
                            </div>
                    )                }
            </div>

        </div>


        <div className={Style.sideBar_button}>
            <Button btn = "Create" />
            <Button btn = "Connect Wallet" />
        </div>
        </div>
    )
};



export default Sidebar;