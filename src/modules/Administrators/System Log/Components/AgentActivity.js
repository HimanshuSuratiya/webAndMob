import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import "../view/SystemLogStyle.css";
import { Button } from "@material-ui/core";
import { Grid } from "shared/components";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import Divider from "@material-ui/core/Divider";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import "../../../../shared/Shared.css";

const EndDefaultDate = () => {
    const currentyear = new Date().getFullYear();
    const newAddDate = new Date()
    newAddDate.setFullYear(currentyear + 1)
    return newAddDate
}

const noop = () => { };
const AgentActivity = ({ match, getUnassignDeviceCount = noop }) => {
    const { t } = useTranslation();
    const [startContract, setStartContract] = useState(new Date());
    const [endcontract, setEndContract] = useState(EndDefaultDate());

    const handleChange = (newValue: Date | null) => {
        setStartContract(newValue);
    };

    const handleChangeEnd = (newValue: Date | null) => {
        setEndContract(newValue)
    };

    const Rows = [
        {
            date: '2022-06-24 8:32:08',
            agent: 34,
            message: "Hello",
            serailNumber: "HPHS12355511",
            printerName: 'SamsungC351xSeries/)0CA6BJENB0002JA',
        },
        {
            date: '2022-06-24 8:32:08',
            agent: 31,
            message: "(주)빅윈어드바이저",
            serailNumber: "HPHS12355511",
            printerName: 'SamsungC351xSeries/)0CA6BJENB0002JA',
        },
        {
            date: '2022-06-24 8:32:08',
            agent: 31,
            message: "봉담도서관",
            serailNumber: "HPHS12355511",
            printerName: 'SamsungC351xSeries/)0CA6BJENB0002JA',
        },
    ];

    const columnConfig = [
        {
            id: "_date",
            field: "_date",
            label: t("Date"),
            canSort: true,
            render: (Rows) => (
                <Typography variant="body1">
                    {Rows.date}
                </Typography>
            ),
        },
        {
            id: "_agent",
            fieldName: "_agent",
            label: t("Agent"),
            canSort: true,
            render: (Rows) => (
                <Typography variant="body1">
                    {Rows.agent}
                </Typography>
            ),
        },
        {
            id: "_message",
            fieldName: "_message",
            label: t("Message"),
            canSort: true,
            render: (Rows) => (
                <Typography variant="body1" >
                    {Rows.message}
                </Typography>
            ),
        },
        {
            id: "_serial_Number",
            fieldName: "_serial_Number",
            label: t("Serial Number"),
            canSort: true,
            render: (Rows) => (
                <Typography variant="body1">
                    {Rows.serailNumber}
                </Typography>
            ),
        },
        {
            id: "_printer_Name",
            field: "_printer_Name",
            label: t("Printer Name"),
            canSort: true,
            render: (Rows) => (
                <Typography variant="body1">
                    {Rows.printerName}
                </Typography>
            ),
        }
    ];

    return (
        <>
            <div className="d-flex f-align-center f-justify-between mb-8">
                <Typography variant="h4">{t("Agent Activity")}</Typography>
            </div>
            <Paper elevation={4}>
                <div className="d-flex p-4" style={{alignItems: 'center' }}>
                    <TextField
                        variant="outlined"
                        size="small"
                        placeholder={t('processSearch')}
                        InputProps={{ endAdornment: <SearchIcon /> }}
                    />
                    <div className="MainDateDiv" style={{ height: '47px', marginLeft: '30px', width: '650px', display: 'flex', justifyContent: 'space-between', padding: '0px 5px', alignItems: 'center' }}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                variant="contained"
                                label={t("Start Date")}
                                inputFormat="MM/dd/yyyy"
                                value={startContract}
                                onChange={handleChange}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                label={t("End Date")}
                                inputFormat="MM/dd/yyyy"
                                value={endcontract}
                                onChange={handleChangeEnd}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                        <Button
                            variant="contained"
                            className="Btn-Color"
                            style={{ width: '100px', height: '40px' }}
                        >
                            Search
                        </Button>
                    </div>
                </div>
                <div >
                </div>
                <Divider />
                <Grid hasSelection={false} columns={columnConfig} rows={Rows} />
                <div className="viewBtn">
                    <Link to={`${match.path}/system-log-management`}>
                        <Button style={{ marginBottom: '8px' }} className="Btn-Color" variant="contained">View</Button>
                    </Link>
                </div>
            </Paper>
        </>
    );
};

export default AgentActivity;