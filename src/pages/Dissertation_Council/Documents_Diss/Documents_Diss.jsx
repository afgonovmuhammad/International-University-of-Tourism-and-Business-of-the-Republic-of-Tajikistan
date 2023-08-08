import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';

import './Documents_Diss.css'
import { Link } from 'react-router-dom';

const Documents_Diss = () => {
    const { t } = useTranslation()

    return (
        <div>
            <div className="main-1 py-[80px]">
                <div className="contener w-[80%] m-auto">
                    <h1 className='text-[42px] pb-[20px] font-[500]'>{t("text48D")}</h1>
                    <div className='py-[10px]'>
                        <div className='w-[90%] border-[1px] rounded-[5px]'>
                            <Accordion className=''>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography><h1 className=' text-[22px] font-[500]'>{t("text73")}</h1></Typography>
                                </AccordionSummary>
                                <AccordionDetails >
                                    <Typography className='AccordionDetails pt-[30px]'>
                                        <a href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:c044b516-1131-44f7-94a4-1f21c2f28ac9" target="_blank" rel="noopener noreferrer"><p>{t("text73A")}</p></a>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails >
                                    <Typography className='AccordionDetails pt-[30px]'>
                                        <a href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:a485f3ad-c205-4d38-9927-9546e7483e95" target="_blank" rel="noopener noreferrer"><p>{t("text73B")}</p></a>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails >
                                    <Typography className='AccordionDetails pt-[30px]'>
                                        <a href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:f2c9fa89-b181-4412-9ca2-e68ebf47aa53" target="_blank" rel="noopener noreferrer"><p>{t("text73C")}</p></a>

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

export default Documents_Diss

