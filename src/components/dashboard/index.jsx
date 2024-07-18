import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { MapBoxViewer } from '../mapboxViewer';
import { Title } from '../title';
import { DetailAnalysis } from '../detailAnalysis';

export function Dashboard() {
  const [ urbanRegion, setUrbanRegion ] = useState("Los Angeles");

  return (
    <Box
      className="fullSize">
        <Title selection={urbanRegion} setSelection={setUrbanRegion}/>
        <MapBoxViewer urbanRegion={urbanRegion}/>
        {/* <DetailAnalysis/>
        <Box marginBottom={8} sx={{ height: "5%" }} /> */}
    </Box>
  );
}