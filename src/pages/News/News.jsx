import React from 'react'
import { useTranslation } from 'react-i18next'

import img1 from '../Main/img/img1_main3.png'
import img2 from '../Main/img/img2_main3.png'
import img3 from '../Main/img/img3_main3.png'
import img4 from '../Main/img/img4_main3.png'
import Arrow3 from '../Main/img/Arrow3.png'


const News = () => {
    const { t } = useTranslation()

    return (
        <div>
            <div className="main-1">
                <div className="contener ">
                    <h1 className=' bg-[#003197] text-[#FFF] py-[20px] text-center my-[2px] uppercase text-[44px] font-[500]'>{t("text12")}</h1>

                    <div className=" main-1AT w-[80%] py-[60px] m-auto  ">
                        <div className='grid grid-cols-3  gap-[20px] py-[25px]'>
                            <div className=''>
                                <div className='overflow-hidden rounded-[5px] '>
                                    <img className=' w-[100%] transition duration-300 ease-in-out hover:scale-105' src={img1} alt="" />

                                </div>
                                <p className=' opacity-[0.9] py-[7px] text-[#A9A9A9]'>14.04.2023</p>
                                <h2 className='w-[90%]'>{t("text29")}</h2>

                                <button className='mt-[10px]'>
                                    <div className='flex gap-[15px]'>
                                        <h3 className=' opacity-[0.2] text-[16px]'>{t("text8")}</h3>
                                        <div className='flex items-center pt-[3px]'>
                                            <img src={Arrow3} alt="" />
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className=''>
                                <div className='overflow-hidden rounded-[5px] '>
                                    <img className=' w-[100%] transition duration-300 ease-in-out hover:scale-105' src={img3} alt="" />
                                </div>
                                <p className=' opacity-[0.9] py-[7px] text-[#A9A9A9]'>13.04.2023</p>
                                <h2 className='w-[90%]'>{t("text29B")}</h2>

                                <button className='mt-[35px]'>
                                    <div className='flex gap-[15px]'>
                                        <h3 className=' opacity-[0.2] text-[16px]'>{t("text8")}</h3>
                                        <div className='flex items-center pt-[3px]'>
                                            <img src={Arrow3} alt="" />
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className=' '>
                                <div className='overflow-hidden rounded-[5px] '>
                                    <img className=' w-[100%] transition duration-300 ease-in-out hover:scale-105' src={img4} alt="" />
                                </div>
                                <p className=' py-[7px] text-[#A9A9A9]'>06.04.2023</p>
                                <h2 className='w-[90%]'>{t("text29C")}</h2>


                                <button className=' mt-[50px]'>
                                    <div className='flex  gap-[15px]'>
                                        <h3 className=' opacity-[0.2] text-[16px]'>{t("text8")}</h3>
                                        <div className='flex items-center pt-[3px]'>
                                            <img src={Arrow3} alt="" />
                                        </div>
                                    </div>
                                </button>


                            </div>
                        </div>
                        <div className='grid grid-cols-3  gap-[20px] py-[35px]'>
                            <div className=' '>
                                <div className='overflow-hidden rounded-[5px] '>
                                    <img className=' w-[100%] transition duration-300 ease-in-out hover:scale-105' src={img2} alt="" />
                                </div>
                                <p className='  py-[7px] text-[#A9A9A9]'>06.04.2023</p>
                                <h2 className='w-[90%]'>{t("text29A")}</h2>

                                <button className='mt-[5%]'>
                                    <div className='flex gap-[15px]'>
                                        <h3 className=' opacity-[0.2] text-[16px]'>{t("text8")}</h3>
                                        <div className='flex items-center pt-[3px]'>
                                            <img src={Arrow3} alt="" />
                                        </div>
                                    </div>
                                </button>
                            </div>

                            <div className=''>
                                <div className='overflow-hidden rounded-[5px] '>
                                    <img className=' w-[100%] transition duration-300 ease-in-out hover:scale-105' src={img1} alt="" />

                                </div>
                                <p className=' opacity-[0.9] py-[7px] text-[#A9A9A9]'>14.04.2023</p>
                                <h2 className='w-[90%]'>{t("text29")}</h2>

                                <button className='mt-[10px]'>
                                    <div className='flex gap-[15px]'>
                                        <h3 className=' opacity-[0.2] text-[16px]'>{t("text8")}</h3>
                                        <div className='flex items-center pt-[3px]'>
                                            <img src={Arrow3} alt="" />
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className=''>
                                <div className='overflow-hidden rounded-[5px] '>
                                    <img className=' w-[100%] transition duration-300 ease-in-out hover:scale-105' src={img3} alt="" />
                                </div>
                                <p className=' opacity-[0.9] py-[7px] text-[#A9A9A9]'>13.04.2023</p>
                                <h2 className='w-[90%]'>{t("text29B")}</h2>

                                <button className='mt-[35px]'>
                                    <div className='flex gap-[15px]'>
                                        <h3 className=' opacity-[0.2] text-[16px]'>{t("text8")}</h3>
                                        <div className='flex items-center pt-[3px]'>
                                            <img src={Arrow3} alt="" />
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className='grid grid-cols-3  gap-[20px] py-[25px]'>
                            <div className=''>
                                <div className='overflow-hidden rounded-[5px] '>
                                    <img className=' w-[100%] transition duration-300 ease-in-out hover:scale-105' src={img1} alt="" />

                                </div>
                                <p className=' opacity-[0.9] py-[7px] text-[#A9A9A9]'>14.04.2023</p>
                                <h2 className='w-[90%]'>{t("text29")}</h2>

                                <button className='mt-[10px]'>
                                    <div className='flex gap-[15px]'>
                                        <h3 className=' opacity-[0.2] text-[16px]'>{t("text8")}</h3>
                                        <div className='flex items-center pt-[3px]'>
                                            <img src={Arrow3} alt="" />
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className=''>
                                <div className='overflow-hidden rounded-[5px] '>
                                    <img className=' w-[100%] transition duration-300 ease-in-out hover:scale-105' src={img3} alt="" />
                                </div>
                                <p className=' opacity-[0.9] py-[7px] text-[#A9A9A9]'>13.04.2023</p>
                                <h2 className='w-[90%]'>{t("text29B")}</h2>

                                <button className='mt-[35px]'>
                                    <div className='flex gap-[15px]'>
                                        <h3 className=' opacity-[0.2] text-[16px]'>{t("text8")}</h3>
                                        <div className='flex items-center pt-[3px]'>
                                            <img src={Arrow3} alt="" />
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className=' '>
                                <div className='overflow-hidden rounded-[5px] '>
                                    <img className=' w-[100%] transition duration-300 ease-in-out hover:scale-105' src={img4} alt="" />
                                </div>
                                <p className=' py-[7px] text-[#A9A9A9]'>06.04.2023</p>
                                <h2 className='w-[90%]'>{t("text29C")}</h2>


                                <button className=' mt-[50px]'>
                                    <div className='flex  gap-[15px]'>
                                        <h3 className=' opacity-[0.2] text-[16px]'>{t("text8")}</h3>
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
    )
}

export default News