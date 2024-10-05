// src/SizeGuide.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap'; // Make sure Bootstrap is installed
import '../../styles/YogaPants/SizeGuide.css'; // Import styles

const SizeGuide = ({ show, handleClose }) => {
    return (

<Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Size Guide</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Size Chart</h5>
                <pre><code><table className="size-guide-table">
                    <thead>
                        <tr>
                            <th>Size</th>
                            <th>Waist (inches)</th>
                            <th>Hip (inches)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>S</td>
                            <td>26-28</td>
                            <td>36-38</td>
                        </tr>
                        <tr>
                            <td>M</td>
                            <td>28-30</td>
                            <td>38-40</td>
                        </tr>
                        <tr>
                            <td>L</td>
                            <td>30-32</td>
                            <td>40-42</td>
                        </tr>
                        <tr>
                            <td>XL</td>
                            <td>32-34</td>
                            <td>42-44</td>
                        </tr>
                    </tbody>
                </table></code></pre>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    
); };
export default SizeGuide;