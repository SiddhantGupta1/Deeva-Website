import React from 'react'
import './ProfilePage.css'
import Profile from '../../icons/Profile.svg'
import ProfilePage1 from '../../icons/ProfilePage1.svg'
import ProfilePage2 from '../../icons/ProfilePage2.svg'
import ProfilePage3 from '../../icons/ProfilePage3.svg'
import ProfilePage4 from '../../icons/ProfilePage4.svg'
import ProfilePage5 from '../../icons/ProfilePage5.svg'
import ProfilePage6 from '../../icons/ProfilePage6.svg'
import Header from '../Header'
import Footer from '../Footer'
import {Link} from 'react-router-dom'

const ProfilePage = ({deliver, orders}) => {
    return (
        <div className="ProfilePage">
            <section></section>
            <div className="ProfileSection1">
                <img src={Profile} alt=""/>
            </div>
            <div className="Profile-name">
                <dt>Siddhant Gupta<button className="ProfilePage-edit">Edit</button></dt>
                <article>Utopia</article>
            </div>
            <div className="ProfileSection2">
                <div className="ProfilePage-details">
                    <a href="/your orders">
                        <img src={ProfilePage1} alt=""/>
                        <dt>Your<br />Orders</dt>
                    </a>
                    <a href="/address#saved-addresses">
                        <img src={ProfilePage2} alt=""/>
                        <dt>Saved<br />Addresses</dt>
                    </a>
                    <button>
                        <img src={ProfilePage3} alt=""/>
                        <dt>Saved<br />Cards</dt>
                    </button>
                    <button>
                        <img src={ProfilePage6} alt="" style={{position:"absolute", top:"0", left:"0"}}/>
                        <img src={ProfilePage4} alt=""/>
                        <dt>Your<br />Reviews & ratings</dt>
                    </button>
                    <button>
                        <img src={ProfilePage5} alt=""/>
                        <dt>Your<br />Coupons</dt>
                    </button>
                </div>
                
                <div className="ProfilePage-recent-orders">
                    <h1>Track Recent Orders</h1>
                    {orders.slice(0,3).map((e,i) => (
                        <div key={i} className="ProfilePage-recent-orders-list">
                            <div className="ProfilePage-recent-orders-list-img">
                                <img src={e.image} alt=""/>
                            </div>
                            <div className="ProfilePage-recent-orders-list-name">
                                <h2>{e.name.split(' ').slice(0,1).join(' ')}</h2>
                                <p>{e.name}</p>
                            </div>
                            <abbr>
                                {deliver}<br />
                                <Link to={`/your orders/delivery?id=${e.id}`} style={{textDecoration:"none"}}>
                                    <span>&gt;</span>
                                </Link>
                            </abbr>
                        </div>
                    ))}
                </div>
            </div>
                
            <Footer />
            <Header />
        </div>
    )
}

export default ProfilePage
