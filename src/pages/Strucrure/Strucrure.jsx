import React from 'react'
import { useTranslation } from 'react-i18next'

import './Strucrure.css'

import Rector from './img/Rector.png'
import img_icon1 from './img/img_icon1.png'
import img_icon2 from './img/img_icon2.png'
import { Link } from 'react-router-dom'

const Strucrure = () => {
  const { t, i18n } = useTranslation()
  return (
    <div>
      <div className="maim-1 ">
        <div className="contener">
          <h1 className='bg-[#003197] py-[20px] text-center my-[5px]'>{t("text14")}</h1>
          <div className="main-1A grid grid-cols-2 gap-x-[25px] gap-y-[30px] py-[90px] w-[75%] m-auto">
            <div className='Rector flex '>
              <div className="left w-[45%]">
                <Link to="/Rector"><img className='pointer-events-auto w-[100%]' src={Rector} alt="" /> </Link>
              </div>
              <div className="right w-[55%] py-[20px] pl-[30px] pr-[40px] flex flex-col ">
                <h2 className='text-[17px] text-[#003197] pt-[5px] font-[400]'>{t("text15")}</h2>
                <h2 className='text-[18px] pt-[35px] font-[500]'>{t("text16")}</h2>
                <p className='text-[14px] opacity-[0.6]'>{t("text17")}</p>

                <p className='text-[14px] pt-[45px] opacity-[0.6]'>{t("text18")}</p>
                <h2 className='text-[15px]'>{t("text19")}</h2>

                <p className='text-[14px] pt-[25px] opacity-[0.6]'>{t("text20")}</p>
                <h2 className='text-[15px]'>(+992 37) 234-88-02(124)</h2>

                <p className='text-[14px] pt-[15px] opacity-[0.6]'>{t("text21")}</p>
                <h2 className='text-[15px]'>dsx_ips@mail.ru</h2>


              </div>
            </div>
            <div className='Rector flex '>
              <div className="left bg-[#F4F4F4] flex items-center w-[45%]">
                <img className='' src={img_icon1} alt="" />
              </div>
              <div className="right w-[55%] py-[20px] pl-[30px] pr-[40px] flex flex-col ">
                <h2 className='text-[17px] text-[#003197] pt-[5px] font-[400]'>{t("text15A")}</h2>
                <h2 className='text-[18px] pt-[10px] font-[500]'>{t("text16A")}</h2>
                <p className='text-[14px] opacity-[0.6]'>{t("text17A")}</p>

                <p className='text-[14px] pt-[15px] opacity-[0.6]'>{t("text18")}</p>
                <h2 className='text-[15px]'>{t("text19")}</h2>

                <p className='text-[14px] pt-[10px] opacity-[0.6]'>{t("text20")}</p>
                <h2 className='text-[15px]'>(+992 37) 234-88-02(124)</h2>

                <p className='text-[14px] pt-[15px] opacity-[0.6]'>{t("text21")}</p>
                <h2 className='text-[15px]'>dsx_ips@mail.ru</h2>


              </div>
            </div>
            <div className='Rector flex '>
              <div className="left bg-[#F4F4F4] flex items-center w-[45%]">
                <img className='' src={img_icon1} alt="" />
              </div>
              <div className="right w-[55%] py-[20px] pl-[30px] pr-[40px] flex flex-col ">
                <h2 className='text-[17px] text-[#003197] pt-[5px] font-[400]'>{t("text15B")}</h2>
                <h2 className='text-[18px] pt-[25px] font-[500]'>{t("text16B")}</h2>
                <p className='text-[14px] opacity-[0.6]'>{t("text17B")}</p>

                <p className='text-[14px] pt-[30px] opacity-[0.6]'>{t("text18")}</p>
                <h2 className='text-[15px]'>{t("text19")}</h2>

                <p className='text-[14px] pt-[20px] opacity-[0.6]'>{t("text20")}</p>
                <h2 className='text-[15px]'>(+992 37) 234-88-02(124)</h2>

                <p className='text-[14px] pt-[15px] opacity-[0.6]'>{t("text21")}</p>
                <h2 className='text-[15px]'>dsx_ips@mail.ru</h2>


              </div>
            </div>
            <div className='Rector flex '>
              <div className="left bg-[#F4F4F4] flex items-center w-[45%]">
                <img className='' src={img_icon1} alt="" />
              </div>
              <div className="right w-[55%] py-[20px] pl-[30px] pr-[40px] flex flex-col ">
                <h2 className='text-[17px] text-[#003197] pt-[5px] font-[400]'>{t("text15C")}</h2>
                <h2 className='text-[18px] pt-[25px] font-[500]'>{t("text16C")}</h2>
                <p className='text-[14px] opacity-[0.6]'>{t("text17C")}</p>

                <p className='text-[14px] pt-[30px] opacity-[0.6]'>{t("text18")}</p>
                <h2 className='text-[15px]'>{t("text19")}</h2>

                <p className='text-[14px] pt-[20px] opacity-[0.6]'>{t("text20")}</p>
                <h2 className='text-[15px]'>(+992 37) 234-88-02(124)</h2>

                <p className='text-[14px] pt-[15px] opacity-[0.6]'>{t("text21")}</p>
                <h2 className='text-[15px]'>dsx_ips@mail.ru</h2>


              </div>
            </div>
            <div className='Rector flex '>
              <div className="left bg-[#F4F4F4] flex items-center w-[45%]">
                <img className='' src={img_icon2} alt="" />
              </div>
              <div className="right w-[55%] py-[20px] pl-[30px] pr-[40px] flex flex-col ">
                <h2 className='text-[17px] text-[#003197] pt-[5px] font-[400]'>{t("text15D")}</h2>
                <h2 className='text-[18px] pt-[25px] font-[500]'>{t("text16D")}</h2>
                <p className='text-[14px] opacity-[0.6]'>{t("text17D")}</p>

                <p className='text-[14px] pt-[30px] opacity-[0.6]'>{t("text18")}</p>
                <h2 className='text-[15px]'>{t("text19")}</h2>

                <p className='text-[14px] pt-[20px] opacity-[0.6]'>{t("text20")}</p>
                <h2 className='text-[15px]'>(+992 37) 234-88-02(124)</h2>

                <p className='text-[14px] pt-[15px] opacity-[0.6]'>{t("text21")}</p>
                <h2 className='text-[15px]'>dsx_ips@mail.ru</h2>


              </div>
            </div>
            <div className='Rector flex '>
              <div className="left bg-[#F4F4F4] flex items-center w-[45%]">
                <img className='' src={img_icon1} alt="" />
              </div>
              <div className="right w-[55%] py-[20px] pl-[30px] pr-[40px] flex flex-col ">
                <h2 className='text-[17px] text-[#003197] pt-[5px] font-[400]'>{t("text15I")}</h2>
                <h2 className='text-[18px] pt-[25px] font-[500]'>{t("text16I")}</h2>
                <p className='text-[14px] opacity-[0.6]'>{t("text17I")}</p>

                <p className='text-[14px] pt-[30px] opacity-[0.6]'>{t("text18")}</p>
                <h2 className='text-[15px]'>{t("text19")}</h2>

                <p className='text-[14px] pt-[20px] opacity-[0.6]'>{t("text20")}</p>
                <h2 className='text-[15px]'>(+992 37) 234-88-02(124)</h2>

                <p className='text-[14px] pt-[15px] opacity-[0.6]'>{t("text21")}</p>
                <h2 className='text-[15px]'>dsx_ips@mail.ru</h2>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Strucrure