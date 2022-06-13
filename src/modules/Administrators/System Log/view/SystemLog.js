import React from "react";
import ClientRegionBranchPrinter from "../Components/ClientRegionBranchPrinter";
import SystemLogManagement from "../Components/SystemLogManagement";

const SystemLog = () => {
    return (
        <>
            <SystemLogManagement />
            <ClientRegionBranchPrinter />
        </>
    );
};

export default SystemLog;