import React from 'react';
import { Spinner } from 'react-bootstrap';

function Loading() {
    return (
        <div className='loading-animation'>
            <Spinner animation="border" size='md' variant="primary"  >
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
}

export default Loading;