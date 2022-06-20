import React from "react";
import "../view/Licensestyle.css";
import { Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';

const DeleteKey = ({ removeDeleteKeyPopUp }) => {
    const { t } = useTranslation();
    return (
        <>
            <div style={{ position: 'fixed', zIndex: '1300', inset: '0px' }}>
                <div className="MuiBackdrop-root">
                    <div className="MuiDialog-container MuiDialog-scrollPaper" style={{ width: '100%', height: '100%' }}>
                        <div style={{ height: '270px' }} className="MuiPaper-root MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthSm MuiPaper-elevation24 MuiPaper-rounded setWidth">
                            <div className="iconDiv">
                                <ErrorOutlineOutlinedIcon style={{ height: '100%', width: '100%', color: '#f44336' }} />
                            </div>
                            <div className="HeadingDiv">
                                <h2 style={{ margin: '0px', padding: '0px', textAlign: 'center' }}>Are You Sure</h2>
                            </div>

                            <div className="paraDiv">
                                <p style={{ margin: '0px', padding: '0px', textAlign: 'center' }}>You Will not be able to use the application anymore!</p>
                            </div>
                            <div className="p-4" style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
                                <Button style={{ backgroundColor: "#d5d5d5",  textTransform: 'none' }} onClick={() => { removeDeleteKeyPopUp(false) }} variant="contained" className="DeleteKeyBtn" color="primary">{'Cancel'} </Button>
                                <Button style={{ backgroundColor: '#f44336', textTransform: 'none' }} onClick={() => { removeDeleteKeyPopUp(false) }} variant="contained" className="DeleteKeyBtn" color="primary">{'OK'} </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteKey;