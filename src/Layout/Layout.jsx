import React, { useEffect } from 'react'
import { Viewer, Worker } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import '../App.css'
import './Layout.css'

import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';

import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

import { useTranslation } from 'react-i18next'
import { useState } from 'react'

import imgNavbar from './img/imgNavbar.png'

import AOS from 'aos';
import 'aos/dist/aos.css';



const Layout = () => {
    // const defaultLayoutPluginInstance = defaultLayoutPlugin();

    useEffect(() => {
        AOS.init();
    }, [])

    const { pathname } = useLocation()


    const [lng, setLng] = useState("tj")
    const { t, i18n } = useTranslation()
    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    }

    const handleChange = (e) => {
        changeLanguage(e)
        setLng(e)
    }

    const langu = localStorage.getItem("i18nextLng");


    return (
        <div className=''>
            <div className=' contener dark:text-[#ffff] mx-auto'>
                <div className=' text-[#fff] font-[400] text-[14px]'>
                    <div className="navbar     ">
                        <div className='bg-[#003197]'>
                           
                           
                            <div className="topNavbar w-[80%] mx-auto  py-[20px] px-[10px] flex justify-between">
                                <div className='leftNavbar-1 flex gap-x-[25px]'>

                                    <NavLink to="/Dissertation_Council"
                                        className={({ isActive }) => {
                                            return (
                                                'text-[#062872] hover:text-[#062872] hover:bg-[#f0f0f1] rounded-[16px]' + (
                                                    !isActive ? ' text-[#FFF] ' : ' rounded-[15px]  text-[#062872] bg-[#FFF]  font-[600]'
                                                )
                                            );
                                        }}
                                    >
                                        <h1 className=' uppercase Cont_LI ' data-aos="fade-down"
                                            data-aos-easing="linear"
                                            data-aos-duration="1500">
                                            {t("text4")}
                                        </h1>
                                    </NavLink>
                                    {/* <Link target="_blank" to={"../pages/Pdf/Pdf.jsx"}>cvjnb</Link>  */}
                                    <div className='Border'></div>
                                    <NavLink to='/Contact'
                                        className={({ isActive }) => {
                                            return (
                                                ' text-[#062872] hover:text-[#062872] hover:bg-[#f1f0f0] rounded-[16px]' + (
                                                    !isActive ? ' text-[#eceaea] ' : ' rounded-[15px]  text-[#062872] bg-[#FFF]  font-[600]'
                                                )
                                            );
                                        }}
                                    ><h1 className='Cont_LI uppercase' data-aos="fade-up"
                                        data-aos-duration="2000">{t("text5")}</h1></NavLink>

                                </div>
                                <div className='rightNavbar-1 flex gap-[30px] '>
                                    <div className='focus-in-expand flex gap-[10px]  pt-[7px] '>
                                        <LocalPhoneRoundedIcon />
                                        <p>(+992 37) 234-88-02(124)</p>
                                    </div>
                                    <div className='Border'></div>
                                    <div className=' flex gap-[10px]'>
                                        <button className='btnTrans bounce-top px-[7px]' style={{ color: langu == "tj" ? "white" : "#d4d6da" }} onClick={() => handleChange("tj")}>{t("text1")}</button>
                                        <button className='btnTrans shake-horizontal px-[7px]' style={{ color: langu == "ru" ? "white" : "#d4d6da" }} onClick={() => handleChange("ru")}  >{t("text2")}</button>
                                        <button className='btnTrans bounce-top px-[7px]' style={{ color: langu == "en" ? "white" : "#d4d6da" }} onClick={() => handleChange("en")}  >{t("text3")}</button>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className="bottomNavbar py-[15px] w-[82%] mx-auto ">
                            <div className="leftNavbar-2 w-[100%] flex justify-between">
                                <div className='w-[25%]'>
                                    <Link to={"/"}>
                                        <div className='flex '>
                                            <div className=' w-[70%]'>
                                                <img className='' src={imgNavbar} alt="" />
                                            </div>
                                            <h1 className='tracking-in-expand-fwd-bottom  flex items-center font-[600] text-[14.5px] text-[#251a88]'>{t("text6")}</h1>
                                        </div>
                                    </Link>
                                </div>

                                <div className='w-[75%] flex items-center justify-end'>
                                    <ul className='w-[100%] text-[#251a88] text-[15px]  font-[400] flex justify-evenly gap-[10px]' data-aos="fade-right" data-aos-duration="2300">

                                        <li className='nav_li  '>
                                            <NavLink to="/"
                                                className={({ isActive }) => {
                                                    return (
                                                        'text-[#000] ' + (
                                                            !isActive ? ' text-[#000] ' : ' text-[#326ab8] font-[700]'
                                                        )
                                                    );
                                                }}
                                            >
                                                {t("MAIN")}
                                            </NavLink>
                                        </li>

                                        <li className='nav_li '>
                                            <NavLink to="/Strucrure"
                                                className={({ isActive }) => {
                                                    return (
                                                        'text-[#000] ' + (
                                                            !isActive ? ' text-[#000] ' : ' text-[#326ab8] font-[700]'
                                                        )
                                                    );
                                                }}
                                            >
                                                {t("STRUCTURE")}
                                            </NavLink>
                                        </li>

                                        <li className='nav_li  '>
                                            <NavLink to="/Training"
                                                className={({ isActive }) => {
                                                    return (
                                                        'text-[#000]' + (
                                                            !isActive ? ' text-[#000] ' : ' text-[#326ab8] font-[700]'
                                                        )
                                                    );
                                                }}
                                            >
                                                {t("TRAINING")}
                                            </NavLink>
                                        </li>

                                        <li className='nav_li '
                                        >
                                            <NavLink to="/ForeicnRelations"
                                                className={({ isActive }) => {
                                                    return (
                                                        'text-[#000]' + (
                                                            !isActive ? ' text-[#000] ' : ' text-[#326ab8] font-[700]'
                                                        )
                                                    );
                                                }}
                                            >
                                                {t("FOREIGN")}
                                            </NavLink>
                                        </li>
                                        <div class="dropdown nav_li">
                                            <p class="dropbtn">
                                                {
                                                    pathname == "/Layout_Depar_of_info" ?
                                                        <li className=' NAVV '>
                                                            <NavLink to=""
                                                                className={({ isActive }) => {
                                                                    return (
                                                                        'text-[#000]' + (
                                                                            !isActive ? 'text-[#000] ' : ' text-[#326ab8] font-[700]   '
                                                                        )
                                                                    );
                                                                }}
                                                            >
                                                                {t("FACULTIES")}
                                                            </NavLink>
                                                        </li> : <li className='  '>
                                                            <NavLink to="/Faculties"
                                                                className={({ isActive }) => {
                                                                    return (
                                                                        'text-[#000]' + (
                                                                            !isActive ? 'text-[#000] ' : ' text-[#326ab8] font-[700]   '
                                                                        )
                                                                    );
                                                                }}
                                                            >
                                                                {t("FACULTIES")}
                                                            </NavLink>
                                                        </li>
                                                }
                                            </p>
                                            <div class="dropdown-content py-[10px]">

                                                <NavLink to="/Faculties"
                                                    className={({ isActive }) => {
                                                        return (
                                                            'text-[#000] ' + (
                                                                !isActive ? 'text-[#000] font-[500]' : ' text-[#ffffff]  font-[800]  rounded-[10px] underline '
                                                            )
                                                        );
                                                    }}
                                                >
                                                    {t("text30")}
                                                </NavLink>

                                                <a href="#">  {t("text30B")}</a>
                                                <a href="#">  {t("text30C")}</a>
                                                <a href="#">  {t("text30D")}</a>
                                                <a href="#">  {t("text30E")}</a>
                                            </div>
                                        </div>
                                        {/* {
                                            pathname == "/Layout_Depar_of_info" ?
                                                <li className='nav_li NAVV '>
                                                    <NavLink to="/Faculties"
                                                        className={({ isActive }) => {
                                                            return (
                                                                'text-[#000]' + (
                                                                    !isActive ? 'text-[#000] ' : ' text-[#326ab8] font-[700]   '
                                                                )
                                                            );
                                                        }}
                                                    >
                                                        {t("FACULTIES")}
                                                    </NavLink>
                                                </li> : <li className='nav_li  '>
                                                    <NavLink to="/Faculties"
                                                        className={({ isActive }) => {
                                                            return (
                                                                'text-[#000]' + (
                                                                    !isActive ? 'text-[#000] ' : ' text-[#326ab8] font-[700]   '
                                                                )
                                                            );
                                                        }}
                                                    >
                                                        {t("FACULTIES")}
                                                    </NavLink>
                                                </li>
                                        } */}
                                        {/* <li className='nav_li  '>
                                            <NavLink to="/Faculties"
                                                className={({ isActive }) => {
                                                    return (
                                                        'text-[#000]' + (
                                                            !isActive ? 'text-[#000] ' : ' text-[#326ab8] font-[700]   '
                                                        )
                                                    );
                                                }}
                                            >
                                                {t("FACULTIES")}
                                            </NavLink>
                                        </li> */}

                                        <li className='nav_li '>
                                            <NavLink to="/Science"
                                                className={({ isActive }) => {
                                                    return (
                                                        'text-[#000]' + (
                                                            !isActive ? ' text-[#000] ' : ' text-[#326ab8] font-[700]'
                                                        )
                                                    );
                                                }}
                                            >
                                                {t("SCIENCE")}
                                            </NavLink>
                                        </li>

                                        <li className='nav_li '>
                                            <NavLink to="/Educationns"
                                                className={({ isActive }) => {
                                                    return (
                                                        'text-[#000]' + (
                                                            !isActive ? ' text-[#000] ' : ' text-[#326ab8] font-[700]'
                                                        )
                                                    );
                                                }}
                                            >
                                                {t("EDUCATION")}
                                            </NavLink>
                                        </li>

                                        <li className='nav_li '>
                                            <NavLink to="/Request"
                                                className={({ isActive }) => {
                                                    return (
                                                        'text-[#000]' + (
                                                            !isActive ? ' text-[#000] ' : ' text-[#326ab8] font-[700]'
                                                        )
                                                    );
                                                }}
                                            >
                                                {t("REQUEST")}
                                            </NavLink>
                                        </li>
                                    </ul>

                                </div>


                            </div>
                            {/* <div className="rightNavbar-2">
                            </div> */}

                        </div>

                    </div>
                </div>
            </div>

            <Outlet />
            <div className="footer bg-[#003197] pt-[30px] pb-[10px] ">
                <div className="contener w-[80%] m-auto text-[#fff]">
                    <div className='footerOne flex justify-between'>
                        <ul className='flex flex-col gap-y-[15px]'>
                            <h1 className='h1_footer'>{t("EDUCATION")}</h1>
                            <li className='w-[62%]'>{t("texFooter3")}</li>
                            <li className='w-[65%]'>{t("texFooter4")}</li>
                            <li className='w-[65%]'>{t("texFooter5")}</li>
                            <li className='w-[65%]'>{t("texFooter6")}</li>
                            <li className='w-[65%]'>{t("texFooter7")}</li>
                            <li className='w-[65%]'>{t("texFooter8")}</li>
                            <li className='w-[65%]'>{t("texFooter9")}</li>

                        </ul>
                        <ul className='flex flex-col pb-[50px] gap-y-[15px]'>
                            <h1 className='h1_footer'>{t("FACULTIES")}</h1>


                            <li className='w-[50%]'>
                                <Link to="/Faculties">{t("texFooter10")}</Link>
                            </li>

                            <li className='w-[52%]'>{t("texFooter11")}</li>
                            <li className='w-[52%]'>{t("texFooter12")}</li>
                            <li className='w-[52%]'>{t("texFooter13")}</li>
                            <li className='w-[50%]'>{t("texFooter14")}</li>
                        </ul>

                        <ul className=' flex flex-col gap-y-[25px]'>
                            <h1 className='h1_footer3'>{t("text5")}</h1>

                            <li className='flex gap-x-[10px]'>
                                <LocalPhoneOutlinedIcon />
                                <p>(+992 37) 234-88-02(124)</p>
                            </li>
                            <li className=' flex gap-[10px]'>
                                <LocalPrintshopOutlinedIcon />
                                <p>(+992 37) 234-88-02(124)</p>
                            </li>
                            <li className=' flex gap-[10px]'>
                                <EmailOutlinedIcon />
                                <p>dsx_ips@mail.ru</p>
                            </li>
                            <li className=' UL-footer-3 flex pb-[30px]  gap-[10px]'>
                                <AddLocationOutlinedIcon />
                                <p>{t("texFooter1")}</p>

                            </li>

                            <div className='pb-[20px]'>
                                <h2 className='text-[22px] font-normal'>{t("texFooter2")}</h2>
                                <div className='flex gap-x-[25px] py-[10px]  '>
                                    <InstagramIcon sx={{ fontSize: "45px" }} />
                                    <YouTubeIcon sx={{ fontSize: "45px" }} />
                                    <FacebookOutlinedIcon sx={{ fontSize: "45px" }} />
                                </div>

                            </div>
                        </ul>

                    </div>

                    <div className='flex justify-between text-[#c9c7c7] font-[200] pt-[25px] pb-[15px]'>
                        <h2 className='w-[42%]'>{t("texFooter17")}</h2>
                        <h2>{t("texFooter17A")} <span className='text-[#fff]'> WebDushanbe</span> </h2>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Layout