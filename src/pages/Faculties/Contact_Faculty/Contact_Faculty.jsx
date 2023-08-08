import React from 'react'
import { useTranslation } from 'react-i18next'

import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';

const Contact_Faculty = () => {
    const { t } = useTranslation()

    return (
        <div>
            <div className="main-1 py-[90px]">
                <div className="contener w-[80%] pb-[40px] m-auto">
                <h1 className='text-[42px] pb-[20px] font-[500]'>{t("text5")}</h1>
                    <div className='flex flex-col pt-[15px] gap-y-[13px]'>
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
            </div>
        </div>
    )
}

export default Contact_Faculty