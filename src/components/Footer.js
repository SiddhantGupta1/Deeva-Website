import React from 'react'
import './Footer.css'
import Logo from './../icons/Deeva Short Logo.svg'

function Footer(){

    return(
        <div className="Footer">
            <div className="Footer1">
                <div className="Know-Us">
                    <div className="Know-Us-heading">Know Us</div>
                    <div className="Know-Us-content">About us</div>
                    <div className="Know-Us-content">Deeva Charity</div>
                    <div className="Know-Us-content">Deeva Dealers</div>
                    <div className="Know-Us-content">Media</div>
                </div>

                <div className="Help">
                    <div className="Help-heading">Help & Support Us</div>
                    <div className="Help-content">Cancellation & Refund Policy</div>
                    <div className="Help-content">Report Complaint</div>
                    <div className="Help-content">Return</div>
                    <div className="Help-content">Payments</div>
                </div>

                <div className="Collaborate">
                    <div className="Collaborate-heading">Collaborate with Us</div>
                    <div className="Collaborate-content">Advertise </div>
                    <div className="Collaborate-content">Sell ur products on Deeva</div>
                    <div className="Collaborate-content">Partner with us</div>
                </div>

                <div className="Socials">
                    <div className="Socials-heading">Deeva Socials</div>
                    <div className="Socials-content">Instagram</div>
                    <div className="Socials-content">Facebook</div>
                    <div className="Socials-content">Twitter</div>
                    <div className="Socials-content">LinkedIn</div>
                </div>

            </div>

            <div className="Footer1-logo">
                <div className="Footer1-Divider"></div>
                <img style={{margin:"16px 0 0 705px"}} src={Logo}/>
            </div>


            <div className="Footer2">
                <div className="Mail-Us">
                    <div className="Mail-Us-heading">Mail Us</div>
                    <div className="Mail-Us-content">
                        Street:  371/73, 55, Fariz E Edroos, Narshi 
                        <br/>
                        Natha Street, Masjid Bunder (east)
                        <br/>
                        City:   Mumbai
                        <br/>
                        State/Province/Area:    Maharashtra
                        <br/>
                        Phone number  02223447726
                        <br/>
                        Zip code  400009
                        <br/>
                        Country calling code  +91
                        <br/>
                        Country  India
                    </div>
                </div>

                <div className="Mail-Us">
                    <div className="Mail-Us-heading">Mail Us</div>
                    <div className="Mail-Us-content">
                        Street:  371/73, 55, Fariz E Edroos, Narshi 
                        <br/>
                        Natha Street, Masjid Bunder (east)
                        <br/>
                        City:   Mumbai
                        <br/>
                        State/Province/Area:    Maharashtra
                        <br/>
                        Phone number  02223447726
                        <br/>
                        Zip code  400009
                        <br/>
                        Country calling code  +91
                        <br/>
                        Country  India
                    </div>
                </div>

                <div className="Mail-Us">
                    <div className="Mail-Us-heading">Mail Us</div>
                    <div className="Mail-Us-content">
                        Street:  371/73, 55, Fariz E Edroos, Narshi 
                        <br/>
                        Natha Street, Masjid Bunder (east)
                        <br/>
                        City:   Mumbai
                        <br/>
                        State/Province/Area:    Maharashtra
                        <br/>
                        Phone number  02223447726
                        <br/>
                        Zip code  400009
                        <br/>
                        Country calling code  +91
                        <br/>
                        Country  India
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;