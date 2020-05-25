import React from 'react';
import '../stylesheets/Header.css'

const Header = () => {
    return (   
        <section id="headerSection">
            <div className="row mx-1 my-3 justify-content-between align-items-center">
                <div className="d-none d-sm-flex py-auto col-auto">
                    <a href="#contactSection"><h5>Contact</h5></a>
                </div>
                <div className="col-auto">
                    <h4>Eric Gauzens</h4>
                </div>
                <div className="text-right col-auto">
                    <h4 className="d-inline">
                        <a href="https://www.linkedin.com/in/eric-gauzens-a6441182/"><i className="fab fa-linkedin-in mr-2"></i></a>          
                    </h4>
                    <a href="https://github.com/egauzens"><i className="fa fa-code"></i></a>
                </div>
            </div>
        </section>
    );
}

export default Header;