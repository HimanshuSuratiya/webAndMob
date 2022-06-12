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
    const [Authentication, setAuthentication] = useState(0);
    const updateAuthentication = (event) => {
        setAuthentication(event.target.value);
    };

    return (
        <>
            <div style={{ marginTop: '20px' }} className="d-flex f-align-center f-justify-between mb-8">
                <Typography variant="h4">{t("SMTP Setting")}</Typography>
            </div>
            <Paper elevation={4}>
                <div className="ServerMainDiv">
                    <div className="ServerMainInnerDiv">
                        <div className="ServerInnerDivs">
                            <strong >{t('SMTP Server IP * ')}</strong>
                            <TextField
                                style={{ width: '30%', padding: '0px' }}
                                name="noticeUsageLevel"
                                variant="outlined"
                                size="small"
                            />
                            <div className="RightDiv">
                                <label> <strong>SMPT Server Port *</strong></label>
                                <TextField
                                    style={{ width: '20%', padding: '0px', marginLeft: '5px' }}
                                    name="noticeUsageLevel"
                                    variant="outlined"
                                    size="small"
                                    defaultValue={25}
                                />
                            </div>
                        </div>
                        <div className="ServerInnerDivs">
                            <strong >{t('Authentication')}</strong>
                            <Select
                                value={Authentication}
                                onChange={updateAuthentication}
                                displayEmpty
                                variant="outlined"
                                style={{ height: "40px", width: "30%" }}
                            >
                                <MenuItem value={0}>{t("processSelect")}</MenuItem>
                                <MenuItem value={'Anonymous'}>Anonymous</MenuItem>
                                <MenuItem value={'6'}>6</MenuItem>
                                <MenuItem value={'12'}>12</MenuItem>
                                <MenuItem value={'18'}>18</MenuItem>
                            </Select>
                            <div className="RightDiv">
                                <Checkbox color="primary" />
                                <label><strong> SSL Port *</strong></label>
                                <TextField
                                    style={{ width: '20%', padding: '0px', marginLeft: '5px' }}
                                    name="noticeUsageLevel"
                                    variant="outlined"
                                    size="small"
                                    defaultValue={465}
                                />
                            </div>
                        </div>
                        <div className="ServerInnerDivs">
                            <strong >{t('ID')}</strong>
                            <TextField
                                style={{ width: '30%', padding: '0px' }}
                                name="noticeUsageLevel"
                                variant="outlined"
                                size="small"
                            />
                        </div>
                        <div className="ServerInnerDivs">
                            <strong >{t('Password')}</strong>
                            <TextField
                                style={{ width: '30%', padding: '0px' }}
                                name="noticeUsageLevel"
                                variant="outlined"
                                size="small"
                            />
                        </div>
                        <div className="ServerInnerDivs">
                            <strong >{t('Sender Address * ')}</strong>
                            <TextField
                                style={{ width: '30%', padding: '0px' }}
                                name="noticeUsageLevel"
                                variant="outlined"
                                size="small"
                                defaultValue={'Himanshu@gmail.com'}
                            />
                            <div className="RightDivTextLeft">
                                <h3 style={{ padding: '5px 0px 0px 20px', }}>( User_id@smtp_server.com )</h3>
                            </div>
                        </div>
                        <div className="SMPTRightDivButton">
                            <Button variant="contained" style={{ width: '10%' , margin: '7px 0px 0px 0px'}}
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

export default SMPTSettings;