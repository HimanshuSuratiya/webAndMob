import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import "../view/style.css"

const Tree = () => {
  const [firstlishowHide, setFirstlishowHide] = useState(false);
  const [secondlishowHide, setSecondlishowHide] = useState(false);
  const [thirdlishowHide, setThirdlishowHide] = useState(false);
  const [fourthlishowHide, setFourthlishowHide] = useState(false);
  const [fifthlishowHide, setFifthlishowHide] = useState(false);
  return (
    <>
      <Paper>
        <div className="accordianList">
          <ul className="menList">
            <li><a style={{ display: 'flex' }} href="#!" onClick={() => {
              setFirstlishowHide(!firstlishowHide);
              setThirdlishowHide(false)
            }}> <div style={{ height: '22px', width: '22px', marginRight: '15px' }}>{!firstlishowHide ? <AddIcon style={{ color: '#007bff' }} /> : <RemoveIcon />} </div> 2</a>
              <ul className={!firstlishowHide ? 'hideList' : ''}>
                <li><a href="#!" style={{ display: 'flex' }} onClick={() => { setSecondlishowHide(!secondlishowHide) }}> <div style={{ height: '22px', width: '22px', marginRight: '15px' }}>{!secondlishowHide ? <AddIcon style={{ color: '#007bff' }} /> : <RemoveIcon />} </div> 1</a>
                  <ul className={!secondlishowHide ? 'hideList' : ''}>
                    <li><a style={{ display: 'flex' }} href="#!"> <div style={{ height: '22px', width: '22px', marginRight: '15px' }}> <AddIcon style={{ color: '#007bff' }} /> </div> 0</a></li>
                  </ul>
                </li>
                <li><a style={{ display: 'flex' }} href="#!"> <div style={{ height: '22px', width: '22px', marginRight: '15px' }}> <AddIcon style={{ color: '#007bff' }} /> </div> 0</a></li>
              </ul>
            </li>
            <li><a href="#!" style={{ display: 'flex' }} onClick={() => { setThirdlishowHide(!thirdlishowHide); setFirstlishowHide(false) }}> <div style={{ height: '22px', width: '22px', marginRight: '15px' }}>{!thirdlishowHide ? <AddIcon style={{ color: '#007bff' }} /> : <RemoveIcon />} </div> 3</a>
              <ul className={!thirdlishowHide ? 'hideList' : ''}>
                <li><a href="#!" style={{ display: 'flex' }} onClick={() => { setFourthlishowHide(!fourthlishowHide) }}> <div style={{ height: '22px', width: '22px', marginRight: '15px' }}>{!fourthlishowHide ? <AddIcon style={{ color: '#007bff' }} /> : <RemoveIcon />} </div> 2</a>
                  <ul className={!fourthlishowHide ? 'hideList' : ''}>
                    <li><a href="#!" style={{ display: 'flex' }} onClick={() => { setFifthlishowHide(!fifthlishowHide) }}> <div style={{ height: '22px', width: '22px', marginRight: '15px' }}>{!fifthlishowHide ? <AddIcon style={{ color: '#007bff' }} /> : <RemoveIcon />} </div> 1</a>
                      <ul className={!fifthlishowHide ? 'hideList' : ''}>
                        <li><a style={{ display: 'flex' }} href="#!"> <div style={{ height: '22px', width: '22px', marginRight: '15px' }}> <AddIcon style={{ color: '#007bff' }} /> </div> 0</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><a style={{ display: 'flex' }} href="#!"> <div style={{ height: '22px', width: '22px', marginRight: '15px' }}> <AddIcon style={{ color: '#007bff' }} /> </div> 0</a></li>
              </ul>
            </li>
            <li><a style={{ display: 'flex' }} href="#!"> <div style={{ height: '22px', width: '22px', marginRight: '15px' }}> <AddIcon style={{ color: '#007bff' }} /> </div> 0</a></li>
          </ul>
        </div>
      </Paper>
    </>
  );
};

export default Tree;