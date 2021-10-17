import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import { IconContext } from 'react-icons'

function Navbar() {
  const [sidebar, setSidebar] = useState(false)

  function showSidebar() {
    setSidebar(!sidebar)
  }

  const sidebarData = [
    {
      title: 'Home',
      path: '/',
      icon: <AiIcons.AiFillHome />,
      cName: 'nav-text',
    },
    {
      title: '게시판',
      path: '/team',
      icon: <IoIcons.IoMdPeople />,
      cName: 'nav-text',
    },
    {
      title: 'Products',
      path: '/products',
      icon: <AiIcons.AiFillMobile />,
      cName: 'nav-text',
    },
    {
      title: 'Contact',
      path: '/contact',
      icon: <AiIcons.AiFillWechat />,
      cName: 'nav-text',
    },
  ]
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {sidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
