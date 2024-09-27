import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { StudentList } from "./student/StudentList";
import { StudentCreate } from "./student/StudentCreate";
import { StudentEdit } from "./student/StudentEdit";
import { StudentShow } from "./student/StudentShow";
import { GatePassList } from "./gatePass/GatePassList";
import { GatePassCreate } from "./gatePass/GatePassCreate";
import { GatePassEdit } from "./gatePass/GatePassEdit";
import { GatePassShow } from "./gatePass/GatePassShow";
import { AttendanceList } from "./attendance/AttendanceList";
import { AttendanceCreate } from "./attendance/AttendanceCreate";
import { AttendanceEdit } from "./attendance/AttendanceEdit";
import { AttendanceShow } from "./attendance/AttendanceShow";
import { AuthorityList } from "./authority/AuthorityList";
import { AuthorityCreate } from "./authority/AuthorityCreate";
import { AuthorityEdit } from "./authority/AuthorityEdit";
import { AuthorityShow } from "./authority/AuthorityShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"GatePassService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Student"
          list={StudentList}
          edit={StudentEdit}
          create={StudentCreate}
          show={StudentShow}
        />
        <Resource
          name="GatePass"
          list={GatePassList}
          edit={GatePassEdit}
          create={GatePassCreate}
          show={GatePassShow}
        />
        <Resource
          name="Attendance"
          list={AttendanceList}
          edit={AttendanceEdit}
          create={AttendanceCreate}
          show={AttendanceShow}
        />
        <Resource
          name="Authority"
          list={AuthorityList}
          edit={AuthorityEdit}
          create={AuthorityCreate}
          show={AuthorityShow}
        />
      </Admin>
    </div>
  );
};

export default App;
