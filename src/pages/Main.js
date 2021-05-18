import React from 'react'
import { Button, Nav } from 'react-bootstrap'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import logo1 from '../styles/images/logo1.png'
import logo2 from '../styles/images/logo2.png'
import img1 from '../styles/images/avax.png'
import img2 from '../styles/images/btc.png'
import img3 from '../styles/images/uni.png'
import img4 from '../styles/images/ada.png'
import img5 from '../styles/images/eth.png'
import img6 from '../styles/images/neo.png'
import img7 from '../styles/images/pol.png'
import img8 from '../styles/images/sol.png'
import img9 from '../styles/images/sushi.png'
import img10 from '../styles/images/xlm.png'
import img11 from '../styles/images/1inch.png'
import img12 from '../styles/images/bnana.png'
import img13 from '../styles/images/cake.png'
import img14 from '../styles/images/huobi.png'
import img15 from '../styles/images/okb.png'
import img16 from '../styles/images/pcx.png'
import img17 from '../styles/images/rsr.png'
import img18 from '../styles/images/shroom.png'
import img19 from '../styles/images/ftm.png'
import img20 from '../styles/images/dai.png'
import { Link, Route, Router } from 'react-router-dom'
import Login from './Login';




const Main = () => {
    return (
        <div>
            <Navigation />
             <div className="landing">
                <h1>Track your crypto portfolio</h1>
                <Button>{/* <Link to="/Login"> */}Create your Portfolio{/* </Link> */}</Button>
                {/* <Route
                path='/Login'
                component={Login}/> */}
                <h3>We all love our coinzz and we want to pleasure our eyes
            with all the gains this year !</h3>
            </div>
            <div className="images-separator">
                <img className="random-img avax" src={img1} alt="" />
                <img className="random-img btc" src={img2} alt="" />
                <img className="random-img uni" src={img3} alt="" />
                <img className="random-img ada" src={img4} alt="" />
                <img className="random-img eth" src={img5} alt="" />
                <img className="random-img neo" src={img6} alt="" />
                <img className="random-img pol" src={img7} alt="" />
                <img className="random-img sol" src={img8} alt="" />
                <img className="random-img sushi" src={img9} alt="" />
                <img className="random-img xlm" src={img10} alt="" />
            </div>
            <div className="features">

                <div className="features-item-wrapper">
                    <div className="features-item">
                        <h4>real-time price data</h4>
                        <p>prices are updated 24/7 using APIs
                        from some of the biggest exchanges
                        </p>
                        <img className="" src={logo2} alt=""></img>
                    </div>
                    <div className="features-item">
                        <h4>no personal data storage</h4>
                        <p>we don't need any of your data
                        we are just happy you came by
                        </p>
                        <img className="" src={logo1} alt=""></img>
                    </div>
                </div>
            </div>

            <div className="images-separator">
                <img className="random-img inch" src={img11} alt="" />
                <img className="random-img bnana" src={img12} alt="" />
                <img className="random-img cake" src={img13} alt="" />
                <img className="random-img huobi" src={img14} alt="" />
                <img className="random-img okb" src={img15} alt="" />
                <img className="random-img pcx" src={img16} alt="" />
                <img className="random-img rsr" src={img17} alt="" />
                <img className="random-img shroom" src={img18} alt="" />
                <img className="random-img ftm" src={img19} alt="" />
                <img className="random-img dai" src={img20} alt="" />
            </div>
            <div className="features"></div>

            <div className="richbitch">
                <h1>please make yourself <span>rich</span></h1>
                <Button className="landing-button" href="/Login">Create you Portfolio</Button>
            </div>
            <Footer />
        </div>
    )
}

export default Main
