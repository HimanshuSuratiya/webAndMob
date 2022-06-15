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
                            <p>{t('Fault Manage Cycle')}</p>
                            <Select
                                onChange={selectManage}
                                displayEmpty
                                variant="outlined"
                                name="fault"
                                value={manageCycle.fault}
                                style={{ height: "40px", width: "15%" }}
                            >
                                <MenuItem value={0}>{t("processSelect")}</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={11}>11</MenuItem>
                                <MenuItem value={12}>12</MenuItem>
                            </Select>
                            <div>
                                <p style={{ padding: '5px 0px 0px 20px', }}> Month(s) </p>
                            </div>
                        </div>
                        <div className="ServerInnerDivs">
                            <p>{t('Usage Manage Cycle')}</p>
                            <Select
                                onChange={selectManage}
                                displayEmpty
                                variant="outlined"
                                name="usage"
                                value={manageCycle.usage}
                                style={{ height: "40px", width: "15%" }}
                            >
                                <MenuItem value={0}>{t("processSelect")}</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={11}>11</MenuItem>
                                <MenuItem value={12}>12</MenuItem>
                                <MenuItem value={13}>13</MenuItem>
                                <MenuItem value={14}>14</MenuItem>
                                <MenuItem value={15}>15</MenuItem>
                                <MenuItem value={16}>16</MenuItem>
                                <MenuItem value={17}>17</MenuItem>
                                <MenuItem value={18}>18</MenuItem>
                                <MenuItem value={19}>19</MenuItem>
                                <MenuItem value={20}>20</MenuItem>
                                <MenuItem value={21}>21</MenuItem>
                                <MenuItem value={22}>22</MenuItem>
                                <MenuItem value={23}>23</MenuItem>
                                <MenuItem value={24}>24</MenuItem>
                            </Select>
                            <div>
                                <p style={{ padding: '5px 0px 0px 20px', }}> Month(s) </p>
                            </div>
                        </div>
                        <div className="ServerInnerDivs">
                            <p >{t('Consumable Manage Cycle')}</p>
                            <Select
                                onChange={selectManage}
                                displayEmpty
                                variant="outlined"
                                name="consumable"
                                value={manageCycle.consumable}
                                style={{ height: "40px", width: "15%" }}
                            >
                                <MenuItem value={0}>{t("processSelect")}</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={11}>11</MenuItem>
                                <MenuItem value={12}>12</MenuItem>
                            </Select>
                            <div>
                                <p style={{ padding: '5px 0px 0px 20px', }}> Month(s) </p>
                            </div>
                        </div>
                        <div className="ServerInnerDivs">
                            <p >{t('DB Backup Manage Cycle')}</p>
                            <Select
                                onChange={selectManage}
                                displayEmpty
                                variant="outlined"
                                name="dbBackup"
                                value={manageCycle.dbBackup}
                                style={{ height: "40px", width: "15%" }}
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
                            <div>
                                <p style={{ padding: '5px 0px 0px 20px', }}> Month(s) </p>
                            </div>
                        </div>
                        <div className="ServerInnerDivs">
                            <p >{t('Index Rebuild Manage Cycle')}</p>
                            <Select
                                onChange={selectManage}
                                displayEmpty
                                variant="outlined"
                                name="index"
                                value={manageCycle.index}
                                style={{ height: "40px", width: "15%" }}
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
                            <div>
                                <p style={{ padding: '5px 0px 0px 20px', }}> Month(s) </p>
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

export default ServerSettings;