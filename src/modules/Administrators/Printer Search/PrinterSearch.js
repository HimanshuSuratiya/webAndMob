import React, { useState } from "react";
import "./style.css";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import Select from "@material-ui/core/Select";
import { Button, MenuItem } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const PrinterSearch = () => {
  const [Department, setDepartment] = useState(0);
  const { t } = useTranslation();

  const updateDepartment = (event) => {
    setDepartment(event.target.value);
  };

  return (
    <>
      <div className="d-flex f-align-center f-justify-between mb-8">
        <Typography variant="h4">{t("sidebarPrinterSearch")}</Typography>
      </div>
      <Paper elevation={4} className="p-4">
        <div>
          <label>Agent</label>
          <Select
            className="dropDown"
            value={Department}
            onChange={updateDepartment}
            displayEmpty
            variant="outlined"
          >
            <MenuItem value={0}>Select</MenuItem>
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
            <MenuItem value={4}>Four</MenuItem>
          </Select>
        </div>
        <br />
        <br />
        <div className="startIp">
          <label className="startIplabel">Start IP</label>
          <TextField
            name="noticeNoUse"
            variant="outlined"
            className="textField"
            size="small"
          />
          <strong>-</strong>
          <TextField
            name="noticeNoUse"
            variant="outlined"
            className="textField"
            size="small"
          />
          <strong>-</strong>
          <TextField
            name="noticeNoUse"
            variant="outlined"
            className="textField"
            size="small"
          />
          <strong>-</strong>
          <TextField
            name="noticeNoUse"
            variant="outlined"
            className="textField"
            size="small"
          />
        </div>
        <br />
        <br />
        <div className="startIp">
          <label className="EndIplabel">End IP</label>
          <TextField
            name="noticeNoUse"
            variant="outlined"
            className="textField"
            size="small"
          />
          <strong>-</strong>
          <TextField
            name="noticeNoUse"
            variant="outlined"
            className="textField"
            size="small"
          />
          <strong>-</strong>
          <TextField
            name="noticeNoUse"
            variant="outlined"
            className="textField"
            size="small"
          />
          <strong>-</strong>
          <TextField
            name="noticeNoUse"
            variant="outlined"
            className="textField"
            size="small"
          />
        </div>
        <Button variant="contained" className="searchBtn" color="primary">
          {t("processSearchBtn")}
        </Button>
      </Paper>
    </>
  );
};

export default PrinterSearch;
