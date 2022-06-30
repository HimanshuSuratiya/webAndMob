import React, { useState } from "react";
import '../view/Groupstyle.css'
import Select from "@material-ui/core/Select";
import { Button, MenuItem, Paper } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import TextField from "@material-ui/core/TextField";
import { Grid } from "shared/components";
import Typography from "@material-ui/core/Typography";
import Add from '../Components/Add';
import "../../../../shared/Shared.css";

const Department = () => {
  const [Department, setDepartment] = useState(0);
  const [popUp, setPopUp] = useState(false)
  const { t } = useTranslation();
  const updateDepartment = (event) => {
    setDepartment(event.target.value);
  };
  const columnConfig = [
    {
      id: "_Department",
      fieldName: "_Department",
      label: t("processDepartment"),
      canSort: true,
      render: (Rows) => (
        <Typography variant="body1" style={{ textAlign: "center" }}>
          {Rows.Department}
        </Typography>
      ),
    },
    {
      id: "_UpperDepartment",
      field: "_UpperDepartment",
      label: t("processUpperDepartment"),
      canSort: true,
      render: (Rows) => (
        <Typography variant="body1" style={{ textAlign: "center" }}>
          {Rows.UpperDepartment}
        </Typography>
      ),
    },
    {
      id: "_Remark",
      fieldName: "_Remark",
      label: t("processRemark"),
      canSort: true,
      render: (Rows) => (
        <Typography variant="body1" style={{ textAlign: "center" }}>
          {Rows.Remark}
        </Typography>
      ),
    },
    {
      id: "_RegistrationDate",
      field: "_RegistrationDate",
      label: t("processRegistrationDate"),
      canSort: true,
      render: (Rows) => (
        <Typography variant="body1" style={{ textAlign: "center" }}>
          {Rows.RegistrationDate}
        </Typography>
      ),
    },
  ];

  const Rows = [
    {
      id: 1,
      Department: '본사',
      UpperDepartment: "",
      Remark: "",
      RegistrationDate: '2021-02-18',
    },
    {
      id: 2,
      Department: 'okProbe',
      UpperDepartment: "okProbe 2",
      Remark: "WebsiteGroup",
      RegistrationDate: '	2021-03-24',
    },
    {
      id: 3,
      Department: 'Smart',
      UpperDepartment: "",
      Remark: "",
      RegistrationDate: '2021-03-24',
    },
    {
      id: 4,
      Department: 'C',
      UpperDepartment: "B",
      Remark: "Chat Group",
      RegistrationDate: '2022-06-15',
    },
  ];
  return (
    <>
      <div className="DepartMainDiv">
        <div className="DepartField">
          <a className="commonTextPadding">{t('processShow')}</a>
          <Select
            className="FirstDropDown"
            value={Department}
            onChange={updateDepartment}
            displayEmpty
            variant="outlined"
            style={{ height: "40px", marginLeft: '2px', minWidth:'70px' }}
          >
            <MenuItem value={0}>{t("20")}</MenuItem>
            <MenuItem value={'50'}>50</MenuItem>
            <MenuItem value={'100'}>100</MenuItem>
            <MenuItem value={'200'}>200</MenuItem>
          </Select>
          <a className="commonTextPadding">{t('processEntries')}</a>
          <a className="commonTextPadding">{t('processSearch')}</a>
          <TextField
            style={{marginLeft:'4px'}}
            className="SearchTextField"
            name="noticeUsageLevel"
            variant="outlined"
            defaultValue={""}
            size="small"
          />
        </div>
        <div className="DepartButtons" >
          <Button variant="contained" className="btn mr-2 Btn-Color" onClick={() => { setPopUp(true) }}>{t('processAdd')}</Button>
          <Button variant="contained" className="btn Btn-Color" >{t('processDelete')} </Button>
        </div>
      </div>
      <br />
      <br />
      <Paper elevation={4}>
        <Grid columns={columnConfig} rows={Rows} />
      </Paper>
      {popUp ? <Add setClosePopUp={setPopUp} /> : ''}
    </>
  );
};

export default Department;
