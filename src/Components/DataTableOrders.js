import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'seller', headerName: 'Seller', width: 200 },

    {
        field: 'product',
        headerName: 'Product',
        width: 150,
    },
    { field: 'price', headerName: 'Price', width: 100 },
    {
        field: 'quantity',
        headerName: 'Quantity',
        type: 'number',
        width: 100,
    },
];

export default function DataTableOrders({rows}) {
    return (
        <div style={{ height: 400, width: '100%' }}>
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