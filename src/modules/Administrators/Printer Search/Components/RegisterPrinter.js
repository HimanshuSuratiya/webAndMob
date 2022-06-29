import React, { useState } from "react";
import "../view/PrinterSearchstyle.css";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import { Button, MenuItem } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import "../../../../shared/Shared.css"; 

const RegisterPrinter = () => {
  const [Department, setDepartment] = useState(0);
  const { t } = useTranslation();

  const updateDepartment = (event) => {
    setDepartment(event.target.value);
  };

  return (
    <>
      <div className="d-flex f-align-center f-justify-between mb-8">
        <Typography variant="h4">{t("processRegisterPrinter")}</Typography>
      </div>
      <Paper elevation={4} className="p-4">
        <div className="wraplayout">
          <label className="formlabel">{t("processDepartmentName")}</label>
          <Select
            value={Department}
            onChange={updateDepartment}
            displayEmpty
            variant="outlined"
            style={{ height: "44px", width: "100%" }}
          >
            <MenuItem value={0}>{t("processSelect")}</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
          <label className="formlabel mt-4">{t("processLocation")}</label>
          <TextField
            name="noticeUsageLevel"
            fullWidth
            variant="outlined"
            size="small"
          />
          <label className="formlabel mt-4">{t("processPrinterinformation")}</label>
          <TextField
            name="noticeNoUse"
            fullWidth
            variant="outlined"
            size="small"
            label={t("Brother MFC-LS700DW services")}
          />
          <div className="mt-4" style={{ height: '25px', width: '100%', display: 'flex' }}>
            <label className="formlabel" style={{ display: "block", width: '55%' }}>
              {t("processStartDate")}
            </label>
            <label className="formlabel" style={{ display: "block", width: '45%' }}>
              {t("processEndDate")}
            </label>
          </div>
          <TextField
            name="noticeNoUse"
            variant="outlined"
            style={{ width: '45%', marginRight: '10%' }}
            type="date"
            size="small"
          />
           <TextField
            name="noticeNoUse"
            variant="outlined"
            style={{ width: '45%' }}
            type="date"
            size="small"
          />
          <div className="d-flex f-align-center pt-5">
            <Button variant="outlined" fullWidth className="mr-10" size="large">
              {t("settingsCancel")}
            </Button>
            <Button
              fullWidth
              className="ml-10 Btn-Color"
              size="large"
              variant="contained"
            >
              {t("settingsSave")}
            </Button>
          </div>
        </div>
      </Paper>
    </>
  );
};

export default RegisterPrinter;
