import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const data = {
        "store": {
            "book": [
                {
                    "category": "reference",
                    "author": "Nigel Rees",
                    "title": "Sayings of the Century",
                    "price": 8.95,
                    "in-stock": true,
                    "sold": true
                },
                {
                    "category": "fiction",
                    "author": "Evelyn Waugh",
                    "title": "Sword of Honour",
                    "price": 12.99,
                    "in-stock": false,
                    "sold": true
                },
                {
                    "category": "fiction",
                    "author": "Herman Melville",
                    "title": "Moby Dick",
                    "isbn": "0-553-21311-3",
                    "price": 8.99,
                    "in-stock": true,
                    "sold": false
                },
                {
                    "category": "fiction",
                    "author": "J. R. R. Tolkien",
                    "title": "The Lord of the Rings",
                    "isbn": "0-395-19395-8",
                    "price": 22.99,
                    "in-stock": false,
                    "sold": false
                }
            ],
            "bicycle": {
                "color": "red",
                "price": 19.95,
                "in-stock": true,
                "sold": false
            }
        }
    }

export default function ListaLibros() {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><b>Título</b></TableCell>
                        <TableCell><b>Autor</b></TableCell>
                        <TableCell><b>Precio</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {libros.map((libro) => (
                        <TableRow key={libro.id}>
                            <TableCell>{libro.titulo}</TableCell>
                            <TableCell>{libro.autor}</TableCell>
                            <TableCell>${libro.precio}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
