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
import { DialogActions, DialogContent, FormControlLabel, Checkbox, IconButton } from '@material-ui/core';
import useStyles from '../../../users/form/style';

const Add = ({ setClosePopUp }) => {
    const [Department, setDepartment] = useState(0);
    const [popUp, setPopUp] = useState(false)
    const { t } = useTranslation();
    const classes = useStyles();
    const updateDepartment = (event) => {
        setDepartment(event.target.value);
    };
    return (
        <>
            <Paper>
                <div className="AddMainDiv">
                    <div className="AddInnerDiv">
                        <DialogTitle>
                            <div className="d-flex f-align-center f-justify-between">
                                <Typography variant="h5">
                                    {t("Add")}
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
                            <label className="AddCustomLabel"><strong style={{ color: 'rgba(0, 0, 0, 0.87)' }}>{t("processUpperDepartment")}</strong></label>
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
                            <div className="p-4" style={{ position: 'absolute', bottom: '0px' }}>
                                <Button style={{ backgroundColor: '#e0e0e0' }} disabled={false} className="mr-4">
                                    {t('settingsCancel')}
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    disabled={false}
                                >
                                    {t('usersAdd')}
                                </Button>
                            </div>
                        </DialogActions>
                    </div>
                </div>
            </Paper>
        </>
    );
};

export default Add;