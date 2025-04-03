import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField,
  Select,
  MenuItem,
  Box,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const ItineraryTable = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      startDate: '2024-12-24',
      startTime: '09:00',
      endDate: '2024-12-24',
      endTime: '10:20',
      position: 'Hotel Tawinos Asakusa',
      category: 'Hotel',
      activity: 'Check-out',
      notes: '',
      distance: '57.5',
    },
  ]);

  const categories = ['Hotel', 'Spostamenti', 'Escursione', 'Quartiere'];

  const handleAddRow = () => {
    const newRow = {
      id: rows.length + 1,
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: '',
      position: '',
      category: '',
      activity: '',
      notes: '',
      distance: '',
    };
    setRows([...rows, newRow]);
  };

  const handleDeleteRow = (id) => {
    setRows(rows.filter(row => row.id !== id));
  };

  const handleChange = (id, field, value) => {
    setRows(rows.map(row => {
      if (row.id === id) {
        return { ...row, [field]: value };
      }
      return row;
    }));
  };

  return (
    <Box sx={{ p: 3 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="itinerary table">
          <TableHead>
            <TableRow>
              <TableCell>Start Date/Time</TableCell>
              <TableCell>End Date/Time</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Activity</TableCell>
              <TableCell>Notes</TableCell>
              <TableCell>Distance (km)</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <TextField
                      type="date"
                      value={row.startDate}
                      onChange={(e) => handleChange(row.id, 'startDate', e.target.value)}
                      size="small"
                    />
                    <TextField
                      type="time"
                      value={row.startTime}
                      onChange={(e) => handleChange(row.id, 'startTime', e.target.value)}
                      size="small"
                    />
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <TextField
                      type="date"
                      value={row.endDate}
                      onChange={(e) => handleChange(row.id, 'endDate', e.target.value)}
                      size="small"
                    />
                    <TextField
                      type="time"
                      value={row.endTime}
                      onChange={(e) => handleChange(row.id, 'endTime', e.target.value)}
                      size="small"
                    />
                  </Box>
                </TableCell>
                <TableCell>
                  <TextField
                    value={row.position}
                    onChange={(e) => handleChange(row.id, 'position', e.target.value)}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Select
                    value={row.category}
                    onChange={(e) => handleChange(row.id, 'category', e.target.value)}
                    size="small"
                    sx={{ minWidth: 120 }}
                  >
                    {categories.map((category) => (
                      <MenuItem key={category} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                </TableCell>
                <TableCell>
                  <TextField
                    value={row.activity}
                    onChange={(e) => handleChange(row.id, 'activity', e.target.value)}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={row.notes}
                    onChange={(e) => handleChange(row.id, 'notes', e.target.value)}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    value={row.distance}
                    onChange={(e) => handleChange(row.id, 'distance', e.target.value)}
                    size="small"
                    inputProps={{ step: 0.1 }}
                  />
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleDeleteRow(row.id)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <IconButton 
        onClick={handleAddRow} 
        color="primary" 
        sx={{ mt: 2 }}
      >
        <AddIcon />
      </IconButton>
    </Box>
  );
};

export default ItineraryTable; 