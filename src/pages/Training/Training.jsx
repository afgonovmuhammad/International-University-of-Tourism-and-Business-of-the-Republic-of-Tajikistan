import React from 'react'
import { useTranslation } from 'react-i18next'

import './Training.css';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';


import Kadyrov from './img/Kadyrov.png'

import imag_Icon from './img/image_Icon.png'

const Training = () => {
  const { t } = useTranslation()

  return (
    <div>
      <div className="main-1">
        <div className="contener ">
          <h1 className='Training-h1 bg-[#003197] py-[20px] text-center my-[2px] uppercase text-[44px] font-[500]'>{t("text35")}</h1>

          <div className=" main-1AT w-[80%] py-[60px] m-auto flex justify-between ">
            <div className='left w-[68%]'>
              <p>{t("text36A")}</p>
              <h1>{t("text36B")}</h1>
              <div className='pl-[25px]'>
                <p className='py-[10px]'>{t("text36C1")}</p>
                <p className=''>{t("text36C2")}</p>
                <p className='py-[10px]'>{t("text36C3")}</p>
                <p className=''>{t("text36C4")}</p>
              </div>
              <h1 className='pt-[15px]'>{t("text36D")}</h1>
              <div className='pl-[25px]'>
                <p className='py-[10px]'>{t("text36D1")}</p>
                <p className=''>{t("text36D2")}</p>
                <p className='py-[10px]'>{t("text36D3")}</p>
                <p className=''>{t("text36D4")}</p>
              </div>

            </div>

            <div className=' w-[28%]'>
              <div className='right3A flex flex-col items-center justify-center text-center'>
              <img src={Kadyrov} alt="" />
                <h1>{t("text37")}</h1>
                <p className='w-[80%] py-[7px] text-[#939191]'>{t("text37A")}</p>

                <div className='flex pt-[15px] gap-[10px]'>
                  < LocalPhoneOutlinedIcon sx={{ color: "rgba(0, 49, 151, 0.8)" }} />
                  <p>(+992) 934 11 96 42, 888 33 77 72</p>
                </div>
                <div className='py-[10px] flex gap-[10px]'>
                  < EmailOutlinedIcon sx={{ color: "rgba(0, 49, 151, 0.8)" }} />
                  <p>Edelviz-07@mail.ru</p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      <div className="main-2">
        <div className="contener">
        <h1 className=' pt-[40px] text-center my-[2px] uppercase text-[44px] font-[500]'>{t("text38")}</h1>
        <div className="main-1A w-[80%] pt-[60px] pb-[100px] m-auto grid grid-cols-4 gap-[24px]">
          <div className='Emplo text-center'>
            <div className='flex justify-center py-[25px] items-center bg-[#F4F4F4]'>
              <img src={imag_Icon} alt="" />
            </div>
            <h2 className='text-[17px] pt-[10px] font-[500] '>{t("text39A")}</h2>
            <p className='text-[14px] pt-[3px] pb-[25px]  text-[#939191]'>{t("text39A1")}</p>
          </div>
          <div className='Emplo text-center'>
            <div className='flex justify-center py-[25px] items-center bg-[#F4F4F4]'>
              <img src={imag_Icon} alt="" />
            </div>
            <h2 className='text-[17px] pt-[10px] font-[500] '>{t("text39B")}</h2>
            <p className='text-[14px] pt-[3px] w-[60%] m-auto pb-[10px]  text-[#939191]'>{t("text39B1")}</p>
          </div>
          <div className='Emplo text-center'>
            <div className='flex justify-center py-[25px] items-center bg-[#F4F4F4]'>
              <img src={imag_Icon} alt="" />
            </div>
            <h2 className='text-[17px] pt-[10px] font-[500] '>{t("text39C")}</h2>
            <p className='text-[14px] pt-[3px] pb-[25px]  text-[#939191]'>{t("text39C1")}</p>
          </div>
          <div className='Emplo text-center'>
            <div className='flex justify-center py-[25px] items-center bg-[#F4F4F4]'>
              <img src={imag_Icon} alt="" />
            </div>
            <h2 className='text-[17px] pt-[10px] font-[500] '>{t("text39D")}</h2>
            <p className='text-[14px] pt-[3px] w-[60%] m-auto pb-[10px]  text-[#939191]'>{t("text39D1")}</p>
          </div>
          <div className='Emplo text-center'>
            <div className='flex justify-center py-[25px] items-center bg-[#F4F4F4]'>
              <img src={imag_Icon} alt="" />
            </div>
            <h2 className='text-[17px] pt-[10px] font-[500] '>{t("text39I")}</h2>
            <p className='text-[14px] pt-[3px] w-[60%] m-auto pb-[10px]  text-[#939191]'>{t("text39I1")}</p>
          </div>
          <div className='Emplo text-center'>
            <div className='flex justify-center py-[25px] items-center bg-[#F4F4F4]'>
              <img src={imag_Icon} alt="" />
            </div>
            <h2 className='text-[17px] pt-[10px] font-[500] '>{t("text39F")}</h2>
            <p className='text-[14px] pt-[3px] w-[60%] m-auto pb-[10px]  text-[#939191]'>{t("text39F1")}</p>
          </div>
          <div className='Emplo text-center'>
            <div className='flex justify-center py-[25px] items-center bg-[#F4F4F4]'>
              <img src={imag_Icon} alt="" />
            </div>
            <h2 className='text-[17px] pt-[10px] font-[500] '>{t("text39J")}</h2>
            <p className='text-[14px] pt-[3px] w-[60%] m-auto pb-[10px]  text-[#939191]'>{t("text39J1")}</p>
          </div>
        </div>


        </div>
      </div>
    </div>
  )
}

export default Training