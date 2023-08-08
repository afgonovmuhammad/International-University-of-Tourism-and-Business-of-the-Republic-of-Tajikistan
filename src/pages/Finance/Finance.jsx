import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';

import './Finance.css'

import Finance_img1 from './img/Finance_img1.png'
import Finance_img2 from './img/Finance_img2.png'
import Finance_img3 from './img/Finance_img3.png'
import Finance_img4 from './img/Finance_img4.png'
import Finance_img5 from './img/Finance_img5.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Finance = () => {
    useEffect(() => {
        AOS.init();
        window.scrollTo({ top: 0, left: 0, })
    }, [])
    const { t } = useTranslation()

    return (
        <div>
            <div className="main-1">
                <div className="contener">
                    <h1 className=' bg-[#003197] text-[#FFF] py-[20px] text-center my-[2px] uppercase text-[44px] font-[500]'>{t("text54A")}</h1>

                    <div className="main-1A w-[80%] m-auto py-[80px]">
                        <h1 className='text-[42px] font-[500]'>{t("text63")}</h1>
                        <div className='grid grid-cols-2 gap-x-[48px] py-[40px]' >
                            <div className='leftt'>
                                <h1 className='text-[23px] font-[600]'>52.02.22 <span className='text-[#716e6e] font-[400]'>"{t("text54A")}"</span></h1>
                                <p className='text-[20px] pt-[10px] font-[600]'>{t("text55")}</p>
                                <p className='text-[18px] font-[300] text-[#716e6e] '>{t("text55A")}</p>

                                <p className='text-[20px] pt-[10px] font-[600]'>{t("text63A")}</p>
                                <p className='text-[18px] font-[300] text-[#716e6e] '>{t("text56")}</p>

                                <p className='text-[20px] pt-[10px] font-[600]'>{t("text53B")}</p>
                                <p className='text-[18px] font-[300] text-[#716e6e] '>4 {t("text56A")}</p>

                                <p className='text-[20px] pt-[10px] font-[600]'>{t("text53C")}</p>
                                <p className='text-[18px] font-[300] text-[#716e6e] '>{t("text57")}</p>

                                <p className='text-[20px] pt-[10px] font-[600]'>{t("text63B")}</p>
                                <p className='text-[18px] font-[300] text-[#716e6e] '>{t("text54A")}</p>
                            </div>

                            <div className="rightt w-[85%] leading-7	">
                                <h4 className='text-[20px] font-[300]'>{t("text64")}</h4>
                                <h4 className='text-[20px] py-[10px] font-[300]'>{t("text64A")}</h4>
                                <div className='text-center flex gap-[10px]  text-[#FFF] btnInst1 w-[60%]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="39" height="40" viewBox="0 0 39 40" fill="none">
                                        <path d="M38.3727 0.760111C38.2561 0.470766 38.032 0.237352 37.747 0.108425C37.462 -0.0205015 37.1381 -0.0350131 36.8426 0.067909C36.5471 0.170831 36.3029 0.383263 36.1606 0.661011C36.0184 0.938759 35.9892 1.26044 36.079 1.55913C37.9466 6.90594 34.2395 10.899 31.413 13.0377L30.2711 11.4077C29.8871 10.861 29.0287 10.4064 28.3613 10.3984L21.9523 10.4264C21.1694 10.45 20.4075 10.6838 19.747 11.1033L0.86194 24.2941C0.422672 24.602 0.123784 25.0707 0.0307184 25.5977C-0.0623476 26.1247 0.0579915 26.6669 0.365388 27.1057L8.9475 39.3372C9.59081 40.2484 10.6181 40.1382 11.5348 39.5014L30.4199 26.3086C30.9627 25.9262 31.5899 25.1011 31.811 24.4703L33.8173 18.1723C34.0385 17.5435 33.9038 16.5843 33.5198 16.0376L32.8242 15.0443C36.6197 12.1466 40.56 7.02609 38.3727 0.760111ZM29.5856 19.5C29.2377 19.7426 28.8452 19.9145 28.4305 20.0059C28.0159 20.0974 27.5873 20.1065 27.1691 20.0329C26.7509 19.9592 26.3513 19.8042 25.9933 19.5767C25.6353 19.3492 25.3258 19.0537 25.0824 18.707C24.5898 18.0054 24.3967 17.1377 24.5455 16.2945C24.6944 15.4512 25.1731 14.7013 25.8765 14.2092C26.428 13.8244 27.0863 13.6208 27.7596 13.6269C28.4329 13.633 29.0875 13.8485 29.6318 14.2433C29.085 14.5717 28.7091 14.7639 28.6387 14.794C28.3895 14.9123 28.1881 15.1115 28.0674 15.3588C27.9467 15.6062 27.9139 15.887 27.9744 16.1553C28.0349 16.4237 28.1851 16.6636 28.4004 16.8357C28.6157 17.0079 28.8833 17.1021 29.1594 17.1029C29.3323 17.1029 29.5092 17.0629 29.676 16.9848C30.0661 16.8005 30.4842 16.5823 30.9204 16.3239C31.0208 16.9248 30.9487 17.5417 30.7126 18.1036C30.4764 18.6655 30.0858 19.1495 29.5856 19.5Z" fill="white" />
                                    </svg>
                                    <button className=' text-[18px]  font-[500]'>{t("text64B")}</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-2AAA bg-[#F6F6F6] py-[45px]">
                        <div className='w-[80%] m-auto'>
                            <h1 className='text-[42px] py-[10px] font-[500]'>{t("text65")}</h1>
                            <div className='grid grid-cols-3 gap-x-[150px] py-[40px]'>
                                <div>
                                    <p className='text-[20px] font-[300]'>{t("text66A")}</p>
                                    <p className='text-[20px] font-[300] py-[7px]'>{t("text66B")}</p>
                                    <p className='text-[20px] font-[300]'>{t("text66C")}</p>
                                </div>
                                <div>
                                    <p className='text-[20px] font-[300]'>{t("text67A")}</p>
                                    <p className='text-[20px] font-[300] py-[7px]'>{t("text67B")}</p>
                                    <p className='text-[20px] font-[300]'>{t("text67C")}</p>
                                </div>
                                <div>
                                    <p className='text-[20px] font-[300]'>{t("text68A")}</p>
                                    <p className='text-[20px] font-[300] py-[7px]'>{t("text68B")}</p>
                                    <p className='text-[20px] font-[300]'>{t("text68C")}</p>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="main-3A w-[80%] m-auto py-[45px]">
                        <h1 className='text-[42px] font-[500]'>{t("text69")}</h1>
                        <p className='w-[35%] text-[18px] font-[300]'>{t("text69A")}</p>
                        <div className='grid grid-cols-5 gap-x-[48px] py-[50px]'>
                            <img src={Finance_img1} alt="" />
                            <img src={Finance_img2} alt="" />
                            <img src={Finance_img3} alt="" />
                            <img src={Finance_img4} alt="" />
                            <img src={Finance_img5} alt="" />
                        </div>
                    </div>

                    <div className="main-4A w-[80%] m-auto py-[45px]">
                        <h1 className='text-[42px] font-[500]' data-aos="fade-up"
                            data-aos-duration="3000">{t("text5")}</h1>
                        <div className='grid grid-cols-2 gap-x-[48px] py-[40px]'>
                            <div className='faculty' data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="2500">
                                <h1 className='text-[23px] font-[500]'>{t("text55")} <span className='text-[#716e6e] font-[400]'>{t("text70")}</span></h1>
                                <div className='flex flex-col pt-[30px] gap-y-[13px]'>
                                    <div className='flex gap-[10px]'>
                                        <LocalPhoneOutlinedIcon sx={{ color: "#003197", fontSize: "25px" }} />
                                        <p>(+992 37) 234-88-02(124)</p>
                                    </div>
                                    <div className='flex gap-[10px]'>
                                        <LocalPrintshopOutlinedIcon sx={{ color: "#003197", fontSize: "25px" }} />
                                        <p>(+992 37) 234-88-02(124)</p>
                                    </div>
                                    <div className='flex gap-[10px]'>
                                        <EmailOutlinedIcon sx={{ color: "#003197", fontSize: "25px" }} />
                                        <p>dsx_ips@mail.ru</p>
                                    </div>
                                    <div className='flex gap-[10px]'>
                                        <AddLocationOutlinedIcon sx={{ color: "#003197", fontSize: "25px" }} />
                                        <p>{t("text71")}31</p>
                                    </div>
                                </div>

                            </div>
                            <div className="department" data-aos="fade-up"
                                data-aos-duration="3000">
                                <h1 className='text-[23px] font-[500]'>{t("text63B")} <span className='text-[#716e6e] font-[400]'>{t("text54A")}</span></h1>
                                <div className='flex flex-col pt-[30px] gap-y-[13px]'>
                                    <div className='flex gap-[10px]'>
                                        <LocalPhoneOutlinedIcon sx={{ color: "#003197", fontSize: "25px" }} />
                                        <p>(+992 37) 234-88-02(124)</p>
                                    </div>
                                    <div className='flex gap-[10px]'>
                                        <LocalPrintshopOutlinedIcon sx={{ color: "#003197", fontSize: "25px" }} />
                                        <p>(+992 37) 234-88-02(124)</p>
                                    </div>
                                    <div className='flex gap-[10px]'>
                                        <EmailOutlinedIcon sx={{ color: "#003197", fontSize: "25px" }} />
                                        <p>dsx_ips@mail.ru</p>
                                    </div>
                                    <div className='flex gap-[10px]'>
                                        <AddLocationOutlinedIcon sx={{ color: "#003197", fontSize: "25px" }} />
                                        <p>{t("text71")}35</p>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Finance