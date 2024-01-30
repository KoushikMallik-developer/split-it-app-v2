import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardTitle,
    MDBProgress,
    MDBProgressBar, MDBRow
} from "mdb-react-ui-kit";

const BudgetProgress = () => {
    return (
        <MDBCard className="bg-transparent shadow-5-strong">
            <MDBCardBody>
                <MDBCardTitle className="fw-bolder">Budget Limit: Rs. 10000</MDBCardTitle>
                <MDBCardText>You have reached to <b>66%</b> of your budget this month..</MDBCardText>
                <MDBProgress striped animated height='20' className="my-3">
                    <MDBProgressBar width='66' bgColor='warning' valuemin={0} valuemax={100}/>
                </MDBProgress>
                <MDBRow className="justify-content-center align-items-center">
                    <MDBBtn style={{maxWidth: "200px"}} className="btn-outline-warning" href='#'>Update your
                        budget</MDBBtn>
                </MDBRow>
            </MDBCardBody>
        </MDBCard>
    )
}
export default BudgetProgress
