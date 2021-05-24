import React, { useState } from 'react'
import './Banner.css'
import { Button } from '@material-ui/core';
import Search from './Search';
import { useHistory } from 'react-router-dom';

function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState (false);
    
    return (
        <div className='banner'>
            <div className='banner_search'>
                
               {showSearch && <Search />} 
                
                <Button onClick={()=> setShowSearch(!showSearch)} 
                className='banner_searchButton' 
                variant='outlined'>
                    {showSearch ? "Cerrar" : "Busca Fechas"} 
                </Button>
            </div>
            <div className='banner_info'>
                <h1>Vive el idioma.</h1>
                <h5> La mejor manera de aprender el idioma es viviendolo, hospedate con una familia nativa donde podrás explorar nuevas culturas.</h5>
                <Button onClick={() => history.push('/search')}
                variant='outlined'>Explora familias cercanas</Button>
            </div>
            
        </div>
    )
}

export default Banner
