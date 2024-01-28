import {MDBContainer} from "mdb-react-ui-kit";
import logo from "../assets/brand/brand-big.png";
import RegisterForm from "../components/register_page_components/register_form.tsx";

const RegisterPage = () => {
    return (
        <MDBContainer>
            <div className="text-center my-2">
                <img src={logo} alt="my_logo" className="img-fluid mt-5 mb-5" style={{maxHeight: "200px"}}/>
            </div>
            <RegisterForm/>
        </MDBContainer>
    )
}
export default RegisterPage
