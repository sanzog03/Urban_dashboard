import React from 'react';
import Box from '@mui/material/Box';
import { MapBoxViewer } from '../mapboxViewer';
import { Title } from '../title';

function Dashboard() {
  return (
    <Box 
      display={"flex"}
      flexDirection={"column"}
      className="fullSize">
        <MapBoxViewer/>
        <Title/>
    </Box>
  );
}
export default Dashboard;