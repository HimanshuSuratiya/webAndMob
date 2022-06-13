import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import "../view/ServerStyle.css";
import Select from "@material-ui/core/Select";
import { Button, MenuItem } from "@material-ui/core";

const ServerSettings = () => {
    const { t } = useTranslation();
    const [manageCycle, setManageCycle] = useState({
        fault: '0',
        usage: '0',
        consumable: '0',
        dbBackup: '0',
        index: '0',
    });
    const selectManage = (event) => {
        const { value, name } = event.target;
        setManageCycle((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            }
        })
    };
    return (
        <>
            <div className="d-flex f-align-center f-justify-between mb-8">
                <Typography variant="h4">{t("Database Manage Cycle (Month)")}</Typography>
            </div>
            <Paper elevation={4}>
                <div className="ServerMainDiv">
                    <div className="ServerMainInnerDiv">
                        <div className="ServerInnerDivs">
                            <strong >{t('Fault Manage Cycle')}</strong>
                            <Select
                                onChange={selectManage}
                                displayEmpty
                                variant="outlined"
                                name="fault"
                                value={manageCycle.fault}
                                style={{ height: "40px", width: "30%" }}
                            >
                                <MenuItem value={0}>{t("processSelect")}</MenuItem>
                                <MenuItem value={'1'}>1</MenuItem>
                                <MenuItem value={'6'}>6</MenuItem>
                                <MenuItem value={'12'}>12</MenuItem>
                                <MenuItem value={'18'}>18</MenuItem>
                            </Select>
                        </div>
                        <div className="ServerInnerDivs">
                            <strong >{t('Usage Manage Cycle')}</strong>
                            <Select
                                onChange={selectManage}
                                displayEmpty
                                variant="outlined"
                                name="usage"
                                value={manageCycle.usage}
                                style={{ height: "40px", width: "30%" }}
                            >
                                <MenuItem value={0}>{t("processSelect")}</MenuItem>
                                <MenuItem value={'1'}>1</MenuItem>
                                <MenuItem value={'6'}>6</MenuItem>
                                <MenuItem value={'12'}>12</MenuItem>
                                <MenuItem value={'18'}>18</MenuItem>
                            </Select>
                        </div>
                        <div className="ServerInnerDivs">
                            <strong >{t('Consumable Manage Cycle')}</strong>
                            <Select
                                onChange={selectManage}
                                displayEmpty
                                variant="outlined"
                                name="consumable"
                                value={manageCycle.consumable}
                                style={{ height: "40px", width: "30%" }}
                            >
                                <MenuItem value={0}>{t("processSelect")}</MenuItem>
                                <MenuItem value={'1'}>1</MenuItem>
                                <MenuItem value={'6'}>6</MenuItem>
                                <MenuItem value={'12'}>12</MenuItem>
                                <MenuItem value={'18'}>18</MenuItem>
                            </Select>
                        </div>
                        <div className="ServerInnerDivs">
                            <strong >{t('DB Backup Manage Cycle')}</strong>
                            <Select
                                onChange={selectManage}
                                displayEmpty
                                variant="outlined"
                                name="dbBackup"
                                value={manageCycle.dbBackup}
                                style={{ height: "40px", width: "30%" }}
                            >
                                <MenuItem value={0}>{t("processSelect")}</MenuItem>
                                <MenuItem value={'1'}>1</MenuItem>
                                <MenuItem value={'6'}>6</MenuItem>
                                <MenuItem value={'12'}>12</MenuItem>
                                <MenuItem value={'18'}>18</MenuItem>
                            </Select>
                        </div>
                        <div className="ServerInnerDivs">
                            <strong >{t('Index Rebuild Manage Cycle')}</strong>
                            <Select
                                onChange={selectManage}
                                displayEmpty
                                variant="outlined"
                                name="index"
                                value={manageCycle.index}
                                style={{ height: "40px", width: "30%" }}
                            >
                                <MenuItem value={0}>{t("processSelect")}</MenuItem>
                                <MenuItem value={'1'}>1</MenuItem>
                                <MenuItem value={'6'}>6</MenuItem>
                                <MenuItem value={'12'}>12</MenuItem>
                                <MenuItem value={'18'}>18</MenuItem>
                            </Select>
                        </div>
                        <div className="RightDivButton">
                            <Button variant="contained" style={{ width: '10%',margin:'7px 0px 0px 0px' }}
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

export default ServerSettings;