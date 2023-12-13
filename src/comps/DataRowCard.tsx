import React, { useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

type RowP ={
  id: string,
  users: string,
  status: string,
  like: string,
  cool: string
}
type DataRowCardProps = {
  row: RowP;
};

const DataRowCard: React.FC<DataRowCardProps> = ({ row}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  const cardStyle = {
    margin: 1,
    boxShadow: isSelected ? '0px 0px 10px 5px rgba(0, 0, 255, 0.5)' : 'none', // Adjust the color and size of the glow effect here
    transition: 'box-shadow 0.3s',
  };

  return (
      <Box sx={cardStyle} onClick={handleClick}>
        <Card variant="outlined" sx={{backgroundColor : '#9dc8f3'}}>
          <CardContent>
            <Typography variant="h6">{row.id}</Typography>
            <Typography color="textSecondary">Users: {row.users}</Typography>
            <Typography color="textSecondary">Status: {row.status}</Typography>
            <Typography color="textSecondary">Like?: {row.like}</Typography>
            <Typography color="textSecondary">Cool?: {row.cool}</Typography>

          </CardContent>
        </Card>
      </Box>
  );
};

export default DataRowCard;


