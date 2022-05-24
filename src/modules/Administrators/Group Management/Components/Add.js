import React, { useState } from "react";
import '../view/Groupstyle.css'
import Paper from "@material-ui/core/Paper";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import { useTranslation } from "react-i18next";
import { Button, MenuItem } from "@material-ui/core";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const Add = ({ setClosePopUp }) => {
    const [Department, setDepartment] = useState(0);
    const [popUp, setPopUp] = useState(false)
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
                                <TextField
                                    className="AddDepartmentTextfield"
                                    fullWidth
                                    name="noticeNoUse"
                                    variant="outlined"
                                    size="small"
                                    label={t("Department Name")}
                                />
                            </div>
                            <label className="upperDepartmentlabel"><strong style={{ color: 'rgba(0, 0, 0, 0.87)' }}>{t("processUpperDepartment")}</strong></label>
                            <div className="AddUpperDepartmentDiv">
                                <Select
                                    value={Department}
                                    onChange={updateDepartment}
                                    displayEmpty
                                    variant="outlined"
                                    style={{ height: "44px", width: "94%" }}
                                >
                                    <MenuItem value={0}>{t("processSelect")}</MenuItem>
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                </Select>
                            </div>
                            <div className="RemarkDiv">
                                <TextareaAutosize
                                    className="RemarkTextfield"
                                    aria-label="minimum height"
                                    minRows={8}
                                    placeholder="Remark"
                                    style={{ width: 200 }}
                                />
                            </div>
                            <div className="AddButtonDiv">
                                <Button className="mr-4">
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
                        </div>
                    </div>
                </div>
            </Paper>
        </>
    );
};

export default Add;
