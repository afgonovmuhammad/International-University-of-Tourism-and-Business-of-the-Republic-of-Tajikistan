import React from 'react'
import { useTranslation } from 'react-i18next'

import './Science.css'

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

import Babaev from './img/Babaev.png'
import imag_Icon from './img/image_Icon1.png'
import imag_Icon2 from './img/image_Icon2.png'


const Science = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div className="main-1">
        <div className="contener ">
          <h1 className=' bg-[#003197] text-[#FFF] py-[20px] text-center my-[2px] uppercase text-[44px] font-[500]'>{t("text35")}</h1>

          <div className=" main-1AT w-[80%] py-[60px] m-auto flex justify-between ">
            <div className='left w-[65%]'>
              <p className='text-[18px]'>{t("text41")}</p>
              <h1>{t("text42")}</h1>
              <p className='text-[18px] pt-[10px]'>{t("text42A")}</p>
              <h2 className=' opacity-[0.9] pt-[15px] text-[18px]'>{t("text43")}</h2>
              <div className='pl-[25px]'>
                <p className='py-[10px]'>{t("text44A")}</p>
                <p className=''>{t("text44B")}</p>
                <p className='py-[10px]'>{t("text44C")}</p>
                <p className=''>{t("text44D")}</p>
                <p className='py-[10px]'>{t("text44E")}</p>
                <p className=''>{t("text44F")}</p>
                <p className='py-[10px]'>{t("text44G")}</p>
                <p className=''>{t("text44H")}</p>
                <p className='py-[10px]'>{t("text44J")}</p>
                <p className=''>{t("text44K")}</p>
                <p className='py-[10px]'>{t("text44L")}</p>
                <p className=''>{t("text44M")}</p>
                <p className='py-[10px]'>{t("text44N")}</p>
                <p className=''>{t("text44O")}</p>
                <p className='py-[10px]'>{t("text44P")}</p>
                <p className=''>{t("text44Q")}</p>
                <p className='py-[10px]'>{t("text44S")}</p>
                <p className=''>{t("text44T")}</p>
                <p className='py-[10px]'>{t("text44U")}</p>
              </div>

            </div>

            <div className=' w-[28%]'>
              <div className='Babaev flex flex-col items-center justify-center text-center'>
                <img src={Babaev} alt="" />
                <h1>{t("text40")}</h1>
                <p className='w-[70%] text-[16px] py-[7px] text-[#939191]'>{t("text40A")}</p>

                <div className='flex pt-[10px] gap-[10px]'>
                  < LocalPhoneOutlinedIcon sx={{ color: "rgba(0, 49, 151, 0.8)" }} />
                  <p>(+992) 900 02 72 18, 118 83 57 57</p>
                </div>
                <div className='py-[7px] flex gap-[10px]'>
                  < EmailOutlinedIcon sx={{ color: "rgba(0, 49, 151, 0.8)" }} />
                  <p>alimurodboboev@yandex.ru</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <div className="main-2">
        <div className="contener">
          <h1 className=' pt-[40px] text-center my-[2px] uppercase text-[44px] font-[500]'>{t("text38")}</h1>
          <div className="main-1A w-[80%] pt-[60px] pb-[120px] m-auto grid grid-cols-4 gap-[24px]">
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

export default Science