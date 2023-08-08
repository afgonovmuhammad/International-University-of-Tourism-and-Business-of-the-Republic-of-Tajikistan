import React from 'react'
import { useTranslation } from 'react-i18next'

import Rector1 from './img/Rector1.png'
const Rector = () => {
    const { t } = useTranslation()

    return (
        <div>
            <div className="main-1">
                <div className="contener pb-[90px] ">
                    <h1 className='bg-[#003197] text-[42px] text-[#FFF] py-[20px] text-center my-[5px]'>{t("text26")}</h1>
                    <div className="main-1A py-[70px]  w-[80%] m-auto ">
                        <div className="flex">
                            <img src={Rector1} alt="" />
                            <div className='w-[50%] flex flex-col items-center justify-center'>
                                <h1 className=' text-start text-[30px] font-[600]'>{t("text16")}</h1>
                                <p className='text-star w-[60%] opacity-[0.6] text-[20px] py-[15px] font-[400]'>{t("text27")}</p>
                            </div>



                        </div>
                    </div>

                    <div className='w-[80%] m-auto'>
                        <div className='w-[95%]'>
                            <p className='opacity-[0.8] leading-7 not-italic text-[20px] pt-[15px] font-[400]'>{t("text28")}</p>
                            <p className='opacity-[0.8] leading-7 not-italic text-[20px] py-[10px] font-[400]'>{t("text28A")}</p>
                            <p className='opacity-[0.8] leading-7 not-italic text-[20px] pb-[30px] font-[400]'>{t("text28B")}</p>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Rector
