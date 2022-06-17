import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import "../view/AgentStyle.css";

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
                    <div className="divideDiv">
                        <div className="innerDivs"></div>
                        <div className="innerDivs" style={{ borderRadius: '5px', backgroundColor: '#e0e0e0' }}>
                            <div className="TextNameDesignName"> Name </div>
                            <div className="TextNameDesignIP"> IP </div>
                            <div className="TextNameDesignHostName"> HostName </div>
                        </div>
                        <div className="innerDivs" style={{ border: '1px solid gray', borderRadius: '5px' }}>
                            <p style={{ width: '15%', marginLeft: '5px', display: 'flex', height: '100%', alignItems: 'center', borderRight: '2px solid gray' }}> &nbsp; Selexp &nbsp;</p>
                            <p style={{ width: '15%', marginLeft: '5px', display: 'flex', height: '100%', alignItems: 'center', borderRight: '2px solid gray' }}> &nbsp; Selexp &nbsp;</p>
                        </div>
                        <div className="innerDivs" style={{ border: '1px solid gray', borderRadius: '5px' }}>
                            <p style={{ width: '15%', marginLeft: '5px', display: 'flex', height: '100%', alignItems: 'center', borderRight: '2px solid gray' }}> &nbsp; Selexp &nbsp;</p>
                            <p style={{ width: '15%', marginLeft: '5px', display: 'flex', height: '100%', alignItems: 'center', borderRight: '2px solid gray' }}> &nbsp; Selexp &nbsp;</p>
                        </div>
                    </div>
                    <div className="divideDiv">
                        <div className="innerDivs">
                            <BackupTableIcon />
                            <p style={{ marginLeft: '12px' }}>Assigned Department</p>
                            <Button
                                className="AgentAddDiv"
                                variant="contained"
                                onClick={() => { setPopUp(true) }}
                            >
                                <AddIcon />
                                Add
                            </Button>
                        </div>
                        <div className="innerDivs" style={{ borderRadius: '5px', backgroundColor: '#e0e0e0' }}>
                            <div className="TextNameDesignName"> ID </div>
                            <div className="TextNameDesignIP"> Name </div>
                        </div>
                        <div className="innerDivs" style={{ border: '1px solid gray', borderRadius: '5px' }}>
                            <p style={{ width: '15%', marginLeft: '5px', display: 'flex', height: '100%', alignItems: 'center', borderRight: '2px solid gray' }}> &nbsp; Selexp &nbsp;</p>
                            <p style={{ width: '15%', marginLeft: '5px', display: 'flex', height: '100%', alignItems: 'center', borderRight: '2px solid gray' }}> &nbsp; Selexp &nbsp;</p>
                            <Button
                                className="AgentDeleteDiv"
                                variant="contained"
                            >
                                Delete
                            </Button>
                        </div>
                        <div className="innerDivs" style={{ border: '1px solid gray', borderRadius: '5px' }}>
                            <p style={{ width: '15%', marginLeft: '5px', display: 'flex', height: '100%', alignItems: 'center', borderRight: '2px solid gray' }}> &nbsp; Selexp &nbsp;</p>
                            <p style={{ width: '15%', marginLeft: '5px', display: 'flex', height: '100%', alignItems: 'center', borderRight: '2px solid gray' }}> &nbsp; Selexp &nbsp;</p>
                            <Button
                                className="AgentDeleteDiv"
                                variant="contained"
                            >
                                Delete
                            </Button>
                        </div>
                        <div className="innerDivs" style={{ borderRadius: '5px', backgroundColor: '#e0e0e0', height: '60px' }}>
                            <p style={{ width: '15%', marginLeft: '5px', display: 'flex', height: '100%', alignItems: 'center', borderRight: '2px solid gray' }}> &nbsp; Admin &nbsp;</p>
                            <p style={{ width: '15%', marginLeft: '5px', display: 'flex', height: '100%', alignItems: 'center', borderRight: '2px solid gray' }}> &nbsp; Admin &nbsp;</p>
                            <Button
                                className="AgentDeleteDiv"
                                variant="contained"
                            >
                                Delete
                            </Button>
                        </div>
                    </div>
                </div>
            </Paper>
        </>
    );
};

export default AssignGroup;