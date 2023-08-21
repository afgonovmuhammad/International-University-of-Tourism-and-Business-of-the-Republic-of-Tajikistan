import React, { useEffect, useState } from 'react'

import './Main.css'

import Arrow1 from './img/Arrow1.png'
import Arrow2 from './img/Arrow2.png'
import Arrow3 from './img/Arrow3.png'
import bookCet from './img/bookCet.png'
import hour from './img/hour.png'

import img1 from './img/img1_main3.png'
import img2 from './img/img2_main3.png'
import img3 from './img/img3_main3.png'
import img4 from './img/img4_main3.png'

import fact1A from './img/fact1A.png'
import fact1 from './img/fact1.png'
import fact2 from './img/fact2.png'
import fact3A from './img/fact3A.jpg'
import fact4 from './img/fact4.png'
import fact5 from './img/fact5.png'

//Main-5
import FOR_STUDENTS1 from './img/FOR_STUDENTS1.png'
import FOR_STUDENTS2 from './img/FOR_STUDENTS2.png'
import FOR_STUDENTS3 from './img/FOR_STUDENTS3.png'
import FOR_STUDENTSA from './img/FOR_STUDENTSA.png'

//Main-6
import Main6 from './img/Main6.png'

// Main-7
import im_main1 from './img/im_main1.png'
import im_main2 from './img/im_main2.png'
import im_main3 from './img/im_main3.png'
import im_main4 from './img/im_main4.png'
import im_main5 from './img/im_main5.png'
import im_main6 from './img/im_main6.png'
import Poly from './img/Poly.png'


import photo from './img/photo_one.png'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Carousel } from 'antd';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


