import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import Paper from "@material-ui/core/Paper";
import "../view/Modelstyle.css";
import { Grid } from "shared/components";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import { Button, MenuItem } from "@material-ui/core";
import "../../../../shared/Shared.css";
import PrinterImage from "../Image/printer1.png";
import Tooltip from '@material-ui/core/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';

const MoreDetailInfo = () => {
  const { t } = useTranslation();
  const [firstTableData, setFirstTableData] = useState({
    TonerValue: 5,
    FuserValue: 27,
    DeveloperValue: 77,
    OPCValue: 45,
    TransferValue: 88,
    OtherValue: 100,
  })
  const [secondTableData, setSecondTableData] = useState({
    MinValue: 94,
    MaxValue: 57,
  })
  const [ModelType, setModelType] = useState(0);
  const [SupplyType, setSupplyType] = useState(0);
  const [PaperSize, setPaperSize] = useState(0);
  const [MCTshowOtherButton, setMCTShowOtherButton] = useState(false)
  const [MCTdisable, setMCTDisable] = useState(true);
  const [MUTshowOtherButton, setMUTShowOtherButton] = useState(false)
  const [MUTdisable, setMUTDisable] = useState(true);
  const [firstTableDublicateValue, setFisrtTableDublicateValue] = useState()
  const [secondTableDublicateValue, setSecondTableDublicateValue] = useState()


  const updateModelType = (event) => {
    setModelType(event.target.value);
  };

  const updateSupplyType = (event) => {
    setSupplyType(event.target.value);
  }

  const updatePaperSize = (event) => {
    setPaperSize(event.target.value);
  }

  const FirstEventValue = (event) => {
    const { name, value } = event.target;
    setFirstTableData((prevState) => {
      let percentageValue = parseInt(value, 10);
      if (percentageValue > 100) percentageValue = 100;
      if (percentageValue < 0) percentageValue = 0;
      return {
        ...prevState,
        [name]: percentageValue,
      }
    })
  }

  const getFirstDublicateValue = () => {
    setFisrtTableDublicateValue(firstTableData)
  }

  const getSecondDublicateValue = () => {
    setSecondTableDublicateValue(secondTableData)
  }

  const SecondEventValue = (event) => {
    const { name, value } = event.target;
    setSecondTableData((prevState) => {
      let percentageValue = parseInt(value, 10);
      if (percentageValue > 100) percentageValue = 100;
      if (percentageValue < 0) percentageValue = 0;
      return {
        ...prevState,
        [name]: percentageValue,
      }
    })
  }


  const columnConfig = [
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
    {
      id: "_action",
      field: "_action",
      label: t("Action"),
      render: (row) => {
        return (
          <div className="d-flex" style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
            {MCTshowOtherButton ?
              <>
                <Tooltip title={t('Save')} placement='top-start'>
                  <Button
                    style={{ margin: '0px 6px', padding: '0px', minWidth: '38px' }}
                    variant="contained"
                    className="Btn-Color"
                    onClick={() => { setMCTShowOtherButton(!MCTshowOtherButton); setMCTDisable(true); }}
                  >
                    <SaveIcon />
                  </Button>
                </Tooltip>
                <Tooltip title={t('Close')} placement='top-start'>
                  <Button
                    style={{ margin: '0px 6px', padding: '0px', minWidth: '38px' }}
                    variant="contained"
                    className="deleteBtn"
                    onClick={() => { setMCTShowOtherButton(!MCTshowOtherButton); setMCTDisable(true); setFirstTableData(firstTableDublicateValue); }}
                  >
                    <CloseIcon />
                  </Button>
                </Tooltip>
              </>
              :
              <Tooltip title={t('Edit')} placement='top-start'>
                <Button
                  style={{ margin: '0px 6px', padding: '0px', minWidth: '38px' }}
                  variant="contained"
                  onClick={() => { setMCTShowOtherButton(!MCTshowOtherButton); setMCTDisable(false); getFirstDublicateValue(); }}
                >
                  <EditIcon />
                </Button>
              </Tooltip>
            }
          </div>
        )
      }
    },
  ];

  const Rows = [
    {
      id: 1,
      PrinterModal: 'ALL',
      Toner: <TextField
        className="Rowfield TextRight"
        variant="outlined"
        value={firstTableData.TonerValue}
        size="small"
        name="TonerValue"
        type={'number'}
        disabled={MCTdisable}
        style={{ backgroundColor: `${MCTdisable ? '#f5f6f8' : ''}` }}
        onChange={FirstEventValue}
      />,
      Fuser: <TextField
        variant="outlined"
        className="Rowfield TextRight"
        value={firstTableData.FuserValue}
        size="small"
        type={'number'}
        name="FuserValue"
        disabled={MCTdisable}
        style={{ backgroundColor: `${MCTdisable ? '#f5f6f8' : ''}` }}
        onChange={FirstEventValue}
      />,
      Developer: <TextField
        className="Rowfield TextRight"
        variant="outlined"
        value={firstTableData.DeveloperValue}
        size="small"
        type={'number'}
        name="DeveloperValue"
        disabled={MCTdisable}
        style={{ backgroundColor: `${MCTdisable ? '#f5f6f8' : ''}` }}
        onChange={FirstEventValue}
      />,
      OPC: <TextField
        variant="outlined"
        className="Rowfield TextRight"
        value={firstTableData.OPCValue}
        size="small"
        type={'number'}
        name="OPCValue"
        disabled={MCTdisable}
        style={{ backgroundColor: `${MCTdisable ? '#f5f6f8' : ''}` }}
        onChange={FirstEventValue}
      />,
      Transfer: <TextField
        className="Rowfield TextRight"
        variant="outlined"
        value={firstTableData.TransferValue}
        size="small"
        type={'number'}
        name="TransferValue"
        disabled={MCTdisable}
        style={{ backgroundColor: `${MCTdisable ? '#f5f6f8' : ''}` }}
        onChange={FirstEventValue}
      />,
      Other: <TextField
        className="Rowfield TextRight"
        variant="outlined"
        value={firstTableData.OtherValue}
        size="small"
        type={'number'}
        name="OtherValue"
        disabled={MCTdisable}
        style={{ backgroundColor: `${MCTdisable ? '#f5f6f8' : ''}` }}
        onChange={FirstEventValue}
      />,
    },
  ];

  const columnConfig2 = [
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
    {
      id: "_action",
      field: "_action",
      label: t("Action"),
      render: (row) => {
        return (
          <div className="d-flex" style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
            {MUTshowOtherButton ?
              <>
                <Tooltip title={t('Save')} placement='top-start'>
                  <Button
                    style={{ margin: '0px 6px', padding: '0px', minWidth: '38px' }}
                    variant="contained"
                    className="Btn-Color"
                    onClick={() => { setMUTShowOtherButton(!MUTshowOtherButton); setMUTDisable(true); }}
                  >
                    <SaveIcon />
                  </Button>
                </Tooltip>
                <Tooltip title={t('Close')} placement='top-start'>
                  <Button
                    style={{ margin: '0px 6px', padding: '0px', minWidth: '38px' }}
                    variant="contained"
                    className="deleteBtn"
                    onClick={() => { setMUTShowOtherButton(!MUTshowOtherButton); setMUTDisable(true); setSecondTableData(secondTableDublicateValue); }}
                  >
                    <CloseIcon />
                  </Button>
                </Tooltip>
              </>
              :
              <Tooltip title={t('Edit')} placement='top-start'>
                <Button
                  style={{ margin: '0px 6px', padding: '0px', minWidth: '38px' }}
                  variant="contained"
                  onClick={() => { setMUTShowOtherButton(!MUTshowOtherButton); setMUTDisable(false); getSecondDublicateValue() }}
                >
                  <EditIcon />
                </Button>
              </Tooltip>
            }
          </div>
        )
      }
    },
  ]

  const Rows2 = [
    {
      id: 1,
      Client: 'ALL',
      Min: <TextField
        variant="outlined"
        className="Rowfield TextRight"
        value={secondTableData.MinValue}
        size="small"
        type={'number'}
        name="MinValue"
        disabled={MUTdisable}
        style={{ backgroundColor: `${MUTdisable ? '#f5f6f8' : ''}` }}
        onChange={SecondEventValue}
      />,
      Max: <TextField
        className="Rowfield TextRight"
        variant="outlined"
        value={secondTableData.MaxValue}
        size="small"
        type={'number'}
        name="MaxValue"
        disabled={MUTdisable}
        style={{ backgroundColor: `${MUTdisable ? '#f5f6f8' : ''}` }}
        onChange={SecondEventValue}
      />,
    },
  ]

  return (
    <>
      <div className="d-flex f-align-center f-justify-between mb-8">
        <Typography variant="h4">{t("Detail Info")}</Typography>
      </div>
      <Paper evaluation={4}>
        <table class="table tableBordered other-page-table-main">
          <tbody>
            <tr>
              <td colspan="2">
                <p className="para">{t('processManufacturer')}</p>
              </td>
              <td>
                <TextField
                  className="textfieldStyle"
                  name="noticeUsageLevel"
                  variant="outlined"
                  value="Samsung Electronics"
                  size="small"
                  disabled={true}
                  style={{ backgroundColor: '#f5f6f8' }}
                />
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <p className="para">{t('processModelType')}</p>
              </td>
              <td>
                <Select
                  value={ModelType}
                  style={{ minWidth: '120px' }}
                  className="textfieldStyle"
                  onChange={updateModelType}
                  displayEmpty
                  variant="outlined"
                >
                  <MenuItem value={0}>{t("processSelect")}</MenuItem>
                  <MenuItem value={'COLOR'}>COLOR</MenuItem>
                  <MenuItem value={'MONO'}>MONO</MenuItem>
                </Select>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <p className="para">{t('Support Paper Size')}</p>
              </td>
              <td>
                <Select
                  value={PaperSize}
                  style={{ minWidth: '120px' }}
                  className="textfieldStyle"
                  onChange={updatePaperSize}
                  displayEmpty
                  variant="outlined"
                >
                  <MenuItem value={0}>{t("processSelect")}</MenuItem>
                  <MenuItem value={'A3'}>A3</MenuItem>
                  <MenuItem value={'A4'}>A4</MenuItem>
                </Select>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <p className="para">{t('processSupplyType')}</p>
              </td>
              <td>
                <Select
                  value={SupplyType}
                  style={{ minWidth: '120px' }}
                  className="textfieldStyle"
                  onChange={updateSupplyType}
                  displayEmpty
                  variant="outlined"
                >
                  <MenuItem value={0}>{t("processSelect")}</MenuItem>
                  <MenuItem value={'TONOR'}>TONOR</MenuItem>
                  <MenuItem value={'INK'}>INK</MenuItem>
                </Select>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <p className="para">{t('processDriver')}</p>
              </td>
              <td>
                <TextField
                  className="textfieldStyleAnother"
                  name="noticeUsageLevel"
                  variant="outlined"
                  defaultValue={""}
                  size="small"
                />
                <Button variant="contained" className="browserBtn Btn-Color"> Browser </Button>
                <br />
                <a className="textClass" >-Filename can be alphanumeric characters,'-' and '-'</a>
                <br />
                <p className="textClass" > <input type="checkbox" /> Use Default Printer Driver</p>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <p className="para">{t('processDescription')}</p>
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
              <td rowspan="2" style={{ padding: '0px', border: 'none' }}>
                <p className="para">{t('')}</p>
              </td>
              <td>
                <p className="para">{t('processFull-Size')}</p>
              </td>
              <td>
                <TextField
                  className="textfieldStyleAnother"
                  name="noticeUsageLevel"
                  variant="outlined"
                  defaultValue={""}
                  size="small"
                />
                <Button variant="contained" className="browserBtn Btn-Color"> Browser </Button>
                <br />
                <p className="textClass"> <input type="checkbox" /> Date Existing Image </p>
                <a className="textClass">-Filename can be alphanumeric characters,'-' and '-', image size
                  shuld be less then </a>
              </td>
            </tr>
            <tr>
              <td>
                <p className="para">{t('processImage')}</p>
              </td>
              <td style={{ display: 'flex' }}>
                <div>
                  <TextField
                    className="textfieldStyleAnother"
                    style={{ width: '100%' }}
                    name="noticeUsageLevel"
                    variant="outlined"
                    defaultValue={""}
                    size="small"
                  />
                  <Button variant="contained" className="browserBtn Btn-Color"> Browser </Button>
                  <br />
                  <p className="textClass"> <input type="checkbox" /> Date Existing Image </p>
                  <a className="textClass">-Filename can be alphanumeric characters,'-' and '-', 65x65
                    pixle image size is appropriate. </a>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <img style={{ width: '25%' }} src={PrinterImage} alt="No Image" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </Paper>
      <h1 className="Heading mt-5">{t('processModelConsumableThreshold')}</h1>
      <Paper className='removeBottom' elevation={4} style={{ marginTop: '20px' }}>
        <Grid hasSelection={false} columns={columnConfig} rows={Rows} />
      </Paper>
      <h1 className="Heading mt-5">{t('processModelUsageThreshold')}</h1>
      <Paper elevation={4} style={{ marginTop: '20px' }}>
        <Grid hasSelection={false} columns={columnConfig2} rows={Rows2} />
      </Paper>
    </>
  );
};

export default MoreDetailInfo;