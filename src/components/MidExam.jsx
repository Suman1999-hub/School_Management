import React from "react";
import { Button, Card, Table } from "reactstrap";

function MidExam() {
  return (
    <>
      <Card style={{ maxWidth: "50%", margin: "auto", padding: "50px" }}>
        <section>
          <h6>Report Of Midterm Exam</h6>
          <Card body>
            <Table responsive>
              <thead>
                <tr>
                  <th>Subjects</th>
                  <th>Full Marks</th>
                  <th>Marks</th>
                  <th>Grade</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Bengali</td>
                  <td>100</td>
                  <td>80</td>

                  <td>A+</td>
                </tr>
                <tr>
                  <td>Bengali</td>
                  <td>100</td>
                  <td>80</td>

                  <td>A+</td>
                </tr>
                <tr>
                  <td>Bengali</td>
                  <td>100</td>
                  <td>80</td>

                  <td>A+</td>
                </tr>
                <tr>
                  <td>Bengali</td>
                  <td>100</td>
                  <td>80</td>

                  <td>A+</td>
                </tr>
                <tr>
                  <td>Bengali</td>
                  <td>100</td>
                  <td>80</td>

                  <td>A+</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Total marks</td>
                  <td>400</td>

                  <td>PASS</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </section>
      </Card>
    </>
  );
}
export default MidExam;
