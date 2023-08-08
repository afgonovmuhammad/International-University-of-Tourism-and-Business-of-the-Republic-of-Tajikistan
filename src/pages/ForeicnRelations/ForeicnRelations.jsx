import React from 'react'

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { useTranslation } from 'react-i18next';

import './ForeicnRelations.css'

import imag_Icon from '../Science/img/image_Icon1.png'
import imag_Icon2 from '../Science/img/image_Icon2.png'


const ForeicnRelations = () => {
  const { t } = useTranslation()

  return (
    <div>
      <div className="main-1">
        <div className="contener ">
          <h1 className=' bg-[#003197] text-[#FFF] py-[20px] text-center my-[2px] uppercase text-[44px] font-[500]'>{t("text45")}</h1>

          <div className=" main-1AT w-[80%] py-[60px] m-auto flex justify-between ">
            <div className='left w-[65%]'>
              <p className='text-[18px]'>{t("text46")}</p>
              <h1>{t("text47")}</h1>
              <div className='pl-[25px]'>
                <p className='py-[10px]'>{t("text47A")}</p>
                <p className=''>{t("text47B")}</p>
                <p className='py-[10px]'>{t("text47C")}</p>
                <p className=''>{t("text47D")}</p>
                <p className='py-[10px]'>{t("text47E")}</p>
                <p className=''>{t("text47G")}</p>
                <p className='py-[10px]'>{t("text47H")}</p>
                <p className=''>{t("text47J")}</p>
                <p className='py-[10px]'>{t("text47K")}</p>
                <p className=''>{t("text47L")}</p>
                <p className=''>{t("text47M")}</p>
              </div>
            </div>

            <div className=' w-[28%]'>
              <div className='Babaev1 flex flex-col items-center justify-center text-center'>
                <div className=' rounded-[50%] my-[10px] flex justify-center items-center bg-[#F4F4F4] w-[250px] h-[250px]'>
                  <img src={imag_Icon} alt="" />
                </div>
                <h1>{t("text40")}</h1>
                <p className='w-[70%] text-[16px] py-[7px] text-[#939191]'>{t("text40A")}</p>

                <div className='flex pt-[10px] gap-[10px]'>
                  < LocalPhoneOutlinedIcon sx={{ color: "rgba(0, 49, 151, 0.8)" }} />
                  <p>(+992) 999 99 99 99, 118 88 88 88</p>
                </div>
                <div className='py-[7px] flex gap-[10px]'>
                  < EmailOutlinedIcon sx={{ color: "rgba(0, 49, 151, 0.8)" }} />
                  <p>robbaynalmilali@mail.ru</p>
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

export default ForeicnRelations