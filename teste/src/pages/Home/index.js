import React from 'react';
import Header from './componentes/header';
import Navbar from './componentes/Navbar';
import Feed from './componentes/Feed';
import './styles.css';

export default function Home() {
    return(
        <div>
            <Header/>
            <main className='main' >
                <Navbar />
                <Feed />
            </main>
        </div>
    );
}