import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'price', headerName: 'Price', width: 100 },
    {
        field: 'quantity',
        headerName: 'Quantity',
        type: 'number',
        width: 100,
    },
    {
        field: 'discription',
        headerName: 'Discription',
        width: 1050,
    },
];

export default function DataTable({rows}) {
    return (
        <div className='table' style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}