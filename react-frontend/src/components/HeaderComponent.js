import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: []
        };
    }

    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                        <div><a href="https:/javaguides.net" className='navbar-brand'>Gestion de peliculas App</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;