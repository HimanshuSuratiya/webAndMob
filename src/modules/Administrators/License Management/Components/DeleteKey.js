import React from "react";
import "../view/Licensestyle.css";
import { Button } from "@material-ui/core";
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';

const DeleteKey = ({ removeDeleteKeyPopUp }) => {
    return (
        <>
            <div className='keypopUpDiv'>
                <div className='keypopUpInnerDiv'>
                    <div className="DeleteKeyUpperDiv">
                        <div className='DeleteKeyIconDIv'>
                            <ErrorOutlineOutlinedIcon style={{ height: '100%', width: '100%', color: '#f44336' }} />
                        </div>
                    </div>
                    <div className="textDiv">
                        <h5 style={{ textAlign: 'center' }}>Are You Sure</h5>
                    </div>
                    <div className="textDivp">
                        <p style={{ textAlign: 'center' }}>You Will not be able to use the application anymore!</p>
                    </div>
                    <div className='DeleteKeyBtndiv'>
                        <Button style={{ backgroundColor: "#d5d5d5", color: 'black', fontWeight: 'bold', textTransform: 'none' }} onClick={() => { removeDeleteKeyPopUp(false) }} variant="contained" className="keybtnpopup" color="primary">{'Cancel'} </Button>
                        <Button style={{ backgroundColor: '#f44336', color: 'black', fontWeight: 'bold', textTransform: 'none' }} onClick={() => { removeDeleteKeyPopUp(false) }} variant="contained" className="keybtnpopup" color="primary">{'OK'} </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteKey;