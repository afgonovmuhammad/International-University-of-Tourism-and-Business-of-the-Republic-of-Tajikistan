import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import './Faculties.css'
import { Link, Outlet, useLocation } from 'react-router-dom'

const Faculties = () => {
  const { t } = useTranslation()
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, })
  }, [])
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
            <h1 className='H1  text-[#FFF] w-[50%] m-auto py-[15px] text-center my-[2px] uppercase '>{t("texFooter10")}</h1>
            <div className="navbar-2A w-[80%] m-auto">
              <ul className='flex justify-around pt-[30px] pb-[10px] text-[#FFF] text-[28px]'>
                {
                  pathname == "/Faculties/" || pathname == "/Faculties"?
                    <li className='LI' style={act}>
                      <Link to="/Faculties/" >
                        {t("text48A")}
                      </Link>
                    </li> : <li className='LI'>
                      <Link to="/Faculties/" >
                        {t("text48A")}
                      </Link>
                    </li>
                }

                <li className='LII'></li>

                {
                  pathname == "/Faculties/Departments" ?
                    <li className='LI' style={act}>
                      <Link to="Departments" >
                        {t("text48B")}
                      </Link>
                    </li> : <li className='LI'>
                      <Link to="Departments" >
                        {t("text48B")}
                      </Link>
                    </li>
                }

                <li className='LII'></li>
                {
                  pathname == "/Faculties/Lessons_schedule" ?
                    <li className='LI' style={act}>
                      <Link to="Lessons_schedule" >
                        {t("text48C")}
                      </Link>
                    </li> : <li className='LI'>
                      <Link to="Lessons_schedule" >
                        {t("text48C")}
                      </Link>
                    </li>
                }


                <li className='LII'></li>

                {
                  pathname == "/Faculties/Exam_schedule" ?
                    <li className='LI' style={act}>
                      <Link to="Exam_schedule" >
                        {t("text48C_1")}
                      </Link>
                    </li> : <li className='LI'>
                      <Link to="Exam_schedule" >
                        {t("text48C_1")}
                      </Link>
                    </li>
                }


                <li className='LII'></li>


                {
                  pathname == "/Faculties/Documents" ?
                    <li className='LI' style={act}>
                      <Link to="Documents" >
                        {t("text48D")}
                      </Link>
                    </li> : <li className='LI'>
                      <Link to="Documents" >
                        {t("text48D")}
                      </Link>
                    </li>
                }


                <li className='LII'></li>
                {
                  pathname == "/Faculties/Contact_Faculty" ?
                    <li className='LI' style={act}>
                      <Link to="Contact_Faculty" >
                        {t("text5")}
                      </Link>
                    </li> : <li className='LI'>
                      <Link to="Contact_Faculty" >
                        {t("text5")}
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

export default Faculties