import {MDBContainer} from "mdb-react-ui-kit";
import logo from "../assets/brand/brand-big.png";
import RegisterForm from "../components/register_page_components/register_form.tsx";

const RegisterPage = () => {
    return (
        <MDBContainer>
            <div className="text-center my-4">
                <img src={logo} alt="my_logo" className="img-fluid mt-5 mb-5"/>
            </div>
            <RegisterForm/>
        </MDBContainer>
    )
}
export default RegisterPage
