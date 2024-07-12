import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

export default function OutlinedCard({children}) {
    return (
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{children}</Card>
      </Box>
    );
  }