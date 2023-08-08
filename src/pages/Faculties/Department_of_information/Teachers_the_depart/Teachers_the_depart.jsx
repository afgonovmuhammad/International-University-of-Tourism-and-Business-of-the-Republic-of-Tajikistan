import React from 'react'
import { useTranslation } from 'react-i18next'

import imag_Icon from '../../../Science/img/image_Icon1.png'
import imag_Icon2 from '../../../Science/img/image_Icon2.png'

const Teachers_the_depart = () => {
    const { t } = useTranslation()

    return (
        <div>
            <div className="main-2 py-[80px]">
                <div className="contener w-[80%]">
                    <h1 className=' pt-[40px] my-[2px]  text-[44px] font-[500]'>{t("text79A")}</h1>
                    <div className="main-1A  pt-[60px] pb-[120px] m-auto grid grid-cols-4 gap-[24px]">
                        <div className='Emplo text-center'>
                            <div className='flex justify-center py-[25px] items-center bg-[#F4F4F4]'>
                                <img src={imag_Icon} alt="" />
                            </div>
                            <h2 className='text-[17px] pt-[10px] font-[500] '>{t("text22")}</h2>
                            <p className='text-[14px] pt-[3px] pb-[25px]  text-[#939191]'>{t("text22A")}</p>
                        </div>
                        <div className='Emplo text-center'>
                            <div className='flex justify-center py-[25px] items-center bg-[#F4F4F4]'>
                                <img src={imag_Icon} alt="" />
                            </div>
                            <h2 className='text-[17px] pt-[10px] font-[500] '>{t("text22")}</h2>
                            <p className='text-[14px] pt-[3px] w-[60%] m-auto pb-[10px]  text-[#939191]'>{t("text22A")}</p>
                        </div>
                        <div className='Emplo text-center'>
                            <div className='flex justify-center py-[25px] items-center bg-[#F4F4F4]'>
                                <img src={imag_Icon2} alt="" />
                            </div>
                            <h2 className='text-[17px] pt-[10px] font-[500] '>{t("text22")}</h2>
                            <p className='text-[14px] pt-[3px] pb-[25px]  text-[#939191]'>{t("text22A")}</p>
                        </div>
                        <div className='Emplo text-center'>
                            <div className='flex justify-center py-[25px] items-center bg-[#F4F4F4]'>
                                <img src={imag_Icon} alt="" />
                            </div>
                            <h2 className='text-[17px] pt-[10px] font-[500] '>{t("text22")}</h2>
                            <p className='text-[14px] pt-[3px] w-[60%] m-auto pb-[10px]  text-[#939191]'>{t("text22A")}</p>
                        </div>
                        <div className='Emplo text-center'>
                            <div className='flex justify-center py-[25px] items-center bg-[#F4F4F4]'>
                                <img src={imag_Icon} alt="" />
                            </div>
                            <h2 className='text-[17px] pt-[10px] font-[500] '>{t("text22")}</h2>
                            <p className='text-[14px] pt-[3px] w-[60%] m-auto pb-[10px]  text-[#939191]'>{t("text22A")}</p>
                        </div>
                        <div className='Emplo text-center'>
                            <div className='flex justify-center py-[25px] items-center bg-[#F4F4F4]'>
                                <img src={imag_Icon2} alt="" />
                            </div>
                            <h2 className='text-[17px] pt-[10px] font-[500] '>{t("text22")}</h2>
                            <p className='text-[14px] pt-[3px] w-[60%] m-auto pb-[10px]  text-[#939191]'>{t("text22A")}</p>
                        </div>
                        <div className='Emplo text-center'>
                            <div className='flex justify-center py-[25px] items-center bg-[#F4F4F4]'>
                                <img src={imag_Icon} alt="" />
                            </div>
                            <h2 className='text-[17px] pt-[10px] font-[500] '>{t("text22")}</h2>
                            <p className='text-[14px] pt-[3px] w-[60%] m-auto pb-[10px]  text-[#939191]'>{t("text22A")}</p>
                        </div>
                        <div className='Emplo text-center'>
                            <div className='flex justify-center py-[25px] items-center bg-[#F4F4F4]'>
                                <img src={imag_Icon} alt="" />
                            </div>
                            <h2 className='text-[17px] pt-[10px] font-[500] '>{t("text22")}</h2>
                            <p className='text-[14px] pt-[3px] w-[60%] m-auto pb-[10px]  text-[#939191]'>{t("text22A")}</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Teachers_the_depart