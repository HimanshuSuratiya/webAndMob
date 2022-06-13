import React, { useState } from "react";
import "../view/AgentMonitoringStyle.css"
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import { Button, Checkbox, MenuItem } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const Client = () => {
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
            <Paper elevation={4}>
                <div className="clientMainDiv">
                    <div className="clientInnerDiv">
                        <label><strong>Client :</strong></label>
                        <Select
                            onChange={selectClient}
                            displayEmpty
                            variant="outlined"
                            name="first"
                            value={client.first}
                            style={{ height: "40px", width: "30%", margin: '0px 10px' }}
                        >
                            <MenuItem value={0}>{t("processSelect")}</MenuItem>
                            <MenuItem value={'All'}>All</MenuItem>
                            <MenuItem value={'6'}>6</MenuItem>
                            <MenuItem value={'12'}>12</MenuItem>
                            <MenuItem value={'18'}>18</MenuItem>
                        </Select>
                        <Select
                            onChange={selectClient}
                            displayEmpty
                            variant="outlined"
                            name="second"
                            value={client.second}
                            style={{ height: "40px", width: "30%", margin: '0px 10px' }}
                        >
                            <MenuItem value={0}>{t("processSelect")}</MenuItem>
                            <MenuItem value={'All'}>All</MenuItem>
                            <MenuItem value={'6'}>6</MenuItem>
                            <MenuItem value={'12'}>12</MenuItem>
                            <MenuItem value={'18'}>18</MenuItem>
                        </Select>
                        <Button variant="contained">Search</Button>
                    </div>
                    <div className="otherDiv" >
                        <Checkbox color="primary" style={{ padding: '0px 0px' }} />
                        <p>Show stopped process only. </p>
                    </div>
                </div>
            </Paper>
        </>
    );
};

export default Client;