import {MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";

const LoginForm = () => {
    return (
        <MDBContainer className="">
            <MDBRow>
                <MDBCol md={3}></MDBCol>
                <MDBCol md={6}>
                    <h3 className="text-center fw-bolder mt-2 mb-2">Login </h3>
                    <form className="my-5">
                        <MDBInput className='mb-4' type='email' id='form3Example3' label='Email address'/>
                        <MDBInput className='mb-4' type='password' id='form3Example4' label='Password'/>

                        <MDBBtn type='submit' className='my-4 btn-outline-primary' block>
                            Sign in
                        </MDBBtn>

                        <div className='text-center my-3'>
                            <p>
                                Not a member? <Link to="/register">Register</Link>
                            </p>
                            <p>or sign in with:</p>

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
    )
}
export default LoginForm
