import React from 'react';
import Typography from '@mui/material/Typography';
import { UrbanSelector } from './helper/urbanSelector.jsx';

import './index.css';

export function Title ({children}) {
    if (!children) {
        children = (
            <>
                <Typography variant='h5'>
                    Urban Dashboard
                </Typography>
                <UrbanSelector />
            </>
        )
    }
    return (
        <div id="title">
            {children}
        </div>
    );
}