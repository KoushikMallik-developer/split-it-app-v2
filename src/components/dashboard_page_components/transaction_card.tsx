import {MDBCard, MDBCardBody, MDBCardText, MDBIcon, MDBTypography} from "mdb-react-ui-kit";

const TransactionCard = () => {
    return (
        <MDBCard className="shadow-5-strong bg-transparent">
            <MDBCardBody className="px-3 py-3">
                <div className="d-flex justify-content-between">
                    <MDBTypography tag='h4'>Food</MDBTypography>
                    <MDBTypography tag='h6' className="badge-danger rounded-pill shadow-5-strong py-2 px-4">Rs.
                        500</MDBTypography>
                </div>
                <MDBCardText className="small">Created
                    by <strong>Koushik Mallik</strong> on 11 April , 2021
                </MDBCardText>
                <hr className="my-2"/>
                <div className="d-flex justify-content-start align-items-center">
                    <MDBCardText className="text-uppercase mb-0">
                        <MDBIcon fas icon="cog me-2"/> <span
                        className="text-muted small">View</span>
                    </MDBCardText>
                    <MDBCardText className="text-uppercase mb-0">
                        <MDBIcon fas icon="link ms-4 me-2"/> <span
                        className="text-muted small">View Group</span>
                    </MDBCardText>
                    <MDBCardText className="text-uppercase mb-0">
                        <MDBIcon fas icon="ellipsis-h ms-4 me-2"/> <span
                        className="text-muted small">Delete</span>
                    </MDBCardText>
                </div>
            </MDBCardBody>
        </MDBCard>
    )
}
export default TransactionCard
