import React from "react";
import "../view/AgentMonitoringStyle.css"
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Grid } from "shared/components";
import { useTranslation } from "react-i18next";
import CachedIcon from '@material-ui/icons/Cached';
import { Route } from "react-router-dom";

const noop = () => { };
const GroupAssignments = ({ match, getUnassignDeviceCount = noop }) => {
    const { t } = useTranslation();

    const Rows = [
        {
            id: '1',
            currentStatus: 'Running',
            group: "All",
            version: "2.7.04.00",
            IP: '10.10.10.209',
            startDate: '2022-04-25 17:10:13',
            pollingTime: "10",
            reservedPollingTime: "",
        },
    ];

    const columnConfig = [
        {
            id: "current_Status",
            fieldName: "current_Status",
            label: t("Current Status"),
            canSort: true,
            render: (Rows) => (
                <Typography variant="body1">
                    {Rows.currentStatus}
                </Typography>
            ),
        },
        {
            id: "_group",
            fieldName: "_group",
            label: t("Group"),
            canSort: true,
            render: (Rows) => (
                <Route render={({ history }) => (
                    <Typography variant="body1" onClick={() => { history.push(`${match.path}/cleint`) }}>
                        {Rows.group}
                    </Typography>
                )} />
            ),
        },
        {
            id: "_version",
            field: "_version",
            label: t("Version"),
            canSort: true,
            render: (Rows) => (
                <Typography variant="body1" style={{ textAlign: 'center' }}>
                    {Rows.version}
                </Typography>
            ),
        },
        {
            id: "_ip",
            field: "_ip",
            label: t("IP"),
            canSort: true,
            render: (Rows) => (
                <Typography variant="body1" style={{ textAlign: "center" }}>
                    {Rows.IP}
                </Typography>
            ),
        },
        {
            id: "start_Date",
            field: "start_Date",
            label: t("Start Date"),
            canSort: true,
            render: (Rows) => (
                <Typography variant="body1">
                    {Rows.startDate}
                </Typography>
            ),
        },
        {
            id: "polling_Time",
            fieldName: "polling_Time",
            label: t("Polling Time"),
            canSort: true,
            render: (Rows) => (
                <Typography variant="body1" style={{ textAlign: 'center' }}>
                    {Rows.pollingTime}
                </Typography>
            ),
        },
        {
            id: "reserved_Polling_Time",
            fieldName: "reserved_Polling_Time",
            label: t("Reserved Polling Time"),
            canSort: true,
            render: (Rows) => (
                <Typography variant="body1">
                    {Rows.reservedPollingTime}
                </Typography>
            ),
        },
    ];

    return (
        <>
            <div className="d-flex f-align-center f-justify-between mb-8">
                <Typography variant="h4">{t("Group Assignments")}</Typography>
            </div>
            <div className="groupMainDiv">
                <Paper elevation={4} className="MonitorDiv">
                    <div style={{ fontSize: '17px', paddingLeft: '5px' }}><strong style={{ color: 'black' }}>Monitor All</strong><span className="monitorIcon"><CachedIcon style={{ color: '#007bff' }} /></span></div>
                </Paper>
                <div className="InnerTableDiv">
                    <Paper elevation={4}>
                        <Grid hasSelection={true} columns={columnConfig} rows={Rows} />
                    </Paper>
                </div>
            </div>
            <br />
            <br />
        </>
    );
};

export default GroupAssignments;