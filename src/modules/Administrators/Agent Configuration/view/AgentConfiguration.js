import React from "react";
import AgentSNMPSetting from "../Components/AgentSNMPSetting";
import CollectorThreadPool from "../Components/CollectorThreadPool";
import MaxThread from "../Components/MaxThread";
import MaxThreadCount from "../Components/MaxThreadCount";
import PollingCycle from "../Components/PollingCycle";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { useTranslation } from "react-i18next";

const noop = () => { };
const AgentConfiguration = ({ match, getUnassignDeviceCount = noop }) => {
    const { t } = useTranslation();
    return (
        <>
            <Paper>
                <ul className='tabBtn'>
                    <li >
                        <Link className={window.location.pathname === `${match.path}` ? 'active' : ''} to={`${match.path}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '65px' }} >
                            {t('Collector Thread Pool')}
                        </Link>
                    </li>
                    <li >
                        <Link className={window.location.pathname === `${match.path}/polling-cycle` ? 'active' : ''} to={`${match.path}/polling-cycle`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '65px' }} >
                            {t('Polling Cycle')}
                        </Link>
                    </li>
                    <li >
                        <Link className={window.location.pathname === `${match.path}/max-thread-command-manager` ? 'active' : ''} to={`${match.path}/max-thread-command-manager`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '65px' }}>
                            {t('Max Thread Command Manager')}
                        </Link>
                    </li>
                    <li >
                        <Link className={window.location.pathname === `${match.path}/max-thread-device-registration` ? 'active' : ''} to={`${match.path}/max-thread-device-registration`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '65px' }}>
                            {t('Max Thread Device Registration')}
                        </Link>
                    </li>
                    <li >
                        <Link className={window.location.pathname === `${match.path}/snmp-setting` ? 'active' : ''} to={`${match.path}/snmp-setting`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '65px' }}>
                            {t('SNMP Setting')}
                        </Link>
                    </li>
                </ul>
            </Paper>
            <Switch>
                <Route exact path={match.path} render={props => <CollectorThreadPool getUnassignDeviceCount={getUnassignDeviceCount} {...props} />} />
                <Route exact path={`${match.path}/polling-cycle`} render={props => <PollingCycle getUnassignDeviceCount={getUnassignDeviceCount} {...props} />} />
                <Route exact path={`${match.path}/max-thread-command-manager`} render={props => <MaxThreadCount getUnassignDeviceCount={getUnassignDeviceCount} {...props} />} />
                <Route exact path={`${match.path}/max-thread-device-registration`} render={props => <MaxThread getUnassignDeviceCount={getUnassignDeviceCount} {...props} />} />
                <Route exact path={`${match.path}/snmp-setting`} render={props => <AgentSNMPSetting getUnassignDeviceCount={getUnassignDeviceCount} {...props} />} />
                <Redirect to="/" />
            </Switch>
        </>
    )
};

export default AgentConfiguration;