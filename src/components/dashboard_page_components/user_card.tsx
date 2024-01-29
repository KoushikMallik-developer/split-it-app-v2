import {MDBCard, MDBCardBody, MDBCardImage} from "mdb-react-ui-kit";

const UserCard = () => {
    return (
        <MDBCard className="bg-transparent">
            <MDBCardBody className="text-center">
                <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle py-0"
                    style={{width: '100px'}}
                    fluid/>
                <p className="text-muted my-1 fw-bolder">Welcome, Koushik</p>
                <p className="text-muted mb-2">Main Street, San Francisco, CA</p>
            </MDBCardBody>
        </MDBCard>
    )
}
export default UserCard
