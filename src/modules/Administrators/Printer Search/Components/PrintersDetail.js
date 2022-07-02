import React, { useState } from "react";
import "../view/PrinterSearchstyle.css";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import "../../../../shared/Shared.css";
import { Divider } from '@material-ui/core';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'

const EndDefaultDate = () => {
  const currentyear = new Date().getFullYear();
  const newAddDate = new Date()
  newAddDate.setFullYear(currentyear + 1)
  return newAddDate
}

const PrintersDetail = () => {
  const [startContract, setStartContract] = useState(new Date());
  const [endcontract, setEndContract] = useState(EndDefaultDate());
  const { t } = useTranslation();

  const handleChange = (newValue: Date | null) => {
    setStartContract(newValue);
  };

  const handleChangeEnd = (newValue: Date | null) => {
    setEndContract(newValue)
  };

  return (
    <>
      <div className="d-flex f-align-center f-justify-between mb-8">
        <Typography variant="h4">{t("processPrintersDetail")}</Typography>
      </div>
      <Paper elevation={4} className="p-4">
        <div className='wraplayout'>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
          <Divider className="mt-6 mb-6" />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label={t("Start of contract")}
                inputFormat="MM/dd/yyyy"
                value={startContract}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label={t("Contract Termination")}
                inputFormat="MM/dd/yyyy"
                value={endcontract}
                onChange={handleChangeEnd}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
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

export default PrintersDetail;
