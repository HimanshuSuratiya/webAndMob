import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import { Grid } from "shared/components";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import "../view/SystemLogStyle.css";
import Select from "@material-ui/core/Select";
import { Button, Checkbox, MenuItem } from "@material-ui/core";

const ClientRegionBranchPrinter = () => {
    const { t } = useTranslation();
    const [client, setClient] = useState({
        first: '0',
        second: '0',
    });
    const selectClient = (event) => {
        const { value, name } = event.target;
        setClient((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            }
        })
    };
    return (
        <>
            <div className="d-flex f-align-center f-justify-between mb-8">
                <Typography variant="h4">{t("Client/Region/Branch/Printer")}</Typography>
            </div>
            <Paper elevation={4}>
                <div className="CRBPMainDiv">
                    <div className="CRBPMainInnerDivs">
                        <label><strong>Client :</strong></label>
                        <Select
                            onChange={selectClient}
                            displayEmpty
                            variant="outlined"
                            name="second"
                            value={client.second}
                            style={{ height: "40px", width: "25%", margin: '0px 10px', marginRight: '20%' }}
                        >
                            <MenuItem value={0}>{t("processSelect")}</MenuItem>
                            <MenuItem value={'All'}>All</MenuItem>
                            <MenuItem value={'6'}>6</MenuItem>
                            <MenuItem value={'12'}>12</MenuItem>
                            <MenuItem value={'18'}>18</MenuItem>
                        </Select>
                        <label><strong>ID :</strong></label>
                        <Select
                            onChange={selectClient}
                            displayEmpty
                            variant="outlined"
                            name="second"
                            value={client.second}
                            style={{ height: "40px", width: "25%", margin: '0px 10px' }}
                        >
                            <MenuItem value={0}>{t("processSelect")}</MenuItem>
                            <MenuItem value={'All'}>All</MenuItem>
                            <MenuItem value={'6'}>6</MenuItem>
                            <MenuItem value={'12'}>12</MenuItem>
                            <MenuItem value={'18'}>18</MenuItem>
                        </Select>
                    </div>
                    <div className="CRBPMainInnerDivs">
                        <label><strong>Region :</strong></label>
                        <Select
                            onChange={selectClient}
                            displayEmpty
                            variant="outlined"
                            name="second"
                            value={client.second}
                            style={{ height: "40px", width: "25%", margin: '0px 10px', marginRight: '20%' }}
                        >
                            <MenuItem value={0}>{t("processSelect")}</MenuItem>
                            <MenuItem value={'All'}>All</MenuItem>
                            <MenuItem value={'6'}>6</MenuItem>
                            <MenuItem value={'12'}>12</MenuItem>
                            <MenuItem value={'18'}>18</MenuItem>
                        </Select>
                        <label><strong>Period :</strong></label>
                        <Select
                            onChange={selectClient}
                            displayEmpty
                            variant="outlined"
                            name="second"
                            value={client.second}
                            style={{ height: "40px", width: "25%", margin: '0px 10px' }}
                        >
                            <MenuItem value={0}>{t("processSelect")}</MenuItem>
                            <MenuItem value={'All'}>All</MenuItem>
                            <MenuItem value={'6'}>6</MenuItem>
                            <MenuItem value={'12'}>12</MenuItem>
                            <MenuItem value={'18'}>18</MenuItem>
                        </Select>
                    </div>
                    <div className="CRBPMainInnerDivs">
                        <label><strong>Branch :</strong></label>
                        <Select
                            onChange={selectClient}
                            displayEmpty
                            variant="outlined"
                            name="second"
                            value={client.second}
                            style={{ height: "40px", width: "25%", margin: '0px 10px', marginRight: '20%' }}
                        >
                            <MenuItem value={0}>{t("processSelect")}</MenuItem>
                            <MenuItem value={'All'}>All</MenuItem>
                            <MenuItem value={'6'}>6</MenuItem>
                            <MenuItem value={'12'}>12</MenuItem>
                            <MenuItem value={'18'}>18</MenuItem>
                        </Select>
                        <label><strong></strong></label>
                        <TextField
                            id="date"
                            style={{ margin: '0px 4px', width: '12.5%' }}
                            label="Start_Date"
                            type="date"
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="date"
                            style={{ margin: '0px 4px', width: '13%' }}
                            label="End_Date"
                            type="date"
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                    <div className="CRBPMainInnerDivs2">
                        <label><strong>S/N :</strong></label>
                        <Select
                            onChange={selectClient}
                            displayEmpty
                            variant="outlined"
                            name="second"
                            value={client.second}
                            style={{ height: "40px", width: "25%", margin: '0px 10px', marginRight: '20%' }}
                        >
                            <MenuItem value={0}>{t("processSelect")}</MenuItem>
                            <MenuItem value={'All'}>All</MenuItem>
                            <MenuItem value={'6'}>6</MenuItem>
                            <MenuItem value={'12'}>12</MenuItem>
                            <MenuItem value={'18'}>18</MenuItem>
                        </Select>
                    </div>
                </div>
            </Paper>
        </>
    );
};

export default ClientRegionBranchPrinter;