import React from "react";
import AgentSNMPSetting from "../Components/AgentSNMPSetting";
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
                        <Link className={window.location.pathname === `${match.path}` ? 'active' : ''} to={`${match.path}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
                            {t('Polling Cycle')}
                        </Link>
                    </li>
                    <li >
                        <Link className={window.location.pathname === `${match.path}/snmp-setting` ? 'active' : ''} to={`${match.path}/snmp-setting`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            {t('SNMP Setting')}
                        </Link>
                    </li>
                </ul>
            </Paper>
            <Switch>
                <Route exact path={`${match.path}`} render={props => <PollingCycle getUnassignDeviceCount={getUnassignDeviceCount} {...props} />} />
                <Route exact path={`${match.path}/snmp-setting`} render={props => <AgentSNMPSetting getUnassignDeviceCount={getUnassignDeviceCount} {...props} />} />
                <Redirect to="/" />
            </Switch>
        </>
    )
};

export default AgentConfiguration;