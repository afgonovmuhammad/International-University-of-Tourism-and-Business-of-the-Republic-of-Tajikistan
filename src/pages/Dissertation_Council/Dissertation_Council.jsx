import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

import './Dissertation_Council.css'

const Dissertation_Council = () => {
  const { t } = useTranslation()
  const { pathname } = useLocation()

  const act = {

    "color": "#062872",
    "font-weight": "500",
    "border-radius": "15px",
    "background-color": "#FFF",
    "padding": "5px 10px"
  }

  return (
    <div>
      <div className="main-1">
        <div className="contener">
          <div className="navbar2 bg-[#003197] my-[2px] py-[20px]">
            <h1 className='H1  text-[#FFF] w-[50%] m-auto py-[15px] text-center my-[2px] uppercase '>{t("text4")}</h1>
            <div className="navbar-2A w-[80%] m-auto">
              <ul className='flex justify-around pt-[30px] pb-[10px] text-[#FFF] text-[28px]'>
                {
                  pathname == "/Dissertation_Council/" || pathname == "/Dissertation_Council" ?
                    <li className='LI' style={act}>
                      <Link to="/Dissertation_Council/" >
                        {t("text48D")}
                      </Link>
                    </li> : <li className='LI'>
                      <Link to="/Dissertation_Council/" >
                        {t("text48D")}
                      </Link>
                    </li>
                }
               
                <li className='LII'></li>
                {
                  pathname == "/Dissertation_Council/Certificate_of_quotations" || pathname == "/Dissertation_Council/Certificate_of_quotations" ?
                    <li className='LI' style={act}>
                      <Link to="Certificate_of_quotations" >
                        {t("text72")}
                      </Link>
                    </li> : <li className='LI'>
                      <Link to="Certificate_of_quotations" >
                        {t("text72")}
                      </Link>
                    </li>
                }

                <li className='LII'></li>
                {
                  pathname == "/Dissertation_Council/LayoutDiss" || pathname == "/Dissertation_Council/LayoutDiss" ?
                    <li className='LI' style={act}>
                      <Link to="LayoutDiss" >
                        {t("text72")}
                      </Link>
                    </li> : <li className='LI'>
                      <Link to="LayoutDiss" >
                        {t("text72")}
                      </Link>
                    </li>
                }

                <li className='LII'></li>
                {
                  pathname == "/Dissertation_Council/Announcements" || pathname == "/Dissertation_Council/Announcements" ?
                    <li className='LI' style={act}>
                      <Link to="Announcements" >
                        {t("text72B")}
                      </Link>
                    </li> : <li className='LI'>
                      <Link to="Announcements" >
                        {t("text72B")}
                      </Link>
                    </li>
                }
               
              </ul>
            </div>
          </div>
          <Outlet />

        </div>
      </div>
    </div>
  )
}

export default Dissertation_Council