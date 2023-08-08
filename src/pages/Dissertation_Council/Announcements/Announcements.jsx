import React from 'react'
import { useTranslation } from 'react-i18next'
import Arrow3 from '../../Main/img/Arrow3.png';

import './Announcements.css'


const Announcements = () => {
    const { t } = useTranslation()

    return (
        <div>
            <div className="main-1 py-[90px]">
                <div className="contener w-[80%] m-auto">
                    <h1 className='text-[42px] pb-[20px] font-[500]'>{t("text72B")}</h1>
                    <div className='py-[20px]'>
                        <div className='grid grid-cols-3 gap-y-[40px] gap-[20px]'>
                            <div className='Announ p-[20px] border '>
                                <h2 className='w-[85%] hover:text-[#120097]'>{t("text29")}</h2>
                                <div className='flex justify-between mt-[10px]'>
                                    <div>
                                        <p className=' opacity-[0.9] py-[7px] text-[#A9A9A9]'>14.04.2023</p>
                                    </div>
                                    <button className=' opacity-[0.2] hover:opacity-[1] hover:text-[#120097]'>
                                        <div className='flex gap-[15px]'>
                                            <h3 className=' text-[16px]'>{t("text8")}</h3>
                                            <div className='flex items-center pt-[3px]'>
                                                <img src={Arrow3} alt="" />
                                            </div>
                                        </div>
                                    </button>

                                </div>

                            </div>
                            <div className='Announ p-[20px] border '>
                                <h2 className='w-[85%] hover:text-[#120097]'>{t("text29B")}</h2>
                                <div className='flex justify-between mt-[10px]'>
                                    <div>
                                        <p className=' opacity-[0.9] py-[7px] text-[#A9A9A9]'>14.04.2023</p>
                                    </div>
                                    <button className='opacity-[0.2] hover:opacity-[1] hover:text-[#120097]'>
                                        <div className='flex gap-[15px]'>
                                            <h3 className='  text-[16px]'>{t("text8")}</h3>
                                            <div className='flex items-center pt-[3px]'>
                                                <img src={Arrow3} alt="" />
                                            </div>
                                        </div>
                                    </button>

                                </div>

                            </div>
                            <div className='Announ p-[20px] border '>
                                <h2 className='w-[85%] hover:text-[#120097]'>{t("text29B")}</h2>
                                <div className='flex justify-between mt-[10px]'>
                                    <div>
                                        <p className=' opacity-[0.9] py-[7px] text-[#A9A9A9]'>14.04.2023</p>
                                    </div>
                                    <button className='opacity-[0.2] hover:opacity-[1] hover:text-[#120097]'>
                                        <div className='flex gap-[15px]'>
                                            <h3 className=' text-[16px]'>{t("text8")}</h3>
                                            <div className='flex items-center pt-[3px]'>
                                                <img src={Arrow3} alt="" />
                                            </div>
                                        </div>
                                    </button>

                                </div>

                            </div>
                            <div className='Announ p-[20px] border '>
                                <h2 className='w-[85%] hover:text-[#120097] '>{t("text29")}</h2>
                                <div className='flex justify-between mt-[10px]'>
                                    <div>
                                        <p className=' opacity-[0.9] py-[7px] text-[#A9A9A9]'>14.04.2023</p>
                                    </div>
                                    <button className='opacity-[0.2] hover:opacity-[1] hover:text-[#120097]'>
                                        <div className='flex gap-[15px]'>
                                            <h3 className=' text-[16px]'>{t("text8")}</h3>
                                            <div className='flex items-center pt-[3px]'>
                                                <img src={Arrow3} alt="" />
                                            </div>
                                        </div>
                                    </button>

                                </div>

                            </div>
                            <div className='Announ p-[20px] border '>
                                <h2 className='w-[85%] hover:text-[#120097]'>{t("text29B")}</h2>
                                <div className='flex justify-between mt-[10px]'>
                                    <div>
                                        <p className=' opacity-[0.9] py-[7px] text-[#A9A9A9]'>14.04.2023</p>
                                    </div>
                                    <button className='opacity-[0.2] hover:opacity-[1] hover:text-[#120097]'>
                                        <div className='flex gap-[15px]'>
                                            <h3 className='  text-[16px]'>{t("text8")}</h3>
                                            <div className='flex items-center pt-[3px]'>
                                                <img src={Arrow3} alt="" />
                                            </div>
                                        </div>
                                    </button>

                                </div>

                            </div>
                            <div className='Announ p-[20px] border '>
                                <h2 className='w-[85%] hover:text-[#120097]'>{t("text29")}</h2>
                                <div className='flex justify-between mt-[10px]'>
                                    <div>
                                        <p className=' opacity-[0.9] py-[7px] text-[#A9A9A9]'>14.04.2023</p>
                                    </div>
                                    <button className='opacity-[0.2] hover:opacity-[1] hover:text-[#120097]'>
                                        <div className='flex gap-[15px]'>
                                            <h3 className='  text-[16px]'>{t("text8")}</h3>
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

export default Announcements