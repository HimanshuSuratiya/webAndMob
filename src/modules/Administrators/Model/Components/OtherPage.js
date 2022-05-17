import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import PrinterImage from "../Image/printer1.png";
import Paper from "@material-ui/core/Paper";
import "../view/style.css";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import { Button, MenuItem } from "@material-ui/core";

const OtherPage = () => {
    const { t } = useTranslation();
    const [Department, setDepartment] = useState(0);
    const updateDepartment = (event) => {
        setDepartment(event.target.value);
    };

    return (
        <>
            <div className="d-flex f-align-center f-justify-between mb-8">
                <Typography variant="h4">{t("Other Page")}</Typography>
            </div>
            <Paper>
                <table class="table tableBordered ">
                    <tbody>
                        <tr>
                            <td colspan="2">
                                <strong style={{ color: "black", fontSize: "16px" }}>{t('Manufacturer')}</strong>
                            </td>
                            <td>
                                <TextField
                                    style={{width:'30%'}}
                                    name="noticeUsageLevel"
                                    variant="outlined"
                                    defaultValue={"Samsung Electronics"}
                                    size="small"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <strong style={{ color: "black", fontSize: "16px" }}>{t('processModelType')}</strong>
                            </td>
                            <td>
                                <Select
                                    value={Department}
                                    onChange={updateDepartment}
                                    displayEmpty
                                    variant="outlined"
                                    style={{ height: "25px", width: "30%" }}
                                >
                                    <MenuItem value={0}>{t("processSelect")}</MenuItem>
                                    <MenuItem value={'MONO LASER'}>MONO LASER</MenuItem>
                                    <MenuItem value={'COLOR LASER'}>COLOR LASER</MenuItem>
                                    <MenuItem value={'MONO MFP'}>MONO MFP</MenuItem>
                                    <MenuItem value={'COLOR MFP'}>COLOR MFP</MenuItem>
                                    <MenuItem value={'PHOTO'}>PHOTO</MenuItem>
                                    <MenuItem value={'MONO INKJET'}>MONO INKJET</MenuItem>
                                    <MenuItem value={'COLOR INKJET'}>COLOR INKJET</MenuItem>
                                </Select>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <strong style={{ color: "black", fontSize: "16px" }}>{t('processSupplyType')}</strong>
                            </td>
                            <td>LASER OR INK</td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <strong style={{ color: "black", fontSize: "16px" }}>{t('processDriver')}</strong>
                            </td>
                            <td>NEED TO BE UPLOADED FILE</td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <strong style={{ color: "black", fontSize: "16px" }}>{t('processDescription')}</strong>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowspan="2">
                                <strong style={{ color: "black", fontSize: "16px" }}>{t('processImage')}</strong>
                            </td>
                            <td>
                                <strong style={{ color: "black", fontSize: "16px" }}>{t('processFull-Size')}</strong>
                            </td>
                            <td>
                                <div class="printer1Img">
                                    <img src={PrinterImage} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong style={{ color: "black", fontSize: "16px" }}>{t('processReduced-Size')}</strong>
                            </td>

                            <td>
                                <div class="reducedsize">
                                    <img src={PrinterImage} />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Paper>
        </>
    );
};

export default OtherPage;