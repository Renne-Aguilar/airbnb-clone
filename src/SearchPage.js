import React from 'react'
import './SearchPage.css'
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
function SearchPage() {
    return (
        <div className='searchpage'>
            <h1>Soy la pagina de busqueda</h1>
            <div className="searchpage_info">
                <p>65 Familias . 26 agosto al 30 agosto . 2 huespedes</p>
                <h1>Familias Cercanas</h1>
                <Button
                variant="outlined"> Facilidades de pago </Button>
                <Button variant="outlined">Tipo de lugar</Button>
                <Button variant="outlined">Precio</Button>
                <Button variant="outlined">Habitaciones</Button>
                <Button variant="outlined">Más filtros</Button>
               

            </div>
            <SearchResult 
            img="https://firebasestorage.googleapis.com/v0/b/orange-eaad6.appspot.com/o/chuttersnap-mPBr9b48O-Y-unsplash.jpg?alt=media&token=6fd677db-4b52-4a61-9d74-2c9b67b09d04"
            location="Antigua Guatemala"
            title="Disfruta de la historia con la familia Gonzalez Echeverría"
            description="Somos una familia de 5 miembros, te ofrecemos los 3 tiempos de comida y una cama."
            star={4.8}
            price="Q75 / Día"
            total="Q1250, 15 días"
            />

            <SearchResult 
            img="https://firebasestorage.googleapis.com/v0/b/orange-eaad6.appspot.com/o/chuttersnap-mPBr9b48O-Y-unsplash.jpg?alt=media&token=6fd677db-4b52-4a61-9d74-2c9b67b09d04"
            location="Antigua Guatemala"
            title="Disfruta de la historia con la familia Gonzalez Echeverría"
            description="Somos una familia de 5 miembros, te ofrecemos los 3 tiempos de comida y una cama."
            star={4.8}
            price="Q75 / Día"
            total="Q1250, 15 días"
            />

            <SearchResult 
            img="https://firebasestorage.googleapis.com/v0/b/orange-eaad6.appspot.com/o/chuttersnap-mPBr9b48O-Y-unsplash.jpg?alt=media&token=6fd677db-4b52-4a61-9d74-2c9b67b09d04"
            location="Antigua Guatemala"
            title="Disfruta de la historia con la familia Gonzalez Echeverría"
            description="Somos una familia de 5 miembros, te ofrecemos los 3 tiempos de comida y una cama."
            star={4.8}
            price="Q75 / Día"
            total="Q1250, 15 días"
            />

            <SearchResult 
            img="https://firebasestorage.googleapis.com/v0/b/orange-eaad6.appspot.com/o/chuttersnap-mPBr9b48O-Y-unsplash.jpg?alt=media&token=6fd677db-4b52-4a61-9d74-2c9b67b09d04"
            location="Antigua Guatemala"
            title="Disfruta de la historia con la familia Gonzalez Echeverría"
            description="Somos una familia de 5 miembros, te ofrecemos los 3 tiempos de comida y una cama."
            star={4.8}
            price="Q75 / Día"
            total="Q1250, 15 días"
            />

            <SearchResult 
            img="https://firebasestorage.googleapis.com/v0/b/orange-eaad6.appspot.com/o/chuttersnap-mPBr9b48O-Y-unsplash.jpg?alt=media&token=6fd677db-4b52-4a61-9d74-2c9b67b09d04"
            location="Antigua Guatemala"
            title="Disfruta de la historia con la familia Gonzalez Echeverría"
            description="Somos una familia de 5 miembros, te ofrecemos los 3 tiempos de comida y una cama."
            star={4.8}
            price="Q75 / Día"
            total="Q1250, 15 días"
            />

            <SearchResult 
            img="https://firebasestorage.googleapis.com/v0/b/orange-eaad6.appspot.com/o/chuttersnap-mPBr9b48O-Y-unsplash.jpg?alt=media&token=6fd677db-4b52-4a61-9d74-2c9b67b09d04"
            location="Antigua Guatemala"
            title="Disfruta de la historia con la familia Gonzalez Echeverría"
            description="Somos una familia de 5 miembros, te ofrecemos los 3 tiempos de comida y una cama."
            star={4.8}
            price="Q75 / Día"
            total="Q1250, 15 días"
            />
        </div>
    )
}

export default SearchPage
