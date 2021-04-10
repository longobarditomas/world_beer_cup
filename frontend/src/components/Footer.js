import React from 'react';

function Footer(props) {
    return(
        <div className="background-header" style={{color: "white", paddingTop: "40px", marginTop: "40px"}}>
            <div className="container">
                <div className="row">             
                    <div className="col-md-4" style={{textAlign: "left"}}>
                        <h2 style={{fontFamily: 'FiraSans-Light'}}>World Beer Cup</h2>
                    </div>
                    <div className="col-md-4" style={{textAlign: "left"}}>
                        <h4 style={{fontFamily: 'FiraSans-Light'}}>Information</h4>
                        <address>
                        459, Vellore Park Ave<br />
                        Kleinburg, ON,<br />
                        Canada<br />
                        <i className="fa fa-envelope fa-lg"></i><a href="mailto:worldcupburger@gmail.com" style={{color: "white"}}> worldcupburger@gmail.com</a>
                        </address>
                    </div>
                    <div className="col-md-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook" style={{color: "white"}}></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin" style={{color: "white"}}></i></a>
                            <a className="btn btn-social-icon" href="mailto:worldcupburger@gmail.com"><i className="fa fa-envelope-o" style={{color: "white"}}></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center" style={{paddingTop: "20px"}}>             
                    <div className="col-auto">
                        <p>© Copyright 2021 World Cup Burger</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;