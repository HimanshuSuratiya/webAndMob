import React , { useState }from "react";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import "../view/AgentConfigurationStyle.css"
import Select from "@material-ui/core/Select";
import { Button, MenuItem } from "@material-ui/core";

const PollingCycle = () => {
    const { t } = useTranslation();
    const [minute, setMinute] = useState(0);
    const selectMinute = (event) => {
        setMinute(event.target.value);
    };
    return (
        <>
            <div className="d-flex f-align-center f-justify-between mb-8">
                <Typography variant="h4">{t("Polling Cycle for Local Agent Remote Request")}</Typography>
            </div>
            <Paper elevation={4}>
                <div className="AgentCollectorMainDiv">
                    <div className="AgentCollectorInnerDivs">
                        <p >{t('Remote Daemon Cycle')}</p>
                        <Select
                            onChange={selectMinute}
                            displayEmpty
                            variant="outlined"
                            value={minute}
                            style={{ height: "40px", width: "15%" }}
                        >
                            <MenuItem value={0}>{t("processSelect")}</MenuItem>
                            <MenuItem value={6}>10</MenuItem>
                            <MenuItem value={7}>60</MenuItem>
                            <MenuItem value={8}>120</MenuItem>
                            <MenuItem value={9}>180</MenuItem>
                            <MenuItem value={10}>240</MenuItem>
                            <MenuItem value={11}>300</MenuItem>
                            <MenuItem value={12}>360</MenuItem>
                        </Select>
                        <div>
                            <p style={{ padding: '5px 0px 0px 20px', }}> Minute(s) </p>
                        </div>
                    </div>
                    <div className="ButtonDiv">
                        <Button variant="contained" style={{ width: '10%' }}
                        >
                            {t("Save")}
                        </Button>
                    </div>
                </div>
            </Paper>
            <br />
        </>
    );
};

export default PollingCycle