const Main = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const { t } = useTranslation()

  return (
    <div>
      <div className="main-1 relative  ">
        <div className="contener">
          <div className=' '>
            <img className='w-[100%]' src={photo} alt="" />
            <div className=' absolute top-0'>
              <svg xmlns="http://www.w3.org/2000/svg" width="1210" height="834" viewBox="0 0 1210 834" fill="none">
                <g filter="url(#filter0_b_4_41)">
                  <path d="M0 0H913.65L1210 827H0V0Z" fill="black" fill-opacity="0.7" />
                </g>
              </svg>
              <div className=' absolute top-0'>
                <div className='w-[68%] m-auto py-[50px]'>
                  <div className='flex gap-[50px]'>
                    <img src={Arrow1} alt="" />
                    <img src={Arrow2} alt="" />
                  </div>
                  <div className='flex items-center pt-[220px]' >
                    <h1 className='w-[70%] text-[36px] font-[600] leading-[50px] text-[#fff]' data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="3000">{t("text7")}</h1>
                  </div>
                  <div className='swirl-in-fwd py-[60px]' >
                    <button className='bntMain-1  bg-[#11156c] rounded-[10px] text-[20px] text-[#fff] py-[10px] px-[50px]'>{t("text8")}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="main-1 relative">
        <div className="contener">
          <div className=''>
            <div className=' absolute '>
              <img src={photo} alt="" />
            </div>
            
            <div className='TOP w-1/2  pb-[163px]'>
              <div className='w-[68%] m-auto py-[50px]'>
                <div className='flex gap-[50px]'>
                  <img src={Arrow1} alt="" />
                  <img src={Arrow2} alt="" />
                </div>
                <div className='flex items-center pt-[220px]' >
                  <h1 className='w-[70%] text-[36px] font-[600] leading-[50px] text-[#fff]'>{t("text7")}</h1>
                </div>
                <div className='py-[60px]'>
                  <button className='bg-[#11156c] rounded-[10px] text-[20px] text-[#fff] py-[10px] px-[50px]'>{t("text8")}</button>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div> */}

      <div className="main-2 py-[50px]">
        <div className="contener">
          <div className='w-[80%] m-auto flex justify-between'>


            <div className=' main-2A  w-[22%] flex flex-col gap-y-[10px] px-[30px] py-[25px]' data-aos="fade-up"
              data-aos-duration="3000">
              <h1 className=''>{t("text9")}</h1>
              <div className='pt-[10px] flex gap-[10px]'>
                <img src={bookCet} alt="" />
                <p>77 {t("text10")}</p>
              </div>
              <div className=' flex gap-[10px]'>
                <img src={hour} alt="" />
                <p>4-5 {t("text11")}</p>
              </div>

              <button className='btnM2 opacity-[0.2]'>
                <Link className='flex gap-[15px]' to="Bachelor">
                  <h3 className='  text-[14px]'>{t("text8")}</h3>
                  <div className='flex items-center pt-[3px]'>
                    <img src={Arrow3} alt="" />
                  </div>
                </Link>
              </button>

            </div>
            <div className=' main-2A w-[22%] flex flex-col gap-y-[10px] px-[30px] py-[25px]' data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500">
              <h1 className=''>{t("text9A")}</h1>
              <div className='pt-[10px] flex gap-[10px]'>
                <img src={bookCet} alt="" />
                <p>40 {t("text10")}</p>
              </div>
              <div className='flex gap-[10px]'>
                <img src={hour} alt="" />
                <p>2-2.5 {t("text11")}</p>
              </div>
              <button className='btnM2 opacity-[0.2]'>
                <Link className='flex gap-[15px]' to="/Masters_Degree">
                  <h3 className=' text-[14px]'>{t("text8")}</h3>
                  <div className='flex items-center pt-[3px]'>
                    <img src={Arrow3} alt="" />
                  </div>
                </Link>
              </button>

            </div>
            <div className='w-[22%] main-2A flex flex-col gap-y-[10px] px-[30px] py-[25px]' data-aos="fade-up"
              data-aos-duration="2800">

              <h1 className=''>{t("text9B")}</h1>
              <div className='pt-[10px] flex gap-[10px]'>
                <img src={bookCet} alt="" />
                <p>3 {t("text10")}</p>
              </div>
              <div className='flex gap-[10px]'>
                <img src={hour} alt="" />
                <p>3-4 {t("text11")}</p>
              </div>
              <button className='btnM2 opacity-[0.2]'>
                <Link className='flex gap-[15px]' to="/Postgraduate_studies">
                  <h3 className='  text-[14px]'>{t("text8")}</h3>
                  <div className='flex items-center pt-[3px]'>
                    <img src={Arrow3} alt="" />
                  </div>
                </Link>
              </button>

            </div>
            <div className='w-[22%] main-2A flex flex-col gap-y-[10px] px-[30px] py-[25px]' data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="23 00">
              <h1 className=''>{t("text9C")}</h1>
              <div className='pt-[10px] flex gap-[10px]'>
                <img src={bookCet} alt="" />
                <p>5 {t("text10")}</p>
              </div>
              <div className='flex gap-[10px]'>
                <img src={hour} alt="" />
                <p>4-5 {t("text11")}</p>
              </div>
              <button className='btnM2 opacity-[0.2]'>
                <div className='flex gap-[15px]'>
                  <h3 className=' text-[14px]'>{t("text8")}</h3>
                  <div className='flex items-center pt-[3px]'>
                    <img src={Arrow3} alt="" />
                  </div>
                </div>
              </button>

            </div>
          </div>
        </div>
      </div>

      <div className="main-3 py-[80px]">
        <div className="contener flex justify-between w-[80%] m-auto">
          <div className="left-3 w-[70%]">

            <h1 className='w-[21%]  pointer-events-auto'>
              <Link to="/News">
                {t("text12")}
              </Link>
            </h1>
            <div>
              <div className='grid grid-cols-2  gap-[20px] py-[25px]' data-aos="fade-up"
                data-aos-duration="3000">
                <div className='' >
                  <div className='overflow-hidden rounded-[5px] '>
                    <img className=' w-[100%] transition duration-300 ease-in-out hover:scale-105' src={img1} alt="" />

                  </div>
                  <p className=' opacity-[0.9] py-[7px] text-[#A9A9A9]'>14.04.2023</p>
                  <h2 className='w-[90%]'>{t("text29")}</h2>

                  <button className='mt-[10px] opacity-[0.2] hover:opacity-[1] hover:text-[#003197] hover:font-[500]' >
                    <div className='flex gap-[15px]'>
                      <h3 className='  text-[16px]'>{t("text8")}</h3>
                      <div className='flex items-center pt-[3px]'>
                        <img src={Arrow3} alt="" />
                      </div>
                    </div>
                  </button>
                </div>
                <div className=''>
                  <div className='overflow-hidden rounded-[5px] '>
                    <img className=' w-[100%] transition duration-300 ease-in-out hover:scale-110' src={img3} alt="" />
                  </div>
                  <p className=' opacity-[0.9] py-[7px] text-[#A9A9A9]'>13.04.2023</p>
                  <h2 className='w-[90%]'>{t("text29B")}</h2>

                  <button className='mt-[35px] opacity-[0.2] hover:opacity-[1] hover:text-[#003197] hover:font-[500]'>
                    <div className='flex gap-[15px]'>
                      <h3 className=' text-[16px]'>{t("text8")}</h3>
                      <div className='flex items-center pt-[3px]'>
                        <img src={Arrow3} alt="" />
                      </div>
                    </div>
                  </button>

                </div>
                <div className='py-[25px] '>
                  <div className='overflow-hidden rounded-[5px] '>
                    <img className=' w-[100%] transition duration-300 ease-in-out hover:scale-110' src={img4} alt="" />
                  </div>
                  <p className=' py-[7px] text-[#A9A9A9]'>06.04.2023</p>
                  <h2 className='w-[90%]'>{t("text29C")}</h2>

                  <button className=' mt-[50px] opacity-[0.2] hover:opacity-[1] hover:text-[#003197] hover:font-[500]'>
                    <div className='flex  gap-[15px]'>
                      <h3 className='  text-[16px]'>{t("text8")}</h3>
                      <div className='flex items-center pt-[3px]'>
                        <img src={Arrow3} alt="" />
                      </div>
                    </div>
                  </button>

                </div>
                <div className='py-[25px] '>
                  <div className='overflow-hidden rounded-[5px] '>
                    <img className=' w-[100%] transition duration-300 ease-in-out hover:scale-110' src={img2} alt="" />
                  </div>
                  <p className='  py-[7px] text-[#A9A9A9]'>08.04.2023</p>
                  <h2 className='w-[90%]'>{t("text29A")}</h2>

                  <button className='mt-[5%]  opacity-[0.2] hover:opacity-[1] hover:text-[#003197] hover:font-[500]'>
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
          <div className="right w-[29%]  ">
            <h1 className='focus-in-expand-fwd w-[60%] uppercase'>{t("text13")}</h1>

            <div className="right-A p-[30px] mt-[25px] " data-aos="flip-right" data-aos-duration="3000">
              <div className='Letter '>
                <p className='py-[7px] text-[#A9A9A9]'>14.04.2023</p>
                <h2 className='w-[90%] pb-[5px]'>{t("text29")}</h2>
              </div>
              <div className='Letter pt-[15px]'>
                <p className='py-[7px] text-[#A9A9A9]'>13.04.2023</p>
                <h2 className='w-[90%] pb-[5px]'>{t("text29A")}</h2>
              </div>
              <div className='Letter pt-[15px]'>
                <p className='py-[7px] text-[#A9A9A9]'>06.04.2023</p>
                <h2 className='w-[90%] pb-[5px]'>{t("text29B")}</h2>
              </div>
              <div className='Letter pt-[15px]'>
                <p className='py-[7px] text-[#A9A9A9]'>06.04.2023</p>
                <h2 className='w-[90%] pb-[5px]'>{t("text29C")}</h2>
              </div>
              <div className='Letter pt-[15px]'>
                <p className='py-[7px] text-[#A9A9A9]'>05.04.2023</p>
                <h2 className='w-[90%] pb-[5px]'>{t("text29B")}</h2>
              </div>

              <div className='Letter pt-[15px]'>
                <p className='py-[7px] text-[#A9A9A9]'>02.04.2023</p>
                <h2 className='w-[90%] pb-[5px]'>{t("text29")}</h2>
              </div>

              <div className='Letter pt-[15px]'>
                <p className='py-[7px] text-[#A9A9A9]'>04.04.2023</p>
                <h2 className='w-[90%] pb-[5px]'>{t("text29C")}</h2>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="main-4 bg-[#F9F9F9] py-[70px]">
        <div className="contener w-[80%] m-auto">
          <h1 className='w-[20%] pointer-events-auto ml-[10px] uppercase text-[44px] font-[500]'>
            {t("FACULTIES")}
          </h1>

          <div className="main-4A py-[40px]">
            <div className=' grid grid-cols-3 gap-[20px] '>
              <div className="facultet relative " data-aos="flip-left" data-aos-duration="2000">
                <Link to={"/Faculties"}>
                  <img className='z-[0] ml-[-10px] w-[100%]' src={fact1} alt="" />
                  <div className=' w-[96%] absolute top-3 ' >
                    <div className='absolute bottom-4'>
                      <h2 className='h2-fact z-10  flex items-center justify-center max-w-[70%] m-auto '>{t("text30")}</h2>
                    </div>
                    <img className=' w-[100%]' src={fact1A} alt="" />
                  </div>
                </Link>
              </div>

              <div className="facultet relative " data-aos="flip-down" data-aos-duration="3000">
                <img className='z-[0] ml-[-10px] w-[100%]' src={fact2} alt="" />
                <div className=' w-[96%] absolute top-3 ' >
                  <div className='absolute bottom-4'>
                    <h2 className='h2-fact z-10  flex items-center justify-center max-w-[80%] m-auto '>{t("text30B")}</h2>
                  </div>
                  <img className=' w-[100%]' src={fact1A} alt="" />
                </div>
              </div>

              <div className="facultet relative " data-aos="flip-right" data-aos-duration="2500">
                {/* <img className=' ml-[0px] rounded-[5px] mt-[13px] w-[100%] m-auto' src={fact3} alt="" /> */}
                <img className=' ml-[0px] rounded-[5px] mt-[13px] w-[475px] h-[360px]  m-auto' src={fact3A} alt="" />
                <div className=' w-[96%] absolute top-3 ' >
                  <div className='absolute bottom-4'>
                    <h2 className='h2-fact flex items-center justify-center max-w-[70%] m-auto '>{t("text30C")}</h2>
                  </div>
                  <img className=' w-[100%]' src={fact1A} alt="" />
                </div>
              </div>

              <div className="facultet relative " data-aos="flip-right" data-aos-duration="2500">
                <img className='z-[0] ] w-[475px] mt-[13px] h-[360px] ml-[0px]' src={fact4} alt="" />
                <div className=' w-[96%] absolute top-3 ' >
                  <div className='absolute bottom-4'>
                    <h2 className='h2-fact z-10  flex items-center justify-center max-w-[70%] m-auto '>{t("text30D")}</h2>
                  </div>
                  <img className=' w-[100%]' src={fact1A} alt="" />
                </div>
              </div>

              <div className="facultet relative " data-aos="flip-up" data-aos-duration="3000">
                <img className='z-[0] ml-[0px] mt-[13px] w-[475px] h-[360px]' src={fact5} alt="" />
                <div className=' w-[96%] absolute top-3 ' >
                  <div className='absolute bottom-4'>
                    <h2 className='h2-fact z-10  flex items-center justify-center max-w-[70%] m-auto '>{t("text30E")}</h2>
                  </div>
                  <img className=' w-[100%]' src={fact1A} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-5 py-[80px]">
        <div className="contener w-[80%] m-auto">
          <h1 className='w-[33.8%] uppercase text-[44px] font-[500]'>{t("text31")}</h1>
          <div className="main-5A pt-[50px] grid grid-cols-4 gap-[20px]">
            <div className="forStun relative  ">
              <img className='z-[0]  w-[100%]' src={FOR_STUDENTS1} alt="" />
              <div className=' w-[100%] absolute top-0 ' >
                <div className='forStun-h1'>
                  <h2 className=''>{t("text32A")}</h2>
                </div>
                <img className=' w-[100%]' src={FOR_STUDENTSA} alt="" />
              </div>
            </div>
            <div className="forStun relative  ">
              <img className='z-[0]  w-[100%]' src={FOR_STUDENTS2} alt="" />
              <div className=' w-[100%] absolute top-0 ' >
                <div className='forStun-h1'>
                  <h2 className=''>{t("text32B")}</h2>
                </div>
                <img className=' w-[100%]' src={FOR_STUDENTSA} alt="" />
              </div>
            </div>
            <div className="forStun relative  ">
              <img className='z-[0]  w-[100%]' src={FOR_STUDENTS2} alt="" />
              <div className=' w-[100%] absolute top-0 ' >
                <div className='forStun-h1'>
                  <h2 className=''>{t("text32C")}</h2>
                </div>

                <img className=' w-[100%]' src={FOR_STUDENTSA} alt="" />
              </div>
            </div>
            <div className="forStun relative  ">
              <img className='z-[0]  w-[100%]' src={FOR_STUDENTS3} alt="" />
              <div className=' w-[100%] absolute top-0 ' >

                <div className='forStun-h1A'>
                  <h2 className=''>{t("text32D")}</h2>
                </div>
                <img className=' w-[100%]' src={FOR_STUDENTSA} alt="" />
              </div>
            </div>

          </div>


        </div>
      </div>

      <div className="main-6 relative ">
        <div className="contener">
          <div className=' '>
            <img className='w-[100%]' src={Main6} alt="" />
            <div className=' flex'>
              <div>
                <div className='w-[62%] absolute top-0'>
                  <svg className='' xmlns="http://www.w3.org/2000/svg" width="1210" height="633" viewBox="0 0 1210 633" >
                    <g >
                      <path d="M0 0H913.65L1210 628H0V0Z " fill="black" fill-opacity="0.6" />
                    </g>
                  </svg>
                  <div className=' absolute top-0'>
                    <h1 className=''>{t("text33")}</h1>
                  </div>
                </div>
              </div>
              <div className=''>
                <img className=' absolute top-[35%] right-[17%]' src={Poly} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-7 py-[100px]">
        <div className="contener w-[80%] m-auto">
          <h1 className='w-[19%] uppercase text-[44px] font-[500]'>{t("text34")}</h1>
          {/* <div>
            <marquee direction="left" onmouseover="this.stop()" onmouseout="this.start()">
              <div className="main-5A pt-[50px] grid grid-cols-6 gap-[20px]" >
                <img className='w-[100%]' src={im_main1} alt="" />
                <img className='w-[100%]' src={im_main2} alt="" />
                <img className='w-[100%]' src={im_main3} alt="" />
                <img className='w-[100%]' src={im_main4} alt="" />
                <img className='w-[100%]' src={im_main5} alt="" />
                <img className='w-[100%]' src={im_main6} alt="" />
              </div>
            </marquee>
          </div> */}
          <div>
            <Carousel autoplay >
              <div>
                <div className="main-5A pt-[50px] grid grid-cols-6 gap-[20px]" >
                  <img className='w-[100%]' src={im_main1} alt="" />
                  <img className='w-[100%]' src={im_main2} alt="" />
                  <img className='w-[100%]' src={im_main3} alt="" />
                  <img className='w-[100%]' src={im_main4} alt="" />
                  <img className='w-[100%]' src={im_main5} alt="" />
                  <img className='w-[100%]' src={im_main6} alt="" />
                </div>
              </div>
              <div>
                <div className="main-5A pt-[50px] grid grid-cols-6 gap-[20px]" >
                  <img className='w-[100%]' src={im_main1} alt="" />
                  <img className='w-[100%]' src={im_main2} alt="" />
                  <img className='w-[100%]' src={im_main3} alt="" />
                  <img className='w-[100%]' src={im_main4} alt="" />
                  <img className='w-[100%]' src={im_main5} alt="" />
                  <img className='w-[100%]' src={im_main6} alt="" />
                </div>
              </div>
              <div>
                <div className="main-5A pt-[50px] grid grid-cols-6 gap-[20px]" >
                  <img className='w-[100%]' src={im_main1} alt="" />
                  <img className='w-[100%]' src={im_main2} alt="" />
                  <img className='w-[100%]' src={im_main3} alt="" />
                  <img className='w-[100%]' src={im_main4} alt="" />
                  <img className='w-[100%]' src={im_main5} alt="" />
                  <img className='w-[100%]' src={im_main6} alt="" />
                </div>
              </div>
              <div>
                <div className="main-5A pt-[50px] grid grid-cols-6 gap-[20px]" >
                  <img className='w-[100%]' src={im_main1} alt="" />
                  <img className='w-[100%]' src={im_main2} alt="" />
                  <img className='w-[100%]' src={im_main3} alt="" />
                  <img className='w-[100%]' src={im_main4} alt="" />
                  <img className='w-[100%]' src={im_main5} alt="" />
                  <img className='w-[100%]' src={im_main6} alt="" />
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main