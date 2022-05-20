import React, { useState } from "react";
import "../view/style.css";
import Paper from "@material-ui/core/Paper";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import { useTranslation } from "react-i18next";
import { Button, MenuItem } from "@material-ui/core";

const Add = ({ setClosePopUp }) => {
    const [Department, setDepartment] = useState(0);
    const { t } = useTranslation();
    const updateDepartment = (event) => {
        setDepartment(event.target.value);
    };
    return (
        <>
            <Paper>
                <div className="AddMainDiv">
                    <div className="AddInnerDiv">
                        <div className="Heading">
                            {t('processAdd')}
                            <div className="AddcrossHeading"> <CloseIcon onClick={() => { setClosePopUp(false) }} style={{ cursor: 'pointer' }} /> </div>
                        </div>
                        <div className="popupmodelspacingarea">
                            <div className="AddDepartmentDiv">
                                <label className="AddDepartmentName"> <strong style={{ color: 'rgb(70, 68, 68)' }}>{t('processDepartmentName')}</strong></label>
                                <TextField
                                    className="AddDepartmentTextfield"
                                    name="noticeNoUse"
                                    variant="outlined"
                                    size="small"
                                />
                            </div>
                            <div className="AddDepartmentDiv">
                                <label className="AddDepartmentName"> <strong style={{ color: 'rgb(70, 68, 68)' }}>{t('processUpperDepartment')}</strong></label>
                                <Select
                                    className="AdddropDown"
                                    value={Department}
                                    onChange={updateDepartment}
                                    displayEmpty
                                    variant="outlined"
                                >
                                    <MenuItem value={0}>{t("processSelect")}</MenuItem>
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                </Select>
                            </div>
                            <div className="AddRemarkDiv">
                                <label className="AddRemark"> <strong style={{ color: 'rgb(70, 68, 68)' }}>{t('processRemark')}</strong></label>
                                <textarea className="AddTextarea" ></textarea>
                            </div>
                            <div className="AddButtonDiv">
                                <Button variant="contained" className="AddCloseBtn Addpagebtn" color="primary"
                                >{t('Close')} </Button>
                                <Button variant="contained" className="AddaddBtn Addpagebtn" color="primary"
                                >{t('processAdd')}</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Paper>
        </>
    );
};

export default Add;
