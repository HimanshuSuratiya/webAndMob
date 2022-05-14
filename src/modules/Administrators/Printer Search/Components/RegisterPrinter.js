import React, { useState } from "react";
import "../view/style.css";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import { Button, MenuItem } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

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
          <label className="formlabel">{t("processLocation")}</label>
          <TextField
            name="noticeUsageLevel"
            fullWidth
            variant="outlined"
            size="small"
          />
          <label className="formlabel">{t("processPrinterinformation")}</label>
          <TextField
            name="noticeNoUse"
            fullWidth
            variant="outlined"
            size="small"
            label={t("Brother MFC-LS700DW services")}
          />
          <label
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              marginTop: "12px",
              display: "block",
            }}
          >
            {t("processContract")}
          </label>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "48%" }}>
              <label className="formlabel" style={{ display: "block" }}>
                {t("processStartDate")}
              </label>
              <TextField
                name="noticeNoUse"
                variant="outlined"
                fullWidth
                type="date"
                size="small"
              />
            </div>
            <div style={{ width: "48%" }}>
              <label className="formlabel" style={{ display: "block" }}>
                {t("processEndDate")}
              </label>
              <TextField
                name="noticeNoUse"
                variant="outlined"
                fullWidth
                type="date"
                size="small"
              />
            </div>
          </div>
          <div className="d-flex f-align-center pt-5">
            <Button
              fullWidth
              className="mr-10"
              size="large"
              color="primary"
              variant="contained"
            >
              {t("settingsSave")}
            </Button>
            <Button variant="outlined" fullWidth className="ml-10" size="large">
              {t("settingsCancel")}
            </Button>
          </div>
        </div>
      </Paper>
    </>
  );
};

export default RegisterPrinter;
