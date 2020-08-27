import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import getProjects from '../lib/projects';

interface IState {
    projects: any[]
}

interface IProps {

}
class OtherProjects extends Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = { projects: [] };
    }
    async getProjects() {
        let projects = await getProjects();
        await this.setState({ projects: projects.otherProjects });
    }

    componentDidMount() {
        this.getProjects();
    }

    render() {
        return (
            <Row>
                <Col>
                    <div className="mb-3">
                        <h3 className="mb-0">Other projects  ⬎</h3>
                        <small className="text-muted font-weight-light">Contributions, old projects and more</small>
                        <div className="d-flex justify-content-center flex-wrap mt-3">
                            {
                                this.state.projects.map((item: any, i: number) => (

                                    <div key={i} className="card j-card m-4 px-0 j-card-width-20">
                                        <img className="j-img-card-projects rounded-circle" src={item.img} alt="img" />
                                        <div className="card-body">
                                            <h5 className="card-title mt-4">{item.title}</h5>
                                            <span className="mb-2 badge badge-secondary">{item.badge}</span>
                                            <p className="card-text">{item.description}</p>
                                        </div>
                                        <div className="card-footer text-center">
                                            <a href={item.site_url} target="_blank" rel="noopener noreferrer" className="card-link">Site</a>
                                            <a href={item.source_code_url} target="_blank" rel="noopener noreferrer" className="card-link">Source code</a>
                                        </div>
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default OtherProjects;