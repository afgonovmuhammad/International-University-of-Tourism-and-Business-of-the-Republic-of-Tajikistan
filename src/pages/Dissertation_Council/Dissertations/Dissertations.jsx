import React from 'react'
import { useTranslation } from 'react-i18next'

import './Dissertations.css'
import { NavLink, Outlet } from 'react-router-dom'

const Dissertations = () => {
    const { t } = useTranslation()

    return (
        <div>
            <div className="main-1 py-[90px]">
                <div className="contener w-[80%] m-auto">
                    <h1 className='text-[42px] pb-[50px] font-[500]'>{t("text72A")}</h1>
                    <div className='Diss w-[90%] flex justify-between p-[40px] '>
                        <div className='w-[80%]'>
                            <div className='Name'>
                                <h1 className='text-[20px] font-[500]'>{t("text22")}: <span className='text-[#003197]'>{t("text75A")}</span></h1>
                            </div>
                            <div className='flex gap-[20px] Name my-[20px]'>
                                <h1 className='text-[20px] font-[500]'>{t("text76A")}: <span className='text-[#003197]'>iutet.tj</span></h1>
                                <h1 className='text-[20px] font-[500]'>{t("text76B")}: <span className='text-[#003197]'>08/07/2023 - 13:07</span></h1>
                            </div>

                            <div className='flex justify-between'>
                                <div className='Name w-[73%] '>
                                    <h1 className='text-[20px] font-[500]'>{t("text77A")}: <span className='text-[#003197]'>{t("text77B")}</span></h1>
                                </div>
                                <div className=' w-[20%]'>

                                    <NavLink to="Khudoerov_Sh_Kh"
                                        className={({ isActive }) => {
                                            return (
                                                'text-[#FFF] hover:text-[#0b0bc8] hover-[600]  font-[400] ' + (
                                                    !isActive ? ' font-[400] ' : ' text-[#FFF] font-[500]'
                                                )
                                            );
                                        }}
                                    >
                                        <button className='btnDiss w-[100%] text-center'>{t("text8")}</button>
                                    </NavLink>



                                </div>

                            </div>

                        </div>
                        <div className='zeroOne55 w-[20%] flex justify-center  '>
                            <div className=''>
                                <h1 className=' top-50% right-[20px] text-[100px] '>01</h1>
                            </div>
                        </div>

                    </div>
                    <div className='Diss my-[50px] w-[90%] flex justify-between p-[35px] '>
                        <div className='w-[80%]'>
                            <div className='Name'>
                                <h1 className='text-[20px] font-[500]'>{t("text22")}: <span className='text-[#003197]'>{t("text75B")}</span></h1>
                            </div>
                            <div className='flex gap-[20px] Name my-[20px]'>
                                <h1 className='text-[20px] font-[500]'>{t("text76A")}: <span className='text-[#003197]'>iutet.tj</span></h1>
                                <h1 className='text-[20px] font-[500]'>{t("text76B")}: <span className='text-[#003197]'>08/07/2023 - 14:20</span></h1>
                            </div>

                            <div className='flex justify-between'>
                                <div className='Name w-[73%] '>
                                    <h1 className='text-[20px] font-[500]'>{t("text77A")}: <span className='text-[#003197]'>{t("text77B")}</span></h1>
                                </div>
                                <div className=' w-[20%]'>
                                    <button className='btnDiss w-[100%] text-center'>{t("text8")}</button>
                                </div>

                            </div>

                        </div>
                        <div className='zeroOne55 w-[20%] flex justify-center  '>
                            <div className=''>
                                <h1 className=' top-50% right-[20px] text-[100px] '>02</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Dissertations