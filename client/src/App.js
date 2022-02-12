import "./App.css";
import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Admin, Resource } from "react-admin";
import dataProvider from "./utils/dataprovider"

import chemicalList from "./components/chemical/chemicalList";
import createChemical from "./components/chemical/createChemical";
import updateChemical from "./components/chemical/updateChemical";
import viewChemical from "./components/chemical/viewChemical";
import testList from "./components/test/testList";
import viewTest from "./components/test/viewTest";
import createTest from "./components/test/createTest";
import editTest from "./components/test/editTest";
import createUser from "./components/user/createUser";
import userList from "./components/user/userList";
import viewUser from "./components/user/viewUser";
import reportList from "./components/reports/reportList";
import createReport from "./components/reports/createReport";
import viewReport from "./components/reports/viewReport";

import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    type: "dark", // Switching the dark mode on is a single property value change.
  },
});
function App() {
  return (
    <Admin dataProvider={dataProvider} theme={theme}>
      <Resource
        name="chemical"
        list={chemicalList}
        create={createChemical}
        edit={updateChemical}
        show={viewChemical}
        
      />
      <Resource
        name="test"
        list={testList}
        create={createTest}
        edit={editTest}
        show={viewTest}
      />
      <Resource
        name="user"
        list={userList}
        create={createUser}
        
        show={viewUser}
      />
      <Resource
        name="report"
        list={reportList}
        create={createReport
        }
        
        show={viewReport}
      />
    </Admin>
  );
}

export default App;
