import { Button } from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pag = props => {
    return (
        <div className="py-3">
            <Button  onClick={props.backPage} variant="primary" className="mr-2">Back</Button>
            <Button onClick={props.nextPage} variant="primary" className="mr-2">Next</Button>
        </div>
    );
}

export default Pag;