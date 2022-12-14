import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useNavigate } from 'react-router-dom';
import { UpdateProduct } from '../Pages/updateCell';

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

export default function DataTable({ rows }) {

    const navigate = useNavigate()

    const updateCell = ({row}) => {
        console.log(row)
        navigate(`/updateProduct`);
    }


    return (
        <div style={{
            height: 500, width: '100%',
            paddingLeft: '0 8px',
            justifyContent: 'center',
            backgroundColor: '#FFA500',
        }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={7}
                rowsPerPageOptions={[5]}
                onCellClick={updateCell}
            />
        </div>
    );
}