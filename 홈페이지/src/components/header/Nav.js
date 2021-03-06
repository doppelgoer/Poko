import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { IconContext } from "react-icons";
// import { react } from '@babel/types';
import { useMediaQuery } from "react-responsive";

function Navbar() {
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });
  const [sidebar, setSidebar] = useState(false);
  // console.log(111);
  function showSidebar() {
    setSidebar(!sidebar);
  }
  // useKeyPress()
  // const test123 = useKeyPress('h');
  // function pressKeyShowSidebar(e) {
  //   console.log(666);
  //   console.log(e.keyCode);
  //   if (e.keyCode === 27) {
  //     if (!sidebar) {
  //       setSidebar(!sidebar);b
  //     }
  //   }
  // }
  const [hoverHomeTF, setHoverHomeTF] = useState(1);
  const [hoverBoardTF, setHoverBoardTF] = useState(1);
  const [hoverProductsTF, setHoverProductsTF] = useState(1);
  const [hoverContactTF, setHoverContactTF] = useState(1);
  const [navTextBack, setNavTextBack] = useState({ display: "none" });
  // const [navTextBackPart, setNavTextBackPart] = useState({ display: 'none' });
  const [navTextHomePart, setNavTextHomePart] = useState({ display: "none" });
  const [navTextProductsPart, setNavTextProductsPart] = useState({
    display: "none",
  });
  const [navTextContactPart, setNavTextContactPart] = useState({
    display: "none",
  });
  const [navTextBoardPart, setNavTextBoardPart] = useState({ display: "none" });
  // setNavTextHomePart(navTextBackStyle)
  let navTextBackStyle = {
    display: "flex",
    width: "100vw",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "40vh",
    position: "absolute",
    color: "rgb(179 174 174)",
    textShadow:
      "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa",
  };
  const sidebarData = [
    {
      title: "Home",
      path: "/",
      icon: (
        <AiIcons.AiFillHome
          color={
            hoverHomeTF === 1
              ? "white"
              : hoverHomeTF === 2
              ? "rgb(21 19 21)"
              : "rgb(21 19 21)"
          }
        />
      ),
      cName: "nav-text",
      lowerTxt: "home",
      hoverTF: hoverHomeTF,
      backTxtStyle: navTextHomePart,
    },
    // {
    //   title: 'Board',
    //   path: '/Board',
    //   icon: (
    //     <IoIcons.IoMdPeople
    //       color={
    //         hoverBoardTF === 1
    //           ? 'white'
    //           : hoverBoardTF === 2
    //           ? 'rgb(21 19 21)'
    //           : 'rgb(21 19 21)'
    //       }
    //     />
    //   ),
    //   cName: 'nav-text',
    //   lowerTxt: 'board',
    //   hoverTF: hoverBoardTF,
    //   backTxtStyle: navTextBoardPart,
    // },
    {
      title: "Products",
      path: "/products",
      icon: (
        <AiIcons.AiFillMobile
          color={
            hoverProductsTF === 1
              ? "white"
              : hoverProductsTF === 2
              ? "rgb(21 19 21)"
              : "rgb(21 19 21)"
          }
        />
      ),
      cName: "nav-text",
      lowerTxt: "products",
      hoverTF: hoverProductsTF,
      backTxtStyle: navTextProductsPart,
    },
    {
      title: "Contact",
      path: "/contact",
      icon: (
        <AiIcons.AiFillWechat
          color={
            hoverContactTF === 1
              ? "white"
              : hoverContactTF === 2
              ? "rgb(21 19 21)"
              : "rgb(21 19 21)"
          }
        />
      ),
      cName: "nav-text",
      lowerTxt: "contact",
      hoverTF: hoverContactTF,
      backTxtStyle: navTextContactPart,
    },
  ];
  function hoverFalseFun(item) {
    setNavTextBack({
      display: "flex",
      width: "100vw",
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      overflowX: "auto",
      overflowY: "auto",
    });
    // setNavTextBackPart({
    //   display: 'flex',
    //   width: '100vw',
    //   height: '100vh',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   fontSize: '40vh',
    //   position: 'absolute',
    // });
    if (item === "home") {
      setNavTextHomePart(navTextBackStyle);
      setHoverHomeTF(2);
      setHoverBoardTF(3);
      setHoverProductsTF(3);
      setHoverContactTF(3);
    } else if (item === "board") {
      setNavTextBoardPart(navTextBackStyle);
      setHoverHomeTF(3);
      setHoverBoardTF(2);
      setHoverProductsTF(3);
      setHoverContactTF(3);
    } else if (item === "products") {
      setNavTextProductsPart(navTextBackStyle);
      setHoverHomeTF(3);
      setHoverBoardTF(3);
      setHoverProductsTF(2);
      setHoverContactTF(3);
    } else if (item === "contact") {
      setNavTextContactPart(navTextBackStyle);
      setHoverHomeTF(3);
      setHoverBoardTF(3);
      setHoverProductsTF(3);
      setHoverContactTF(2);
    }
  }
  function hoverTrueFun(item) {
    setNavTextBack({ display: "none" });
    // setNavTextBackPart({ display: 'none' });
    if (item === "home") {
      setNavTextHomePart({ display: "none" });
      setHoverHomeTF(1);
      setHoverBoardTF(1);
      setHoverProductsTF(1);
      setHoverContactTF(1);
    } else if (item === "board") {
      setNavTextBoardPart({ display: "none" });
      setHoverHomeTF(1);
      setHoverBoardTF(1);
      setHoverProductsTF(1);
      setHoverContactTF(1);
    } else if (item === "products") {
      setNavTextProductsPart({ display: "none" });
      setHoverHomeTF(1);
      setHoverBoardTF(1);
      setHoverProductsTF(1);
      setHoverContactTF(1);
    } else if (item === "contact") {
      setNavTextContactPart({ display: "none" });
      setHoverHomeTF(1);
      setHoverBoardTF(1);
      setHoverProductsTF(1);
      setHoverContactTF(1);
    }
  }

  if (!isMobile) {
    return (
      <>
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="navbar">
            <Link
              to="#"
              className={!sidebar ? "menu-bars" : "menu-bars-active"}
            >
              <FaIcons.FaBars
                onClick={showSidebar}
                // onKeyPress={pressKeyShowSidebar}
              />
            </Link>
          </div>
          <div className="nav-text-back" style={navTextBack}>
            {sidebarData.map((item, index) => {
              return (
                <div
                  key={index}
                  className={
                    item.cName + "-back-" + item.lowerTxt.toLowerCase()
                  }
                  style={item.backTxtStyle}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <div className="nav-menu-close-btn" onClick={showSidebar}>
              <div className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </div>
            </div>
            <ul className="nav-menu-items">
              {sidebarData.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <li className={item.cName}>
                      <Link
                        to={item.path}
                        onClick={showSidebar}
                        onMouseOver={(e) => {
                          hoverFalseFun(item.lowerTxt);
                        }}
                        onMouseLeave={(e) => {
                          hoverTrueFun(item.lowerTxt);
                        }}
                        style={
                          item.hoverTF === 1
                            ? {
                                backgroundColor: "rgb(21 19 21)",
                                color: "#f5f5f5",
                              }
                            : item.hoverTF === 2
                            ? {
                                backgroundColor: "white",
                                color: "rgb(21 19 21)",
                              }
                            : {
                                backgroundColor: "rgb(21 19 21)",
                                color: "rgb(21 19 21)",
                              }
                        }
                      >
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                    <div style={{ height: "3em" }}></div>
                  </React.Fragment>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </>
    );
  } else {
    return (
      <>
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="navbar">
            <Link
              to="#"
              className={!sidebar ? "menu-bars" : "menu-bars-active"}
            >
              <FaIcons.FaBars
                onClick={showSidebar}
                // onKeyPress={pressKeyShowSidebar}
              />
            </Link>
          </div>
          <div className={sidebar ? "nav-menu active" : "nav-menu"}>
            <div className="nav-menu-close-btn" onClick={showSidebar}>
              <div className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </div>
              <div
                className="nav-menu-box"
                style={{
                  width: "100%",
                  height: "80%",
                }}
              >
                <ul
                  className={
                    !sidebar ? "nav-menu-items" : "nav-menu-items-active"
                  }
                >
                  {sidebarData.map((item, index) => {
                    return (
                      <React.Fragment key={index}>
                        <li className={item.cName}>
                          <Link
                            to={item.path}
                            onClick={showSidebar}
                            style={{
                              backgroundColor: "rgb(21 19 21)",
                              color: "#f5f5f5",
                            }}
                          >
                            {item.icon}
                            <span>{item.title}</span>
                          </Link>
                        </li>
                        {/* <div style={{ height: "3em" }}></div> */}
                      </React.Fragment>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </IconContext.Provider>
      </>
    );
  }
}
// function useKeyPress(targetKey) {
//   // State for keeping track of whether key is pressed
//   const [keyPressed, setKeyPressed] = useState(false);
//   // If pressed key is our target key then set to true
//   function downHandler({ key }) {
//     if (key === targetKey) {
//       setKeyPressed(true);
//     }
//   }
//   // If released key is our target key then set to false
//   const upHandler = ({ key }) => {
//     if (key === targetKey) {
//       setKeyPressed(false);
//     }
//   };
//   // Add event listeners
//   useEffect(() => {
//     window.addEventListener('keydown', downHandler);
//     window.addEventListener('keyup', upHandler);
//     // Remove event listeners on cleanup
//     return () => {
//       window.removeEventListener('keydown', downHandler);
//       window.removeEventListener('keyup', upHandler);
//     };
//   }, []); // Empty array ensures that effect is only run on mount and unmount
//   return keyPressed;
// }

export default Navbar;
