// src/components/Dashboard/Dashboard.js

import React, { useState, useEffect } from 'react';
import '../../styles/Dashboard.css';
import { Modal, Button, Navbar, Nav, Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faAppleAlt, faSun, faMoon, faChartLine, faUsers, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import MotivationalQuotes from './MotivationalQuotes';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import ProgramGenerator from './ProgramGenerator';
import FloatingMenu from './FloatingMenu'; // Import the FloatingMenu component

const Dashboard = () => {
    const [showServicesModal, setShowServicesModal] = useState(false);
    const [showProductsModal, setShowProductsModal] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const navigate = useNavigate(); // Define navigate with useNavigate hook

    const handleShowServicesModal = () => setShowServicesModal(true);
    const handleCloseServicesModal = () => setShowServicesModal(false);
    const handleShowProductsModal = () => setShowProductsModal(true);
    const handleCloseProductsModal = () => setShowProductsModal(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    return (
        <div className={`dashboard-container ${isDarkMode ? 'dark' : ''}`}>
            {/* Dark Mode Toggle */}
            <div className="dark-mode-toggle">
                <Button variant={isDarkMode ? "light" : "dark"} onClick={toggleDarkMode}>
                    <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
                </Button>
            </div>


            {/* Dashboard Content */}
            <Container>
                {/* Motivational Quotes */}
                <MotivationalQuotes />

                {/* Statistics Section */}
                <Row className="mb-4">
                    <Col md={4} sm={6} className="mb-3">
                        <Card className="stat-card">
                            <Card.Body>
                                <FontAwesomeIcon icon={faChartLine} size="3x" className="stat-icon" />
                                <Card.Title>Progress Tracking</Card.Title>
                                <Card.Text>
                                    Monitor your fitness journey with our comprehensive tracking tools.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={6} className="mb-3">
                        <Card className="stat-card" onClick={() => { navigate('/exercises'); handleCloseProductsModal(); }}>
                            <Card.Body>
                                <FontAwesomeIcon icon={faUsers} size="3x" className="stat-icon" />
                                <Card.Title>Exercise Visuals</Card.Title>
                                <Card.Text>
                                    Enjoy  a vast library of exercise details and tutorials.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={12} className="mb-3">
                        <Card className="stat-card" onClick={() => { navigate('/articles'); handleCloseProductsModal(); }}>
                          
                            <Card.Body>
                                <FontAwesomeIcon icon={faNewspaper} size="3x" className="stat-icon" />
                                <Card.Title>Gym Articles</Card.Title>
                                <Card.Text>
                                Insights and advice from renowned experts.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Services and Products Cards */}
                <Row className="mb-4">
                    <Col md={6} sm={12} className="mb-3">
                        <Card className="action-card" onClick={handleShowServicesModal}>
                            <Card.Body className="text-center">
                                <FontAwesomeIcon icon={faDumbbell} size="3x" className="action-icon" />
                                <Card.Title className="mt-3">Our Free Services</Card.Title>
                                <Card.Text>
                                    Click to explore our free services.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} sm={12} className="mb-3">
                        <Card className="action-card" onClick={handleShowProductsModal}>
                            <Card.Body className="text-center">
                                <FontAwesomeIcon icon={faAppleAlt} size="3x" className="action-icon" />
                                <Card.Title className="mt-3">Our Products</Card.Title>
                                <Card.Text>
                                    Click to explore our products.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* Services Modal */}
            <Modal
                show={showServicesModal}
                onHide={handleCloseServicesModal}
                centered
                className={`custom-modal ${isDarkMode ? 'dark-modal' : ''}`}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Our Free Services</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col md={4} sm={12} className="mb-3">
                                <Card className="modal-service-card">
                                    <FontAwesomeIcon icon={faDumbbell} size="2x" className="modal-icon" />
                                    <Card.Body>
                                        <Card.Title>Workout Planning</Card.Title>
                                        <Card.Text>
                                            Personalized workout plans tailored to your goals.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4} sm={12} className="mb-3">
                                <Card className="modal-service-card">
                                    <FontAwesomeIcon icon={faAppleAlt} size="2x" className="modal-icon" />
                                    <Card.Body>
                                        <Card.Title>Diet Consultation</Card.Title>
                                        <Card.Text>
                                            Expert diet advice to complement your fitness regime.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4} sm={12} className="mb-3">
                                <Card className="modal-service-card">
                                    <FontAwesomeIcon icon={faUsers} size="2x" className="modal-icon" />
                                    <Card.Body>
                                        <Card.Title>24/7 Support</Card.Title>
                                        <Card.Text>
                                            Access to our support team anytime you need assistance.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={isDarkMode ? "light" : "secondary"} onClick={handleCloseServicesModal}>Close</Button>
                </Modal.Footer>
            </Modal>

            {/* Products Modal */}
            <Modal
                show={showProductsModal}
                onHide={handleCloseProductsModal}
                centered
                className={`custom-modal ${isDarkMode ? 'dark-modal' : ''}`}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Our Products</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col md={6} sm={12} className="mb-3">
                                <Card className="modal-product-card" onClick={() => { navigate('/yoga-pants'); handleCloseProductsModal(); }}>
                                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1586773860415-dac37f1af7e5?auto=format&fit=crop&w=400&q=80" />
                                    <Card.Body className="text-center">
                                        <Card.Title>Yoga Pants</Card.Title>
                                        <Card.Text>
                                            Explore our latest collection of yoga pants.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            {/* Add more product cards here */}
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={isDarkMode ? "light" : "secondary"} onClick={handleCloseProductsModal}>Close</Button>
                </Modal.Footer>
            </Modal>

            <ProgramGenerator />

        </div>
    );

};

export default Dashboard;
