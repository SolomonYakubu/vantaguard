import type { NextPage } from "next";
import { useEffect, useState } from "react";
import ExportedImage from "next-image-export-optimizer";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

import Header from "../components/Header";

import { Zoom, Bounce, Fade, Roll } from "react-reveal";
import ai from "../public/images/ai.webp";
import about2 from "../public/images/wallet.png";
import why from "../public/images/why.webp";
import logo from "../public/images/logo.png";
import logo2 from "../public/images/logo.png";
import bg2 from "../public/images/wallet.png";
import bg1 from "../public/images/bg1.jpg";
import wallet from "../public/images/web3.png";
import privacy from "../public/images/web2.png";
import dot from "../public/images/dot.webp";
import banner from "../public/images/banner.png";
// import Vanta Guard  from "../public/images/Vanta Guard .jpg";
import { Link, animateScroll as scroll } from "react-scroll";
import ParticlesBg from "../components/particles";
import p1 from "../public/images/p1.png";
import p3 from "../public/images/p3.png";
import p4 from "../public/images/p4.png";
import p5 from "../public/images/p5.png";
import p6 from "../public/images/p6.png";
import p7 from "../public/images/p7.png";
import p8 from "../public/images/p8.png";
import p10 from "../public/images/p10.png";
import { BsTelegram, BsTwitter, BsMedium } from "react-icons/bs";
import { BiBot } from "react-icons/bi";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaRobot, FaRegLaughWink, FaGamepad } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { BsCashCoin } from "react-icons/bs";
import {
  GiReceiveMoney,
  GiTakeMyMoney,
  GiCampfire,
  GiRoad,
} from "react-icons/gi";
import { BiDna } from "react-icons/bi";
import { FaCoins } from "react-icons/fa";

import { BsShopWindow, BsCloudSunFill } from "react-icons/bs";
import { MdPool, MdWaterfallChart, MdSwapVert } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { TbBrandTelegram, TbBrandTwitter } from "react-icons/tb";
import "react-vertical-timeline-component/style.min.css";

