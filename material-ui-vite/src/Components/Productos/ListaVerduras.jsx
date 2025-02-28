import React, { useState } from 'react';
import { Typography, Divider, Button, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper, Select, MenuItem } from '@mui/material';
import ListaProductoDialogo from './ListaProductoDialogo';

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

export default function ListaDeVerduras() {
    const [verduras] = useState([
        { id: '1', nombre: 'Lechuga', descripcion: 'Verdura romanita 100% Mexicano...', precio: 23, Cantidad: 12 },
        { id: '2', nombre: 'Tomate', descripcion: 'Verdura romanita 100% Mexicano...', precio: 34, Cantidad: 10 },
        { id: '3', nombre: 'Papa', descripcion: 'Verdura romanita 100% Mexicano...', precio: 13, Cantidad: 2 },
        { id: '4', nombre: 'Zanahoria', descripcion: 'Verdura romanita 100% Mexicano...', precio: 10, Cantidad: 5 },
        { id: '5', nombre: 'Cebolla', descripcion: 'Verdura romanita 100% Mexicano...', precio: 36, Cantidad: 1 },
        { id: '6', nombre: 'Espinaca', descripcion: 'Verdura romanita 100% Mexicano...', precio: 19, Cantidad: 200 },
    ]);

    const [verduraSeleccionada, setVerduraSeleccionada] = useState('');

    return (
        <div>
            <h2>Lista de Verduras</h2>
            <Divider color="secondary" />

            <Typography variant="h7">Selecciona una verdura:</Typography>
            <Select
                value={verduraSeleccionada}
                onChange={(e) => setVerduraSeleccionada(e.target.value)}
                style={{ minWidth: 200, marginBottom: 20 }}
                disabled={verduras.length === 0} 
            >
                {verduras.map((verdura) => (
                    <MenuItem key={verdura.id} value={verdura.nombre}>
                        {verdura.nombre}
                    </MenuItem>
                ))}
            </Select>

            {verduraSeleccionada && (
                <Typography variant="h6" style={{ marginTop: 20 }}>
                    Verdura seleccionada: {verduraSeleccionada}
                </Typography>
            )}

            {verduras.length === 0 ? (
                <Typography color="error" variant="h5" style={{ marginTop: 20 }}>
                    No hay datos almacenados.
                </Typography>
            ) : (
                <TableContainer component={Paper} style={{ marginTop: 20 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><b>ID</b></TableCell>
                                <TableCell><b>Nombre</b></TableCell>
                                <TableCell><b>Descripción</b></TableCell>
                                <TableCell><b>Precio ($)</b></TableCell>
                                <TableCell><b>Cantidad</b></TableCell>
                                <TableCell><b>Acción</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {verduras.map((verdura) => (
                                <TableRow key={verdura.id}>
                                    <TableCell>{verdura.id}</TableCell>
                                    <TableCell>{verdura.nombre}</TableCell>
                                    <TableCell>{verdura.descripcion}</TableCell>
                                    <TableCell>${verdura.precio}</TableCell>
                                    <TableCell>{verdura.Cantidad}</TableCell>
                                    <TableCell>
                                        <Button onClick={() => alert(verdura.Cantidad)} variant="contained" color="primary">
                                            Ver Stock
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}

            <Divider color='primary'/>
            <ListaProductoDialogo data={data.store} />
        </div>
    );
}
