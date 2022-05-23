import React from "react";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import Paper from "@material-ui/core/Paper";
import "./Licensestyle.css";
import TextField from "@material-ui/core/TextField";
import { Button, MenuItem } from "@material-ui/core";

const License = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="d-flex f-align-center f-justify-between mb-8">
                <Typography variant="h4">{t("License")}</Typography>
            </div>
            <hr />
            <Paper>
                <div className="mainDivLicense">
                    <div className="StatusDiv">
                        <label className="Status">{t("Status")}</label>
                        <TextField
                            className="StatusTextfield"
                            name="noticeNoUse"
                            variant="outlined"
                            size="small"
                            label={t("License Activated")}
                        />
                        <Button variant="contained" className="return" color="primary"
                        >{t('Return')} </Button>
                    </div>
                    <div className="Applicationkey">
                        <label className="Status">{t("Application Key")}</label>
                        <TextField
                            className="StatusTextfield"
                            name="noticeNoUse"
                            variant="outlined"
                            size="small"
                            label={t("MPYB6-Y2PG2-KJJB7-8MMRJ-PQR6Y-JHJTM-JHJTM")}
                        />
                    </div>
                    <div className="ExpireDateDiv">
                        <label className="Status">{t("Expire Date")}</label>
                        <TextField
                            className="ExpireDateTextfield"
                            name="noticeNoUse"
                            variant="outlined"
                            size="small"
                            label={t("2023-12-24")}
                        />
                    </div>
                    <div className="ExpireDateDiv">
                        <label className="Status">{t("Customer Display Name *")}</label>
                        <TextField
                            className="ExpireDateTextfield"
                            name="noticeNoUse"
                            variant="outlined"
                            size="small"
                            label={t("TEST11")}
                        />
                    </div>
                    <div className="ExpireDateDiv">
                        <label className="Status">{t("Email *")}</label>
                        <TextField
                            className="ExpireDateTextfield"
                            name="noticeNoUse"
                            variant="outlined"
                            size="small"
                            label={t("yoon20@myepsoft.com")}
                        />
                    </div>
                </div>
            </Paper>
        </>
    );
};

export default License;