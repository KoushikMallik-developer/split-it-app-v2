import {MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";

const RegisterForm = () => {
    return (
        <MDBContainer className="">
            <MDBRow>
                <MDBCol md={3}></MDBCol>
                <MDBCol md={6}>
                    <h3 className="text-center fw-bolder mt-2 mb-2">Register </h3>
                    <h6 className="text-center">Say goodbye to the complexities of splitting bills.</h6>
                    <form className="my-5">
                        <MDBRow className='mb-4'>
                            <MDBCol>
                                <MDBInput id='form3Example1' label='First name'/>
                            </MDBCol>
                            <MDBCol>
                                <MDBInput id='form3Example2' label='Last name'/>
                            </MDBCol>
                        </MDBRow>
                        <MDBInput className='mb-4' type='email' id='form3Example3' label='Email address'/>
                        <MDBRow className='mb-4'>
                            <MDBCol>
                                <MDBInput className='mb-4' type='password' id='form3Example4' label='Password'/>
                            </MDBCol>
                            <MDBCol>
                                <MDBInput className='mb-4' type='password' id='form3Example4' label='Retype Password'/>
                            </MDBCol>
                        </MDBRow>

                        <MDBBtn type='submit' className='mb-4 btn-outline-primary' block>
                            Sign Up
                        </MDBBtn>

                        <div className='text-center my-3'>
                            <p>
                                Already have an account? <Link to="/login">Login here</Link>
                            </p>
                            <p>or sign up with:</p>

                            <MDBBtn floating color="secondary" className='mx-1'>
                                <MDBIcon fab icon='facebook-f'/>
                            </MDBBtn>

                            <MDBBtn floating color="secondary" className='mx-1'>
                                <MDBIcon fab icon='google'/>
                            </MDBBtn>

                            <MDBBtn floating color="secondary" className='mx-1'>
                                <MDBIcon fab icon='twitter'/>
                            </MDBBtn>

                            <MDBBtn floating color="secondary" className='mx-1'>
                                <MDBIcon fab icon='github'/>
                            </MDBBtn>
                        </div>
                    </form>
                </MDBCol>
                <MDBCol md={3}></MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
export default RegisterForm
