import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  ButtonDropdown,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { textChangeRangeIsUnchanged } from "typescript";

class StudentsView extends React.Component {

  constructor(props) {
    super(props);

    this.selectValue = this.selectValue.bind(this);
    this.fetchStudents = this.fetchStudents.bind(this);

    this.state = {
      students:  [],
      batches: [],
      schoolId: 1,
      selectedBatchId: null
    }
  }

  componentDidMount = () => {

    fetch('http://ajyarms.azurewebsites.net/schools/' + this.state.schoolId + '/batches')
     .then(result=>result.json())
     .then(item=> {
       this.setState({batches: item});

       if (item != null && item.length > 0) {
          this.fetchStudents(item[0].id);
          this.setState({selectedBatchId: item[0].id});
       }
     });

  }


  selectValue(event) {
    
    this.setState({
      selectedBatchId: event.target.value
    });

    this.fetchStudents(event.target.value);
    
  }

  fetchStudents(batchId) {
    if (batchId != null) {
      fetch('http://ajyarms.azurewebsites.net/schools/' + this.state.schoolId + '/batches/' + batchId + '/students')
      .then(result=>result.json())
      .then(item=> {
        this.setState({students: item});
      });
    }
  }

  render() {

    const allBatches = this.state.batches;
    const allStudents = this.state.students;

    console.log(this.state.selectedBatchId);

    const selectOptions =  allBatches.map( (item) => {
      return (
        <option value={item.id} >{item.className}</option>
       )
    });

    const tableContent = allStudents.map((item) => {
      return (
        <tr>
          <td>{item.name}</td>
          <td>{item.name}</td>
        </tr>
      )
    });


    let studentsTable;
    if (this.state.selectedBatchId != null) {
      studentsTable = (
        <Col md="12">
          <Card className="card-plain">
            <CardHeader>
              <CardTitle tag="h4">Students</CardTitle>
              <p className="card-category">
                All students
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
      )
    }

    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Form>
                <FormGroup>
                  <Label for="exampleSelect">Select</Label>
                  <Input type="select" name="select" id="exampleSelect"  value={this.state.selectedBatchId} onChange={this.selectValue}>
                    {selectOptions}
                  </Input>
                </FormGroup>
              </Form>
            </Col>
            
            {
              studentsTable
            }
          </Row>
        </div>
      </>
    );
  }
}

export default StudentsView;
