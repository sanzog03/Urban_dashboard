import React from 'react';
import Box from '@mui/material/Box';
import { MapBoxViewer } from '../mapboxViewer';
import { Title } from '../title';

function Dashboard() {
  return (
    <Box
      className="fullSize dashboard">
        <Title/>
        <MapBoxViewer/>
    </Box>
  );
}
export default Dashboard;