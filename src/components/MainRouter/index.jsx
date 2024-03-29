import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ROLES } from "../../utils/enums";
import { UserProfile } from "../../modules/profile/index";
import { ReportView } from "../../modules/dashboard";
import { ServicesView } from "../../modules/services";
import PropTypes from "prop-types";
import ErrorView from "../../security/views/error";
import LoginView from "../../security/views/login";
import Sidebar from "../../components/Sidebar";
import CustomersView from "../../modules/customers";
import MessengersView from "../../modules/messengers";
import OfficesView from "../../modules/offices";
import { AvailableServicesView } from "../../modules/services/available";

const MainRouter = ({ location }) => {
  /* General states for receiving the token */
  const [token, setToken] = useState();
  const tokenLocal = localStorage.getItem("token");

  /* Global variables */
  let role = localStorage.getItem("role");

  /* If we do not have a token, it means that the user cannot enter the software and we redirect him to the Login */
  if (!token && tokenLocal == undefined) {
    return <LoginView setToken={setToken} />;
  }

  /* If the user's role is Administrator, then we redirect him to the Dashboard */
  if (role == ROLES.ADMIN && location.pathname === "/") {
    return <Navigate to="/main" />;
  }

  /* If the user's role is MESSENGER, then we redirect him to his respective internal */
  if (role == ROLES.MESSENGER && location.pathname === "/") {
    return <Navigate to={`/customers`} />;
  }

  /* If the user's role is Customer, then we redirect him to his profile */
  if (role == ROLES.CUSTOMER && location.pathname === "/") {
    return <Navigate to={`/offices`} />;
  }

  return (
    <>
      {/* SideBar, which allows us to navigate between the modules */}
      <Sidebar setToken={setToken} />

      {/* Main routes conditioned according to the role of the user */}
      <Routes>
        <Route path="/main" element={role !== ROLES.ADMIN ? <ErrorView /> : <ReportView />} />
        <Route
          path="/staff"
          element={role == ROLES.MESSENGER ? <ErrorView /> : <MessengersView />}
        />
        <Route path="/services" element={<ServicesView />} />
        <Route
          path="/available_services"
          element={role == ROLES.MESSENGER ? <AvailableServicesView /> : <ErrorView />}
        />
        <Route
          path="/offices"
          element={role == ROLES.MESSENGER ? <ErrorView /> : <OfficesView />}
        />
        <Route
          path="/staff/:id"
          element={role == ROLES.MESSENGER ? <ErrorView /> : <UserProfile />}
        />
        <Route
          path="/customers"
          element={role == ROLES.CUSTOMER ? <ErrorView /> : <CustomersView />}
        />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/*" element={<ErrorView />} />
      </Routes>
    </>
  );
};

MainRouter.propTypes = {
  location: PropTypes.object.isRequired,
};

export default MainRouter;
