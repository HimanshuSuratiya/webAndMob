import React from "react";
import Paper from "@material-ui/core/Paper";
import AgentInformation from "../Components/AgentInformation";
import AssignGroup from "../Components/AssignGroup";
import { useTranslation } from "react-i18next";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import "./AgentStyle.css";

const noop = () => { };
const Agent = ({ match, getUnassignDeviceCount = noop }) => {
    const { t } = useTranslation();
    return (
        <>
            <Paper elevation={4} style={{backgroundColor:'#fafafa'}}>
                <ul className='AgentTabBtn'>
                    <li >
                        <Link className={window.location.pathname === `${match.path}` ? 'active' : ''} to={`${match.path}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            {t('Agent List')}
                        </Link>
                    </li>
                    <li >
                        <Link className={window.location.pathname === `${match.path}/assigment` ? 'active' : ''} to={`${match.path}/assigment`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            {t('Assigment')}
                        </Link>
                    </li>
                </ul>
            </Paper>
            <Switch>
                <Route exact path={match.path} render={props => <AgentInformation getUnassignDeviceCount={getUnassignDeviceCount} {...props} />} />
                <Route exact path={`${match.path}/assigment`} render={props => <AssignGroup getUnassignDeviceCount={getUnassignDeviceCount} {...props} />} />
                <Redirect to="/" />
            </Switch>
        </>
    );
};

export default Agent;