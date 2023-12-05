import React, { useEffect, useState } from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useHistory } from "react-router-dom";

import { Container, Img, EditIconStyle } from './styles'
import api from '../../../services/api'
import formatCurrency from '../../../utils/formatCurrency'
import paths from "../../../constants/paths";

export function ListProducts() {
    const [products, setProducts] = useState()
    const { push } = useHistory()

    useEffect(() => {
        async function loadOrders() {
            const { data } = await api.get('products')

            setProducts(data)
        }
        loadOrders()
    })

    function isOffer(offerStatus) {
        if (offerStatus) {
            return <CheckCircleIcon style={{ color: '#228B22' }} />
        }
        return <CancelIcon style={{ color: '#CC1717' }} />
    }

    function editProduct(product) {
        push(paths.EditProduct, { product })
    }

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Preco</TableCell>
                            <TableCell align="center">Oferta</TableCell>
                            <TableCell align="center">Imagem</TableCell>
                            <TableCell align="center">Editar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products &&
                            products.map(product => (
                                <TableRow
                                    key={product.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {product.name}
                                    </TableCell>
                                    <TableCell>{formatCurrency(product.price)}</TableCell>
                                    <TableCell style={{ width: '250px' }} align="center">{isOffer(product.offer)}</TableCell>
                                    <TableCell align="center"><Img src={product.url} alt="imagem-produto" /></TableCell>
                                    <TableCell style={{ width: '200px' }} align="center">
                                        <EditIconStyle onClick={() => editProduct(product)} />
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default ListProducts