const Home: NextPage = () => {
  const router = useRouter();

  const list = [
    ["Home", null],

    ["About", null],

    ["Tokenomics", null],
    // ["Roadmap", null],
    ["Uniswap", "https://app.uniswap.org"],
    [
      "Dextools",
      "https://www.dextools.io/app/ether/pair-explorer/0x2A7cB380fC706E3df5B937424aB2d07cD8d4f196?utm_source=telegram&utm_medium=bobbybuybot",
    ],
  ];
  const roadmap = [
    {
      title: "Stranding",
      desc: [
        " Socials Creation",
        "Website v1 release",
        "Contract Deployment",
        "Stealth launch",
        "1 month LP Lock",
        "Renounce with 0/2 tax",
      ],
    },
    {
      title: "Survival",

      desc: [
        "Marketing and ads Campaigns",
        "Dextools update",
        "LP lock extend",
        "Whitepaper v1 release",
        "Listing on CoinGecko and CoinMarketCap",
        " Website v2",
        "Partnerships with Influencers",
      ],
    },
    {
      title: "Rescue",

      desc: [
        "Wilson Legacy release",
        "LP burn",
        "Marketing Expansion",
        "NFT release",
        "Listing on CEX",
        "Merch",
      ],
    },
  ];
  const moreFeatures = [
    {
      title: `Privacy Beyond Compare - Just as Vantablack absorbs light, $VANTA absorbs your digital footprints. 

$VANTA transcends the conventional boundaries of cryptocurrency. Rooted in principles of anonymity and privacy, it shrouds your financial transactions in impenetrable darkness, safeguarding your privacy in a transparent digital realm. `,
      icon: privacy,
    },
    {
      title: `Vanta Wallet

A Vanta Wallet will serve as a software application designed for securely storing, managing, and interacting with $VANTA tokens and other cryptocurrencies. 

The wallet  will use encryption and strong authentication methods such as biometrics, PINs, or passphrases to access funds.

Users will be able to send and receive $VANTA tokens to and from other wallet addresses.

Backup and Recovery: Users would be prompted to create backups of their wallet, often in the form of a recovery phrase or seed.

Integration with Exchanges, Security Alerts, Multi-Currency Support`,
      icon: wallet,
    },
  ];
  const tokenomics = [
    { option: "Name & Symbol", value: "Vanta Guard  $VANTA" },

    { option: "Supply", value: "100,000,000" },
    { option: "Tax", value: "3/3" },

    { option: "LP", value: "2.5 ETH (locked)" },
  ];
  const reward = [
    {
      title: "Supply -  1 Million",
      desc: "The tax charged for both buy and sell transactions is 5%",
      icon: <FaCoins size={40} />,
    },
    {
      title: "Tax - 5/5",
      desc: "The tax charged for both buy and sell transactions is 5%",
      icon: <GiReceiveMoney size={40} />,
    },
    {
      title: "LP - 1%",

      desc: "1% fees is used to ensure that there are funds to support trading activity.",
      icon: <MdPool size={40} />,
    },
    {
      title: "Marketing - 4%",

      desc: "4% fees directly goes to marketing to support the token in a long run.",
      icon: <BsShopWindow size={40} />,
    },
  ];
  const features = [
    {
      title: "$Vanta Guard Detective bot",
    },
    {
      title: "$Vanta Guard Dapp's",
    },
    {
      title: "Staking ",
    },
    {
      title: "NFT'S",
    },
  ];
  const buy = [
    {
      title: "1",

      desc: "Download & setup MetaMask or TrustWallet",
    },
    {
      title: "2",

      desc: "Buy & send ETH to Metamask or Trust wallet",
    },
    {
      title: "3",

      desc: "Head over to Uniswap to buy your $Vanta Guard ",
    },
    {
      title: "4",

      desc: "View Vanta Guard  in your wallet and lastly HODL",
    },
  ];
  const about = [
    "register and add location(confirm before they own meme coins like Shiba, Doge etc.)",
    "Choose their own pets (+ beautiful NFT)",
    "Communicate and play together",

    "Grow and to make better their pets. More they active, more they can get $SHIMCO rewards   ",
  ];
  return (
    <div>
      <Header />
      <Layout>
        {/* <Header /> */}
        <section
          className=" md:h-[calc(100vh)] min-h-[calc(100vh)] mb-0 pb-0 w-full bg-inherit  md:py-0 bg-contain bg-no-repeat bg-top md:bg-right "
          // style={{ backgroundImage: "url('images/bg.webp')" }}
          id="Home"
        >
          {/* <ParticlesBg /> */}
          <div className="hero absolute w-full h-full z-10 bg-opacity-0 top-0 left-0">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="h-full flex relative flex-col overflow-y-hidden items-center justify-center md:justify-around md:flex-row  md:gap-2 md:items-center  w-full md:px-24 md:pt-8 md:pb-0 pt-24 pb-24 ">
            <div className="w-full md:w-1/2  md:block z-20 drop-shadow-2xl shake">
              <ExportedImage
                src={logo}
                alt="illustration"
                layout="responsive"
                className=" "
              />
            </div>
            {/* <div className="w-1/2 md:w-1/5 block left-0  absolute bottom-0 z-0 ">
              <ExportedImage
                src={dot}
                alt="illustration"
                layout="responsive"
                className=" "
              />
            </div> */}
            <div className="md:flex flex-col justify-center z-20 items-start  md:pt-0  px-6 md:p-3 w-full md:w-3/4">
              <Bounce>
                <h3
                  className=" md:block font-extrabold text-6xl md:text-9xl py-4  text-white my-1   bg-gradient-to-tr from-[#fff] via-[#fff] to-[#fff] md:text-left z-30 text-transparent bg-clip-text bg-cover"
                  // style={{ backgroundImage: "url('images/about.webp')" }}
                >
                  VANTA GUARD
                </h3>
                <p className=" md:text-2xl  text-xl font-semibold text-grey-400 text-white    ">
                  The Deepest Shade of your Crypto-life protection
                  <br />
                  <br />
                  ADD - VANTA Browser
                </p>

                <div className="flex  md:flex-row  items-center justify-start  gap-2 md:mb-0 my-3 md:my-0 md:mt-6">
                  <button
                    onClick={() =>
                      (window.location.href = "https://uniswap.org")
                    }
                    className="flex items-center justify-between  skew-x-[-20deg]  gap-3  font-extrabold text-2xl  hover:scale-105 transition-all border-white border-2 border-solid  text-white p-2 md:p-5 px-5  w-fit    "
                  >
                    Buy
                  </button>

                  <button
                    onClick={() =>
                      (window.location.href = "https://www.dextools.io")
                    }
                    className="flex items-center justify-between skew-x-[-20deg] gap-3  font-extrabold text-2xl bg-black hover:scale-105 transition-all  text-white p-2 md:p-5 px-5 w-fit  border-2 border-white border-solid"
                  >
                    Chart
                  </button>
                </div>
              </Bounce>
              {/* <div
                className="text-gray-200 text-center gap-2 flex items-center cursor-copy bg-bg1 w-fit bg-opacity-40 my-3 p-1 text-sm font-bold rounded break-all"
                onClick={() => {
                  navigator.clipboard.writeText(
                    "0xfEdCECDB9e447edd067AACA2E1e7af36c6eAD5f3"
                  );
                }}
              >
                <FaCopy />
                0xfEdCECDB9e447edd067AACA2E1e7af36c6eAD5f3
              </div> */}
            </div>
          </div>
        </section>
        {/* <div className="break-all text-white font-bold text-center p-5 mt-7 flex flex-col justify-center items-center">
          <div className=" mb-3 border-t-2 border-b-2 border-solid border-white">
            <h3 className="text-center text-4xl md:text-7xl   w-fit p-1 font-extrabold  text-white   ">
              Contract Address
            </h3>
          </div>
          <br />
          0xeE752aD76abE4C2828A0c6E54675b3c07779e47d
        </div> */}
        <section
          className="md:min-h-[calc(100vh-64px)] flex flex-col justify-center   items-center p-6 md:p-12 md:py-40 w-full "
          id="About"
          // style={{ backgroundImage: "url('images/background2.gif')" }}
        >
          <div className="flex flex-col mb-7 border-t-2 border-b-2 border-solid border-white">
            <h3 className="text-center text-3xl md:text-5xl   w-fit p-1 font-extrabold  text-white   ">
              INTRODUCTION
            </h3>
            {/* <div className="w-1/2 h-3 bg-blue-700 animate-pulse"></div> */}
          </div>
          <div className="flex flex-col md:flex-row items-center md:px-12 justify-center relative  md:gap-10 my-10">
            {/* <Zoom>
              <div className="w-full md:w-2/5 ">
                <ExportedImage
                  src={about2}
                  alt="illustration"
                  layout="responsive"
                  className=""
                />
              </div>
            </Zoom> */}
            <div className="w-full md:w-1/6 block  z-0 bounce2 ">
              <ExportedImage
                src={bg2}
                alt="illustration"
                layout="responsive"
                className=" "
              />
            </div>
            <Zoom>
              <div className="flex flex-col items-center  py-5 md:w-1/2  transition-all duration-500 h-full md:hover:border-none">
                <h4 className=" md:text-lg text-center md:text-left    font-semibold text-white">
                  Vanta Guard is a gateway to the security on the blockchain.
                  Inspired by the enigmatic Vantablack, $VANTA represents the
                  ultimate in privacy, security, and innovation.
                </h4>
              </div>
            </Zoom>
          </div>
          <div className="md:flex flex-col justify-center items-center">
            <div className="flex flex-col md:flex-row justify-center w-full items-center md:items-start gap-5 md:gap-6 my-5 md:px-48">
              {moreFeatures.map((item, index) => (
                <Zoom key={index} top>
                  <div className="group p-8 md:py-12 w-full md:h-[28rem]  flex flex-col md:justify-start items-center  bg-bg1 bg-opacity-80 hover:shadow-2xl transition-all duration-700 hover:shadow-primary border-2 border-white border-solid md:skew-x-[-10deg]">
                    <div className="block p-4 mb-3 w-24 rounded-full  bg-bg2 bg-opacity-40 self-center pulse">
                      <ExportedImage
                        src={item.icon}
                        alt="illustration"
                        layout="responsive"
                        className="   border-secondary border-2 border-solid"
                      />
                    </div>

                    <h3 className="   z-10 text-sm  font-extrabold my-3 text-center border-gray-300 text-white self-center ">
                      {item.title.split("\n\n").map((item, index) => (
                        <p key={index}>{item}</p>
                      ))}
                    </h3>
                  </div>
                </Zoom>
              ))}
            </div>
          </div>
        </section>
        {/* <section
          className="flex flex-col justify-center items-center p-6 md:p-12  w-full bg-bg2 bg-opacity-40 bg-cover bg-right md:bg-fixed py-16"
          id=""
          // style={{ backgroundImage: "url('images/background.webp')" }}
        >
          <Fade top>
            <div className="flex flex-col mb-7">
              <h3 className="text-center text-5xl md:text-7xl   w-fit p-1 font-extrabold  text-white ">
                Developments
              </h3>
              <div className="w-1/2 h-3 bg-blue-700 animate-pulse"></div>
            </div>
          </Fade>
          <div className="md:flex flex-col items-center justify-center">
            <div className="md:flex flex-col justify-center items-center">
              <div className="flex flex-col md:flex-row md:flex-wrap justify-center w-full items-center gap-5 md:gap-6 my-5 ">
                {moreFeatures.map((item, index) => (
                  <Zoom key={index}>
                    <div className="group p-8 md:py-12 w-full md:w-1/3 border-l-4 border-blue-700 border-solid flex flex-col justify-center items-center bg-bg1 bg-opacity-80 hover:shadow-2xl transition-all duration-700 hover:shadow-primary rounded-lg">
                      <div className="block p-4 mb-3 w-20 rounded-full  bg-bg2 bg-opacity-40 self-center text-white">
                        {item.icon}
                      </div>

                      <h3 className="   z-10 md:text-lg  font-extrabold my-3 text-center border-gray-300 text-white self-center ">
                        {item.title}
                      </h3>
                    </div>
                  </Zoom>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        <section
          className="flex flex-col justify-center items-center p-6 md:p-12  w-full bg-bg2 bg-opacity-40 bg-cover bg-right md:bg-fixed py-16"
          id="Tokenomics"
          // style={{ backgroundImage: "url('images/background.webp')" }}
        >
          <Fade>
            <div className="flex flex-col mb-7 border-t-2 border-b-2 border-solid border-white">
              <h3 className="text-center text-3xl md:text-5xl   w-fit p-1 font-extrabold  text-white   ">
                Tokenomics
              </h3>
            </div>
          </Fade>
          <div className="md:flex flex-col items-center justify-center">
            <div className="flex p-2 flex-col items-center md:w-2/3">
              <div className="flex flex-col gap-1 ">
                <div className="flex  flex-col items-center justify-center md:flex-row gap-2 flex-wrap">
                  {tokenomics.map((item, index) => (
                    <Zoom key={index}>
                      <h3 className="flex text-white items-end  justify-end bg-bg2 p-3 gap-6  bg-opacity-90 w-fit border-b-4 border-t-4 border-solid border-white">
                        <span className="text-center text-lg flex flex-col items-center   break-all">
                          <span className="font-bold  text-3xl ">
                            {item.option}
                          </span>{" "}
                          {item.value}
                        </span>
                      </h3>
                    </Zoom>
                  ))}
                </div>
              </div>
            </div>

            {/* <div className="md:flex flex-col justify-center items-center">
              <div className="flex flex-col   flex-wrap justify-center w-full items-center gap-5 md:gap-6 my-5 ">
                {reward.map((item, index) => (
                  <Zoom key={index}>
                    <div className="p-1 bg-gradient-to-t w-full  from-primary to-secondary rounded-lg">
                      <div className="group px-8   h-fit  flex flex-col justify-center items-center bg-bg1 bg-opacity-95 rounded-lg">
                        <h3 className="   z-10 text-xl  font-extrabold my-3 text-center border-gray-300 text-red-500 self-center ">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </Zoom>
                ))}
              </div>
            </div> */}
          </div>
        </section>

        {/* <section
          className="p-6 md:p-12 py-16 w-full bg-gradient-to-r from-bg2 to-bg1  flex flex-col items-center bg-cover bg-right md:bg-fixed relative "
          id="Roadmap"
          // style={{ backgroundImage: "url('images/background.webp')" }}
        >
          <Fade>
            <h3 className="text-2xl md:text-3xl mb-10  text-center w-full  font-extrabold  text-zinc-50 ">
              Roadmap
            </h3>
          </Fade>

          <div className="flex flex-col justify-center w-full md:w-[60%]  md:items-end items-center  md:gap-6  ">
            {roadmap.map((item, index) => (
              <Fade key={index}>
                <div className="group  md:px-8 w-full  md:w-1/2 md:even:self-start md:my-4   flex flex-col items-center justify-start bg-opacity-60 md:pl-9 border-l border-dashed border-gray-100 md:even:border-l-0 md:even:border-r relative before:h-5 before:w-5 before:rounded-full before:bg-secondary before:absolute before:top-0 even:before:right-[97%]  odd:before:left-[-10px]  md:even:before:right-[-10px]">
                  <div className=" ml-5 mb-5 md:mb-0 md:ml-0  p-2 w-11/12 md:w-fit  ">
                    <h3 className="z-10  text-xl   md:text-2xl  font-bold mt-3 text-left  text-zinc-200 ">
                      {item.title}
                    </h3>

                    <div className=" text-lg  text-zinc-200 z-10  p-3  md:px-0 md:p-0">
                      {item.desc.map((item, index) => (
                        <div
                          className="my-1 flex items-center gap-1"
                          key={index}
                        >
                          <span className="  text-zinc-3s00 text-sm">
                            - {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </section> */}
        {/* <section
          className="p-6 md:p-12 py-12 w-full bg-bg2 flex flex-col items-center bg-cover bg-right md:bg-fixed"
          id="Roadmap"
 
        >
          <Fade>
            <div className="flex flex-col mb-7">
              <h3 className="text-center text-5xl md:text-7xl   w-fit p-1 font-extrabold  text-white   ">
                Roadmap
              </h3>
              <div className="w-1/2 h-3 bg-blue-700 animate-pulse"></div>
            </div>
          </Fade>

          <div className="flex flex-col md:flex-row justify-center w-full md:items-start items-start gap-5 md:gap-6  ">
            {roadmap.map((item, index) => (
              <Fade key={index}>
                <div className="  group py-3 px-5 md:pb-12 w-full  md:h-80  flex flex-col items-center justify-center md:justify-start bg-opacity-60">
                  <h3 className=" z-10   text-xl  font-extrabold my-3 text-center  w-fit text-blue-700">
                    {item.title}
                  </h3>
                

                  <div className=" text-sm  text-white z-10">
                    {item.desc.map((item, index) => (
                      <div
                        className="my-1 flex items-center justify-center text-center gap-1"
                        key={index}
                      >
                        <span className=" w-[95%]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </section> */}
        <section
          className="bg-black bg-opacity-40  flex flex-col justify-center items-center w-full"
          id="Partners"
        >
          <Fade>
            <div className="flex flex-col mb-7 border-t-2 border-b-2 border-solid border-white">
              <h3 className="text-center text-3xl md:text-5xl   w-fit p-1 font-extrabold  text-white   ">
                Our Partners
              </h3>
            </div>
          </Fade>
          <div className="flex flex-col  justify-center items-center w-full  py-5 grayscale">
            <div className=" w-2/3 md:w-1/4   block border border-solid border-white p-2">
              <ExportedImage src={p1} alt="" layout="responsive" className="" />
            </div>
            <div className=" w-2/3 md:w-1/4   block border border-solid border-white p-2">
              <ExportedImage src={p3} alt="" layout="responsive" className="" />
            </div>
            <div className=" w-2/3 md:w-1/4   block border border-solid border-white p-2">
              <ExportedImage src={p4} alt="" layout="responsive" className="" />
            </div>
            <div className=" w-2/3 md:w-1/4   block border border-solid border-white p-2">
              <ExportedImage src={p5} alt="" layout="responsive" className="" />
            </div>
            {/* <div className=" w-2/3 md:w-1/4   block">
            <ExportedImage src={p6} alt="" layout="responsive" className="" />
          </div> */}
            <div className=" w-2/3 md:w-1/4   block border border-solid border-white p-2">
              <ExportedImage src={p7} alt="" layout="responsive" className="" />
            </div>
            {/* <div className=" w-2/3 md:w-1/4   block">
            <ExportedImage src={p8} alt="" layout="responsive" className="" />
          </div> */}
            <div className=" w-2/3 md:w-1/4   block border border-solid border-white p-2">
              <ExportedImage
                src={p10}
                alt=""
                layout="responsive"
                className=""
              />
            </div>
          </div>
        </section>
        <section
          className="md:min-h-[calc(100vh-64px)] flex flex-col justify-center  pt-16 items-center p-6 md:p-12 md:py-40 w-full bg-[#020873] bg-opacity-5"
          id="Socials"
          // style={{ backgroundImage: "url('images/background2.gif')" }}
        >
          <Fade>
            <div className="flex flex-col mb-7 border-t-2 border-b-2 border-solid border-white">
              <h3 className="text-center text-3xl md:text-5xl   w-fit p-1 font-extrabold  text-white   ">
                Join Us
              </h3>
            </div>
          </Fade>
          <div className="flex w-full flex-col items-center md:px-12 justify-center relative  md:gap-10">
            <Zoom>
              {/* <div className="w-full md:w-1/3 ">
                <ExportedImage
                  src={bg2}
                  alt="illustration"
                  layout="responsive"
                  className=""
                />
              </div> */}
              <h4 className=" md:text-lg text-center    text-xs font-semibold text-white md:w-1/2">
                <br />
                Vanta Guard - Where privacy meets security, and innovation knows
                no bounds.
                <br />
                <br />
                Join us in this extraordinary expedition into the heart of the
                digital unknown, where $VANTA is your trusted companion,
                guardian, and passport to a redefined crypto adventure.
              </h4>
              <div className="w-full md:w-1/2  md:block z-20 drop-shadow-2xl">
                <ExportedImage
                  src={logo}
                  alt="illustration"
                  layout="responsive"
                  className=" "
                />
              </div>
            </Zoom>

            <Zoom>
              <div className="flex flex-col items-center  py-3 w-full  transition-all duration-500  md:hover:border-none">
                <div className="flex  md:flex-row  items-center justify-center w-full  gap-2 md:mb-0 md:my-0 md:mt-6">
                  <button
                    onClick={() => (window.location.href = "https://t.me")}
                    className="flex items-center justify-between  skew-x-[-20deg]  gap-3  font-extrabold text-xl  hover:scale-105 transition-all  text-white p-2 md:p-5 px-5  w-fit   border-2 border-solid border-white"
                  >
                    <TbBrandTelegram size={60} />
                  </button>

                  <button
                    onClick={() =>
                      (window.location.href = "https://twitter.com")
                    }
                    className="flex items-center justify-between skew-x-[-20deg] gap-3  font-extrabold text-xl  hover:scale-105 transition-all  text-white p-2 md:p-5 px-5 w-fit  border-2 border-solid border-white "
                  >
                    <TbBrandTwitter size={60} />
                  </button>
                </div>
              </div>
            </Zoom>
          </div>
        </section>
        <div className="w-full  md:block ">
          <ExportedImage
            src={banner}
            alt="illustration"
            layout="responsive"
            className=" "
          />
        </div>
        <section className=" text-sm bg-bg2 text-center p-1 text-white">
          Copyright © {new Date().getFullYear()} Vanta Guard. All Rights
          Reserved.
        </section>
      </Layout>
    </div>
  );
};

export default Home;
