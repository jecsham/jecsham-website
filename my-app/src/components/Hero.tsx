import React from 'react';
import { Row, Col } from 'react-bootstrap';

function yearsOld(d: number, m: number, y: number) {
    let initDate = new Date(`${y}-${m}-${d}`).getTime();
    let date = Date.now();
    let dif = initDate - date;
    let yearsOld = Math.abs((dif / (1000 * 60 * 60 * 24)) / 365);

    return yearsOld.toFixed(1);
}

function Hero() {
    return (
        <Row>
            <Col>
                <div className="d-flex justify-content-center">
                    <div className="text-center my-3">
                        <h3 className="font-weight-light my-3">Jecsham Castillo</h3>
                        <figure className="d-flex justify-content-center mt-1">
                            <div className="rounded-circle j-img-card"></div>
                        </figure>
                        <h6 className="card-subtitle mb-4 text-muted font-weight-light">Fullstack Developer</h6>
                        <a href="https://platzi.com/@jecsham/" target="_blank" rel="noopener noreferrer" className="card-link"><i className="mdi mdi-platzi"></i>
                            Platzi</a>
                        <a href="https://twitter.com/jecsham" className="card-link" rel="noopener noreferrer" target="_blank"><i className="mdi mdi-twitter"></i>
                            Twitter</a>
                        <a href="https://github.com/jecsham" className="card-link" rel="noopener noreferrer" target="_blank"><i className="mdi mdi-github-box"></i>
                            Github</a>
                        <a href="https://www.linkedin.com/in/jecsham-castillo-07599aa7/" className="card-link" rel="noopener noreferrer" target="_blank"><i
                            className="mdi mdi-linkedin"></i> LinkedIn</a>
                        <p className="card-text font-weight-light">
                            Hi, I'm Jecsham, I'm {yearsOld(27, 11, 1997)} years old and I consider myself a
                            Fullstack Developer. <br />
                        </p>
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default Hero;