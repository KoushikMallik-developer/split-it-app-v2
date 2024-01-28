import {MDBCol, MDBContainer, MDBListGroup, MDBListGroupItem, MDBRow} from "mdb-react-ui-kit";
import logo from "../assets/user/user_default_image.png"
import {Link} from "react-router-dom";
import FriendList from "../components/dashboard_page_components/friend_list.tsx";
import GroupList from "../components/dashboard_page_components/group_list.tsx";
import GroupChart from "../components/dashboard_page_components/group_chart.tsx";
import MyExpenseChart from "../components/dashboard_page_components/my_expense_chart.tsx";
import CategoryChart from "../components/dashboard_page_components/category_chart.tsx";
import {useMediaQuery} from "react-responsive";

const Dashboard = () => {
    const isMobile = useMediaQuery({query: '(max-width: 1224px)'});
    return (
        <MDBContainer fluid className="px-5 mb-5">
            <MDBRow className={isMobile ? "my-4" : "px-5 my-4"}>
                {/*cgccgfgcf*/}
                <MDBCol md={2} className="justify-content-center align-items-center text-center">
                    <img src={logo} alt="user" width="80" height="60"
                         className="d-inline-block align-text-top my-2"/>
                    <h5 className="fw-bolder">Welcome, Koushik</h5>
                    <MDBListGroup light className="shadow-5-strong">
                        <MDBListGroupItem noBorders className="bg-transparent shadow-5-strong">
                            <Link to="/dashboard" className="text-dark">Dashboard</Link>
                        </MDBListGroupItem>
                        <MDBListGroupItem noBorders className="bg-transparent shadow-5-strong">
                            <Link to="/" className="text-dark">
                                All
                                Expenses
                            </Link>
                        </MDBListGroupItem>
                        <MDBListGroupItem noBorders className="bg-transparent shadow-5-strong">My
                            Expenses</MDBListGroupItem>
                        <MDBListGroupItem noBorders className="bg-transparent shadow-5-strong">Previous
                            Month Records</MDBListGroupItem>
                        <MDBListGroupItem noBorders className="bg-transparent shadow-5-strong">Update
                            Details</MDBListGroupItem>
                    </MDBListGroup>
                </MDBCol>
                <MDBCol md={7} className="px-4 mb-5">
                    <h4 className="text-center my-4">Expense Track Record</h4>
                    <MDBRow>
                        <MDBCol md={6}>
                            <GroupChart/>
                        </MDBCol>
                        <MDBCol md={6}>
                            <GroupChart/>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md={6}>
                            <MyExpenseChart/>
                        </MDBCol>
                        <MDBCol md={6} className=" d-flex justify-content-center">
                            <CategoryChart/>
                        </MDBCol>
                    </MDBRow>

                </MDBCol>
                <MDBCol md={3}>
                    <FriendList/>
                    <GroupList/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}
export default Dashboard
