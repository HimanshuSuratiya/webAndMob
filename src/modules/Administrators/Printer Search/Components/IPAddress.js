import React, {useState} from "react";
import "../view/style.css";
import Typography from "@material-ui/core/Typography";
import {useTranslation} from "react-i18next";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import {Button, MenuItem} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import InfoIcon from "@material-ui/icons/Info";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import InputAdornment from "@material-ui/core/InputAdornment";

const ipRegex =
  /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

const IPAddress = ({setPage}) => {
  const [Department, setDepartment] = useState(0);
  const {t} = useTranslation();
  const [startIpError, setStartIpError] = useState(false);
  const [endIpError, setEndIpError] = useState(false);
  const [firstTextfield ,setFirstTextfield] = useState('');
  const [secondTextfield ,setSecondTextfield] = useState('');
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
        <br/>
        <br/>
        <div>
          <label className="startIplabel">
            {t("processStartIp")}
            <strong>(*)</strong>
          </label>
          <TextField
            error={startIpError}
            variant="outlined"
            className="textField"
            size="small"
            label="IP Address"
            helperText={(startIpError?"IP Address is required.":'')}
            // pattern="^([0-9]{1,3}\.){3}[0-9]{1,3}$"
            onChange={(e) => {
              const isIpCorrect = ipRegex.test(e.target.value);
              setStartIpError(!isIpCorrect);
              setFirstTextfield(e.target.value)
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <div
                    style={{
                      width: 15,
                      height: 22,
                      color: startIpError ? "red" : "#35b803",
                    }}
                  >
                    {startIpError ? <InfoIcon/> : <CheckCircleOutlineIcon/>}
                  </div>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <br/>
        <div>
          <label className="EndIplabel">
            {t("processEndIp")}
            <strong>(*)</strong>
          </label>
          <TextField
            error={endIpError}
            variant="outlined"
            className="textField"
            color="yellow"
            size="small"
            label="IP Address"
            helperText={(endIpError?"IP Address is required.":'')}
            onChange={(e) => {
              const isIpCorrect = ipRegex.test(e.target.value);
              setEndIpError(!isIpCorrect);
              setSecondTextfield(e.target.value)
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <div
                    style={{
                      width: 15,
                      height: 22,
                      color: endIpError ? "red" : "#35b803",
                    }}
                  >
                    {endIpError ? <InfoIcon/> : <CheckCircleOutlineIcon/>}
                  </div>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <Button variant="contained" className="searchBtn" color="primary"
                disabled={(firstTextfield.length && secondTextfield.length && !endIpError && !startIpError)?false:true}
                onClick={() => setPage(2)}>
          {t("processSearchBtn")}
        </Button>
      </Paper>
    </>
  );
};

export default IPAddress;
