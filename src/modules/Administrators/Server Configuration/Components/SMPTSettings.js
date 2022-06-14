import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import "../view/ServerStyle.css";
import Select from "@material-ui/core/Select";
import { Button, Checkbox, MenuItem } from "@material-ui/core";

const SMPTSettings = () => {
    const { t } = useTranslation();
    const [secure, setSecure] = useState(0);
    const updateSecure = (event) => {
        setSecure(event.target.value);
    };

    return (
        <>
            <div style={{ marginTop: '20px' }} className="d-flex f-align-center f-justify-between mb-8">
                <Typography variant="h4">{t("SMTP Setting")}</Typography>
            </div>
            <Paper elevation={4}>
                <div className="SMPTServerMainDiv">
                    <div className="SMPTInnerDivs">
                        <strong >{t('Email Server * ')}</strong>
                        <TextField
                            className="textfield"
                            style={{ width: '70%', padding: '0px' }}
                            name="noticeUsageLevel"
                            variant="outlined"
                            size="small"
                            defaultValue={'mail.myepsoft.com'}
                        />
                    </div>
                    <div className="SMPTInnerDivs">
                        <strong >{t('ID')}</strong>
                        <TextField
                            className="textfield"
                            style={{ width: '70%', padding: '0px' }}
                            name="noticeUsageLevel"
                            variant="outlined"
                            size="small"
                            defaultvalue={'developer7@myepsoft.com'}
                        />
                    </div>
                    <div className="SMPTInnerDivs">
                        <strong >{t('Password')}</strong>
                        <div className="passwordDiv">
                            <TextField
                                type="password"
                                className="passwordTextField textfield"
                                name="noticeUsageLevel"
                                variant="outlined"
                                size="small"
                                defaultValue={'HimanshuSuratiya'}
                            />
                            <TextField
                                type="password"
                                className="passwordTextField textfield"
                                name="noticeUsageLevel"
                                variant="outlined"
                                size="small"
                                defaultValue={'HimanshuSuratiya'}
                            />
                        </div>
                    </div>
                    <div className="SMPTInnerDivs">
                        <strong >{t('Default sender email * ')}</strong>
                        <TextField
                            className="textfield"
                            style={{ width: '70%', padding: '0px' }}
                            name="noticeUsageLevel"
                            variant="outlined"
                            size="small"
                            defaultvalue={'developer7@myepsoft.com'}
                        />
                    </div>
                    <div className="SMPTInnerDivs">
                        <strong >{t('Secure Type * ')}</strong>
                        <Select
                            className="textfield"
                            value={secure}
                            onChange={updateSecure}
                            displayEmpty
                            variant="outlined"
                            style={{ height: "40px", width: "70%" }}
                        >
                            <MenuItem value={0}>{t("processSelect")}</MenuItem>
                            <MenuItem value={1}>SSL</MenuItem>
                            <MenuItem value={2}>TLS</MenuItem>
                        </Select>
                    </div>
                    <div className="SMPTInnerDivs">
                        <strong >{t('Port Number * ')}</strong>
                        <TextField
                            className="textfield"
                            style={{ width: '70%', padding: '0px' }}
                            name="noticeUsageLevel"
                            variant="outlined"
                            size="small"
                            defaultValue={465}
                        />
                    </div>
                    <div className="SMPTInnerDivs">
                        <strong >{t('')}</strong>
                        <div className="passwordDiv">
                            <Button variant="contained" >Test</Button>
                            <Button variant="contained" >Save</Button>
                        </div>
                    </div>
                </div>
            </Paper>
        </>
    );
};

export default SMPTSettings;