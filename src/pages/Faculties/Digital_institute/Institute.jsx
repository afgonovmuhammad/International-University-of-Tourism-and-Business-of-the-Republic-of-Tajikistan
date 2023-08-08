import React from 'react'

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { useTranslation } from 'react-i18next'

import './Institute.css'

import image_Icon from '../img/image_Icon.png'
import Quotations1 from '../img/Quotations1.png'
import Quotations2 from '../img/Quotations2.png'
import Quotations3 from '../img/Quotations3.png'
import Quotations4 from '../img/Quotations4.png'

import img1 from '../../Main/img/img1_main3.png'
import img2 from '../../Main/img/img2_main3.png'
import img3 from '../../Main/img/img3_main3.png'

import Arrow3 from '../../Main/img/Arrow3.png'
import { Link } from 'react-router-dom';

const Institute = () => {
    const { t } = useTranslation()
    return (
        <div>
            <div className="main-1">
                <div className="contenet w-[80%] py-[80px] m-auto">
                    <h1 className='text-[44px] pb-[20px] font-[500]'>{t("text49")}</h1>
                    <div className="main-1A flex justify-between">
                        <div className="left w-[65%]">
                            <h4 className='text-[20px] py-[15px] font-[300]'>{t("text50")}</h4>
                            <h4 className='text-[20px] font-[300]'>{t("text50A")}</h4>

                            <div className='left2A text-center flex justify-between px-[20px]'>
                                <div className='pt-[30px]'>
                                    <h1 className='text-[42px] font-[500] text-[#003197]'>+6</h1>
                                    <h3 className='text-[18px] text-[#a59da5]'>{t("text52")}</h3>
                                </div>
                                <div className=' pt-[30px]'>
                                    <h1 className='text-[42px] font-[500] text-[#003197]'>+7</h1>
                                    <h3 className=' text-center text-[18px] text-[#a59da5]'>{t("text52A")}</h3>
                                </div>
                                <div className='pt-[30px]'>
                                    <h1 className='text-[42px] font-[500] text-[#003197]'>+1000</h1>
                                    <h3 className=' text-[18px] text-[#a59da5]'>{t("text52B")}</h3>
                                </div>
                                <div className='pt-[30px]'>
                                    <h1 className='text-[42px] font-[500] text-[#003197]'>+26</h1>
                                    <h3 className='text-[17px] text-[#9b979b]'>{t("text52C")}</h3>
                                </div>

                            </div>
                        </div>
                        <div className="right w-[27%]">
                            <div className='image_Icon flex flex-col items-center justify-center text-center'>
                                <div className=' rounded-[50%] my-[10px] flex justify-center items-center bg-[#F4F4F4] w-[250px] h-[250px]'>
                                    <img src={image_Icon} alt="" />
                                </div>
                                <h1>{t("text51")}</h1>
                                <p className='w-[65%] text-[16px] py-[7px] text-[#939191]'>{t("text51A")}</p>
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

            <div className="main-2 py-[60px]">
                <div className="contener w-[80%] m-auto">
                    <h1 className='  text-[44px] font-[500]'>{t("text53")}</h1>
                    <div className='flex justify-between border rounded-[10px] my-[50px] py-[50px] px-[40px]'>
                        <div className='w-[75%] flex justify-between'>
                            <select className='Select w-[31%]' name="" id="">
                                <option value="">{t("text53A")}</option>
                                <option value="">{t("text56")}</option>
                                <option value="">{t("text56A1")}</option>

                            </select>
                            <select className='Select w-[31%]' name="" id="">
                                <option value="">{t("text53B")}</option>
                                <option value="">2019</option>
                                <option value="">2020</option>
                                <option value="">2021</option>
                                <option value="">2022</option>
                                <option value="">2023</option>
                            </select>
                            <select className='Select w-[31%]' name="" id="">
                                <option value="">{t("text53C")}</option>
                                <option value="">Балавр</option>
                                <option value="">Спетсиалитет</option>
                                <option value="">Магистратура</option>
                                <option value="">Аспирантура</option>
                                <option value="">Доктор PHD</option>
                            </select>
                        </div>

                        <div className='text-center text-[#FFF] btnInst w-[17%]'>
                            <button className=' text-[20px]  font-[500]'>{t("text53D")}</button>
                        </div>
                    </div>

                    <div className='flex py-[50px] justify-between gap-[20px]'>
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
                                <h1 className='text-[#003197] text-[22px] py-[5px] font-[500]'>{t("text54B")}</h1>
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
                                <h1 className='text-[#003197] text-[22px] py-[5px] w-[80%]  font-[500]'>{t("text54C")}</h1>
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
                                <h1 className='text-[#003197] text-[22px] py-[5px] font-[500]'>{t("text54D")}</h1>
                                <p className='text-[#939090] opacity-[0.8] w-[95%] py-[5px]'>{t("text55")} <span className='text-[#003197] text-[17px]'>{t("text55A")}</span></p>
                                <p className='text-[#939090] opacity-[0.8] '>{t("text53A")}: <span className='text-[#003197] text-[17px]'>{t("text56")}</span></p>
                                <p className='text-[#939090] opacity-[0.8] py-[5px]'>{t("text53B")}: <span className='text-[#003197] text-[17px]'> 4 {t("text56A1")}</span></p>
                                <p className='text-[#939090] opacity-[0.8] '>{t("text53C")}: <span className='text-[#003197] text-[17px]'> {t("text57")}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-3A pt-[90px] pb-[160px]">
                <div className="contener">
                    <div className=" w-[80%] m-auto">
                        <h1 className=' pb-[50px] text-[44px] font-[500]'>{t("text58")}</h1>
                        <div>
                            <div className='grid grid-cols-3 gap-[30px]'>
                                <div className=' ' data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
                                    <img className='w-[100%]' src={img1} alt="" />
                                    <p className=' opacity-[0.9] py-[7px] text-[#A9A9A9]'>14.04.2023</p>
                                    <h2 className='w-[90%]'>{t("text29")}</h2>

                                    <button className='mt-[10px] opacity-[0.2] hover:opacity-[1] hover:text-[#003197] font-[500]' >
                                        <div className='flex gap-[15px]'>
                                            <h3 className='  text-[16px]'>{t("text8")}</h3>
                                            <div className='flex items-center pt-[3px]'>
                                                <img src={Arrow3} alt="" />
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className='' data-aos="fade-up"
                                    data-aos-anchor-placement="top-center" data-aos-duration="3000">
                                    <img className='w-[100%]' src={img3} alt="" />
                                    <p className=' opacity-[0.9] py-[7px] text-[#A9A9A9]'>13.04.2023</p>
                                    <h2 className='w-[90%]'>{t("text29B")}</h2>

                                    <button className='mt-[35px] opacity-[0.2] hover:opacity-[1] hover:text-[#003197] font-[500]'>
                                        <div className='flex gap-[15px]'>
                                            <h3 className=' text-[16px]'>{t("text8")}</h3>
                                            <div className='flex items-center pt-[3px]'>
                                                <img src={Arrow3} alt="" />
                                            </div>
                                        </div>
                                    </button>
                                </div>

                                <div className='' data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom" data-aos-duration="2600">
                                    <img className='w-[100%]' src={img2} alt="" />
                                    <p className='  py-[7px] text-[#A9A9A9]'>06.04.2023</p>
                                    <h2 className='w-[90%]'>{t("text29A")}</h2>

                                    <button className='mt-[10px] opacity-[0.2] hover:opacity-[1] hover:text-[#003197] font-[500]'>
                                        <div className='flex gap-[15px]'>
                                            <h3 className=' text-[16px]'>{t("text8")}</h3>
                                            <div className='flex items-center pt-[3px]'>
                                                <img src={Arrow3} alt="" />
                                            </div>
                                        </div>
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Institute