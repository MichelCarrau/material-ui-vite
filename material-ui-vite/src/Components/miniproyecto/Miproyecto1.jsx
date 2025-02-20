import React, { useState } from 'react';
import { data } from './libros';
import { Typography, Divider, Button, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper, MenuItem, Select, TextField } from '@mui/material';

export default function Tienda() {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('libros');
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const [productoNombre, setProductoNombre] = useState('');
    const [mostrarBuscar, setMostrarBuscar] = useState(false);

    const productos = categoriaSeleccionada === 'libros' ? data.store.book : [data.store.bicycle];

    const handleBuscarClick = () => {
        const productoEncontrado = productos.find(
            (producto) => producto.title && producto.title.toLowerCase().includes(productoNombre.toLowerCase())
        );
        setProductoSeleccionado(productoEncontrado || null);
    };

    return (
        <div>
            <Typography variant="h4">¡Escoge y compra un producto!</Typography>
            <Divider sx={{ my: 2 }} />

            <Typography variant="h6">Selecciona una categoría:</Typography>
            <Select
                value={categoriaSeleccionada}
                onChange={(e) => {
                    setCategoriaSeleccionada(e.target.value);
                    setProductoSeleccionado(null); 
                }}
                style={{ minWidth: 200, marginBottom: 20 }}
            >
                <MenuItem value="libros">Libros</MenuItem>
                <MenuItem value="bicicletas">Bicicletas</MenuItem>
            </Select>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Nombre</b></TableCell>
                            <TableCell><b>Precio</b></TableCell>
                            {categoriaSeleccionada === 'libros' && <TableCell><b>Autor</b></TableCell>}
                            <TableCell><b>Acción</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productos.map((producto, index) => (
                            <TableRow key={index}>
                                <TableCell>{producto.title || 'Bicicleta'}</TableCell>
                                <TableCell>${producto.price}</TableCell>
                                {categoriaSeleccionada === 'libros' && <TableCell>{producto.author}</TableCell>}
                                <TableCell>
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        onClick={() => setProductoSeleccionado(producto)}
                                    >
                                        Seleccionar
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Button 
                variant="outlined" 
                color="primary" 
                onClick={() => setMostrarBuscar(!mostrarBuscar)}
                style={{ marginTop: 20 }}
            >
                Buscar Producto
            </Button>

            {mostrarBuscar && (
                <div style={{ marginTop: '20px' }}>
                    <Typography variant="h6">Buscar Producto:</Typography>
                    <TextField
                        label="Ingresa el nombre del producto"
                        value={productoNombre}
                        onChange={(e) => setProductoNombre(e.target.value)} 
                        fullWidth
                        style={{ marginTop: 20 }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleBuscarClick}
                        style={{ marginTop: 10 }}
                    >
                        Buscar
                    </Button>
                </div>
            )}

           
            {productoSeleccionado && (
                <div style={{ marginTop: '20px' }}>
                    <Typography variant="h6">Producto Encontrado:</Typography>
                    <Typography><b>Nombre:</b> {productoSeleccionado.title || 'Bicicleta'}</Typography>
                    {categoriaSeleccionada === 'libros' && <Typography><b>Autor:</b> {productoSeleccionado.author}</Typography>}
                    <Typography><b>Precio:</b> ${productoSeleccionado.price}</Typography>
                </div>
            )}

            
            {productoNombre && !productoSeleccionado && (
                <Typography color="error" style={{ marginTop: 20 }}>
                    No se encontró el producto con ese nombre.
                </Typography>
            )}
        </div>
    );
}
