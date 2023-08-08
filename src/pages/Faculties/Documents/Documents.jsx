import React from 'react'
import { useTranslation } from 'react-i18next'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './Documents.css'

const Documents = () => {
    const { t } = useTranslation()

    return (
        <div>
            <div className="main-1 py-[90px]">
                <div className="contener w-[80%] m-auto">
                    <h1 className='text-[42px] pb-[30px] font-[500]'>{t("text48D")}</h1>
                    <div>
                        <div className='w-[90%] border-[1px] rounded-[5px]'>
                            <Accordion className=''>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"



                                >
                                    <Typography><h1 className=' text-[22px] font-[500]'>{t("text30")}</h1></Typography>
                                </AccordionSummary>
                                <AccordionDetails >
                                    <Typography className='AccordionDetails pt-[30px]'>
                                        <p>{t("text30F")} 1</p>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails >
                                    <Typography className='AccordionDetails pt-[30px]'>
                                        <p>{t("text30F")} 2</p>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails >
                                    <Typography className='AccordionDetails pt-[30px]'>
                                        <p>{t("text30F")} 3</p>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails >
                                    <Typography className='AccordionDetails pt-[30px]'>
                                        <p>{t("text30F")} 4</p>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography><h1 className=' text-[22px] font-[500]'>{t("text30B")}</h1></Typography>
                                </AccordionSummary>
                                <AccordionDetails >
                                    <Typography className='AccordionDetails pt-[30px]'>
                                        <p>{t("text30F")} 1</p>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails >
                                    <Typography className='AccordionDetails pt-[30px]'>
                                        <p>{t("text30F")} 2</p>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails >
                                    <Typography className='AccordionDetails pt-[30px]'>
                                        <p>{t("text30F")} 3</p>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails >
                                    <Typography className='AccordionDetails pt-[30px]'>
                                        <p>{t("text30F")} 4</p>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography><h1 className=' text-[22px] font-[500]'>{t("text30C")}</h1></Typography>
                                </AccordionSummary>
                                <AccordionDetails >
                                    <Typography className='AccordionDetails pt-[30px]'>
                                        <p>{t("text30F")} 1</p>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails >
                                    <Typography className='AccordionDetails pt-[30px]'>
                                        <p>{t("text30F")} 2</p>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails >
                                    <Typography className='AccordionDetails pt-[30px]'>
                                        <p>{t("text30F")} 3</p>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails >
                                    <Typography className='AccordionDetails pt-[30px]'>
                                        <p>{t("text30F")} 4</p>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography><h1 className=' text-[22px] font-[500]'>{t("text30D")}</h1></Typography>
                                </AccordionSummary>
                                <AccordionDetails >
                                    <Typography className='AccordionDetails pt-[30px]'>
                                        <p>{t("text30F")} 1</p>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails >
                                    <Typography className='AccordionDetails pt-[30px]'>
                                        <p>{t("text30F")} 2</p>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails >
                                    <Typography className='AccordionDetails pt-[30px]'>
                                        <p>{t("text30F")} 3</p>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails >
                                    <Typography className='AccordionDetails pt-[30px]'>
                                        <p>{t("text30F")} 4</p>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography><h1 className=' text-[22px] font-[500]'>{t("text30E")}</h1></Typography>
                                </AccordionSummary>
                                <AccordionDetails >
                                    <Typography className='AccordionDetails pt-[30px]'>
                                        <p>{t("text30F")} 1</p>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails >
                                    <Typography className='AccordionDetails pt-[30px]'>
                                        <p>{t("text30F")} 2</p>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails >
                                    <Typography className='AccordionDetails pt-[30px]'>
                                        <p>{t("text30F")} 3</p>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails >
                                    <Typography className='AccordionDetails pt-[30px]'>
                                        <p>{t("text30F")} 4</p>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Documents