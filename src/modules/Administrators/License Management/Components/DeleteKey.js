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
                        <h5 style={{textAlign:'center'}}>Are You Sure</h5>
                    </div>
                    <div className="textDivp">
                        <p style={{textAlign:'center'}}>You Will not be able to use the application anymore!</p>
                    </div>
                    <div className='DeleteKeyBtndiv'>
                        <Button style={{ textTransform: 'none' , backgroundColor:"#d5d5d5"}} onClick={() => { removeDeleteKeyPopUp(false) }} variant="contained" className="keybtnpopup DeleteKeyBtn" color="primary">{'Cancel'} </Button>
                        <Button style={{ textTransform: 'none' ,backgroundColor:'#f44336'}} onClick={() => { removeDeleteKeyPopUp(false) }} variant="contained" className="keybtnpopup DeleteKeyBtn" color="primary">{'OK'} </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteKey;