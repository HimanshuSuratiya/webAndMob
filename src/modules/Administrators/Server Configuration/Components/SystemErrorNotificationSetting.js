import React, {useState}from "react";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import "../view/ServerStyle.css";
import { Checkbox, Button } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import { MenuItem } from "@material-ui/core";

const SystemErrorNotificationSetting = () => {
    const { t } = useTranslation();
    const [month, setMonth] = useState(0);
    const selectMonth = (event) => {
        setMonth(event.target.value)
    };

    return (
        <>
            <div style={{ marginTop: '20px' }} className="d-flex f-align-center f-justify-between mb-8">
                <Typography variant="h4">{t("System Error Notification Setting")}</Typography>
            </div>
            <Paper elevation={4}>
                <div className="CheckBoxServerMainDiv">
                    <div className="checkBoxServerMainInnerDiv">
                        <div className="ServerInnerDivs">
                            <p >{t('Manager in charge')}</p>
                            <TextField
                                style={{ width: '30%', padding: '0px' }}
                                name="noticeUsageLevel"
                                variant="outlined"
                                size="small"
                            />
                            <div style={{ width: '25%' }}>
                                <p style={{ padding: '5px 0px 0px 20px', width: '100%' }}> User_id@smtp_server.com </p>
                            </div>
                        </div>
                        <div className="ServerInnerDivs">
                            <p >{t('Period')}</p>
                            <Select
                                onChange={selectMonth}
                                displayEmpty
                                variant="outlined"
                                value={month}
                                style={{ height: "40px", width: "30%" }}
                            >
                                <MenuItem value={0}>{t("processSelect")}</MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={11}>11</MenuItem>
                                <MenuItem value={12}>12</MenuItem>
                            </Select>
                            <div style={{ width: '25%' }}>
                                <p style={{ padding: '5px 0px 0px 20px', width: '100%' }}> Hour(s)</p>
                            </div>
                        </div>
                        <div style={{ height: '300px', width: '100%', display: 'flex' }}>
                            <div className="checkBoxServerInnerDivs">
                                <p >{t('Notification Type')}</p>
                            </div>
                            <div className="checkboxDiv">
                                <Checkbox style={{ padding: '0px' }} color="primary" /><label><p style={{ paddingLeft: '8px' }}> Database Disconnected </p></label>
                                <Checkbox color="primary" /> <label><p> License Expired </p></label>
                                <Checkbox color="primary" /> <label><p> Process Stopped </p></label>
                                <Checkbox color="primary" /> <label><p> No Billing Information </p></label>
                                <Checkbox color="primary" /> <label><p> Process Ended Abnormally </p></label>
                            </div>
                        </div>
                        <div className="ButtonDiv">
                            <Button variant="contained" style={{ width: '10%'}}
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