import React from 'react';
import Box from '@mui/material/Box';
import { MapBoxViewer } from '../mapboxViewer';
import { Title } from '../title';
import { DetailAnalysis } from '../detailAnalysis';

function Dashboard() {
  return (
    <Box
      className="fullSize">
        <Title/>
        <MapBoxViewer/>
        {/* <DetailAnalysis/>
        <Box marginBottom={8} sx={{ height: "5%" }} /> */}
    </Box>
  );
}
export default Dashboard;