import React, { useState } from "react";
import Department from "../Components/Department";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import '../view/Groupstyle.css'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CollapsibleList from "../Components/CollapsibleList";
import { Route, Redirect, Switch, Link } from "react-router-dom";

const noop = () => { };
const GroupManagement = ({ match, getUnassignDeviceCount = noop }) => {
  const [active, setActive] = useState(0);
  const { t } = useTranslation();
  return (
    <>
      <div className="d-flex f-align-center f-justify-between mb-8">
        <Typography variant="h4">{t("processGroup")}</Typography>
      </div>
      <Paper>
        <ul className='tabBtn'>
          <li >
            <Link className={active === 0 ? 'active' : ''} to={`${match.path}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => { setActive(0) }}>
              <AccountCircleOutlinedIcon />{t('processDepartment')}
            </Link>
          </li>
          <li >
            <Link className={active === 1 ? 'active' : ''} to={`${match.path}/tree`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => { setActive(1) }}>
              <EventNoteIcon /> {t('processTree')}
            </Link>
          </li>
        </ul>
      </Paper>
      <Switch>
        <Route exact path={match.path} render={props => <Department getUnassignDeviceCount={getUnassignDeviceCount} {...props} />} />
        <Route exact path={`${match.path}/tree`} render={props => <CollapsibleList getUnassignDeviceCount={getUnassignDeviceCount} {...props} />} />
        <Redirect to="/" />
      </Switch>
    </>
  )
};

export default GroupManagement;
