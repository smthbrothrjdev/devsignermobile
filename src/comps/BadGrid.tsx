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
  { id:'PMCS', users: '120', status: 'OK',like:'NO', cool: 'YES' },
  { id:'Fire Wire', users: 'ALL OF THEM', status: 'OK',like:'YES', cool: 'YES' },
  { id:'Mercury', users: '4', status: 'OK',like:'YES', cool: 'YES' },
  { id:'RecruitMe', users: '100', status: 'OK',like:'YES', cool: 'YES' },
  { id:'MYSQUAD', users: '-2', status: 'Meh',like:'YES', cool: 'NO' },
  { id:'Roll Out', users: '7', status: 'OK',like:'YES', cool: 'YES' },
  { id:'ATIS', users: 'what are users', status: 'DEAD',like:'YES', cool: 'NO' },

];

export default function BadGrid() {
  return (
      <Box sx={{ height: 530, width: '100%' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 50,
                },
              },
            }}
            pageSizeOptions={[50]}
            checkboxSelection
            disableRowSelectionOnClick
        />
      </Box>
  );
}
