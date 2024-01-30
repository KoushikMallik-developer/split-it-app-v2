import {MDBCol, MDBRow} from "mdb-react-ui-kit";
import GroupChart from "./group_chart.tsx";
import MyExpenseChart from "./my_expense_chart.tsx";
import CategoryChart from "./category_chart.tsx";
import TransactionCard from "./transaction_card.tsx";
import BudgetProgress from "./budget_progress.tsx";
import SettledGroupCard from "./settled_group_card.tsx";

const DashboardMainContent = () => {
    return (
        <>
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
        </>
    )
}
export default DashboardMainContent
