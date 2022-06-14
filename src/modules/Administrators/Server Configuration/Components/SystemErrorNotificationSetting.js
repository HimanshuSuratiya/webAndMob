import React from "react";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import "../view/ServerStyle.css";
import { Checkbox, Button } from "@material-ui/core";

const SystemErrorNotificationSetting = () => {
    const { t } = useTranslation();

    return (
        <>
            <div style={{ marginTop: '20px' }} className="d-flex f-align-center f-justify-between mb-8">
                <Typography variant="h4">{t("System Error Notification Setting")}</Typography>
            </div>
            <Paper elevation={4}>
                <div className="CheckBoxServerMainDiv">
                    <div className="checkBoxServerMainInnerDiv">
                        <div className="ServerInnerDivs">
                            <strong >{t('Manager in charge')}</strong>
                            <TextField
                                style={{ width: '30%', padding: '0px' }}
                                name="noticeUsageLevel"
                                variant="outlined"
                                size="small"
                            />
                            <div className="RightDivTextLeft">
                                <h3 style={{ padding: '5px 0px 0px 20px', }}>( User_id@smtp_server.com  )</h3>
                            </div>
                        </div>
                        <div className="ServerInnerDivs">
                            <strong >{t('Period')}</strong>
                            <TextField
                                style={{ width: '30%', padding: '0px' }}
                                name="noticeUsageLevel"
                                variant="outlined"
                                size="small"
                            />
                            <div className="RightDivTextLeft">
                                <h3 style={{ padding: '5px 0px 0px 20px', }}>( Hour  )</h3>
                            </div>
                        </div>
                        <div style={{ height: '300px', width: '100%', display: 'flex' }}>
                            <div className="checkBoxServerInnerDivs">
                                <strong >{t('Notification Type')}</strong>
                            </div>
                            <div className="checkboxDiv">
                                <Checkbox style={{padding:'0px'}} color="primary" /> <label><strong> Database Disconnected </strong></label>
                                <Checkbox color="primary" /> <label><strong> License Expired </strong></label>
                                <Checkbox color="primary" /> <label><strong> Process Stopped </strong></label>
                                <Checkbox color="primary" /> <label><strong> No Billing Information </strong></label>
                                <Checkbox color="primary" /> <label><strong> Process Ended Abnormally </strong></label>
                            </div>
                        </div>
                        <div className="RightDivButton">
                            <Button variant="contained" style={{ width: '10%', margin: '12px 0px 10px 0px' }}
                            >
                                {t("Save")}
                            </Button>
                        </div>
                    </div>
                </div>
            </Paper>
        </>
    );
};

export default SystemErrorNotificationSetting;