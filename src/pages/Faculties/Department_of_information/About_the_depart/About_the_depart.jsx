import React from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { useTranslation } from 'react-i18next';

import './About_the_depart.css'

import image_Icon from '../../img/imag_Icon2.png'
import Quotations1 from '../../img/Quotations1.png'
import Quotations2 from '../../img/Quotations2.png'
import Quotations3 from '../../img/Quotations3.png'
import Quotations4 from '../../img/Quotations4.png'
import { Link } from 'react-router-dom';


const About_the_depart = () => {
    const { t } = useTranslation()

    return (
        <div>
            <div className="main-1 py-[80px]">
                <div className="contener w-[80%] m-auto">
                    <h1 className='text-[44px] pb-[20px] font-[500]'>{t("text79")}</h1>
                    <div className="main-1A flex justify-between">
                        <div className="left w-[65%]">
                            <h4 className='text-[20px] py-[15px] font-[300]'>{t("text80A")}</h4>
                            <h4 className='text-[20px] font-[300]'>{t("text80A")}</h4>

                        </div>
                        <div className="right w-[27%]">
                            <div className='image_Icon flex flex-col items-center justify-center text-center'>
                                <div className=' rounded-[50%] my-[10px] flex justify-center items-center bg-[#F4F4F4] w-[250px] h-[250px]'>
                                    <img src={image_Icon} alt="" />
                                </div>
                                <h1>{t("text51")}</h1>
                                <p className='w-[75%] text-[16px] py-[7px] text-[#939191]'>{t("text60")}</p>
                                <div className='flex pt-[10px] gap-[10px]'>
                                    < LocalPhoneOutlinedIcon sx={{ color: "rgba(0, 49, 151, 0.8)" }} />
                                    <p>(+992) 999 99 99 99, 118 88 88 88</p>
                                </div>
                                <div className='py-[7px] flex gap-[10px]'>
                                    < EmailOutlinedIcon sx={{ color: "rgba(0, 49, 151, 0.8)" }} />
                                    <p>robbaynalmilali@mail.ru</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-2 py-[80px]">
                <div className="contener w-[80%] pb-[150px] m-auto">
                    <h1 className='text-[44px] pb-[20px] font-[500]'>{t("text81")}</h1>
                    <div className='flex pt-[30px] justify-between gap-[20px]'>
                        <div className='Quotations'>
                            <Link to="/Finance">
                                <img className='w-[100%]' src={Quotations1} alt="" />
                                <div className='p-[20px]'>
                                    <p className='text-[#939090] py-[5px]'>52.02.22</p>
                                    <h1 className='text-[#003197] text-[22px] py-[5px] font-[500]'>{t("text54A")}</h1>
                                    <p className='text-[#939090] opacity-[0.8] w-[95%] py-[5px]'>{t("text55")} <span className='text-[#003197]  text-[17px]'>{t("text55A")}</span></p>
                                    <p className='text-[#939090] opacity-[0.8] '>{t("text53A")}: <span className='text-[#003197] text-[17px]'>{t("text56")}</span></p>
                                    <p className='text-[#939090] opacity-[0.8] py-[5px]'>{t("text53B")}: <span className='text-[#003197] text-[17px]'> 4 {t("text56A")}</span></p>
                                    <p className='text-[#939090] opacity-[0.8] '>{t("text53C")}: <span className='text-[#003197] text-[17px]'> {t("text57")}</span></p>
                                </div>
                            </Link>
                        </div>
                        <div className='Quotations'>
                            <img className='w-[100%]' src={Quotations2} alt="" />
                            <div className='p-[20px]'>
                                <p className='text-[#939090] py-[5px]'>52.02.22</p>
                                <h1 className='text-[#000] text-[22px] py-[5px] font-[500]'>{t("text54B")}</h1>
                                <p className='text-[#939090] opacity-[0.8] w-[95%] py-[5px]'>{t("text55")} <span className='text-[#003197] text-[17px]'>{t("text55A")}</span></p>
                                <p className='text-[#939090] opacity-[0.8] '>{t("text53A")}: <span className='text-[#003197] text-[17px]'>{t("text56")}</span></p>
                                <p className='text-[#939090] opacity-[0.8] py-[5px]'>{t("text53B")}: <span className='text-[#003197] text-[17px]'> 4 {t("text56A1")}</span></p>
                                <p className='text-[#939090] opacity-[0.8]  '>{t("text53C")}: <span className='text-[#003197] text-[17px]'> {t("text57")}</span></p>
                            </div>
                        </div>
                        <div className='Quotations'>
                            <img className='w-[100%]' src={Quotations3} alt="" />
                            <div className=' p-[20px]'>
                                <p className='text-[#939090] py-[5px]'>52.02.22</p>
                                <h1 className='text-[#000] text-[22px] py-[5px] w-[80%]  font-[500]'>{t("text54C")}</h1>
                                <p className='text-[#939090] opacity-[0.8] w-[95%] py-[5px]'>{t("text55")} <span className='text-[#003197] text-[17px]'>{t("text55A")}</span></p>
                                <p className='text-[#939090] opacity-[0.8] '>{t("text53A")}: <span className='text-[#003197] text-[17px]'>{t("text56")}</span></p>
                                <p className='text-[#939090] opacity-[0.8] py-[5px]'>{t("text53B")}: <span className='text-[#003197] text-[17px]'> 4 {t("text56A")}</span></p>
                                <p className='text-[#939090] opacity-[0.8] '>{t("text53C")}: <span className='text-[#003197] text-[17px]'> {t("text57")}</span></p>
                            </div>
                        </div>
                        <div className='Quotations'>
                            <img className='w-[100%]' src={Quotations4} alt="" />
                            <div className='p-[20px]'>
                                <p className='text-[#939090] py-[5px]'>52.02.22</p>
                                <h1 className='text-[#000] text-[22px] py-[5px] font-[500]'>{t("text54D")}</h1>
                                <p className='text-[#939090] opacity-[0.8] w-[95%] py-[5px]'>{t("text55")} <span className='text-[#003197] text-[17px]'>{t("text55A")}</span></p>
                                <p className='text-[#939090] opacity-[0.8] '>{t("text53A")}: <span className='text-[#003197] text-[17px]'>{t("text56")}</span></p>
                                <p className='text-[#939090] opacity-[0.8] py-[5px]'>{t("text53B")}: <span className='text-[#003197] text-[17px]'> 4 {t("text56A1")}</span></p>
                                <p className='text-[#939090] opacity-[0.8] '>{t("text53C")}: <span className='text-[#003197] text-[17px]'> {t("text57")}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About_the_depart