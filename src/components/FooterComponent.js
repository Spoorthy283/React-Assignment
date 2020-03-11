import React from 'react';

function Footer(props) {
    return(
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <h2 className="siteTextColor">City of Helsingborg</h2>
                        <p>Telephone number</p>
                        <p>Helsingborg contact center: 045-10 522220</p>

                        <p>Opening hours<br/>
                        Monday - Thursday 7am
                        - 7pm Friday 7am - 5pm
                        Saturday 10am - 3pm</p>

                        <p>Organization Number: 2132032-1157</p>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <h2 className="siteTextColor">Send a letter</h2>
                        <p>Postal address<br/>
                        National Pre School, Helsingborg-560085</p>

                        <p>Email:<br/>
                         contactcenter@nps.see</p>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <h2 className="siteTextColor">Visit us</h2>
                        <p>Visiting address<br/>
                        Jayanagar 3rd block, Helsingborg-560085</p>

                        <h2 className="siteTextColor">Social Media</h2>
                        <div className="">
                            <a className="btn btn-social-media btn-facebook m-1" href="https://www.google.com/"><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-media btn-twitter m-1" href="https://www.google.com/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-media btn-instagram m-1" href="https://www.google.com/"><i className="fa fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;