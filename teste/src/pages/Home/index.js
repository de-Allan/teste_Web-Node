import React from 'react';
import Header from './componentes/header';
import './styles.css'

export default function Home() {
    return(
        <div>
            <Header/>
            <main className='main' >
                <div className='navbar' >navbar</div>
                <div className='feed' >feed</div>
            </main>
        </div>
    );
}