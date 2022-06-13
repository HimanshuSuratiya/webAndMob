import React from "react";
import Paper from "@material-ui/core/Paper";
import ServerSettings from "../Components/ServerSettings";
import SMPTSettings from "../Components/SMPTSettings";
import SystemErrorNotificationSetting from "../Components/SystemErrorNotificationSetting";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const noop = () => { };
const ServerConfiguration = ({ match, getUnassignDeviceCount = noop }) => {
    const { t } = useTranslation();
    return (
        <>
            <Paper>
                <ul className='tabBtn'>
                    <li >
                        <Link className={window.location.pathname === `${match.path}` ? 'active' : ''} to={`${match.path}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                            {t('Server Settings')}
                        </Link>
                    </li>
                    <li >
                        <Link className={window.location.pathname === `${match.path}/smpt-Settings` ? 'active' : ''} to={`${match.path}/smpt-Settings`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                            {t('SMPT Settings')}
                        </Link>
                    </li>
                    <li >
                        <Link className={window.location.pathname === `${match.path}/system-error-notification-setting` ? 'active' : ''} to={`${match.path}/system-error-notification-setting`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            {t('System Error Notification Settings')}
                        </Link>
                    </li>
                </ul>
            </Paper>
            <Switch>
                <Route exact path={match.path} render={props => <ServerSettings getUnassignDeviceCount={getUnassignDeviceCount} {...props} />} />
                <Route exact path={`${match.path}/smpt-Settings`} render={props => <SMPTSettings getUnassignDeviceCount={getUnassignDeviceCount} {...props} />} />
                <Route exact path={`${match.path}/system-error-notification-setting`} render={props => <SystemErrorNotificationSetting getUnassignDeviceCount={getUnassignDeviceCount} {...props} />} />
                <Redirect to="/" />
            </Switch>
        </>
    )
};

export default ServerConfiguration;