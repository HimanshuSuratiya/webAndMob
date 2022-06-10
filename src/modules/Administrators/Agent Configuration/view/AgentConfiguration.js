import React from "react";
import AgentSNMPSetting from "../Components/AgentSNMPSetting";
import CollectorThreadPool from "../Components/CollectorThreadPool";
import MaxThread from "../Components/MaxThread";
import MaxThreadCount from "../Components/MaxThreadCount";
import PollingCycle from "../Components/PollingCycle";

const AgentConfiguration = () => {
    return (
        <>
            <CollectorThreadPool />
            <PollingCycle />
            <MaxThreadCount />
            <MaxThread />
            <AgentSNMPSetting />
        </>
    );
};

export default AgentConfiguration;