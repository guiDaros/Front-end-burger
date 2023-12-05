// import React, { useEffect } from "react";
// import PropTypes from "prop-types";
// import Box from '@mui/material/Box';
// import Collapse from '@mui/material/Collapse';
// import IconButton from '@mui/material/IconButton';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Typography from '@mui/material/Typography';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// import api from '../../../services/api';
// import { ProductsImg } from './styles';
// import status from "./order-status";

// export function Row({ row, setOrders, orders }) {
//   const [open, setOpen] = React.useState(false);
//   const [isLoading, setIsLoading] = React.useState(false);
//   const [currentStatus, setCurrentStatus] = React.useState(row.status);
//   const [orderChanger, setOrderChanger] = React.useState([]);

//   async function setNewStatus(id, status) {
//     setIsLoading(true);
//     try {
//       await api.put(`orders/${id}`, { status });

//       const newOrders = orders.map(order => {
//         return order._id === id ? { ...order, status } : order
//       })
//       setOrderChanger(newOrders)
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   useEffect(() => {
//     async function updateOrderStatus() {
//       setIsLoading(true);
//       try {
//         await api.put(`orders/${row.orderId}`, { status: currentStatus });
//         const { data } = await api.get('orders');
//         setOrders(data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     // Verifies if the status has changed
//     if (currentStatus !== row.status) {
//       updateOrderStatus();
//     }
//   }, [currentStatus, row.orderId, row.status]);

//   return (
//     <React.Fragment>
//       <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
//         <TableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//         </TableCell>
//         <TableCell component="th" scope="row">
//           {row.orderId}
//         </TableCell>
//         <TableCell>{row.name}</TableCell>
//         <TableCell>{row.date}</TableCell>
//         <TableCell>
//           <select
//             style={{
//               width: '140px',
//               height: '30px',
//               border: '1px solid #3f3f3f',
//               borderRadius: '5px',
//               padding: '0 10px',
//               cursor: 'pointer'
//             }}
//             value={currentStatus}
//             onChange={(e) => {
//               const newStatus = e.target.value;
//               setCurrentStatus(newStatus);
//               setNewStatus(row.orderId, newStatus);
//             }}
//             disabled={isLoading}
//           >
//             {status.map((option) => (
//               <option key={option.id} value={option.value}>
//                 {option.label}
//               </option>
//             ))}
//           </select>
//         </TableCell>
//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box sx={{ margin: 1 }}>
//               <Typography variant="h6" gutterBottom component="div">
//                 History
//               </Typography>
//               <Table size="small" aria-label="purchases">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Quantity</TableCell>
//                     <TableCell>Product</TableCell>
//                     <TableCell>Category</TableCell>
//                     <TableCell></TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {row.products.map((productRow) => (
//                     <TableRow key={productRow.id}>
//                       <TableCell component="th" scope="row">
//                         {productRow.quantity}
//                       </TableCell>
//                       <TableCell>{productRow.name}</TableCell>
//                       <TableCell>{productRow.category}</TableCell>
//                       <TableCell>
//                         <ProductsImg
//                           src={productRow.url}
//                           alt="product-image"
//                         />
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }

// Row.propTypes = {
//   setOrders: PropTypes.func,
//   orders: PropTypes.array,
//   row: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     orderId: PropTypes.string.isRequired,
//     date: PropTypes.string.isRequired,
//     status: PropTypes.string.isRequired,
//     products: PropTypes.arrayOf(
//       PropTypes.shape({
//         quantity: PropTypes.number.isRequired,
//         name: PropTypes.string.isRequired,
//         category: PropTypes.string.isRequired,
//         url: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//   }).isRequired,
// };

// export default Row;




//AQUI

// import React, { useEffect } from "react";
// import PropTypes from "prop-types";
// import Box from '@mui/material/Box';
// import Collapse from '@mui/material/Collapse';
// import IconButton from '@mui/material/IconButton';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Typography from '@mui/material/Typography';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// import api from '../../../services/api';
// import { ProductsImg } from './styles';
// import status from "./order-status";

// export function Row({ row, setOrders, orders }) {
//   const [open, setOpen] = React.useState(false);
//   const [isLoading, setIsLoading] = React.useState(false);
//   const [currentStatus, setCurrentStatus] = React.useState(row.status);
//   const [orderChanger, setOrderChanger] = React.useState([]);

//   async function setNewStatus(id, status) {
//     setIsLoading(true);
//     try {
//       await api.put(`orders/${id}`, { status });

//       const newOrders = orders.map(order => {
//         return order._id === id ? { ...order, status } : order
//       })
//       setOrderChanger(newOrders)
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   useEffect(() => {
//     async function updateOrderStatus() {
//       setIsLoading(true);
//       try {
//         await api.put(`orders/${row.orderId}`, { status: currentStatus });
//         const { data } = await api.get('orders');
//         setOrders(data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     // Verifies if the status has changed
//     if (currentStatus !== row.status) {
//       updateOrderStatus();
//     }
//   }, [currentStatus, row.orderId, row.status]);

//   return (
//     <React.Fragment>
//       <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
//         <TableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//         </TableCell>
//         <TableCell component="th" scope="row">
//           {row.orderId}
//         </TableCell>
//         <TableCell>{row.name}</TableCell>
//         <TableCell>{row.date}</TableCell>
//         <TableCell>
//           <div style={{ position: 'relative' }}>
//             {isLoading && <select />}
//             <select
//               style={{
//                 width: '140px',
//                 height: '30px',
//                 border: '1px solid #3f3f3f',
//                 borderRadius: '5px',
//                 padding: '0 10px',
//                 cursor: 'pointer'
//               }}
//               value={currentStatus}
//               onChange={(e) => {
//                 const newStatus = e.target.value;
//                 setCurrentStatus(newStatus);
//                 setNewStatus(row.orderId, newStatus);
//               }}
//               disabled={isLoading}
//             >
//               {status.map((option) => (
//                 <option key={option.id} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </TableCell>
//       </TableRow>
//  <TableRow>
//   <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//     <Collapse in={open} timeout="auto" unmountOnExit>
//       <Box sx={{ margin: 1 }}>
//         <Typography variant="h6" gutterBottom component="div">
//           History
//         </Typography>
//         <Table size="small" aria-label="purchases">
//           <TableHead>
//             <TableRow>
//               <TableCell>Quantity</TableCell>
//               <TableCell>Product</TableCell>
//               <TableCell>Category</TableCell>
//               <TableCell></TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {row.products.map((productRow) => (
//               <TableRow key={productRow.id}>
//                 <TableCell component="th" scope="row">
//                   {productRow.quantity}
//                 </TableCell>
//                 <TableCell>{productRow.name}</TableCell>
//                 <TableCell>{productRow.category}</TableCell>
//                 <TableCell>
//                   <ProductsImg
//                     src={productRow.url}
//                     alt="product-image"
//                   />
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </Box>
//     </Collapse>
//   </TableCell>
// </TableRow>
//     </React.Fragment>
//   );
// }

// Row.propTypes = {
//   setOrders: PropTypes.func,
//   orders: PropTypes.array,
//   row: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     orderId: PropTypes.string.isRequired,
//     date: PropTypes.string.isRequired,
//     status: PropTypes.string.isRequired,
//     products: PropTypes.arrayOf(
//       PropTypes.shape({
//         quantity: PropTypes.number.isRequired,
//         name: PropTypes.string.isRequired,
//         category: PropTypes.string.isRequired,
//         url: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//   }).isRequired,
// };

// export default Row;



import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import { ProductsImg } from './styles';
import api from '../../../services/api';
import status from "./order-status";

import { Container } from './index'

export function Row({ row, setOrders, orders }) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(row.status);

  async function setNewStatus(id, status) {
    setIsLoading(true);
    try {
      await api.put(`orders/${id}`, { status });

      const newOrders = orders.map(order => {
        return order._id === id ? { ...order, status } : order
      })
      setOrders(newOrders)
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    async function updateOrderStatus() {
      setIsLoading(true);
      try {
        await api.put(`orders/${row.orderId}`, { status: currentStatus });
        const { data } = await api.get('orders');
        setOrders(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    if (currentStatus !== row.status) {
      updateOrderStatus();
    }
  }, [currentStatus, row.orderId, row.status]);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.orderId}
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.date}</TableCell>
        <TableCell>
          <div style={{ position: 'relative' }}>
            {isLoading && <select />}
            <select
              style={{
                width: '140px',
                height: '30px',
                border: '1px solid #3f3f3f',
                borderRadius: '5px',
                padding: '0 10px',
                cursor: 'pointer'
              }}
              value={currentStatus}
              options={status.filter(sts => sts.value !== 'Todos')}
              onChange={(e) => {
                // location.reload()
                const newStatus = e.target.value;
                setCurrentStatus(newStatus);
                setNewStatus(row.orderId, newStatus);

                setOrders(prevOrders => {
                  const updatedOrders = prevOrders.map(order => {
                    if (order._id === row.orderId) {
                      return { ...order, status: newStatus };
                    }
                    return order;
                  });
                  return updatedOrders;
                });
              }}
              disabled={isLoading}
            >
              {status.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Product</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.products.map((productRow) => (
                    <TableRow key={productRow.id}>
                      <TableCell component="th" scope="row">
                        {productRow.quantity}
                      </TableCell>
                      <TableCell>{productRow.name}</TableCell>
                      <TableCell>{productRow.category}</TableCell>
                      <TableCell>
                        <ProductsImg
                          src={productRow.url}
                          alt="product-image"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  orders: PropTypes.array,
  setOrders: PropTypes.func,
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    orderId: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        quantity: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Row;



