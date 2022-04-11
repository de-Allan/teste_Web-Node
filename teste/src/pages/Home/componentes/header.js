import React from "react";
import Appbar from '@material-ui/core/Appbar';
import '../styles.css'

export default function Header() {
    return (
        <Appbar className="header" >
            <div className="toolbar" >
                <div>
                    <span>Conecta Dev</span>
                </div>
                <div>

                    <button
                        color='primary'
                        variant='contained' >
                        Novo Post
                    </button>
                    
                    <span>Imag1</span>
                    <span>Imag2</span>
                </div>
            </div>
        </Appbar>
    )
} 