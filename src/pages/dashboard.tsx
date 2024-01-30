import {
    MDBCol,
    MDBContainer,
    MDBRow
} from "mdb-react-ui-kit";
import FriendList from "../components/dashboard_page_components/friend_list.tsx";
import GroupList from "../components/dashboard_page_components/group_list.tsx";
import {useMediaQuery} from "react-responsive";
import BalanceCard from "../components/dashboard_page_components/balance_card.tsx";
import UserCard from "../components/dashboard_page_components/user_card.tsx";
import DashboardLeftNavbar from "../components/dashboard_page_components/dashboard_left_navbar.tsx";
import DashboardMainContent from "../components/dashboard_page_components/dashboard_main_content.tsx";
import {useLocation} from "react-router-dom";
import GroupsMainContent from "../components/dashboard_page_components/groups_main_content.tsx";
import FriendsMainContent from "../components/dashboard_page_components/friends_main_content.tsx";

const Dashboard = () => {
    const isMobile = useMediaQuery({query: '(max-width: 1224px)'});
    const location = useLocation();
    const {pathname} = location;
    return (
        <MDBContainer fluid className={isMobile ? "mb-5" : "px-5 mb-5"}>
            <MDBRow className={isMobile ? "my-4" : "px-5 my-4"}>
                <MDBCol md={2} className="justify-content-center align-items-center text-center my-3">
                    <UserCard/>
                    <DashboardLeftNavbar/>
                </MDBCol>
                <MDBCol md={7} className="px-4 mb-5">
                    {pathname.includes("dashboard") ?
                        <DashboardMainContent/>
                        :
                        pathname.includes("groups") ?
                            <GroupsMainContent/>
                            : pathname.includes("friends") ?
                                <FriendsMainContent/>
                                : <></>
                    }

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
