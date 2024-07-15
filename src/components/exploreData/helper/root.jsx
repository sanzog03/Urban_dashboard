import React, { Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import '../index.css';

export function ExploreData({children, embedLink}) {
    return (
        <Fragment>
            <CssBaseline />
            <div className='explore-data-container'>
                <div className='explore-meta-data-container'>
                    {children}
                </div>
                <div className='explore-embed-view-container'>
                    <iframe src={embedLink} className='explore-embed-view' title='Explore Data'></iframe>
                </div>
            </div>
        </Fragment>
    );
}