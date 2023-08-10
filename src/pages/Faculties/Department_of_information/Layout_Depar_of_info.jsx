import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

import './Department_of_information.css'

const Layout_Depar_of_info = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0,  })
    }, [])
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
                        <h1 className='H1  text-[#FFF] w-[70%] m-auto py-[15px] text-center my-[2px] uppercase '>{t("text59A")}</h1>
                        <div className="navbar-2A w-[80%] m-auto">
                            <ul className='flex justify-around pt-[30px] pb-[10px] text-[#FFF] text-[28px]'>
                                {
                                    pathname == "/Layout_Depar_of_info/" || pathname == "/Layout_Depar_of_info" ?
                                        <li className='LI ' style={act}>
                                            <Link to="/Layout_Depar_of_info/" >
                                                {t("text79")}
                                            </Link>
                                        </li> : <li className='LI'>
                                            <Link to="/Layout_Depar_of_info/" >
                                                {t("text79")}
                                            </Link>
                                        </li>
                                }
                               

                                <li className='LII'></li>
                                {
                                    pathname == "/Layout_Depar_of_info/Teachers_the_depart" || pathname == "/Layout_Depar_of_info/Teachers_the_depart" ?
                                        <li className='LI ' style={act}>
                                            <Link to="Teachers_the_depart" >
                                                {t("text79A")}
                                            </Link>
                                        </li> : <li className='LI'>
                                            <Link to="Teachers_the_depart" >
                                                {t("text79A")}
                                            </Link>
                                        </li>
                                }

{/* 
                                <li className='LI'>
                                    <NavLink to="Teachers_the_depart">
                                        {t("text79A")}
                                    </NavLink>

                                </li> */}
                                <li className='LII'></li>
                                {
                                    pathname == "/Layout_Depar_of_info/Documents2" || pathname == "/Layout_Depar_of_info/Documents2" ?
                                        <li className='LI ' style={act}>
                                            <Link to="Documents2" >
                                                {t("text48D")}
                                            </Link>
                                        </li> : <li className='LI'>
                                            <Link to="Documents2" >
                                                {t("text48D")}
                                            </Link>
                                        </li>
                                }

                                <li className='LII'></li>

                                {
                                    pathname == "/Layout_Depar_of_info/Contact_Information" || pathname == "/Layout_Depar_of_info/Contact_Information" ?
                                        <li className='LI ' style={act}>
                                            <Link to="Contact_Information" >
                                                {t("text5")}
                                            </Link>
                                        </li> : <li className='LI'>
                                            <Link to="Contact_Information" >
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

export default Layout_Depar_of_info