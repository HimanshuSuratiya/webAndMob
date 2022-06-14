import React from "react";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import { Grid } from "shared/components";
import Paper from "@material-ui/core/Paper";
import PausePresentationIcon from '@material-ui/icons/PausePresentation';

const ProcessManagement = () => {
    const { t } = useTranslation();

    const Rows = [
        {
            sNo: 1,
            Agent: "AGENT",
            processName: "Consumable Collector",
            startTime: '2022-04-25 18:00:11',
            endTime: '2022-04-25 18:00:11',
            StatusId: "Execution",
            execution: "",
        },
        {
            sNo: 2,
            Agent: "AGENT",
            processName: "Count Collector",
            startTime: '2022-04-25 18:26:39',
            endTime: '2022-04-25 18:26:39',
            StatusId: "Execution",
            execution: "",
        },
        {
            sNo: 3,
            Agent: "AGENT",
            processName: "IP Monitor",
            startTime: '2022-04-25 14:25:28',
            endTime: '2022-04-25 14:25:28',
            StatusId: "Execution",
            execution: "",
        },
        {
            sNo: 4,
            Agent: "AGENT",
            processName: "F/W Updater",
            startTime: '2022-04-25 18:25:42',
            endTime: '2022-04-25 18:25:42',
            StatusId: "Execution",
            execution: "",
        },
    ];

    const columnConfig = [
        {
            id: "s_No",
            fieldName: "s_No",
            label: t("processNo"),
            canSort: true,
            render: (Rows) => (
                <Typography variant="body1" style={{ textAlign: "center" }}>
                    {Rows.sNo}
                </Typography>
            ),
        },
        {
            id: "_location",
            fieldName: "_location",
            label: t("Location"),
            canSort: true,
            render: (Rows) => (
                <Typography variant="body1" >
                    {Rows.Agent}
                </Typography>
            ),
        },
        {
            id: "process_name",
            field: "process_name",
            label: t("Process Name"),
            canSort: true,
            render: (Rows) => (
                <Typography variant="body1">
                    {Rows.processName}
                </Typography>
            ),
        },
        {
            id: "start_time",
            field: "start_time",
            label: t("Start Time"),
            canSort: true,
            render: (Rows) => (
                <Typography variant="body1" style={{ textAlign: "center" }}>
                    {Rows.startTime}
                </Typography>
            ),
        },
        {
            id: "end_time",
            field: "end_time",
            label: t("End Time"),
            canSort: true,
            render: (Rows) => (
                <Typography variant="body1" style={{ textAlign: "center" }}>
                    {Rows.endTime}
                </Typography>
            ),
        },
        {
            id: "Status_Id",
            fieldName: "Status_Id",
            label: t("processStatus"),
            canSort: true,
            render: (Rows) => (
                <Typography variant="body1">
                    {Rows.StatusId}
                </Typography>
            ),
        },
        {
            id: "_execution",
            fieldName: "_execution",
            label: t("Execution"),
            canSort: true,
            render: (Rows) => (
                <>
                    <Typography variant="body1" style={{ textAlign: "center", backgroundColor: '', display: 'flex', justifyContent: 'center' }}>
                        {Rows.execution}
                        <div style={{ height: 22, width: 25, marginLeft: '7px', cursor: 'pointer' }}>
                            <PausePresentationIcon />
                        </div>
                    </Typography>
                </>
            ),
        },
    ];

    return (
        <>
            <div className="d-flex f-align-center f-justify-between mb-8">
                <Typography variant="h4">{t("Process Management")}</Typography>
            </div>
            <Paper elevation={4}>
                <Grid hasSelection={false} columns={columnConfig} rows={Rows} />
            </Paper>
        </>
    );
};

export default ProcessManagement;