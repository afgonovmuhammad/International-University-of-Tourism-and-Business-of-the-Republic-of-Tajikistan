import React from 'react'
import { useTranslation } from 'react-i18next'

import imag_Icon from '.././img/imag_Icon2.png'
import { Link } from 'react-router-dom'

const Departments = () => {
    const { t } = useTranslation()

    return (
        <div>
            <div className="main-1 py-[70px]">
                <div className="contener w-[80%] m-auto">
                    <h1 className='text-[44px] pb-[50px] font-[500]'>{t("text48B")}</h1>
                    <div className=' grid grid-cols-2 gap-x-[20px] gap-y-[30px] '>
                        <div className=' border p-[30px]'>
                            <Link to="/Layout_Depar_of_info">
                                <h1 className='text-[24px] font-[500]'>{t("text59A")}</h1>
                                <div className='flex pt-[10px] '>
                                    <div className=' rounded-[50%] my-[10px] flex justify-center items-center bg-[#F4F4F4] w-[170px] h-[170px]'>
                                        <img className='' src={imag_Icon} alt="" />
                                    </div>
                                    <div className='flex flex-col   justify-center w-[60%] m-auto'>
                                        <h1 className='text-[20px] font-[400] text-start'>{t("text51")}</h1>
                                        <p className='w-[90%] text-[#989191]'>{t("text60")}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className=' border p-[30px]'>
                            <h1 className='text-[24px] font-[500]'>{t("text59B")}</h1>
                            <div className='flex pt-[10px] '>
                                <div className=' rounded-[50%] my-[10px] flex justify-center items-center bg-[#F4F4F4] w-[170px] h-[170px]'>
                                    <img className='' src={imag_Icon} alt="" />
                                </div>
                                <div className='flex flex-col   justify-center w-[60%] m-auto'>
                                    <h1 className='text-[20px] font-[400] text-start'>{t("text51")}</h1>
                                    <p className='w-[90%] text-[#989191]'>{t("text60")}</p>
                                </div>
                            </div>
                        </div>
                        <div className=' border p-[30px]'>
                            <h1 className='text-[24px] font-[500]'>{t("text59C")}</h1>
                            <div className='flex pt-[10px] '>
                                <div className=' rounded-[50%] my-[10px] flex justify-center items-center bg-[#F4F4F4] w-[170px] h-[170px]'>
                                    <img className='' src={imag_Icon} alt="" />
                                </div>
                                <div className='flex flex-col   justify-center w-[60%] m-auto'>
                                    <h1 className='text-[20px] font-[400] text-start'>{t("text51")}</h1>
                                    <p className='w-[90%] text-[#989191]'>{t("text60")}</p>
                                </div>
                            </div>
                        </div>
                        <div className=' border p-[30px]'>
                            <h1 className='text-[24px] font-[500]'>{t("text59D")}</h1>
                            <div className='flex pt-[10px] '>
                                <div className=' rounded-[50%] my-[10px] flex justify-center items-center bg-[#F4F4F4] w-[170px] h-[170px]'>
                                    <img className='' src={imag_Icon} alt="" />
                                </div>
                                <div className='flex flex-col   justify-center w-[60%] m-auto'>
                                    <h1 className='text-[20px] font-[400] text-start'>{t("text51")}</h1>
                                    <p className='w-[90%] text-[#989191]'>{t("text60")}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Departments