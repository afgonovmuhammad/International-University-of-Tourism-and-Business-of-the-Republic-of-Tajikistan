import React from 'react'
import { useTranslation } from 'react-i18next'

import { Input } from 'antd';

import './Contact.css'

import karta from './img/karta.png'

import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';

const Contact = () => {
    const { t } = useTranslation()
    const { TextArea } = Input;
    return (
        <div>
            <div className="main-1">
                <div className="contener">
                    <h1 className='bg-[#003197] text-[42px] text-[#FFF] py-[20px] text-center my-[5px]'>{t("text5")}</h1>

                    <div className="main-1A grid grid-cols-2 gap-x-[10px] py-[60px]  w-[80%] m-auto">
                        <div className='leftCont w-[90%] flex flex-col gap-y-[25px]'>
                            <div className='flex gap-x-[15px]'>
                                <LocalPhoneOutlinedIcon sx={{ bgcolor: "#003197", color: "#FFF", padding: "10px", borderRadius: "5px", fontSize: "45px" }} />
                                <p className='flex items-center text-[27px]'>(+992 37) 234-88-02(124)</p>
                            </div>

                            <div className='flex gap-x-[15px]'>
                                <LocalPrintshopOutlinedIcon sx={{ bgcolor: "#003197", color: "#FFF", padding: "10px", borderRadius: "5px", fontSize: "45px" }} />
                                <p className='flex items-center text-[27px]'>(+992 37) 234-88-02(124)</p>
                            </div>

                            <div className='flex gap-x-[15px]'>
                                <EmailOutlinedIcon sx={{ bgcolor: "#003197", color: "#FFF", padding: "10px", borderRadius: "5px", fontSize: "45px" }} />
                                <p className='flex items-center text-[27px]'>dsx_ips@mail.ru</p>

                            </div>
                            <div className='flex gap-x-[15px]'>
                                <AddLocationOutlinedIcon sx={{ bgcolor: "#003197", color: "#FFF", padding: "10px", borderRadius: "5px", fontSize: "45px" }} />
                                <p className='flex items-center text-[27px]'>{t("texFooter1")}</p>
                            </div>
                        </div>

                        <div className="rihgtCont w-[100%]">
                            <input className='w-[100%] p-[10px] rounded-[10px]' type="text" name="" placeholder={t("text22")} />
                            <div className='flex justify-between py-[20px]'>
                                <input className='w-[49%] p-[10px] rounded-[10px]' type="text" placeholder={t("text23")} />
                                <input className='w-[49%] p-[10px] rounded-[10px]' type="email" placeholder={t("text21")} />
                            </div>

                            <TextArea
                                maxLength={100}
                                style={{
                                    height: "100px",
                                    marginBottom: 1,
                                    borderRadius: "10px",
                                    fontSize: '17px',
                                }}

                                placeholder={t("text24")}
                            />

                            <div className='flex justify-end'>
                                <button className='btn_Cont hover:bg-[#326aeb] mt-[20px] py-[10px] w-[30%]'>{t("text25")}</button>
                            </div>

                        </div>

                    </div>

                    <div className='w-[80%] pb-[80px] pt-[10px] m-auto'>
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3121.3447161375498!2d68.75373957648699!3d38.52582126854249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5d050dae16671%3A0xa1a81466c38ee67f!2z0JjQvdGB0YLQuNGC0YPRgiDQotGD0YDQuNC30LzQsCDQn9GA0LXQtNC_0YDQuNC90LjQvNCw0YLQtdC70YzRgdGC0LLQsCDQuCDQodC10YDQstC40YHQsCDQotCw0LTQttC40LrQuNGB0YLQsNC90LA!5e0!3m2!1sru!2s!4v1690226055417!5m2!1sru!2s"
                                width="100%" height="700"
                                className='border-[2px] rounded-[15px]'
                                allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact