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

class SchoolView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      schools:  []
    }
  }

  componentDidMount = () => {

    fetch('http://ajyarms.azurewebsites.net/schools')
     .then(result=>result.json())
     .then(item=> {
       this.setState({schools: item});
     });

  }

  render() {

    const allSchools = this.state.schools;


    const tableContent =  allSchools.map( (item) => {
      return (
        <tr>
          <td>{item.name}</td>
          <td className="text-right">{item.address}</td>
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
                  <CardTitle tag="h4">Schools</CardTitle>
                  <p className="card-category">
                    View of all the schools
                  </p>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th className="text-right">Address</th>
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

export default SchoolView;
