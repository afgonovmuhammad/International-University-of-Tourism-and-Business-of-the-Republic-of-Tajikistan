import React from 'react'
import { useTranslation } from 'react-i18next'

const Certificate_of_quotations = () => {
    const { t } = useTranslation()

    return (
        <div>
            <div className="main-1 py-[90px]">
                <div className="contener w-[80%] m-auto">
                    <h1 className='text-[42px] pb-[20px] font-[500]'>{t("text72")}</h1>
                    <div className='py-[20px]'>
                        <h1 className='text-[22px] text-[#003197] py-[8px]'>6D050702 – <span className='text-[#000]'>{t("text74A")}</span></h1>
                        <h1 className='text-[22px] text-[#003197] py-[8px]'>6D051101 – <span className='text-[#000]'>{t("text74B")}</span></h1>
                        <h1 className='text-[22px] text-[#003197] py-[8px]'>6D052002 – <span className='text-[#000]'>{t("text74C")}</span></h1>
                        <h1 className='text-[22px] text-[#003197] py-[8px]'>08.00.04.06 – <span className='text-[#000]'>{t("text74D")}</span></h1>
                        <h1 className='text-[22px] text-[#003197] py-[8px]'>08.00.06.06  – <span className='text-[#000]'>{t("text74E")}</span></h1>
                        <h1 className='text-[22px] text-[#003197] py-[8px]'>08.00.10 – <span className='text-[#000]'>{t("text74F")}</span></h1>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certificate_of_quotations