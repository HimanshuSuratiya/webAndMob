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
                            <ErrorOutlineOutlinedIcon style={{ height: '100%', width: '100%', color: 'rgba(0, 0, 0, 0.87)' }} />
                        </div>
                    </div>
                    <div className="textDiv">
                        <h5>Are You Sure</h5>
                    </div>
                    <div className="textDivp">
                        <p>You Will not be able to use the application anymore!</p>
                    </div>
                    <div className='DeleteKeyBtndiv'>
                        <Button onClick={() => { removeDeleteKeyPopUp(false) }} variant="contained" className="keybtnpopup DeleteBtn" color="primary">{'No, cancil it!'} </Button>
                        <Button onClick={() => { removeDeleteKeyPopUp(false) }} variant="contained" className="keybtnpopup DeleteBtn" color="primary">{'Yes, I am sure!'} </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteKey;