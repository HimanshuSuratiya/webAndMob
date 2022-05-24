import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import Paper from "@material-ui/core/Paper";
import "./Licensestyle.css";
import TextField from "@material-ui/core/TextField";
import { Button, MenuItem } from "@material-ui/core";
import ImportKeypopUp from "../Components/ImportKeypopup";

const defaultState = {
    key: '',
    setActivation: 'none',
    createDownload: true,
}

const License = () => {
    const [state, setState] = useState(defaultState)
    const [popUp, setPopUp] = useState(false)
    const { t } = useTranslation();
    const Data = {
        status: 'License Activated',
        ApplicationKey: `${state.key}`,
        ExpireDate: '2023-12-24',
        CustomerDisplayName: 'TEST11',
        Email: 'yoon20@myepsoft.com',
        Contact: 'TEST11',
        NoofDevices: '555',
    }
    const createKey = () => {
        setState(prevState => ({
            ...prevState,
            key: 'MPYB6-Y2PG2-KJJB7-8MMRJ-PQR6Y-JHJTM-JHJTM',
            setActivation: 'block',
            createDownload: false,
        }));
    }

    return (
        <>
            <div className="d-flex f-align-center f-justify-between mb-8">
                <Typography variant="h4">{t("License")}</Typography>
            </div>
            <Paper>
                <div className="mainDivLicense">
                    <div className="StatusDiv">
                        <TextField
                            className="StatusTextfield"
                            name="noticeNoUse"
                            variant="outlined"
                            size="small"
                            value={Data.status}
                            label={t("Status")}
                        />
                        <Button variant="contained" className="return" color="primary" onClick={() => { setPopUp(true) }} style={{ display: `${state.setActivation}` }}
                        >{t('Activate')} </Button>
                    </div>
                    <div className="Applicationkey">
                        <TextField
                            className="StatusTextfield"
                            name="noticeNoUse"
                            variant="outlined"
                            size="small"
                            value={Data.ApplicationKey}
                            label={t("Application Key")}
                        />
                        {state.createDownload ? <Button variant="contained" className="return" color="primary" onClick={() => createKey()}
                        >{t('Create')} </Button> : <Button variant="contained" className="return" color="primary" onClick={() => createKey()}
                        >{t('Download')} </Button>}
                    </div>
                    <div className="TextfieldDiv">
                        <TextField
                            className="Textfield"
                            name="noticeNoUse"
                            variant="outlined"
                            size="small"
                            value={Data.ExpireDate}
                            label={t("Expire Date")}
                        />
                    </div>
                    <div className="TextfieldDiv">
                        <TextField
                            className="Textfield"
                            name="noticeNoUse"
                            variant="outlined"
                            size="small"
                            value={Data.CustomerDisplayName}
                            label={t("Customer Display Name * ")}
                        />
                    </div>
                    <div className="TextfieldDiv">
                        <TextField
                            className="Textfield"
                            name="noticeNoUse"
                            variant="outlined"
                            size="small"
                            value={Data.Email}
                            label={t("Email * ")}
                        />
                    </div>
                    <div className="TextfieldDiv">
                        <TextField
                            className="Textfield"
                            name="noticeNoUse"
                            variant="outlined"
                            size="small"
                            value={Data.Contact}
                            label={t("Contact * ")}
                        />
                    </div>
                    <br />
                    <hr style={{ margin: '0px 0px' }} />
                    <h5 style={{ fontSize: '15px' }} className="label">{t("Funtions / Options Subjects")}</h5>
                    <div className="TextfieldDiv">
                        <TextField
                            className="Textfield"
                            name="noticeNoUse"
                            variant="outlined"
                            size="small"
                            value={Data.NoofDevices}
                            label={t("No of Devices")}
                        />
                    </div>
                    <div className="BtnDiv">
                    </div>
                </div>
            </Paper>
            {popUp ? <ImportKeypopUp setClosePopUp={setPopUp} /> : ''}
        </>
    );
};

export default License;