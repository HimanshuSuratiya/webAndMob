import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import Paper from "@material-ui/core/Paper";
import "../view/style.css";
import { Grid } from "shared/components";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import { Button, MenuItem } from "@material-ui/core";

const OtherPage = () => {
    const { t } = useTranslation();
    const [Department, setDepartment] = useState(0);
    const updateDepartment = (event) => {
        setDepartment(event.target.value);
    };

    const columnConfig = [
        {
            id: "_Printer_Modal",
            fieldName: "_Printer_Modal",
            label: t("processPrinterModel"),
            canSort: true,
            render: (Rows) => (
                <Typography variant="body1" style={{ textAlign: "center" }}>
                    {Rows.Client}
                </Typography>
            ),
        },
        {
            id: "_Toner",
            field: "_Toner",
            label: t("processToner"),
            canSort: true,
            render: (Rows) => (
                <Typography variant="body1" style={{ textAlign: "center" }}>
                    {Rows.Toner}
                </Typography>
            ),
        },
        {
            id: "_Fuser",
            fieldName: "_Fuser",
            label: t("processFuser"),
            canSort: true,
            render: (Rows) => (
                <Typography variant="body1" style={{ textAlign: "center" }}>
                    {Rows.Fuser}
                </Typography>
            ),
        },
        {
            id: "_Developer",
            field: "_Developer",
            label: t("processDeveloper"),
            canSort: true,
            render: (Rows) => (
                <Typography variant="body1" style={{ textAlign: "center" }}>
                    {Rows.Developer}
                </Typography>
            ),
        },
        {
            id: "-OPC",
            field: "_OPC",
            label: t("processOPC"),
            canSort: true,
            render: (Rows) => (
                <>
                    <Typography variant="body1" style={{ textAlign: "center" }}>
                        {Rows.OPC}
                    </Typography>
                </>
            ),
        },
        {
            id: "_Transfer",
            field: "_Transfer",
            label: t("processTransfer"),
            canSort: true,
            render: (Rows) => (
                <>
                    <Typography variant="body1" style={{ textAlign: "center" }}>
                        {Rows.Transfer}
                    </Typography>
                </>
            ),
        },
        {
            id: "_Other",
            field: "_Other",
            label: t("processOther"),
            canSort: true,
            render: (Rows) => (
                <>
                    <Typography variant="body1" style={{ textAlign: "center" }}>
                        {Rows.Other}
                    </Typography>
                </>
            ),
        },
    ];

    const Rows = [
        {
            id: 1,
            Client: 'ALL',
            Toner: <TextField
                style={{ width: '70%' }}
                name="noticeUsageLevel"
                variant="outlined"
                defaultValue={10}
                size="small"
            />,
            Fuser: <TextField
                style={{ width: '70%', padding: '0px' }}
                name="noticeUsageLevel"
                variant="outlined"
                defaultValue={10}
                size="small"
            />,
            Developer: <TextField
                style={{ width: '70%', padding: '0px' }}
                name="noticeUsageLevel"
                variant="outlined"
                defaultValue={10}
                size="small"
            />,
            OPC: <TextField
                style={{ width: '70%', padding: '0px' }}
                name="noticeUsageLevel"
                variant="outlined"
                defaultValue={10}
                size="small"
            />,
            Transfer: <TextField
                style={{ width: '70%', padding: '0px' }}
                name="noticeUsageLevel"
                variant="outlined"
                defaultValue={10}
                size="small"
            />,
            Other: <TextField
                style={{ width: '70%', padding: '0px' }}
                name="noticeUsageLevel"
                variant="outlined"
                defaultValue={10}
                size="small"
            />,

        },
    ];

    const columnConfig2 = [
        {
            id: "_Printer_Modal",
            fieldName: "_Printer_Modal",
            label: t("processPrinterModel"),
            canSort: true,
            render: (Rows2) => (
                <Typography variant="body1" style={{ textAlign: "center" }}>
                    {Rows2.Client}
                </Typography>
            ),
        },
        {
            id: "_Min",
            field: "_Min",
            label: t("processMin"),
            canSort: true,
            render: (Rows2) => (
                <Typography variant="body1" style={{ textAlign: "center" }}>
                    {Rows2.Min}
                </Typography>
            ),
        },
        {
            id: "_Max",
            field: "_Max",
            label: t("processMax"),
            canSort: true,
            render: (Rows2) => (
                <Typography variant="body1" style={{ textAlign: "center" }}>
                    {Rows2.Max}
                </Typography>
            ),
        },
    ]

    const Rows2 = [
        {
            id: 1,
            Client: 'ALL',
            Min: 0,
            Max: 0,
        },
    ]

    return (
        <>
            <div className="d-flex f-align-center f-justify-between mb-8">
                <Typography variant="h4">{t("Other Page")}</Typography>
            </div>
            <Paper>
                <table class="table tableBordered other-page-table-main">
                    <tbody>
                        <tr>
                            <td colspan="2">
                                <strong style={{ color: "black", fontSize: "16px" }}>{t('processManufacturer')}</strong>
                            </td>
                            <td>
                                <TextField
                                    style={{ width: '30%', padding: '0px' }}
                                    name="noticeUsageLevel"
                                    variant="outlined"
                                    defaultValue={"Samsung Electronics"}
                                    size="small"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <strong style={{ color: "black", fontSize: "16px" }}>{t('processModelType')}</strong>
                            </td>
                            <td>
                                <Select
                                    value={Department}
                                    onChange={updateDepartment}
                                    displayEmpty
                                    variant="outlined"
                                    style={{ height: "29px", width: "20%" }}
                                >
                                    <MenuItem value={0}>{t("processSelect")}</MenuItem>
                                    <MenuItem value={'MONO LASER'}>MONO LASER</MenuItem>
                                    <MenuItem value={'COLOR LASER'}>COLOR LASER</MenuItem>
                                    <MenuItem value={'MONO MFP'}>MONO MFP</MenuItem>
                                    <MenuItem value={'COLOR MFP'}>COLOR MFP</MenuItem>
                                    <MenuItem value={'PHOTO'}>PHOTO</MenuItem>
                                    <MenuItem value={'MONO INKJET'}>MONO INKJET</MenuItem>
                                    <MenuItem value={'COLOR INKJET'}>COLOR INKJET</MenuItem>
                                </Select>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <strong style={{ color: "black", fontSize: "16px" }}>{t('processSupplyType')}</strong>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <strong style={{ color: "black", fontSize: "16px" }}>{t('processDriver')}</strong>
                            </td>
                            <td>
                                <TextField
                                    style={{ width: '50%', padding: '0px' }}
                                    name="noticeUsageLevel"
                                    variant="outlined"
                                    defaultValue={""}
                                    size="small"
                                />
                                <Button variant="contained" className="browserBtn" color="primary"
                                > Browser </Button>
                                <br />
                                <a style={{ fontSize: '14px' }}>-Filename can be alphanumeric characters,'-' and '-'</a>
                                <br />
                                <input type="checkbox" />
                                Use Default Printer Driver
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <strong style={{ color: "black", fontSize: "16px" }}>{t('processDescription')}</strong>
                            </td>
                            <td>
                                <TextField
                                    style={{ width: '100%', padding: '0px' }}
                                    name="noticeUsageLevel"
                                    variant="outlined"
                                    defaultValue={""}
                                    size="small"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="2">
                                <strong style={{ color: "black", fontSize: "16px" }}>{t('processImage')}</strong>
                            </td>
                            <td>
                                <strong style={{ color: "black", fontSize: "16px" }}>{t('processFull-Size')}</strong>
                            </td>
                            <td>
                                <TextField
                                    style={{ width: '50%', padding: '0px' }}
                                    name="noticeUsageLevel"
                                    variant="outlined"
                                    defaultValue={""}
                                    size="small"
                                />
                                <Button variant="contained" className="browserBtn" color="primary"
                                > Browser </Button>
                                <br />
                                <input type="checkbox" />
                                Date Existing Image
                                <br />
                                <a style={{ fontSize: '14px' }}>-Filename can be alphanumeric characters,'-' and '-', image size shuld be less then </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong style={{ color: "black", fontSize: "16px" }}>{t('processReduced-Size')}</strong>
                            </td>

                            <td>
                                <TextField
                                    style={{ width: '50%', padding: '0px' }}
                                    name="noticeUsageLevel"
                                    variant="outlined"
                                    defaultValue={""}
                                    size="small"
                                />
                                <Button variant="contained" className="browserBtn" color="primary"
                                > Browser </Button>
                                <br />
                                <input type="checkbox" />
                                Date Existing Image
                                <br />
                                <a style={{ fontSize: '14px' }}>-Filename can be alphanumeric characters,'-' and '-', 65x65 pixle image size is appropriate. </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <h1 style={{ fontSize: '22px', color: '#7a5a5a' }} >{t('processModelConsumableThreshold')}</h1>
                <Paper elevation={4} style={{ marginTop: '20px' }}>
                    <Grid hasSelection={false} columns={columnConfig} rows={Rows} />
                </Paper>
                <br />
                <h1 style={{ fontSize: '22px', color: '#7a5a5a' }} >{t('processModelUsageThreshold')}</h1>
                <Paper elevation={4} style={{ marginTop: '20px' }}>
                    <Grid hasSelection={false} columns={columnConfig2} rows={Rows2} />
                </Paper>
            </Paper>
        </>
    );
};

export default OtherPage;