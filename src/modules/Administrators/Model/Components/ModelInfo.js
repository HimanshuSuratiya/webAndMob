import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import PrinterImage from "../Image/printer1.png";
import "../view/Modelstyle.css";

const ModelInfo = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="d-flex f-align-center f-justify-between mb-8">
        <Typography variant="h4">{t("processModelInfo")}</Typography>
      </div>
      <Paper>
        <table class="table tableBordered ">
          <tbody>
            <tr>
              <td colspan="2">
                <strong style={{ color: "black" , fontSize:"16px"}}>{t('processModelType')}</strong>
              </td>
              <td>COLOR MONO</td>
            </tr>
            <tr>
              <td colspan="2">
                <strong style={{ color: "black" ,fontSize:"16px"}}>{t('processSupplyType')}</strong>
              </td>
              <td>LASER OR INK</td>
            </tr>
            <tr>
              <td colspan="2">
                <strong style={{ color: "black" ,fontSize:"16px"}}>{t('processDriver')}</strong>
              </td>
              <td>NEED TO BE UPLOADED FILE</td>
            </tr>
            <tr>
              <td colspan="2">
                <strong style={{ color: "black" ,fontSize:"16px"}}>{t('processDescription')}</strong>
              </td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="2">
                <strong style={{ color: "black" ,fontSize:"16px"}}>{t('processImage')}</strong>
              </td>
              <td>
                <strong style={{ color: "black" ,fontSize:"16px"}}>{t('processFull-Size')}</strong>
              </td>
              <td>
                <div class="printer1Img">
                  <img src={PrinterImage} />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <strong style={{ color: "black" ,fontSize:"16px"}}>{t('processReduced-Size')}</strong>
              </td>

              <td>
                <div class="reducedsize">
                  <img src={PrinterImage} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </Paper>
    </>
  );
};

export default ModelInfo;
