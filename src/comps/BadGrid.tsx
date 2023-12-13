import Box from '@mui/material/Box';
import { DataGrid, GridColDef} from '@mui/x-data-grid';

const columns: GridColDef[] = [

  {
    field: 'id',
    headerName: 'App Name',
    width: 300,
    editable: true,
  },
  {
    field: 'users',
    headerName: 'users',
    width: 150,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'like',
    headerName: 'Do We Like Them?',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },

  {
    field: 'cool',
    headerName: 'Is it a Cool App?',
    width: 150,
    editable: true,
  },
];

const rows = [
  { id:'Tesseract', users: '1', status: 'OK',like:'NO', cool: 'NO' },

];

export default function BadGrid() {
  return (
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
        />
      </Box>
  );
}
