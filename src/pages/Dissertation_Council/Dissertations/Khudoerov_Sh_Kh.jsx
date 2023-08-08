import React from 'react'
import { useTranslation } from 'react-i18next'

import './Dissertations.css'

const Khudoerov_Sh_Kh = () => {
    const { t } = useTranslation()

    return (
        <div>
            <div className="main-1 py-[80px]">
                <div className="contener w-[80%] m-auto">
                    <h1 className='text-[44px] font-[500]'>{t("text78")}</h1>
                    <div className="Diss my-[50px] p-[40px] w-[90%]">
                        <div className="Name">
                            <h1 className='text-[20px] font-[500]'>Тип диссертации: <span className='text-[#003197]'>Кандидатская</span></h1>
                        </div>
                        <div className="Name my-[20px]">
                            <h1 className='text-[20px] font-[500]'>Тема диссертации: <span className='text-[#003197]'>ФОРМИРОВАНИЕ И РАЗВИТИЕ ДИСТРИБЬЮТОРСКОЙДЕЯТЕЛЬНОСТИ В СОВРЕМЕННЫХ УСЛОВИЯХ(на материалах Республики Таджикистан)</span></h1>
                        </div>
                        <div className="Name my-[20px]">
                            <h1 className='text-[20px] font-[500]'>Шифр и наименование научной специальности: <span className='text-[#003197]'>Специальность 08.00.10 – Менеджмент, маркетинг и ценообразование(маркетинг)</span></h1>
                        </div>
                        <div className="Name mt-[20px]">
                            <h1 className='text-[20px] font-[500]'>Отрасль науки: <span className='text-[#003197]'>Экономические науки</span></h1>
                        </div>

                    </div>

                    <div className="Diss my-[60px] py-[40px] px-[100px] w-[90%]">
                        <form action="" >
                            <table className='TebleDiss' >
                                <tr>
                                    <th>№</th>
                                    <th>Название документа</th>
                                    <th>Дата публикации</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Диссертация</td>
                                    <td>08.07.2023</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Автореферат</td>
                                    <td>08.07.2023</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Сведения о научном руководителе</td>
                                    <td>08.07.2023</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Отзыв научного руководителя</td>
                                    <td>08.07.2023</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Заключение кафедры</td>
                                    <td>08.07.2023</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Заключение организации, где выполнялась диссертация</td>
                                    <td>08.07.2023</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Решение диссертационного совета о назначении экспертной комиссии</td>
                                    <td>08.07.2023</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Заключение экспертной комиссии</td>
                                    <td>08.07.2023</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>Решение диссертационного совета о допуске диссертации к защите</td>
                                    <td>08.07.2023</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Объявление о защите</td>
                                    <td>08.07.2023</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>Сведения о ведущей организации</td>
                                    <td>08.07.2023</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>2 Отзыв ведущей организации</td>
                                    <td>08.07.2023</td>
                                </tr>

                                <tr>
                                    <td>13</td>
                                    <td>Сведения о 1-ом официальном оппоненте</td>
                                    <td>08.07.2023</td>
                                </tr>
                                <tr>
                                    <td>14</td>
                                    <td>Отзыв 1-го официального оппонента</td>
                                    <td>08.07.2023</td>
                                </tr>
                                <tr>
                                    <td>15</td>
                                    <td>Сведения о 2-ом официальном оппоненте</td>
                                    <td>08.07.2023</td>
                                </tr>
                                <tr>
                                    <td>16</td>
                                    <td>Отзыв 2-го официального оппонента</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>17</td>
                                    <td>Отзыв на автореферат</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>18</td>
                                    <td>Протокол заседания диссертационного совета</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>19</td>
                                    <td>Явочный лист членов диссертационного совета</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>20</td>
                                    <td>Заключение диссертационного совета  </td>
                                    <td></td>
                                </tr>
                            </table>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Khudoerov_Sh_Kh