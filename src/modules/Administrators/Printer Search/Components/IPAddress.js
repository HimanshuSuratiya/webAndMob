import React, { useState } from "react";
import "../view/PrinterSearchstyle.css";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import { Button, Checkbox, MenuItem } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import InfoIcon from "@material-ui/icons/Info";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Link } from "react-router-dom";
import Items from "./Items";

const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-4]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

const noop = () => { };
const IPAddress = ({ match, getUnassignDeviceCount = noop }) => {
  const [Department, setDepartment] = useState(0);
  const { t } = useTranslation();
  const [startIpError, setStartIpError] = useState(false);
  const [endIpError, setEndIpError] = useState(false);
  const [firstSecondPartError, setFirstSecondPartError] = useState(false);
  const [firstTextfield, setFirstTextfield] = useState('');
  const [secondTextfield, setSecondTextfield] = useState('');
  const [showPaperAndData, setShowPaperAndData] = useState(false);
  const checkSecondIpWRTFirstIp = (ip) => {
    const firstIP = firstTextfield
    const secondIp = ip
    const firstIPArr = firstIP.split('.')
    const secondIPArr = secondIp.split('.')
    const isFirstPartSame = firstIPArr[0] === secondIPArr[0]
    const isSecondPartSame = firstIPArr[1] === secondIPArr[1]
    const isThirdPartGreater = firstIPArr[2] <= secondIPArr[2]
    const isForthPartCorrect = firstIPArr[2] < secondIPArr[2] || (firstIPArr[2] === secondIPArr[2] && firstIPArr[3] <= secondIPArr[3])
    const isAllOk = isFirstPartSame && isSecondPartSame && isThirdPartGreater && isForthPartCorrect
    return isAllOk
  }

  const fetchData = (firstIPAddress, secondIPAddress) => {
    return fetch(`http://ep20210201.iptime.org:38765/gateway/printer-discovery/printers/collect-ip?startip=${firstIPAddress}&endip=${secondIPAddress}`,
      {
        method: 'GET',
        mode: 'no-cors',
        credentials: 'include',
        headers: {
          'Authorization': 'Basic ZXBzb2Z0OlByaW50ZXJEaXNjb3Zlcnkh'
        }
      });
  }

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
            {t("processStartIp")}
            <strong style={{color:'red'}}>(*)</strong>
          </label>
          <TextField
            error={startIpError}
            variant="outlined"
            className="textField"
            size="small"
            label="IP Address"
            helperText={(startIpError ? "IP Address is required." : '')}
            onChange={(e) => {
              const isIpCorrect = ipRegex.test(e.target.value);
              setStartIpError(!isIpCorrect);
              setFirstTextfield(e.target.value);
              setShowPaperAndData(false);
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
                    {startIpError ? <InfoIcon /> : <CheckCircleOutlineIcon />}
                  </div>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <br />
        <div>
          <label className="EndIplabel">
            {t("processEndIp")}
            <strong style={{color:'red'}}>(*)</strong>
          </label>
          <TextField
            error={endIpError || firstSecondPartError}
            variant="outlined"
            className="textField"
            color="yellow"
            size="small"
            label="IP Address"
            helperText={(endIpError ? "IP Address is required." : firstSecondPartError ? 'Make sure first 2 parts are same and end IP is greater' : '')}
            onChange={(e) => {
              const isIpCorrect = ipRegex.test(e.target.value);
              const isSecondIpCorrect = checkSecondIpWRTFirstIp(e.target.value)
              setFirstSecondPartError(!isSecondIpCorrect)
              setEndIpError(!isIpCorrect);
              setSecondTextfield(e.target.value);
              setShowPaperAndData(false);
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
                    {endIpError ? <InfoIcon /> : <CheckCircleOutlineIcon />}
                  </div>
                </InputAdornment>
              ),
            }}
          />
          <span style={{ color: 'red' }}><Checkbox color="primary" /> <span style={{ color: 'rgba(0, 0, 0, 0.87)', fontSize: '16px', fontWeight: 'bold' }}>Auto</span></span>
        </div>
        {/* <Link to={`${match.path}/search-result`}> */}
        <Button variant="contained" className="searchBtn" color="primary"
          disabled={(!showPaperAndData && firstTextfield.length && !firstSecondPartError && secondTextfield.length && !endIpError && !startIpError) ? false : true} onClick={() => { fetchData(firstTextfield, secondTextfield); setShowPaperAndData(!showPaperAndData); }}
        >
          {t("processSearchBtn")}
        </Button>
        {/* </Link> */}
        <Items setShowPaperAndData={showPaperAndData}/>
      </Paper>
    </>
  );
};

export default IPAddress;
