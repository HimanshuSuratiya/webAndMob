import React from "react";
import ServerSettings from "../Components/ServerSettings";
import SMPTSettings from "../Components/SMPTSettings";
import SystemErrorNotificationSetting from "../Components/SystemErrorNotificationSetting";

const ServerConfiguration = () => {
    return(
        <>
            <ServerSettings/>
            <SMPTSettings/>
            <SystemErrorNotificationSetting/>
        </>
    );
};

export default ServerConfiguration;