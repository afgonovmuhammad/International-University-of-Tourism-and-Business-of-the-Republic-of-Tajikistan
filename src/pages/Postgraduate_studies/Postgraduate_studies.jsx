import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import './Postgraduate_studies.css'

import Quotations1 from '../Faculties/img/Quotations1.png'
import Quotations2 from '../Faculties/img/Quotations2.png'
import Quotations3 from '../Faculties/img/Quotations3.png'
import Quotations4 from '../Faculties/img/Quotations4.png'

import Arrow3 from '../Main/img/Arrow3.png'
import { Link } from 'react-router-dom'

import { Button, Modal, Input } from 'antd'


const Postgraduate_studies = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0,  })
    }, [])

    const [modal2Open1, setModal2Open1] = useState(false);
    const [modal2Open2, setModal2Open2] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);
    const { t } = useTranslation()
    const { TextArea } = Input;


    return (
        <div>
            <div className="main-1">
                <div className="contener">
                    <h1 className=' bg-[#003197] text-[#FFF] py-[20px] text-center my-[2px] uppercase text-[44px] font-[500]'>{t("text9B")}</h1>

                    <div className="main-1A py-[60px]">

                        <div className="contener w-[80%] m-auto">
                            <h1 className='  text-[44px] font-[500]'>{t("text53")}</h1>
                            <div className='flex justify-between border rounded-[10px] my-[50px] py-[50px] px-[40px]'>
                                <div className='w-[75%] flex gap-x-[30px]'>
                                    <select className='Select w-[31%]' name="" id="">
                                        <option value="">{t("text53A")}</option>
                                        <option value="">{t("text56")}</option>
                                        <option value="">{t("text56A1")}</option>

                                    </select>
                                    <select className='Select w-[31%]' name="" id="">
                                        <option value="">{t("text53B")}</option>
                                        <option value="">2019</option>
                                        <option value="">2020</option>
                                        <option value="">2021</option>
                                        <option value="">2022</option>
                                        <option value="">2023</option>
                                    </select>

                                </div>

                                <div className='text-center text-[#FFF] btnInst w-[17%]'>
                                    <button className=' text-[20px]  font-[500]'>{t("text53D")}</button>
                                </div>
                            </div>

                            <div className='flex pt-[30px] justify-between gap-[20px]'>
                                <div className='Quotations'>
                                    <Link to="/Finance">
                                        <img className='w-[100%]' src={Quotations1} alt="" />
                                        <div className='p-[20px]'>
                                            <p className='text-[#939090] py-[5px]'>52.02.22</p>
                                            <h1 className='text-[#003197] text-[22px] py-[5px] font-[500]'>{t("text54A")}</h1>
                                            <p className='text-[#939090] opacity-[0.8] w-[95%] py-[5px]'>{t("text55")} <span className='text-[#003197]  text-[17px]'>{t("text55A")}</span></p>
                                            <p className='text-[#939090] opacity-[0.8] '>{t("text53A")}: <span className='text-[#003197] text-[17px]'>{t("text56")}</span></p>
                                            <p className='text-[#939090] opacity-[0.8] py-[5px]'>{t("text53B")}: <span className='text-[#003197] text-[17px]'> 4 {t("text56A")}</span></p>
                                            <p className='text-[#939090] opacity-[0.8] '>{t("text53C")}: <span className='text-[#003197] text-[17px]'> {t("text57")}</span></p>
                                        </div>
                                    </Link>
                                </div>
                                <div className='Quotations'>
                                    <img className='w-[100%]' src={Quotations2} alt="" />
                                    <div className='p-[20px]'>
                                        <p className='text-[#939090] py-[5px]'>52.02.22</p>
                                        <h1 className='text-[#000] text-[22px] py-[5px] font-[500]'>{t("text54B")}</h1>
                                        <p className='text-[#939090] opacity-[0.8] w-[95%] py-[5px]'>{t("text55")} <span className='text-[#003197] text-[17px]'>{t("text55A")}</span></p>
                                        <p className='text-[#939090] opacity-[0.8] '>{t("text53A")}: <span className='text-[#003197] text-[17px]'>{t("text56")}</span></p>
                                        <p className='text-[#939090] opacity-[0.8] py-[5px]'>{t("text53B")}: <span className='text-[#003197] text-[17px]'> 4 {t("text56A1")}</span></p>
                                        <p className='text-[#939090] opacity-[0.8]  '>{t("text53C")}: <span className='text-[#003197] text-[17px]'> {t("text57")}</span></p>
                                    </div>
                                </div>
                                <div className='Quotations'>
                                    <img className='w-[100%]' src={Quotations3} alt="" />
                                    <div className=' p-[20px]'>
                                        <p className='text-[#939090] py-[5px]'>52.02.22</p>
                                        <h1 className='text-[#000] text-[22px] py-[5px] w-[80%]  font-[500]'>{t("text54C")}</h1>
                                        <p className='text-[#939090] opacity-[0.8] w-[95%] py-[5px]'>{t("text55")} <span className='text-[#003197] text-[17px]'>{t("text55A")}</span></p>
                                        <p className='text-[#939090] opacity-[0.8] '>{t("text53A")}: <span className='text-[#003197] text-[17px]'>{t("text56")}</span></p>
                                        <p className='text-[#939090] opacity-[0.8] py-[5px]'>{t("text53B")}: <span className='text-[#003197] text-[17px]'> 4 {t("text56A")}</span></p>
                                        <p className='text-[#939090] opacity-[0.8] '>{t("text53C")}: <span className='text-[#003197] text-[17px]'> {t("text57")}</span></p>
                                    </div>
                                </div>
                                <div className='Quotations'>
                                    <img className='w-[100%]' src={Quotations4} alt="" />
                                    <div className='p-[20px]'>
                                        <p className='text-[#939090] py-[5px]'>52.02.22</p>
                                        <h1 className='text-[#000] text-[22px] py-[5px] font-[500]'>{t("text54D")}</h1>
                                        <p className='text-[#939090] opacity-[0.8] w-[95%] py-[5px]'>{t("text55")} <span className='text-[#003197] text-[17px]'>{t("text55A")}</span></p>
                                        <p className='text-[#939090] opacity-[0.8] '>{t("text53A")}: <span className='text-[#003197] text-[17px]'>{t("text56")}</span></p>
                                        <p className='text-[#939090] opacity-[0.8] py-[5px]'>{t("text53B")}: <span className='text-[#003197] text-[17px]'> 4 {t("text56A1")}</span></p>
                                        <p className='text-[#939090] opacity-[0.8] '>{t("text53C")}: <span className='text-[#003197] text-[17px]'> {t("text57")}</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex py-[50px] justify-between gap-[20px]'>
                                <div className='Quotations'>
                                    <img className='w-[100%]' src={Quotations1} alt="" />
                                    <div className='p-[20px]'>
                                        <p className='text-[#939090] py-[5px]'>52.02.22</p>
                                        <h1 className='text-[#000] text-[22px] py-[5px] font-[500]'>{t("text54A")}</h1>
                                        <p className='text-[#939090] opacity-[0.8] w-[95%] py-[5px]'>{t("text55")} <span className='text-[#003197]  text-[17px]'>{t("text55A")}</span></p>
                                        <p className='text-[#939090] opacity-[0.8] '>{t("text53A")}: <span className='text-[#003197] text-[17px]'>{t("text56")}</span></p>
                                        <p className='text-[#939090] opacity-[0.8] py-[5px]'>{t("text53B")}: <span className='text-[#003197] text-[17px]'> 4 {t("text56A")}</span></p>
                                        <p className='text-[#939090] opacity-[0.8] '>{t("text53C")}: <span className='text-[#003197] text-[17px]'> {t("text57")}</span></p>
                                    </div>
                                </div>
                                <div className='Quotations'>
                                    <img className='w-[100%]' src={Quotations2} alt="" />
                                    <div className='p-[20px]'>
                                        <p className='text-[#939090] py-[5px]'>52.02.22</p>
                                        <h1 className='text-[#000] text-[22px] py-[5px] font-[500]'>{t("text54B")}</h1>
                                        <p className='text-[#939090] opacity-[0.8] w-[95%] py-[5px]'>{t("text55")} <span className='text-[#003197] text-[17px]'>{t("text55A")}</span></p>
                                        <p className='text-[#939090] opacity-[0.8] '>{t("text53A")}: <span className='text-[#003197] text-[17px]'>{t("text56")}</span></p>
                                        <p className='text-[#939090] opacity-[0.8] py-[5px]'>{t("text53B")}: <span className='text-[#003197] text-[17px]'> 4 {t("text56A1")}</span></p>
                                        <p className='text-[#939090] opacity-[0.8]  '>{t("text53C")}: <span className='text-[#003197] text-[17px]'> {t("text57")}</span></p>
                                    </div>
                                </div>
                                <div className='Quotations'>
                                    <img className='w-[100%]' src={Quotations3} alt="" />
                                    <div className=' p-[20px]'>
                                        <p className='text-[#939090] py-[5px]'>52.02.22</p>
                                        <h1 className='text-[#000] text-[22px] py-[5px] w-[80%]  font-[500]'>{t("text54C")}</h1>
                                        <p className='text-[#939090] opacity-[0.8] w-[95%] py-[5px]'>{t("text55")} <span className='text-[#003197] text-[17px]'>{t("text55A")}</span></p>
                                        <p className='text-[#939090] opacity-[0.8] '>{t("text53A")}: <span className='text-[#003197] text-[17px]'>{t("text56")}</span></p>
                                        <p className='text-[#939090] opacity-[0.8] py-[5px]'>{t("text53B")}: <span className='text-[#003197] text-[17px]'> 4 {t("text56A")}</span></p>
                                        <p className='text-[#939090] opacity-[0.8] '>{t("text53C")}: <span className='text-[#003197] text-[17px]'> {t("text57")}</span></p>
                                    </div>
                                </div>
                                <div className='Quotations'>
                                    <img className='w-[100%]' src={Quotations4} alt="" />
                                    <div className='p-[20px]'>
                                        <p className='text-[#939090] py-[5px]'>52.02.22</p>
                                        <h1 className='text-[#000] text-[22px] py-[5px] font-[500]'>{t("text54D")}</h1>
                                        <p className='text-[#939090] opacity-[0.8] w-[95%] py-[5px]'>{t("text55")} <span className='text-[#003197] text-[17px]'>{t("text55A")}</span></p>
                                        <p className='text-[#939090] opacity-[0.8] '>{t("text53A")}: <span className='text-[#003197] text-[17px]'>{t("text56")}</span></p>
                                        <p className='text-[#939090] opacity-[0.8] py-[5px]'>{t("text53B")}: <span className='text-[#003197] text-[17px]'> 4 {t("text56A1")}</span></p>
                                        <p className='text-[#939090] opacity-[0.8] '>{t("text53C")}: <span className='text-[#003197] text-[17px]'> {t("text57")}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-1B flex justify-between w-[80%] pt-[50px] pb-[130px] m-auto">
                        <div className='left w-[56%] p-[50px]'>
                            <h1 className='text-[24px] pb-[20px] font-[500]'>{t("text61")}</h1>
                            <div className='flex py-[10px] items-center gap-[19px] '>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                        <circle cx="5" cy="5" r="5" fill="#003197" />
                                    </svg>
                                </div>
                                <p className='w-[90%] text-[18px]'>{t("text61A")}</p>
                            </div>
                            <div className='flex items-center gap-[19px] '>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                        <circle cx="5" cy="5" r="5" fill="#003197" />
                                    </svg>
                                </div>
                                <p className='w-[88%] text-[18px]'>{t("text61B")}</p>
                            </div>
                            <div className='flex py-[10px]  items-center gap-[19px] '>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                        <circle cx="5" cy="5" r="5" fill="#003197" />
                                    </svg>
                                </div>
                                <p className='w-[88%] text-[18px]'>{t("text61C")}</p>
                            </div>
                            <div className='flex items-center gap-[19px] '>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                        <circle cx="5" cy="5" r="5" fill="#003197" />
                                    </svg>
                                </div>
                                <p className='w-[88%] text-[18px]'>{t("text61D")}</p>
                            </div>
                        </div>

                        <div className="right w-[35%]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M33 2H3C2.44771 2 2 2.44772 2 3V33C2 33.5523 2.44772 34 3 34H33C33.5523 34 34 33.5523 34 33V3C34 2.44771 33.5523 2 33 2ZM3 0C1.34315 0 0 1.34315 0 3V33C0 34.6569 1.34315 36 3 36H33C34.6569 36 36 34.6569 36 33V3C36 1.34315 34.6569 0 33 0H3Z" fill="#003197" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0381 8.58191H11V27.3986H20.0381V8.58191ZM9 6.58191V29.3986H22.0381V6.58191H9Z" fill="#003197" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8352 4.06539C16.1877 3.84954 15.519 4.33149 15.519 5.01409V31.2128C15.519 31.8953 16.1877 32.3773 16.8352 32.1614L25.7003 29.2064C26.1086 29.0703 26.3841 28.6882 26.3841 28.2577V7.96909C26.3841 7.53869 26.1086 7.15649 25.7003 7.02039L16.8352 4.06539ZM19.1407 18.8378C19.5407 18.8378 19.865 18.1892 19.865 17.3891C19.865 16.589 19.5407 15.9404 19.1407 15.9404C18.7406 15.9404 18.4163 16.589 18.4163 17.3891C18.4163 18.1892 18.7406 18.8378 19.1407 18.8378Z" fill="#003197" />
                            </svg>
                            <h1 className='text-[18px] pt-[7px] font-[500]'>{t("text62")}</h1>
                            <button className='pb-[30px]'>

                                <button onClick={() => setModal2Open1(true)}>
                                    <div className='flex gap-x-[15px]'>
                                        <h3 className=' opacity-[0.3] hover:opacity-[0.6] text-[16px]'>{t("text8")}</h3>
                                        <div className='flex items-center pt-[3px]'>
                                            <img className=' ' src={Arrow3} alt="" />
                                        </div>
                                    </div>
                                </button>
                            </button>

                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                                <path d="M9.30769 1V5.15385M28.6923 1V5.15385M1 9.30769H37M34.2308 37H3.76923C3.03479 37 2.33042 36.7082 1.81109 36.1889C1.29176 35.6696 1 34.9652 1 34.2308V6.53846C1 5.80402 1.29176 5.09965 1.81109 4.58032C2.33042 4.06099 3.03479 3.76923 3.76923 3.76923H34.2308C34.9652 3.76923 35.6696 4.06099 36.1889 4.58032C36.7082 5.09965 37 5.80402 37 6.53846V34.2308C37 34.9652 36.7082 35.6696 36.1889 36.1889C35.6696 36.7082 34.9652 37 34.2308 37Z" stroke="#003197" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M19.3077 31.6154C23.8959 31.6154 27.6154 27.8959 27.6154 23.3077C27.6154 18.7195 23.8959 15 19.3077 15C14.7195 15 11 18.7195 11 23.3077C11 27.8959 14.7195 31.6154 19.3077 31.6154Z" stroke="#003197" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18 20V24.1538H22.1538" stroke="#003197" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <h1 className='text-[18px] pt-[7px] font-[500]'>{t("text62A")}</h1>
                            <button className='pb-[30px]'>

                                <button onClick={() => setModal2Open2(true)}>
                                    <div className='flex gap-x-[15px]'>
                                        <h3 className=' opacity-[0.3] hover:opacity-[0.6] text-[16px]'>{t("text8")}</h3>
                                        <div className='flex items-center pt-[3px]'>
                                            <img className=' ' src={Arrow3} alt="" />
                                        </div>
                                    </div>
                                </button>
                            </button>

                            <h1 className='text-[18px] font-[500]'>{t("text62B")}</h1>
                            <p className='w-[80%] text-[#6D6D6D] text-[16px]'>{t("text62C")}</p>
                            <div className='text-center  text-[#FFF] btnInst1 w-[32%]'>
                                <button onClick={() => setModal2Open(true)} className=' text-[18px]  font-[500]'>{t("text62D")}</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <Modal

                centered
                footer={false}
                open={modal2Open1}
                onOk={() => setModal2Open1(false)}
                onCancel={() => setModal2Open1(false)}
                width={950}
            >
                <div className='p-[15px]'>
                    <h1 className='text-[30px] font-[500] text-center pt-[10px] '>{t("text82")}</h1>
                    <div className='p-[20px]'>
                        <p className='text-[18px] font-[400] py-[7px]'>{t("text82A")}</p>
                        <p className='text-[18px] font-[400] py-[7px]'>{t("text82B")}</p>
                        <p className='text-[18px] font-[400] py-[7px]'>{t("text82C")}</p>
                        <p className='text-[18px] font-[400] py-[7px]'>{t("text82D")}</p>
                        <p className='text-[18px] font-[400] py-[7px]'>{t("text82E")}</p>

                    </div>
                </div>
            </Modal>
            <Modal

                centered
                footer={false}
                open={modal2Open2}
                onOk={() => setModal2Open2(false)}
                onCancel={() => setModal2Open2(false)}
                width={950}
            >
                <div className='p-[15px]'>
                    <h1 className='text-[30px] font-[500] text-center pt-[10px] '>{t("text82A0")}</h1>
                    <div className='p-[20px]'>
                        <p className='text-[18px] font-[400] py-[7px]'>{t("text82A")}</p>
                        <p className='text-[18px] font-[400] py-[7px]'>{t("text82B")}</p>
                        <p className='text-[18px] font-[400] py-[7px]'>{t("text82C")}</p>
                        <p className='text-[18px] font-[400] py-[7px]'>{t("text82D")}</p>
                        <p className='text-[18px] font-[400] py-[7px]'>{t("text82E")}</p>

                    </div>
                </div>
            </Modal>
            <Modal
                // title="Маълумот дар бораи ҷойҳои қабули ҳуҷҷатҳо"
                centered
                footer={false}
                open={modal2Open}
                onOk={() => setModal2Open(false)}
                onCancel={() => setModal2Open(false)}
                width={800}
            >
                <div className='p-[15px]'>
                    <h1 className='text-[30px] font-[500] text-center py-[5px]'> {t("text83")}</h1>
                    <p className='text-center text-[18px] text-[#b8b5b5]'>{t("text83A")}</p>
                    <div>
                        <div className="contOne w-[100%]">
                           
                            <input className='border w-[100%] p-[10px] rounded-[10px]' type="text" name="" placeholder={t("text22")} />
                            <div className='flex justify-between py-[20px]'>
                                <input className='border w-[49%] p-[10px] rounded-[10px]' type="text" placeholder={t("text23")} />
                                <input className='border w-[49%] p-[10px] rounded-[10px]' type="email" placeholder={t("text21")} />
                            </div>

                            <TextArea
                                maxLength={100}
                                style={{
                                    height: "100px",
                                    marginBottom: 1,
                                    borderRadius: "10px",
                                    fontSize: '17px',
                                }}

                                placeholder={t("text24")}
                            />

                            <div className='flex justify-end'>
                                <button className='btn_Cont  mt-[20px] py-[10px] w-[100%]'>{t("text25")}</button>
                            </div>

                        </div>

                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Postgraduate_studies