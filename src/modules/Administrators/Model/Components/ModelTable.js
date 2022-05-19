import React, { useEffect, useState } from "react";
import { Grid } from "shared/components";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import Paper from "@material-ui/core/Paper";
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';


const ModelTable = () => {
    const { t } = useTranslation();
    const columnConfig = [
        {
            id: "_Type",
            fieldName: "_Type",
            label: t("processType"),
            canSort: true,
            render: (Rows) => (
                <Typography variant="body1" style={{ textAlign: "center" }}>
                    {Rows.Type}
                </Typography>
            ),
        },
        {
            id: "_Name",
            field: "_Name",
            label: t("processName"),
            canSort: true,
            render: (Rows) => (
                <Typography variant="body1" style={{ textAlign: "center" }}>
                    {Rows.Name}
                </Typography>
            ),
        },
        {
            id: "_Manufacturer",
            fieldName: "_Manufacturer",
            label: t("processManufacturer"),
            canSort: true,
            render: (Rows) => (
                <Typography variant="body1" style={{ textAlign: "center" }}>
                    {Rows.Manufacturer}
                </Typography>
            ),
        },
        {
            id: "no_Of_Priners",
            field: "no_Of_Priners",
            label: t("processNoOfPriners"),
            canSort: true,
            render: (Rows) => (
                <Typography variant="body1" style={{ textAlign: "center" }}>
                    {Rows.Noofprinters}
                </Typography>
            ),
        },
        {
            id: "download_Driver",
            field: "download_Driver",
            label: t("processDownloadDriver"),
            canSort: true,
            render: (Rows) => (
                <>
                    <Typography variant="body1" style={{ textAlign: "center", backgroundColor: '', display: 'flex', justifyContent: 'center' }}>
                        {Rows.DownloadDriver}
                        <div style={{ height: 22, width: 25, marginLeft: '7px', cursor: 'pointer' }}>
                            <CloudDownloadIcon />
                        </div>
                    </Typography>
                </>
            ),
        },
    ];

    const Rows = [
        {
            id: 1,
            Type: 'COLOR LASER',
            Name: "CLP-35INK",
            Manufacturer: "Samsung Electronic",
            Noofprinters: 6,
            DownloadDriver: "Download",
        },
        {
            id: 2,
            Type: 'COLOR LASER',
            Name: "CLP-510",
            Manufacturer: "Samsung Electronic",
            Noofprinters: 2,
            DownloadDriver: "Download",
        },
        {
            id: 3,
            Type: 'COLOR MFP',
            Name: "CLP-611NDK",
            Manufacturer: "Samsung Electronic",
            Noofprinters: 0,
            DownloadDriver: "Download",
        },
        {
            id: 4,
            Type: 'MONO LASER',
            Name: "ML-2550",
            Manufacturer: "Samsung Electronic",
            Noofprinters: 12,
            DownloadDriver: "Download",
        },
        {
            id: 5,
            Type: 'INK JET',
            Name: "CLX-6250 Series",
            Manufacturer: "Samsung Electronic",
            Noofprinters: 9,
            DownloadDriver: "Download",
        },
        {
            id: 6,
            Type: 'COLOR LASER',
            Name: "CLP-35INK",
            Manufacturer: "Samsung Electronic",
            Noofprinters: 0,
            DownloadDriver: "Download",
        },
        {
            id: 7,
            Type: 'COLOR LASER',
            Name: "ML-3472",
            Manufacturer: "Samsung Electronic",
            Noofprinters: 3,
            DownloadDriver: "Download",
        },
    ];
    return (
        <>
            <div className="d-flex f-align-center f-justify-between mb-8">
                <Typography variant="h4">{t("Model Table")}</Typography>
            </div>
            <Paper elevation={4}>
                <Grid columns={columnConfig} rows={Rows} />
            </Paper>
        </>
    );
};

export default ModelTable;