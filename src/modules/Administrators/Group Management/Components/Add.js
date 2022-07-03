import React, { useState } from "react";
import '../view/Groupstyle.css'
import Paper from "@material-ui/core/Paper";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import { useTranslation } from "react-i18next";
import { Button, MenuItem } from "@material-ui/core";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Divider } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { DialogActions, DialogContent, IconButton } from '@material-ui/core';

const Add = ({ setClosePopUp }) => {
    const [Department, setDepartment] = useState(0);
    const { t } = useTranslation();
    const updateDepartment = (event) => {
        setDepartment(event.target.value);
    };
    return (
        <>
            <Paper>
                <div style={{ position: 'fixed', zIndex: '1300', inset: '0px' }}>
                    <div className="MuiBackdrop-root">
                        <div className="MuiDialog-container MuiDialog-scrollPaper" style={{ width: '100%', height: '100%', backgroundColor:'' }}>
                            <div style={{ height: '560px' }} className="MuiPaper-root MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthSm MuiPaper-elevation24 MuiPaper-rounded setWidth">
                                <DialogTitle>
                                    <div className="d-flex f-align-center f-justify-between">
                                        <Typography variant="h5">
                                            {t("Modify")}
                                        </Typography>
                                        <IconButton>
                                            <CloseIcon onClick={() => { setClosePopUp(false) }} />
                                        </IconButton>
                                    </div>
                                </DialogTitle>
                                <Divider />
                                <DialogContent className="mt-4">
                                    <TextField
                                        style={{ marginBottom: '10px' }}
                                        fullWidth
                                        label={t('processDepartmentName')}
                                        name="email"
                                        variant="outlined"
                                    />
                                    <label className="AddCustomLabel"><p style={{ color: 'rgba(0, 0, 0, 0.87)', margin:'0px', marginBottom:'2px'}}>{t("processUpperDepartment")}</p></label>
                                    <Select
                                        value={Department}
                                        onChange={updateDepartment}
                                        displayEmpty
                                        variant="outlined"
                                        style={{ height: "56px", width: "100%" }}
                                    >
                                        <MenuItem value={0}>{t("processSelect")}</MenuItem>
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                    </Select>
                                    <TextareaAutosize
                                        style={{ width: '100%', marginTop: '30px', borderRadius: '5px', fontSize: '14px' }}
                                        aria-label="minimum height"
                                        minRows={7}
                                        placeholder="Remark"
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <div className="p-4">
                                        <Button style={{ backgroundColor: '#e0e0e0' }} disabled={false} className="mr-4" onClick={() => { setClosePopUp(false) }}>
                                            {t('settingsCancel')}
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            disabled={false}
                                        >
                                            {t('Modify')}
                                        </Button>
                                    </div>
                                </DialogActions>
                            </div>
                        </div>
                    </div>
                </div>
            </Paper>
        </>
    );
};

export default Add;