import React from 'react';
import { Grid, Card, Typography } from '@mui/material';
import MiDialogo from './MiDialogo';

export default function ListaProductoDialogo(props) {
    const datos = props.data;

    console.log(datos);

    return (
        <div>
            <h2>Consumo de JSON</h2>

            <Grid container spacing={1}>
                {/* Primer Grid (Card) */}
                <Grid item sm={12} md={6}>
                    <Card variant="outlined" color="success" style={{ padding: 15 }}>
                        <Typography variant="h4" color="initial">
                            Bicicleta en promo
                        </Typography>
                        <Typography variant="h5" color="initial">
                            Precio más bajo: ${datos.bicycle.price}
                        </Typography>
                        <Typography variant="h5" color="initial">
                            Stock: {datos.bicycle['in-stock'] ? 'Disponible' : 'No disponible'}
                        </Typography>
                        <Typography variant="h5" color="initial">
                            Color: {datos.bicycle.color}
                        </Typography>
                    </Card>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
            {datos.book.map((libro, index) => (
                <Grid item sm={12} md={6} key={index}>
                    <Card variant="outlined" color="success" style={{ padding: 15 }}>
                        <Typography variant="h4" color="initial">
                            LIBRO
                        </Typography>
                        <Typography variant="h5" color="initial">
                            Título: {libro.title}
                        </Typography>
                        <Typography variant="h5" color="initial">
                            Autor: {libro.author}
                        </Typography>
                        <Typography variant="h5" color="initial">
                            Categoría: {libro.category}
                        </Typography>
                        <MiDialogo
                        datos={libro}/>
                    </Card>
                </Grid>
            ))}
            </Grid>
    
        </div>
    );
}
