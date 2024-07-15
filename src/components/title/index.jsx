import React from 'react';
import Typography from '@mui/material/Typography';
import { UrbanSelector } from './helper/urbanSelector.jsx';

import './index.css';

export function Title () {
    return (
        <div id="title">
            <Typography variant='h5'>
                Urban Dashboard
            </Typography>
            <UrbanSelector />
        </div>
    );
}