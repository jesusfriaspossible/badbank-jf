import { Route, Routes } from "react-router-dom";
import { React } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { Home } from "./pages/Home";
import { CreateAccount } from "./pages/CreateAccount";
import { Withdraw } from "./pages/Withdraw";
import { Deposit } from "./pages/Deposit";
import { AllData } from "./pages/AllData";

import Navbar from "./Navbar/Navbar";
import { UserContext } from "./pages/context";

// export const UserContext = createContext();

export default function App() {
  return (
    <>
      <Navbar />
      <UserContext.Provider
        value={{
          users: [
            {
              name: "Jaymie",
              email: "jredman92@gmail.com",
              password: "secret",
              balance: 100,
            },
          ],
        }}
      >
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createaccount" element={<CreateAccount />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/alldata" element={<AllData />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </>
  );
}
