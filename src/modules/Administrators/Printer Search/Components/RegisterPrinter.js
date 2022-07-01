import React from "react";
import "../view/PrinterSearchstyle.css";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import Paper from "@material-ui/core/Paper";
import { Button, MenuItem } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import "../../../../shared/Shared.css";
import { Divider } from '@material-ui/core';

const RegisterPrinter = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="d-flex f-align-center f-justify-between mb-8">
        <Typography variant="h4">{t("processRegisterPrinter")}</Typography>
      </div>
      <Paper elevation={4} className="p-4">
        <div className='wraplayout'>
          <TextField
            name="noticeNoUse"
            fullWidth
            variant="outlined"
            size="small"
            label={t("Printer Model")}
            value="Brother MFC-LS700DW services"
          />
          <TextField
            name="noticeNoUse"
            className='mt-6'
            fullWidth
            variant="outlined"
            size="small"
            label={t("Serial Number")}
            value="RJF9800293"
          />
          <Divider className="mt-6" />
          <div className="mt-6" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <TextField
              name='noticeNoUse'
              style={{ width: '80%' }}
              fullWidth
              variant='outlined'
              size='small'
              label={t('Department Name')}
            />
            <Button style={{ minWidth: '90px', marginLeft: '5px' }} className="Btn-Color" variant="contained">Select</Button>
          </div>
          <TextField
            name="noticeNoUse"
            className='mt-6'
            fullWidth
            variant="outlined"
            size="small"
            label={t("Location")}
          />
          <TextField
            name="noticeNoUse"
            fullWidth
            className="mt-6"
            variant="outlined"
            size="small"
            label={t("Printer Information")}
            value="Brother MFC-LS700DW services"
          />
          <Divider className="mt-6" />
          <TextField
            name="noticeNoUse"
            className="mt-6"
            variant="outlined"
            style={{ width: '45%', marginRight: '10%' }}
            type="date"
            label={t("Start of contract")}
            size="small"
          />
          <TextField
            name="noticeNoUse"
            className="mt-6"
            variant="outlined"
            style={{ width: '45%' }}
            type="date"
            label={t("Contract Termination")}
            size="small"
          />
          <TextField
            name="noticeNoUse"
            fullWidth
            className="mt-6"
            variant="outlined"
            size="small"
            label={t("Memo")}
          />
          <div className="d-flex f-align-center mt-6">
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
