import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
    return (
        <div className=' page'>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
            <div className="page-404 w-100">
                <div className="outer">
                    <div className="middle">
                        <div className="inner">

                            <div className="inner-circle"><i className="fa fa-home"></i><span>404</span></div>
                            <span className="inner-status">Oops! You're lost</span>
                            <span className="inner-detail">
                                We can not find the page you're looking for.
                                <Link to="/" className="btn btn-info mtl"><i className="fa fa-home"></i>&nbsp;
                                    Return home
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ErrorPage;