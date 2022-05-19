import React, { useState } from "react";
import Department from "../Components/Department";
import Tree from "../Components/Tree";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import '../view/style.css'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import EventNoteIcon from '@material-ui/icons/EventNote';
import Add from '../Components/Add';

const GroupManagement = () => {
  const [showHide, setShowHide] = useState(true);
  const [active, setActive] = useState(0);
  const { t } = useTranslation();
  return (
    <>
      <div className="d-flex f-align-center f-justify-between mb-8">
        <Typography variant="h4">{t("processGroup")}</Typography>
      </div>
      <Paper>
        <ul className='tabBtn'>
          <li className={active === 0 ? 'active' : ''}><a style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => { setShowHide(true); setActive(0) }} href='#!'> <AccountCircleOutlinedIcon />{t('processDepartment')}</a> </li>
          <li className={active === 1 ? 'active' : ''}><a style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => { setShowHide(false); setActive(1) }} href='#!'> <EventNoteIcon /> {t('processTree')}</a> </li>
        </ul>
        {showHide ? <div className='tabDepartment' > <Department /> </div> : <div className='tabTree' ><Tree /> </div>}
      </Paper>
      <Add />
    </>
  );
};

export default GroupManagement;
