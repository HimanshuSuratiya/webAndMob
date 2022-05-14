import React, { useState } from "react";
import "../view/style.css";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import { Button, MenuItem } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import InfoIcon from "@material-ui/icons/Info";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import InputAdornment from "@material-ui/core/InputAdornment";

const IPAddress = () => {
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
          <label className="agent">{t("processagent")}</label>
          <Select
            className="dropDown"
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
        <br />
        <br />
        <div>
          <label className="startIplabel">
            {t("processIpAddress")}
            <strong>(*)</strong>
          </label>
          <TextField
            error={true}
            variant="outlined"
            className="textField"
            size="small"
            label="IP Address"
            helperText="IP Address is required."
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <div style={{ width: 15, height: 22, color: "red" }}>
                    <InfoIcon />
                  </div>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <br />
        <div>
          <label className="EndIplabel">
            {t("processIpAddress")}
            <strong>(*)</strong>
          </label>
          <TextField
            variant="outlined"
            className="textField endIp"
            color="sucess"
            label="192.168.1.101"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <div style={{ width: 15, height: 22, color: "#35b803" }}>
                    <CheckCircleOutlineIcon />
                  </div>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <Button variant="contained" className="searchBtn" color="primary">
          {t("processSearchBtn")}
        </Button>
      </Paper>
    </>
  );
};

export default IPAddress;
