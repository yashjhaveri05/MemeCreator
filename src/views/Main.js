import React , { useState, useEffect } from 'react';
import '../index.css';
import axios from 'axios';
import Templates from './Templates';
import Pagination from './Pagination';
import {Grid} from '@material-ui/core/';
import CircularProgress from '@material-ui/core/CircularProgress';
import LazyLoad from 'react-lazyload';

const Spinner =() => (
    <div className="Spinner">
        <CircularProgress />
    </div>
);

const Main = () => {
    const [templates,setTemplates] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [templatesPerPage] = useState(10);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const fetchTemplates = async() => {
            setLoading(true);
            const res = await axios.get('https://api.imgflip.com/get_memes');
            setTemplates(res.data.data.memes);
            setLoading(false);
          };
        fetchTemplates();
    },[]);
      
    const indexOfLastTemplate = currentPage * templatesPerPage;
    const indexOfFirstTemplate = indexOfLastTemplate - templatesPerPage;
    const currentTemplates = templates.slice(indexOfFirstTemplate, indexOfLastTemplate);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div id="Main">
            <Pagination templatesPerPage={templatesPerPage} totalTemplates={templates.length} paginate={paginate} currentPage={currentPage} />
            <div className="Grid">
                <Grid container spacing={2} justify="center" alignItems="center">
                    {currentTemplates.map((template)=>(
                        <Grid item xs={12} sm={12} md={6} key={template.id}>
                            <LazyLoad key={template.id} height={100} offset={[-100,100]} placeholder={<Spinner />}>
                                <Templates key={template.id} id={template.id} name={template.name} imgurl={template.url} boxes={template.box_count} loading={loading} />
                            </LazyLoad>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );

}

export default Main;