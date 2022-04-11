import React from "react";
import '../styles.css'
export default function Header () {
    return(
        <header className="header" >
            <div className="toolbar" >
                <div>
                    <span>Conecta Dev</span>
                </div>
                <div>
                    <button>Novo Post</button>
                    <span>Imag1</span>
                    <span>Imag2</span>
                </div>
            </div>
        </header>
    )
} 