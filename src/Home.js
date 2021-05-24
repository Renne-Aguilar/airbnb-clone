import React from 'react' ;
import './Home.css' ;
import Banner from './Banner'
import Card from './Card'
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className= 'home'>
            {/* <h1>Home Component</h1> */} 
            <Banner />

            <div className='home_section'>
            <Link to='/adpage'>
                <Card 
                src="https://firebasestorage.googleapis.com/v0/b/orange-eaad6.appspot.com/o/Fotograf%C3%ADa.jpg?alt=media&token=de9a2bea-d349-49cc-a5e8-1d3cac47731d"
                title="Familias Cercanas"
                description="Hospedate con personas nativas del idioma, cerca de ti."
                />
                </Link>

                <Card
                 src="https://firebasestorage.googleapis.com/v0/b/orange-eaad6.appspot.com/o/Fotograf%C3%ADa.jpg?alt=media&token=de9a2bea-d349-49cc-a5e8-1d3cac47731d"
                 title="Familias Cercanas"
                 description="Hospedate con personas nativas del idioma, cerca de ti." />
                <Card 
                 src="https://firebasestorage.googleapis.com/v0/b/mibooks.appspot.com/o/blake-wisz-urnQ0fO7hZo-unsplash.jpg?alt=media&token=69a97cd0-4364-4220-a58d-3c130974ca70"
                 title="Familias Cercanas"
                 description="Hospedate con personas nativas del idioma, cerca de ti."/>
            </div>
            <div className='home_section'>
                <Card 
                 src="https://firebasestorage.googleapis.com/v0/b/orange-eaad6.appspot.com/o/benjamin-rascoe-r0xeFx1gE3s-unsplash.jpg?alt=media&token=e0bf9469-d3c4-4c77-952e-73dbd54e24a2"
                 title="Familias Cercanas"
                 description="Hospedate con personas nativas del idioma, cerca de ti."
                 price="Q75/Día"/>
                <Card 
                 src="https://firebasestorage.googleapis.com/v0/b/orange-eaad6.appspot.com/o/Fotograf%C3%ADa.jpg?alt=media&token=de9a2bea-d349-49cc-a5e8-1d3cac47731d"
                 title="Familias Cercanas"
                 description="Hospedate con personas nativas del idioma, cerca de ti."
                 price="Q75/Día"/>
                <Card  src="https://firebasestorage.googleapis.com/v0/b/orange-eaad6.appspot.com/o/Fotograf%C3%ADa.jpg?alt=media&token=de9a2bea-d349-49cc-a5e8-1d3cac47731d"
                 title="Familias Cercanas"
                 description="Hospedate con personas nativas del idioma, cerca de ti."
                 price="Q75/Día"/>
            </div>
            
        </div>
    )
}

export default Home
