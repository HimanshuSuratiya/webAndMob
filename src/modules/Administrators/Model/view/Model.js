import React, { useState } from "react";
import ModelTable from '../Components/ModelTable';
import { Button } from "@material-ui/core"
import ModelInfo from '../Components/ModelInfo';
import MoreDetailInfo from "../Components/MoreDetailInfo";

const Model = () => {
    const [page, setPage] = useState(1);
    const updatePage = () => {
        if (page === 1) {
            return (
                <>
                    <ModelTable />
                </>
            )
        }
        if (page === 2) {
            return (
                <>
                    <ModelInfo />
                </>
            )
        }
        if (page === 3){
            return(
                <>
                    <MoreDetailInfo/>
                </>
            )
        }
    }
    return (
        <>
            {updatePage()}
            <div style={{ marginTop: '10px' }}>
                <Button style={{ marginLeft: '10px' }} variant="outlined" color="primary" onClick={() => { setPage(1) }}>Paga 1</Button>
                <Button style={{ marginLeft: '10px' }} variant="outlined" color="primary" onClick={() => { setPage(2) }}>Paga 2</Button>
                <Button style={{ marginLeft: '10px' }} variant="outlined" color="primary" onClick={() => { setPage(3) }}>Paga 3</Button>
            </div>
        </>
    );
};

export default Model;
