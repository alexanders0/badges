import React from 'react';

import './styles/Badge.css'
import confLogo from '../images/badge-header.svg'

class Badge extends React.Component {
    render(){
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Conference logo"/>
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" src="https://s.gravatar.com/avatar/cc0b6e4293176b7a8789b8b11d700b03?s=80" alt="Avatar" />
                    <h1>Alexander <br/> Sánchez</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>Software Engineer</h3>
                    <div>@alexanders0</div>
                </div>

                <div className="Badge__footer">
                    #khasiriConf
                </div>

            </div>
        )

    }
}

export default Badge;