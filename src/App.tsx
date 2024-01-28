import './App.css'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Homepage from "./pages/homepage.tsx";
import Header from "./components/common/header/header.tsx";
import Footer from "./components/common/footer/footer.tsx";
import Loginpage from "./pages/loginpage.tsx";
import RegisterPage from "./pages/register_page.tsx";
import Dashboard from "./pages/dashboard.tsx";

function App() {
    return (
        <Router>
            <div className="App bg-primary bg-opacity-10">
                <Header/>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/dashboard" element={<Dashboard/>} />
                    {/*<Route path="/edit-profile" element={<EditProfile/>} />*/}
                    <Route path="/login" element={<Loginpage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    {/*<Route path="*" element={<PageNotFound/>} />*/}
                </Routes>
                <Footer/>
            </div>
        </Router>
    )
}

export default App
