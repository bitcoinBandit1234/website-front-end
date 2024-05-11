import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import VehicelList from "./Pages/VehicelList";
import Information from "./components/Information";
import VehicleDetail from "./components/VehicleDetail";
import PageNotFound from "./components/PageNotFound";
import Contact from "./Pages/ContactPage";
import About from "./Pages/AboutPage";
import ProfilePage from "./Pages/ProfilePage";
import SidebarRoutes from "./SidebarRoutes";
import Layout from "./Pages/Layout";
import UserDetail from "./Pages/AdminUser";
import PaymentForm from "./components/PaymentComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/Vehicles" element={<VehicelList />} exact />
            <Route path="/information" element={<Information />} exact />
            <Route path="/Vehicles/:car" element={<VehicleDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/dashboard/*" element={<SidebarRoutes />} />
            <Route path="/userdetail" element={<UserDetail />} />
            <Route path="/payment" element={<PaymentForm />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
