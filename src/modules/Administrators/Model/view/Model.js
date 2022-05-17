import React, { useState } from "react";
import ModelTable from '../Components/ModelTable';
import { Button } from "@material-ui/core"
import DetailedModelInformation from '../Components/DetailedModelInformation';
import OtherPage from "../Components/OtherPage";

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
                    <DetailedModelInformation />
                </>
            )
        }
        if (page === 3){
            return(
                <>
                    <OtherPage/>
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
