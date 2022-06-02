import React from 'react';
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import "../view/Licensestyle.css";
import { useTranslation } from "react-i18next";
import { DialogActions, DialogContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { IconButton, Divider } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from "@material-ui/core/Paper";

const ImportKeypopUp = ({ setClosePopUp, setImportKeybtn }) => {
    const { t } = useTranslation();
    return (
        <>
            <Paper>
                <div className='keypopUpDiv'>
                    <div className='keypopUpInnerDiv'>
                        <DialogTitle>
                            <div className="d-flex f-align-center f-justify-between">
                                <Typography variant="h5">
                                    {t("Import")}
                                </Typography>
                                <IconButton>
                                    <CloseIcon onClick={() => { setClosePopUp(false) }} />
                                </IconButton>
                            </div>
                        </DialogTitle>
                        <Divider />
                        <DialogContent className="mt-4">
                            <TextField
                                style={{ marginBottom: '24px' }}
                                fullWidth
                                label={t('License Key')}
                                name="email"
                                variant="outlined"
                                InputProps={{ endAdornment: <SearchIcon /> }}
                            />
                            <TextField
                                fullWidth
                                label={t('License Key')}
                                name="email"
                                variant="outlined"
                                InputProps={{ endAdornment: <SearchIcon /> }}
                            />
                        </DialogContent>
                        <DialogActions>
                            <div className="p-4" style={{ position: 'absolute', bottom: '0px' }}>
                                <Button style={{ backgroundColor: '#e0e0e0' }} onClick={() => { setClosePopUp(false) }} disabled={false} className="mr-4">
                                    {t('Close')}
                                </Button>
                                <Button
                                    onClick={() => { setImportKeybtn(true); setClosePopUp(false) }}
                                    variant="contained"
                                    color="primary"
                                    disabled={false}
                                >
                                    {t('Import')}
                                </Button>
                            </div>
                        </DialogActions>
                    </div>
                </div>
            </Paper>
        </>
    );
};

export default ImportKeypopUp;