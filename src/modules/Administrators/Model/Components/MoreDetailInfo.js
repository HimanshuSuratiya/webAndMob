import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import Paper from "@material-ui/core/Paper";
import "../view/style.css";
import { Grid } from "shared/components";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import { Button, MenuItem } from "@material-ui/core";

const MoreDetailInfo = () => {
  const { t } = useTranslation();
  const [Department, setDepartment] = useState(0);
  const updateDepartment = (event) => {
    setDepartment(event.target.value);
  };

  const [toner, setToner] = useState(0)
  const [fuser, setFuser] = useState(0)
  const [developer, setDeveloper] = useState(0)
  const [opc, setOPC] = useState(0)
  const [transfer, setTransfer] = useState(0)
  const [other, setOther] = useState(0)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)

  const columnConfig = [
    {
      id: "_Printer_Modal",
      fieldName: "_Printer_Modal",
      label: t("processPrinterModel"),
      canSort: true,
      render: (Rows) => (
        <Typography variant="body1" style={{ textAlign: "center" }}>
          {Rows.PrinterModal}
        </Typography>
      ),
    },
    {
      id: "_Toner",
      field: "_Toner",
      label: t("processToner"),
      canSort: true,
      render: (Rows) => (
        <Typography variant="body1" style={{ textAlign: "center" }}>
          {Rows.Toner}
        </Typography>
      ),
    },
    {
      id: "_Fuser",
      fieldName: "_Fuser",
      label: t("processFuser"),
      canSort: true,
      render: (Rows) => (
        <Typography variant="body1" style={{ textAlign: "center" }}>
          {Rows.Fuser}
        </Typography>
      ),
    },
    {
      id: "_Developer",
      field: "_Developer",
      label: t("processDeveloper"),
      canSort: true,
      render: (Rows) => (
        <Typography variant="body1" style={{ textAlign: "center" }}>
          {Rows.Developer}
        </Typography>
      ),
    },
    {
      id: "-OPC",
      field: "_OPC",
      label: t("processOPC"),
      canSort: true,
      render: (Rows) => (
        <>
          <Typography variant="body1" style={{ textAlign: "center" }}>
            {Rows.OPC}
          </Typography>
        </>
      ),
    },
    {
      id: "_Transfer",
      field: "_Transfer",
      label: t("processTransfer"),
      canSort: true,
      render: (Rows) => (
        <>
          <Typography variant="body1" style={{ textAlign: "center" }}>
            {Rows.Transfer}
          </Typography>
        </>
      ),
    },
    {
      id: "_Other",
      field: "_Other",
      label: t("processOther"),
      canSort: true,
      render: (Rows) => (
        <>
          <Typography variant="body1" style={{ textAlign: "center" }}>
            {Rows.Other}
          </Typography>
        </>
      ),
    },
  ];

  const Rows = [
    {
      id: 1,
      PrinterModal: 'ALL',
      Toner: <TextField
        style={{ width: '70%' }}
        name="noticeUsageLevel"
        variant="outlined"
        value={toner}
        size="small"
        type={'number'}
        onChange={(e) => {
          let Toner = parseInt(e.target.value, 10);
          if (Toner > 100) Toner = 100;
          if (Toner < 0) Toner = 0;
          setToner(Toner);
        }
        }
      />,
      Fuser: <TextField
        style={{ width: '70%', padding: '0px' }}
        name="noticeUsageLevel"
        variant="outlined"
        value={fuser}
        size="small"
        type={'number'}
        onChange={(e) => {
          let Fuser = parseInt(e.target.value, 10);
          if (Fuser > 100) Fuser = 100;
          if (Fuser < 0) Fuser = 0;
          setFuser(Fuser);
        }
        }
      />,
      Developer: <TextField
        style={{ width: '70%', padding: '0px' }}
        name="noticeUsageLevel"
        variant="outlined"
        value={developer}
        size="small"
        type={'number'}
        onChange={(e) => {
          let Developer = parseInt(e.target.value, 10);
          if (Developer > 100) Developer = 100;
          if (Developer < 0) Developer = 0;
          setDeveloper(Developer);
        }
        }
      />,
      OPC: <TextField
        style={{ width: '70%', padding: '0px' }}
        name="noticeUsageLevel"
        variant="outlined"
        value={opc}
        size="small"
        type={'number'}
        onChange={(e) => {
          let OPC = parseInt(e.target.value, 10);
          if (OPC > 100) OPC = 100;
          if (OPC < 0) OPC = 0;
          setOPC(OPC);
        }
        }
      />,
      Transfer: <TextField
        style={{ width: '70%', padding: '0px' }}
        name="noticeUsageLevel"
        variant="outlined"
        value={transfer}
        size="small"
        type={'number'}
        onChange={(e) => {
          let Transfer = parseInt(e.target.value, 10);
          if (Transfer > 100) Transfer = 100;
          if (Transfer < 0) Transfer = 0;
          setTransfer(Transfer);
        }
        }
      />,
      Other: <TextField
        style={{ width: '70%', padding: '0px' }}
        name="noticeUsageLevel"
        variant="outlined"
        value={other}
        size="small"
        type={'number'}
        onChange={(e) => {
          let Other = parseInt(e.target.value, 10);
          if (Other > 100) Other = 100;
          if (Other < 0) Other = 0;
          setOther(Other);
        }
        }
      />,

    },
  ];

  const columnConfig2 = [
    {
      id: "_Printer_Modal",
      fieldName: "_Printer_Modal",
      label: t("processPrinterModel"),
      canSort: true,
      render: (Rows2) => (
        <Typography variant="body1" style={{ textAlign: "center" }}>
          {Rows2.Client}
        </Typography>
      ),
    },
    {
      id: "_Min",
      field: "_Min",
      label: t("processMin"),
      canSort: true,
      render: (Rows2) => (
        <Typography variant="body1" style={{ textAlign: "center" }}>
          {Rows2.Min}
        </Typography>
      ),
    },
    {
      id: "_Max",
      field: "_Max",
      label: t("processMax"),
      canSort: true,
      render: (Rows2) => (
        <Typography variant="body1" style={{ textAlign: "center" }}>
          {Rows2.Max}
        </Typography>
      ),
    },
  ]

  const Rows2 = [
    {
      id: 1,
      Client: 'ALL',
      Min: <TextField
        style={{ width: '30%', padding: '0px' }}
        name="noticeUsageLevel"
        variant="outlined"
        value={min}
        size="small"
        type={'number'}
        onChange={(e) => {
          let Min = parseInt(e.target.value, 10);
          if (Min > 100) Min = 100;
          if (Min < 0) Min = 0;
          setMin(Min);
        }
        }
      />,
      Max: <TextField
        style={{ width: '30%', padding: '0px' }}
        name="noticeUsageLevel"
        variant="outlined"
        value={max}
        size="small"
        type={'number'}
        onChange={(e) => {
          let Max = parseInt(e.target.value, 10);
          if (Max > 100) Max = 100;
          if (Max < 0) Max = 0;
          setMax(Max);
        }
        }
      />,
    },
  ]

  return (
    <>
      <div className="d-flex f-align-center f-justify-between mb-8">
        <Typography variant="h4">{t("More Detail Info")}</Typography>
      </div>
      <Paper>
        <table class="table tableBordered other-page-table-main">
          <tbody>
            <tr>
              <td colspan="2">
                <strong style={{ color: "black", fontSize: "16px" }}>{t('processManufacturer')}</strong>
              </td>
              <td>
                <TextField
                  style={{ width: '30%', padding: '0px' }}
                  name="noticeUsageLevel"
                  variant="outlined"
                  defaultValue={"Samsung Electronics"}
                  size="small"
                />
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <strong style={{ color: "black", fontSize: "16px" }}>{t('processModelType')}</strong>
              </td>
              <td>
                <Select
                  value={Department}
                  onChange={updateDepartment}
                  displayEmpty
                  variant="outlined"
                  style={{ height: "29px", width: "20%" }}
                >
                  <MenuItem value={0}>{t("processSelect")}</MenuItem>
                  <MenuItem value={'MONO LASER'}>MONO LASER</MenuItem>
                  <MenuItem value={'COLOR LASER'}>COLOR LASER</MenuItem>
                  <MenuItem value={'MONO MFP'}>MONO MFP</MenuItem>
                  <MenuItem value={'COLOR MFP'}>COLOR MFP</MenuItem>
                  <MenuItem value={'PHOTO'}>PHOTO</MenuItem>
                  <MenuItem value={'MONO INKJET'}>MONO INKJET</MenuItem>
                  <MenuItem value={'COLOR INKJET'}>COLOR INKJET</MenuItem>
                </Select>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <strong style={{ color: "black", fontSize: "16px" }}>{t('processSupplyType')}</strong>
              </td>
              <td></td>
            </tr>
            <tr>
              <td colspan="2">
                <strong style={{ color: "black", fontSize: "16px" }}>{t('processDriver')}</strong>
              </td>
              <td>
                <TextField
                  style={{ width: '50%', padding: '0px' }}
                  name="noticeUsageLevel"
                  variant="outlined"
                  defaultValue={""}
                  size="small"
                />
                <Button variant="contained" className="browserBtn" color="primary"
                > Browser </Button>
                <br />
                <a style={{ fontSize: '14px' }}>-Filename can be alphanumeric characters,'-' and '-'</a>
                <br />
                <input type="checkbox" />
                Use Default Printer Driver
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <strong style={{ color: "black", fontSize: "16px" }}>{t('processDescription')}</strong>
              </td>
              <td>
                <TextField
                  style={{ width: '100%', padding: '0px' }}
                  name="noticeUsageLevel"
                  variant="outlined"
                  defaultValue={""}
                  size="small"
                />
              </td>
            </tr>
            <tr>
              <td rowspan="2">
                <strong style={{ color: "black", fontSize: "16px" }}>{t('processImage')}</strong>
              </td>
              <td>
                <strong style={{ color: "black", fontSize: "16px" }}>{t('processFull-Size')}</strong>
              </td>
              <td>
                <TextField
                  style={{ width: '50%', padding: '0px' }}
                  name="noticeUsageLevel"
                  variant="outlined"
                  defaultValue={""}
                  size="small"
                />
                <Button variant="contained" className="browserBtn" color="primary"
                > Browser </Button>
                <br />
                <input type="checkbox" />
                Date Existing Image
                <br />
                <a style={{ fontSize: '14px' }}>-Filename can be alphanumeric characters,'-' and '-', image size
                  shuld be less then </a>
              </td>
            </tr>
            <tr>
              <td>
                <strong style={{ color: "black", fontSize: "16px" }}>{t('processReduced-Size')}</strong>
              </td>

              <td>
                <TextField
                  style={{ width: '50%', padding: '0px' }}
                  name="noticeUsageLevel"
                  variant="outlined"
                  defaultValue={""}
                  size="small"
                />
                <Button variant="contained" className="browserBtn" color="primary"
                > Browser </Button>
                <br />
                <input type="checkbox" />
                Date Existing Image
                <br />
                <a style={{ fontSize: '14px' }}>-Filename can be alphanumeric characters,'-' and '-', 65x65
                  pixle image size is appropriate. </a>
              </td>
            </tr>
          </tbody>
        </table>
        <h1 style={{ fontSize: '22px', color: '#7a5a5a' }}>{t('processModelConsumableThreshold')}</h1>
        <Paper elevation={4} style={{ marginTop: '20px' }}>
          <Grid hasSelection={false} columns={columnConfig} rows={Rows} />
        </Paper>
        <h1 style={{ fontSize: '22px', color: '#7a5a5a' }}>{t('processModelUsageThreshold')}</h1>
        <Paper elevation={4} style={{ marginTop: '20px' }}>
          <Grid hasSelection={false} columns={columnConfig2} rows={Rows2} />
        </Paper>
      </Paper>
    </>
  );
};

export default MoreDetailInfo;
