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

class BatchView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      batches:  [],
      schoolId: 1
    }
  }

  componentDidMount = () => {

    fetch('http://ajyarms.azurewebsites.net/schools/' + this.state.schoolId + '/batches')
     .then(result=>result.json())
     .then(item=> {
       this.setState({batches: item});
     });

  }

  render() {

    const allBatches = this.state.batches;

    console.log(allBatches);

    const tableContent =  allBatches.map( (item) => {
      return (
        <tr>
          <td>{item.className}</td>
          <td>{item.className}</td>
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
                  <CardTitle tag="h4">allBatches</CardTitle>
                  <p className="card-category">
                    All batches
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

export default BatchView;
