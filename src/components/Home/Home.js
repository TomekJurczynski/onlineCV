import React from 'react';
import './Home.css'

export default function Home() {
    return (
        <div className="wrapper">
                <div className="avatar">
                </div>
                <div className="details">
                    <p className="namesurname">Tomasz Jurczyński</p>
                    <a className="email" href="mailto:tomekjurczynski@gmail.com">tomekjurczynski@gmail.com</a> <br/>
                    <a className="linkedin" target="_blank" href="https://www.linkedin.com/in/tomasz-jurczy%C5%84ski-266990171/">LinkedIn</a>
                </div>
        </div>
    )
}
