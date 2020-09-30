import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../index.css';

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
  }));

const Pagination = ({ templatesPerPage, totalTemplates, paginate, currentPage }) => {
    const classes = useStyles();
  
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalTemplates / templatesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="Pagination">
            <h2 className={classes.header}>Navigate Through Pages To Select Your Favourite Meme Template: </h2>
            <ul className={classes.pagination}>
                {pageNumbers.map(number => (
                <li key={number} className='page-item'>
                    <button
                        className={number===currentPage?"selectedBtn":"btn"}  
                        onClick={()=>paginate(number)} >
                        {number}
                    </button>
                </li>
                ))}
            </ul>
        </div>
    );
    };

export default Pagination;