import React from 'react'

import Chart from '../components/Chart'
import Coins from '../components/Coins'
import Navigation from '../components/Navigation'
import Wallet from '../components/Wallet'

const Dashboard = () => {
    return (
        <>
            <Navigation />
            <div className="dashboard-container-top">
                <Wallet />
                <Chart />
            </div>
            <div className="dashboard-container-bottom">


                <Coins />

            </div>
        </>
    )
}

export default Dashboard
