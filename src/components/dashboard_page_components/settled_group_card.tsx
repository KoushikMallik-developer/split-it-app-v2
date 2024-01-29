import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,

} from "mdb-react-ui-kit";

const SettledGroupCard = () => {
    return (
        <MDBCard className="bg-transparent shadow-5-strong" style={{borderRadius: '15px'}}>
            <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                    <div className="flex-shrink-0 text-center">
                        <MDBCardImage
                            style={{width: '75px', borderRadius: '10px'}}
                            src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
                            alt='Generic placeholder image'
                            fluid/>
                        <MDBCardTitle className="my-3 fw-bolder text-primary">Sikkim Ride</MDBCardTitle>
                    </div>

                    <div className="flex-grow-1 ms-3">

                        <div className="d-flex justify-content-between rounded-3 p-2 mb-2"
                             style={{backgroundColor: '#efefef'}}>
                            <div>
                                <p className="small text-muted mb-1">Paid</p>
                                <p className="mb-0 small">Rs. 4100</p>
                            </div>
                            <div className="px-3">
                                <p className="small text-muted mb-1">Total</p>
                                <p className="mb-0 small">Rs. 9760</p>
                            </div>
                            <div>
                                <p className="small text-muted mb-1">Paid With</p>
                                <p className="mb-0 small">Cash</p>
                            </div>
                        </div>
                        <div className="d-flex pt-1">
                            <MDBBtn className="btn-outline-info me-1 flex-grow-1">View</MDBBtn>
                            <MDBBtn className="flex-grow-1 bg-danger">Delete</MDBBtn>
                        </div>
                    </div>
                </div>
            </MDBCardBody>
        </MDBCard>

    )
}
export default SettledGroupCard
