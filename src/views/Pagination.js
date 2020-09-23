import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    pagination: {
        listStyle: "none",
        display: "flex",
        flexDirection: "row",
        textAlign: "center",
        justifyContent: "center",
    },
    header: {
        display: "flex",
        flexDirection: "row",
        textAlign: "center",
        justifyContent: "center",
    },
    button: {
        padding: 0,
    }
  }));

const Pagination = ({ templatesPerPage, totalTemplates, paginate, currentPage }) => {
    const classes = useStyles();
  
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalTemplates / templatesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <h2 className={classes.header}>Navigate Through Pages To Select Your Favorite Meme Template: </h2>
            <ul className={classes.pagination}>
                {pageNumbers.map(number => (
                <li key={number} className='page-item'>
                <ButtonGroup size="small" color={number === currentPage ? "primary": "secondary"} variant="contained" aria-label="primary button group" onClick={() => paginate(number)}  className={classes.button}>
                    <Button>{number}</Button>
                </ButtonGroup>
                </li>
                ))}
            </ul>
        </div>
    );
    };

export default Pagination;