import React from 'react';

import confLogo from '../images/badge-header.svg'

class Badge extends React.Component {
    render(){
        return <div>
            <div>
                <img src={confLogo} alt="Conference logo"/>
            </div>

            <div>
                <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
                <h1>Alexander <br/> Sánchez</h1>
            </div>

            <div>
                <p>Backend Engineer</p>
                <p>@alexanders0</p>
            </div>

            <div>
                #khasiriconf
            </div>

        </div>
    }
}

export default Badge;