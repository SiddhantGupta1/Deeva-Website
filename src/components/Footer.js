import React from 'react'
import './Footer.css'
import Logo from './../icons/Deeva Short Logo.svg'

function Footer(){

    var jh= 15;

    return(
        <div className="Footer">
            <div className="Footer1">
                <div className="Know-Us">
                    <div className="Know-Us-heading">Know Us</div>
                    <a href="" className="Know-Us-content">About us</a>
                    <a href="" className="Know-Us-content">Deeva Charity</a>
                    <a href="" className="Know-Us-content">Deeva Dealers</a>
                    <a href="" className="Know-Us-content">Media</a>
                </div>

                <div className="Help">
                    <div className="Help-heading">Help & Support Us</div>
                    <a href="" className="Help-content">Cancellation & Refund Policy</a>
                    <a href="" className="Help-content">Report Complaint</a>
                    <a href="" className="Help-content">Return</a>
                    <a href="" className="Help-content">Payments</a>
                </div>

                <div className="Collaborate">
                    <div className="Collaborate-heading">Collaborate with Us</div>
                    <a href="" className="Collaborate-content">Advertise </a>
                    <a href="" className="Collaborate-content">Sell ur products on Deeva</a>
                    <a href="" className="Collaborate-content">Partner with us</a>
                </div>

                <div className="Socials">
                    <div className="Socials-heading">Deeva Socials</div>
                    <a href="https://instagram.com/thedeeva.in?igshid=134ken4lhc7mb" className="Socials-content">Instagram</a>
                    <a href={"/puja/"+jh} className="Socials-content">Facebook</a>
                    <a href="https://twitter.com/Deeva56098887" className="Socials-content">Twitter</a>
                    <a href="https://www.linkedin.com/company/thedeeva/" className="Socials-content">LinkedIn</a>
                </div>

            </div>

            
            <div className="Footer1-Divider"></div>
            <div className="Footer1-logo">
                <img style={{width:"69px", height:"80px", marginTop:"18px"}} src={Logo} alt=""/>
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