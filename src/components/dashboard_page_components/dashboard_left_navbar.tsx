import {MDBListGroup, MDBListGroupItem} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";

const DashboardLeftNavbar = () => {
    return (
        <MDBListGroup light className="shadow-5-strong my-5">
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
            <MDBListGroupItem noBorders className="bg-transparent shadow-5-strong">My Reports</MDBListGroupItem>
            <MDBListGroupItem noBorders className="bg-transparent shadow-5-strong">Budget Tracker</MDBListGroupItem>
            <MDBListGroupItem noBorders className="bg-transparent shadow-5-strong">Financial Goals</MDBListGroupItem>
            <MDBListGroupItem noBorders className="bg-transparent shadow-5-strong">Milestones</MDBListGroupItem>
            <MDBListGroupItem noBorders className="bg-transparent shadow-5-strong">Loan Calculator</MDBListGroupItem>
            <MDBListGroupItem noBorders className="bg-transparent shadow-5-strong">Currency Converter</MDBListGroupItem>
            <MDBListGroupItem noBorders className="bg-transparent shadow-5-strong">Update
                Details</MDBListGroupItem>
        </MDBListGroup>

    )
}
export default DashboardLeftNavbar
