import React from 'react';
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@material-ui/icons/Search';
import "../view/Licensestyle.css";
import Typography from '@material-ui/core/Typography';
import { IconButton, Divider } from '@material-ui/core';

const ImportKeypopUp = ({ setClosePopUp, setImportKeybtn }) => {
    return (
        <>
            <div className='keypopUpDiv'>
                <div className='keypopUpInnerDiv'>
                    <div className='keypopUpHeading'>
                        <Typography variant="h5">
                            Import
                        </Typography>
                        <IconButton style={{ padding: '0' }}>
                            <div className='keypopUpcross'> <CloseIcon onClick={() => { setClosePopUp(false) }} style={{ cursor: 'pointer' }} /> </div>
                        </IconButton>
                    </div>
                    <Divider style={{ margin: '0px', margin: '20px 0' }} />
                    <div className='inputKey'>
                        <TextField
                            className="keyTextfield"
                            fullWidth
                            name="noticeNoUse"
                            variant="outlined"
                            label="License Key"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <div
                                            style={{
                                                width: 15,
                                                height: 22,
                                                color: "#007bff",
                                            }}
                                        >
                                            <SearchIcon />
                                        </div>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <div className='inputKey'>
                        <TextField
                            className="keyTextfield"
                            fullWidth
                            name="noticeNoUse"
                            variant="outlined"
                            label="License Key"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <div
                                            style={{
                                                width: 15,
                                                height: 22,
                                                color: "#007bff",
                                            }}
                                        >
                                            <SearchIcon />
                                        </div>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <div className='importButtonDivalign'>
                        <Button style={{ backgroundColor: '#e0e0e0' }} onClick={() => { setClosePopUp(false) }} variant="contained" className="keybtnpopup" color="primary">{'Close'} </Button>
                        <Button onClick={() => { setImportKeybtn(true); setClosePopUp(false) }} variant="contained" className="keybtnpopup" color="primary">{'Import'} </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ImportKeypopUp;