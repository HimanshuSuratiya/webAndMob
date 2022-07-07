import React from "react";
import "../view/Licensestyle.css";
import { Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import "../../../../shared/Shared.css";

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
                            <div className="p-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Button variant="contained" style={{textTransform:'capitalize'}} onClick={() => { removeDeleteKeyPopUp(false) }} className="DeleteKeyBtn">{'Cancel'} </Button>
                                <Button style={{ textTransform: 'capitalize' }} onClick={() => { removeDeleteKeyPopUp(false) }} variant="contained" className="DeleteKeyBtn Btn-Color"> {'Ok'} </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteKey;