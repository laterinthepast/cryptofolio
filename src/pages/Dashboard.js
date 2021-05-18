import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Chart from '../components/Chart'
import Coins from '../components/Coins'
import Navigation from '../components/Navigation'
import Wallet from '../components/Wallet'

const Dashboard = () => {
    return (
        <>
            <Navigation />
            <div className="dashboard-container-top">
                <Container fluid className="dashboard-row-one">
                    <Row>
                        <Col>
                            <Chart />
                        </Col>
                        <Col>
                            <Wallet />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="dashboard-container-bottom">
                <Container fluid className="dashboard-row-two">
                    <Row>
                        <Col>
                            <Coins />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Dashboard
