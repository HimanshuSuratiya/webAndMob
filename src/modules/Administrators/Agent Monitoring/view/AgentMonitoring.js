import React from 'react'
import Client from '../Components/Client';
import ProcessManagement from '../Components/ProcessManagement';
import { Route, Redirect, Switch } from "react-router-dom";
import GroupAssignments from '../Components/GroupAssignments';

const noop = () => { };
const AgentMonitoring = ({ match, getUnassignDeviceCount = noop }) => {
    return (
        <>
            <Switch>
                <Route exact path={match.path} render={props => <GroupAssignments getUnassignDeviceCount={getUnassignDeviceCount} {...props} />} />
                <Route exact path={`${match.path}/cleint`} render={props => <Client getUnassignDeviceCount={getUnassignDeviceCount} {...props} />} />
                <Route exact path={`${match.path}/cleint/process-management`} render={props => <ProcessManagement getUnassignDeviceCount={getUnassignDeviceCount} {...props} />} />
                <Redirect to="/" />
            </Switch>
        </>
    );
};

export default AgentMonitoring;