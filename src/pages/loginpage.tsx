import logo from "../assets/brand/brand-big.png";
import {MDBContainer} from "mdb-react-ui-kit";
import LoginForm from "../components/login_page_components/login_form.tsx";

const Loginpage = () => {
    return (
        <MDBContainer>
            <div className="text-center my-2">
                <img src={logo} alt="my_logo" className="img-fluid mt-5 mb-5" style={{maxHeight: "200px"}}/>
            </div>
            <LoginForm/>
        </MDBContainer>
    )
}
export default Loginpage
