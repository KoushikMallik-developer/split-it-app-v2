import {
    MDBCol,
    MDBContainer,
    MDBRow
} from "mdb-react-ui-kit";
import FriendList from "../components/dashboard_page_components/friend_list.tsx";
import GroupList from "../components/dashboard_page_components/group_list.tsx";
import GroupChart from "../components/dashboard_page_components/group_chart.tsx";
import MyExpenseChart from "../components/dashboard_page_components/my_expense_chart.tsx";
import CategoryChart from "../components/dashboard_page_components/category_chart.tsx";
import {useMediaQuery} from "react-responsive";
import BalanceCard from "../components/dashboard_page_components/balance_card.tsx";
import TransactionCard from "../components/dashboard_page_components/transaction_card.tsx";
import UserCard from "../components/dashboard_page_components/user_card.tsx";
import DashboardLeftNavbar from "../components/dashboard_page_components/dashboard_left_navbar.tsx";
import BudgetProgress from "../components/dashboard_page_components/budget_progress.tsx";
import SettledGroupCard from "../components/dashboard_page_components/settled_group_card.tsx";

const Dashboard = () => {
    const isMobile = useMediaQuery({query: '(max-width: 1224px)'});
    return (
        <MDBContainer fluid className={isMobile ? "mb-5" : "px-5 mb-5"}>
            <MDBRow className={isMobile ? "my-4" : "px-5 my-4"}>
                <MDBCol md={2} className="justify-content-center align-items-center text-center my-3">
                    <UserCard/>
                    <DashboardLeftNavbar/>
                </MDBCol>
                <MDBCol md={7} className="px-4 mb-5">
                    <h4 className="text-center mt-5 mb-2 shadow-5-strong p-2 fw-bolder">Expense Reports</h4>
                    <MDBRow className="p-2 ">
                        <MDBCol md={6} className="shadow-5-strong p-2 my-2">
                            <GroupChart/>
                        </MDBCol>
                        <MDBCol md={6} className="shadow-5-strong p-2 my-2">
                            <GroupChart/>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="my-2 p-2">
                        <MDBCol md={6} className="shadow-5-strong p-2 my-2">
                            <MyExpenseChart/>
                        </MDBCol>
                        <MDBCol md={6} className=" d-flex justify-content-center shadow-5-strong p-2 my-2">
                            <CategoryChart/>
                        </MDBCol>
                    </MDBRow>
                    <h4 className="text-center mt-5 mb-3 shadow-5-strong p-2 fw-bolder">Latest Transactions</h4>
                    <div className="my-2">
                        <TransactionCard/>
                    </div>
                    <div className="my-2">
                        <TransactionCard/>
                    </div>
                    <div className="my-2">
                        <TransactionCard/>
                    </div>
                    <h4 className="text-center mt-5 mb-3 shadow-5-strong p-2 fw-bolder">Budget Progress</h4>
                    <BudgetProgress/>
                    <h4 className="text-center mt-5 mb-3 shadow-5-strong p-2 fw-bolder">Settled Groups</h4>
                    <MDBRow>
                        <MDBCol sm={6}> <SettledGroupCard/></MDBCol>
                        <MDBCol sm={6}> <SettledGroupCard/></MDBCol>
                    </MDBRow>


                </MDBCol>
                <MDBCol md={3} className="my-3">
                    <BalanceCard/>
                    <FriendList/>
                    <GroupList/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}
export default Dashboard
