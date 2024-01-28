import {MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";
import logo from "../assets/brand/brand-big.png";
import {Link} from "react-router-dom";

const Homepage = () => {
    return (
        <MDBContainer fluid className="my-5">
            <MDBRow className="d-flex justify-content-center align-items-center my-5">
                <MDBCol md="6" className="justify-content-center my-5">
                    <h1 className="text-center fw-bolder">Let's split the bills not the friendships.</h1>
                    <p className="text-center">We organize your bills, so you can chill.</p>
                    <div className="d-flex justify-content-center">
                        <Link to="/register" type="button" className="btn btn-outline-primary">Get
                            Started</Link>
                    </div>
                </MDBCol>
                <MDBCol md="6" className="d-flex justify-content-center align-items-center my-5">
                    <img src={logo} className='img-fluid mt-5 mb-5'/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
)
}
export default Homepage
