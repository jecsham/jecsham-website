import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import getPlatziData from '../lib/platzi';
import Moment from 'react-moment';

interface IState {
    contributions: any[]
}

interface IProps {

}
class Contributions extends Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            contributions: []
        };
    }
    async getPlatziThings() {
        let { contributions } = await getPlatziData();
        await this.setState({ contributions });
    }

    componentDidMount() {
        this.getPlatziThings();
    }

    render() {
        return (
            <Row>
                <Col>
                    <div className="mb-3">
                        <h3 className="mb-0">Contributions ⬎</h3>
                        <small className="text-muted font-weight-light">Tutorials</small>
                        <div className="d-flex justify-content-center flex-wrap mt-3" id="cards-platzi-courses">
                            {
                                this.state.contributions.map((item: any, i: number) => (
                                    <a key={i} href={`https://platzi.com${item.detail_url}`} target="_blank" rel="noopener noreferrer" className="j-nounderline text-dark">
                                        <div className="card m-3 j-card-width-20">
                                            <div className="card-body">
                                                <table className="j-table-float-max">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <h5 className="card-title mb-0">{item.title}</h5>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="float-left">
                                                                <small className="text-muted j-nounderline"><span className="mdi mdi-clock-outline"></span> <Moment className="text-muted" fromNow>{item.created_at}</Moment></small>
                                                            </td>
                                                            <td className="float-right">
                                                                <small className="text-muted j-nounderline"><span className="mdi mdi-comment"></span> {item.n_responses} &nbsp; &nbsp;<span className="mdi mdi-thumb-up"></span> {item.n_stars}</small>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default Contributions;