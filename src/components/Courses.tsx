import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import getPlatziData from "../lib/platzi";

interface IState {
  courses: any[];
}

interface IProps {}
class Courses extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      courses: [],
    };
  }
  async getPlatziThings() {
    let { courses, careers } = await getPlatziData();
    let totalCourses = courses.concat(careers);
    await this.setState({ courses: totalCourses });
  }

  componentDidMount() {
    this.getPlatziThings();
  }

  render() {
    return (
      <Row>
        <Col>
          <div className="mb-3">
            <h3 className="mb-0">Platzi courses ⬎</h3>
            <small className="text-muted font-weight-light">
              Approved courses
            </small>
            <div
              className="d-flex justify-content-center flex-wrap mt-3"
              id="cards-platzi-courses"
            >
              {this.state.courses.map((item: any, i: number) => (
                <a
                  key={i}
                  href={`https://platzi.com${item.diploma_link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="j-nounderline text-dark"
                >
                  <div className="card m-3 j-card-width-20">
                    <div className="card-body">
                      <table className="j-table-float-center">
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src={item.badge || item.golden_achievement}
                                className="j-img-card-platzi rounded-circle"
                                alt={item.title}
                              />
                            </td>
                            <td>
                              <h5 className="card-title ml-3 mb-0">
                                {item.title}
                              </h5>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Courses;
