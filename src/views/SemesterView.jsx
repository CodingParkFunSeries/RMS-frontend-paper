import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

class SemesterView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      semesters:  [],
      schoolId: 1
    }
  }

  componentDidMount = () => {

    fetch('http://ajyarms.azurewebsites.net/schools/' + this.state.schoolId + '/semesters')
     .then(result=>result.json())
     .then(item=> {
       this.setState({semesters: item});
     });

  }

  render() {

    const allSemesters = this.state.semesters;

    console.log(allSemesters);

    const tableContent =  allSemesters.map( (item) => {
      return (
        <tr>
          <td>{item.name}</td>
          <td>{item.name}</td>
        </tr>
       )
    });

    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4">Semesters/Years</CardTitle>
                  <p className="card-category">
                    All Semester and Years
                  </p>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableContent}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default SemesterView;
