import Box from '@mui/material/Box';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {useEffect, useState} from "react";

function getColumns(width: number): GridColDef[] {
  if (width < 600) { // Mobile view
    return [
      {
        field: 'id',
        headerName: 'App Name',
      },
      {
        field: 'users',
        headerName: 'Users',
        type: "number",
        editable: true,
        renderHeader: () => (
            <strong>
              {'Users'}
            </strong> )
      },
      {
        field: 'status',
        headerName: 'Status',
        editable: true,
        renderHeader: () => (
            <strong>
              {'Status'}
            </strong> )
      },
    ];
  } else {
    return [
      {
        field: 'id',
        headerName: 'App Name',
        width: 150,
        editable: true,
        renderHeader: () => (
            <strong>
              {'App Name '}
            </strong> )},
      {
        field: 'users',
        headerName: 'Users',
        width: 150,
        editable: true,
        renderHeader: () => (
            <strong>
              {'Users'}
            </strong> )
      },
      {
        field: 'status',
        headerName: 'Status',
        width: 150,
        editable: true,
        renderHeader: () => (
            <strong>
              {'Status'}
            </strong> )
      },
      {
        field: 'like',
        headerName: 'Do We Like Them?',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        renderHeader: () => (
            <strong>
              {'Do We Like Them?'}
            </strong> )
      },

      {
        field: 'cool',
        headerName: 'Is it a Cool App?',
        width: 150,
        editable: true,
        renderHeader: () => (
            <strong>
              {'Is it a Cool App?'}
            </strong> )
      },
    ];
  }
}



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
  const [columns, setColumns] = useState<GridColDef[]>(getColumns(window.innerWidth));
  useEffect(() => {
    const handleResize = () => {
      setColumns(getColumns(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      <Box sx={{ backgroundColor: 'white'}}>
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
