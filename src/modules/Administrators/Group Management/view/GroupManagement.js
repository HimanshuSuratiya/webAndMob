import React, { useState } from "react";
import Department from "../Components/Department";
import Tree from "../Components/Tree";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import '../view/style.css'
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import { Button, MenuItem } from "@material-ui/core";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import EventNoteIcon from '@material-ui/icons/EventNote';

const GroupManagement = () => {
  const [showHide, setShowHide] = useState(true);
  const [active, setActive] = useState(0);
  const { t } = useTranslation();
  return (
    <>
      <div className="d-flex f-align-center f-justify-between mb-8">
        <Typography variant="h4">{t("Group")}</Typography>
      </div>
      <Paper>
        <ul className='tabBtn'>
          <li className={active === 0 ? 'active' : ''}><a style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => { setShowHide(true); setActive(0) }} href='#!'> <AccountCircleOutlinedIcon />Department</a> </li>
          <li className={active === 1 ? 'active' : ''}><a style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => { setShowHide(false); setActive(1) }} href='#!'> <EventNoteIcon /> Tree</a> </li>
        </ul>
        {showHide ? <div className='tabDepartment' > <Department /> </div> : <div className='tabTree' ><Tree /> </div>}
      </Paper>
    </>
  );
};

export default GroupManagement;
