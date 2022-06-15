import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import { MenuItem } from "@material-ui/core";
import "../view/AgentConfigurationStyle.css"

const AgentSNMPSetting = () => {
    const { t } = useTranslation();
    const [snmpSetting, setSnmpSetting] = useState({
        Security: '0',
        Authentication: '0',
        Privacy: '0',
    });
    const selectSNMPSetting = (event) => {
        const { value, name } = event.target;
        setSnmpSetting((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            }
        })
    };
    return (
        <>
            <div className="d-flex f-align-center f-justify-between mb-8">
                <Typography variant="h4">{t("SNMP Setting")}</Typography>
            </div>
            <Paper style={{ paddingBottom: '8px' }} elevation={4}>
                <div className="SNMPSettingMainDiv">
                    <div className="SNMPSettingInnerDivs">
                        <p >{t('SNMP Version')}</p>
                        <form>
                            <input type="radio" id="html" name="fav_language" value="HTML" />
                            <label style={{ fontSize: '16px' }} for="html">SNMPv1/v2</label>
                            <input type="radio" id="css" name="fav_language" value="CSS" />
                            <label style={{ fontSize: '16px' }} for="html">SNMPv3</label>
                        </form>
                    </div>
                    <div className="SNMPSettingInnerDivs">
                        <p >{t('SNMP Port')}</p>
                        <TextField
                            style={{ width: '30%', padding: '0px' }}
                            name="noticeUsageLevel"
                            variant="outlined"
                            size="small"
                            defaultValue={161}
                        />
                    </div>
                    <div className="SNMPSettingInnerDivs">
                        <p >{t('SNMP Community')}</p>
                        <TextField
                            style={{ width: '30%', padding: '0px' }}
                            name="noticeUsageLevel"
                            variant="outlined"
                            size="small"
                            defaultValue={'Public'}
                        />
                    </div>
                    <div className="SNMPSettingInnerDivs">
                        <p >{t('SNMP Collecting Retries')}</p>
                        <TextField
                            style={{ width: '30%', padding: '0px' }}
                            name="noticeUsageLevel"
                            variant="outlined"
                            size="small"
                            defaultValue={1}
                        />
                    </div>
                    <div className="SNMPSettingInnerDivs">
                        <p >{t('SNMP Collecting Timeout')}</p>
                        <TextField
                            style={{ width: '30%', padding: '0px' }}
                            name="noticeUsageLevel"
                            variant="outlined"
                            size="small"
                            defaultValue={10000}
                        />
                    </div>
                    <div className="SNMPSettingInnerDivs">
                        <p >{t('SNMP Search Retries')}</p>
                        <TextField
                            style={{ width: '30%', padding: '0px' }}
                            name="noticeUsageLevel"
                            variant="outlined"
                            size="small"
                            defaultValue={1}
                        />
                    </div>
                    <div className="SNMPSettingInnerDivs">
                        <p >{t('SNMP Search Timeout')}</p>
                        <TextField
                            style={{ width: '30%', padding: '0px' }}
                            name="noticeUsageLevel"
                            variant="outlined"
                            size="small"
                            defaultValue={5000}
                        />
                    </div>
                    <div className="SNMPSettingInnerDivs">
                        <p >{t('SNMP v3 Context Name')}</p>
                        <TextField
                            style={{ width: '30%', padding: '0px' }}
                            name="noticeUsageLevel"
                            variant="outlined"
                            size="small"
                        />
                    </div>
                    <div className="SNMPSettingInnerDivs">
                        <p >{t('SNMP v3 Username')}</p>
                        <TextField
                            style={{ width: '30%', padding: '0px' }}
                            name="noticeUsageLevel"
                            variant="outlined"
                            size="small"
                        />
                    </div>
                    <div className="SNMPSettingInnerDivs">
                        <p >{t('SNMP v3 Security Mode')}</p>
                        <Select
                            value={snmpSetting.Security}
                            name="Security"
                            onChange={selectSNMPSetting}
                            displayEmpty
                            variant="outlined"
                            style={{ height: "40px", width: "30%" }}
                        >
                            <MenuItem value={0}>{t("processSelect")}</MenuItem>
                            <MenuItem value={'Anonymous'}>Anonymous</MenuItem>
                            <MenuItem value={'Auth and Privacy'}>Auth and Privacy</MenuItem>
                            <MenuItem value={'12'}>12</MenuItem>
                            <MenuItem value={'18'}>18</MenuItem>
                        </Select>
                    </div>
                    <div className="SNMPSettingInnerDivs">
                        <p >{t('SNMP v3 Authentication Algorithm')}</p>
                        <Select
                            value={snmpSetting.Authentication}
                            name="Authentication"
                            onChange={selectSNMPSetting}
                            displayEmpty
                            variant="outlined"
                            style={{ height: "40px", width: "30%" }}
                        >
                            <MenuItem value={0}>{t("processSelect")}</MenuItem>
                            <MenuItem value={'Anonymous'}>Anonymous</MenuItem>
                            <MenuItem value={'Auth and Privacy'}>Auth and Privacy</MenuItem>
                            <MenuItem value={'12'}>12</MenuItem>
                            <MenuItem value={'18'}>18</MenuItem>
                        </Select>
                    </div>
                    <div className="SNMPSettingInnerDivs">
                        <p >{t('SNMP v3 Authentication Key(for HMAC)')}</p>
                        <TextField
                            style={{ width: '30%', padding: '0px' }}
                            name="noticeUsageLevel"
                            variant="outlined"
                            size="small"
                        />
                    </div>
                    <div className="SNMPSettingInnerDivs">
                        <p >{t('SNMP v3 Privacy Algorithm')}</p>
                        <Select
                            value={snmpSetting.Privacy}
                            name="Privacy"
                            onChange={selectSNMPSetting}
                            displayEmpty
                            variant="outlined"
                            style={{ height: "40px", width: "30%" }}
                        >
                            <MenuItem value={0}>{t("processSelect")}</MenuItem>
                            <MenuItem value={'Anonymous'}>Anonymous</MenuItem>
                            <MenuItem value={'Auth and Privacy'}>Auth and Privacy</MenuItem>
                            <MenuItem value={'12'}>12</MenuItem>
                            <MenuItem value={'18'}>18</MenuItem>
                        </Select>
                    </div>
                    <div className="SNMPSettingInnerDivs">
                        <p >{t('SNMP v3 Privacy Key(for IV)')}</p>
                        <TextField
                            style={{ width: '30%', padding: '0px' }}
                            name="noticeUsageLevel"
                            variant="outlined"
                            size="small"
                        />
                    </div>
                </div>
            </Paper>
        </>
    )
}

export default AgentSNMPSetting