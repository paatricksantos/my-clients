import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import { ClientsContext } from '../../contexts/ClientsContext';

function createData(
  id,
  nameClientOrFantasy,
  lastNameOrSocial,
  typeClient,
  actionRemove,
) {
  return {
    id,
    nameClientOrFantasy,
    lastNameOrSocial,
    typeClient,
    actions: (
      <div className="actions">
        <Link to={`/edit/${id}`}>
          <img src={edit} alt="editar" />
        </Link>
        <button type="button" onClick={() => actionRemove(id)}>
          <img src={trash} alt="Deletar" />
        </button>
      </div>
    ),
  };
}

const columns = [
  { id: 'id', label: 'Id', minWidth: 20 },
  { id: 'nameClientOrFantasy', label: 'Nome/Fantasia', minWidth: 120 },
  {
    id: 'lastNameOrSocial',
    label: 'Sobrenome/Razão Social',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'typeClient',
    label: 'Tipo de Cliente',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'actions',
    label: '',
    minWidth: 70,
    align: 'right',
  },
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function MyTable() {
  const { clients, removeClient } = useContext(ClientsContext);
  const [rows, setRows] = useState([]);
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    if (clients) {
      setRows(
        clients.map(client =>
          createData(
            client.id,
            client.lastNameOrSocial,
            client.nameClientOrFantasy,
            client.typeClient,
            removeClient,
          ),
        ),
      );
    }
  }, [clients, removeClient]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <>
                      {columns.map(column => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value}
                          </TableCell>
                        );
                      })}
                    </>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20, 50]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        labelRowsPerPage="Clientes por página"
        labelDisplayedRows={({ from, to, count }) =>
          `${from}-${to} de ${count !== -1 ? count : `more than' ${to}`}`
        }
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
