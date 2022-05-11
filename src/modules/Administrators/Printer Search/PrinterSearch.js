import React, { useState } from "react";
import "./style.css";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import Select from "@material-ui/core/Select";
import { Button, MenuItem } from "@material-ui/core";
import { Grid } from "shared/components";
import TextField from "@material-ui/core/TextField";
import InfoIcon from '@material-ui/icons/Info';

const PrinterSearch = () => {
  const [Department, setDepartment] = useState(0);
  const [page, setPage] = useState(0);
  const { t } = useTranslation();

  const updateDepartment = (event) => {
    setDepartment(event.target.value);
  };

  const columnConfig = [
    {
      id: "check_Box",
      fieldName: "check_Box",
      label: t(""),
    },
    {
      id: "s_No",
      fieldName: "s_No",
      label: t("processNo"),
      canSort: true,
      render: (Rows) => (
        <Typography variant="body1" style={{ textAlign: "center" }}>
          {Rows.sNo}
        </Typography>
      ),
    },
    {
      id: "printer_Model",
      field: "printer_Model",
      label: t("processPrinterModel"),
      canSort: true,
      render: (Rows) => (
        <Typography variant="body1" style={{ textAlign: "center" }}>
          {Rows.serialnumber}
        </Typography>
      ),
    },
    {
      id: "serial_Number",
      fieldName: "serial_Number",
      label: t("processSerialNumber"),
      canSort: true,
      render: (Rows) => (
        <Typography variant="body1" style={{ textAlign: "center" }}>
          {Rows.modelname}
        </Typography>
      ),
    },
    {
      id: "Ip",
      field: "Ip",
      label: t("processIp"),
      canSort: true,
      render: (Rows) => (
        <Typography variant="body1" style={{ textAlign: "center" }}>
          {Rows.ip}
        </Typography>
      ),
    },
    {
      id: "host_Name",
      field: "host_Name",
      label: t("processHostName"),
      canSort: true,
      render: (Rows) => (
        <Typography variant="body1" style={{ textAlign: "center" }}>
          {Rows.printername}
        </Typography>
      ),
    },
    {
      id: "Status_Id",
      fieldName: "Status_Id",
      label: t("processStatus"),
      canSort: true,
      render: (Rows) => (
        <Typography variant="body1" style={{ textAlign: "center" }}>
          {Rows.status}
        </Typography>
      ),
    },
  ];

  const Rows = [
    {
      sNo: 1,
      serialnumber: 'Samsung x 4300 Series',
      modelname: 'SEC30CDA7634013',
      ip: '192,168,1,233',
      printername: 'Samsung',
      status: 'complete'

    },
    {
      sNo: 2,
      serialnumber: 'Samsung x 4300 Series',
      modelname: 'SEC30CDA7634013',
      ip: '192,168,1,233',
      printername: 'Samsung',
      status: 'Incomplete'
    },
    {
      sNo: 3,
      serialnumber: 'Samsung x 4300 Series',
      modelname: 'SEC30CDA7634013',
      ip: '192,168,1,233',
      printername: 'Samsung',
      status: 'complete'
    },
    {
      sNo: 4,
      serialnumber: 'Samsung x 4300 Series',
      modelname: 'SEC30CDA7634013',
      ip: '192,168,1,233',
      printername: 'Samsung',
      status: 'Incomplete'
    },
    {
      sNo: 5,
      serialnumber: 'Samsung x 4300 Series',
      modelname: 'SEC30CDA7634013',
      ip: '192,168,1,233',
      printername: 'Samsung',
      status: 'complete'
    },
  ]

  if (page === 0) {
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
              <MenuItem value={0}>{t('processSelect')}</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
            </Select>
          </div>
          <br />
          <br />
          <div>
            <label className="startIplabel">{t("processIpAddress")}<strong>(*)</strong></label>
            <TextField
              error
              variant="outlined"
              className="textField"
              size="small"
              label="IP Address"
              helperText="IP Address is required."
            />
          </div>
          <br />
          <div>
            <label className="EndIplabel">{t("processIpAddress")}<strong>(*)</strong></label>
            <TextField
              variant="outlined"
              className="textField endIp"
              color="sucess"
              label="192.168.1.101"
              size="small"
            />
          </div>
          <Button variant="contained" onClick={() => { setPage(1) }} className="searchBtn" color="primary">
            {t("processSearchBtn")}
          </Button>
        </Paper>
      </>
    );
  }
  if (page === 1) {
    return (
      <>
        <div className="d-flex f-align-center f-justify-between mb-8">
          <Typography variant="h4">{t("processSearchResult")}</Typography>
        </div>
        <Paper elevation={4}>
          <Grid columns={columnConfig} rows={Rows} />
        </Paper>
        <div className="divBtn">
          <Button variant="contained" color="primary" onClick={() => { setPage(3) }} style={{ marginRight: '20px', }} type="submit">{t('processRegisterBtn')}</Button>
          <Button variant="contained" color="danger" style={{ marginRight: '20px', }} type="submit">{t('processDeleteBtn')}</Button>
        </div>
      </>
    )
  }
  if (page === 3) {
    return (
      <>
        <div className='d-flex f-align-center f-justify-between mb-8'>
          <Typography variant='h4'>
            {t('processRegisterPrinter')}
          </Typography>
        </div>
        <Paper elevation={4} className='p-4'>
          <div className='wraplayout'>
            <label className="formlabel">{t('processDepartmentName')}</label>
            <Select value={Department} onChange={updateDepartment} displayEmpty variant="outlined" style={{ height: '44px', width: '100%' }}>
              <MenuItem value={0} >{t('processSelect')}</MenuItem>
              <MenuItem value={1} >1</MenuItem>
              <MenuItem value={2} >2</MenuItem>
              <MenuItem value={3} >3</MenuItem>
              <MenuItem value={4} >4</MenuItem>
              <MenuItem value={5} >5</MenuItem>
            </Select>
            <label className="formlabel">{t('processLocation')}</label>
            <TextField
              name='noticeUsageLevel'
              fullWidth
              variant='outlined'
              size='small'
            />
            <label className="formlabel">{t('processPrinterinformation')}</label>
            <TextField
              name='noticeNoUse'
              fullWidth
              variant='outlined'
              size='small'
              label={t('Brother MFC-LS700DW services')}
            />
            <label style={{ fontWeight: 'bold', fontSize: '16px', marginTop: '12px', display: 'block' }} >{t('processContract')}</label>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ width: '48%' }}>
                <label className="formlabel" style={{ display: 'block' }}>{t('processStartDate')}</label>
                <TextField
                  name='noticeNoUse'
                  variant='outlined'
                  fullWidth
                  type="date"
                  size='small'
                />
              </div>
              <div style={{ width: '48%' }}>
                <label className="formlabel" style={{ display: 'block' }}>{t('processEndDate')}</label>
                <TextField
                  name='noticeNoUse'
                  variant='outlined'
                  fullWidth
                  type="date"
                  size='small'
                />
              </div>
            </div>
            <div className='d-flex f-align-center pt-5'>
              <Button
                fullWidth
                className='mr-10'
                size='large'
                color='primary'
                variant='contained'
                onClick={() => { setPage(4) }}
              >
                {t('settingsSave')}
              </Button>
              <Button
                variant='outlined'
                fullWidth
                className='ml-10'
                size='large'
              >
                {t('settingsCancel')}
              </Button>
            </div>
          </div>
        </Paper>
      </>
    )
  }
  if (page === 4) {
    return (
      <>
        <div className='d-flex f-align-center f-justify-between mb-8'>
          <Typography variant='h4'>
            {t('processPrintersDetail')}
          </Typography>
        </div>
        <Paper elevation={4} className='p-4'>
          <div className='wraplayout'>
            <label className="formlabel">{t('processDepartmentName')}</label>
            <Select value={Department} onChange={updateDepartment} displayEmpty variant="outlined" style={{ height: '44px', width: '100%' }}>
              <MenuItem value={0} >{t('processSelect')}</MenuItem>
              <MenuItem value={1} >1</MenuItem>
              <MenuItem value={2} >2</MenuItem>
              <MenuItem value={3} >3</MenuItem>
              <MenuItem value={4} >4</MenuItem>
              <MenuItem value={5} >5</MenuItem>
            </Select>
            <label className="formlabel">{t('processLocation')}</label>
            <TextField
              name='noticeUsageLevel'
              fullWidth
              variant='outlined'
              size='small'
            />
            <label style={{ fontWeight: 'bold', fontSize: '16px', marginTop: '12px', display: 'block' }} >{t('processContract')}</label>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ width: '48%' }}>
                <label className="formlabel" style={{ display: 'block' }}>{t('processStartDate')}</label>
                <TextField
                  name='noticeNoUse'
                  variant='outlined'
                  fullWidth
                  type="date"
                  size='small'
                />
              </div>
              <div style={{ width: '48%' }}>
                <label className="formlabel" style={{ display: 'block' }}>{t('processEndDate')}</label>
                <TextField
                  name='noticeNoUse'
                  variant='outlined'
                  fullWidth
                  type="date"
                  size='small'
                />
              </div>
            </div>
            <label className="formlabel">{t('processMemo')}</label>
            <TextField
              name='noticeNoUse'
              className='mt-2'
              fullWidth
              variant='outlined'
              size='small'
              label={t('Test to memo')}
            />
            <div className='d-flex f-align-center pt-5'>
              <Button
                fullWidth
                className='mr-10'
                size='large'
                color='primary'
                variant='contained'
                onClick={() => { setPage(4) }}
              >
                {t('settingsSave')}
              </Button>
              <Button
                variant='outlined'
                fullWidth
                className='ml-10'
                size='large'
              >
                {t('settingsCancel')}
              </Button>
            </div>
          </div>
        </Paper>
      </>

    )
  }
};

export default PrinterSearch;
