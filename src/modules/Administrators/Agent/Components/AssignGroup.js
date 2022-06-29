import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import "../view/AgentStyle.css";
import DepartmentSearch from "./DepartmentSearch";
import "../../../../shared/Shared.css";

const AssignGroup = () => {
    const [popUp, setPopUp] = useState(false)
    const { t } = useTranslation();
    return (
        <>
            <div className="d-flex f-align-center f-justify-between mb-8">
                <Typography variant="h4">{t("Assign Group")}</Typography>
            </div>
            <Paper elevation={4}>
                <div className="divideParentDiv">
                    <div className="divideDiv1">
                        <div className="innerDivs">
                            <BackupTableIcon />
                            <p style={{ marginLeft: '12px' }}>Agent</p>
                        </div>
                        <div class="agent-table-main-area">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th class="ip-border-main-area">IP</th>
                                        <th>Hostname</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Selexp</td>
                                        <td>Selexp</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Selexp</td>
                                        <td>Selexp</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="divideDiv2">
                        <div className="innerDivs">
                            <BackupTableIcon />
                            <p style={{ marginLeft: '12px' }}>Assigned Department</p>
                            <Button
                                className="AgentAddDiv Btn-Color"
                                variant="contained"
                                onClick={() => { setPopUp(!popUp) }}
                            >
                                <AddIcon />
                                Add
                            </Button>
                        </div>
                        <div class="agent-table-main-area SecondDiv">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th class="ip-border-main-area-2">Name</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Selexp</td>
                                        <td>Selexp</td>
                                        <td className="btntd">
                                            <Button
                                                className="AgentDeleteDiv"
                                                variant="contained"
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Selexp</td>
                                        <td>Selexp</td>
                                        <td className="btntd">
                                            <Button
                                                className="AgentDeleteDiv"
                                                variant="contained"
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr >
                                        <td>Group C</td>
                                        <td>Group C</td>
                                        <td className="btntd">
                                            <Button
                                                className="AgentDeleteDiv"
                                                variant="contained"
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Paper>
            {popUp ? <DepartmentSearch setClosePopUp={setPopUp}/> : ''}
        </>
    );
};

export default AssignGroup;