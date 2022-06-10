import React from "react";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import "../view/AgentConfigurationStyle.css"

const MaxThreadCount = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="d-flex f-align-center f-justify-between mb-8">
                <Typography variant="h4">{t("Max Thread Count for Local Agent CommandManager")}</Typography>
            </div>
            <Paper elevation={4}>
                <div className="AgentCollectorMainDiv">
                    <div className="AgentCollectorInnerDivs">
                        <strong >{t('Command Manager Max Thread Count')}</strong>
                        <TextField
                            style={{ width: '30%', padding: '0px' }}
                            name="noticeUsageLevel"
                            variant="outlined"
                            size="small"
                            defaultValue={5}
                        />
                    </div>
                    <div className="RightDivButton">
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

export default MaxThreadCount