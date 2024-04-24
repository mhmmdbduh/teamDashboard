import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material/";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
//import Team from "./scenes/team";
//import Invoices from "./scenes/invoices";
//import Contacts from "./scenes/contacts";
//import Bar from "./scenes/bar";
//import Form from "./scenes/form";
//import Line from "./scenes/line";
//import Pie from "./scenes/pie";
//import FAQ from "./scenes/faq";
//import Geography from "./scenes/geography";
//import Calendar from "./scenes/calendar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route Path="/" element={<Dashboard />} />
              {/*<Route Path="/team" element={<Team />} />*/}
              {/*<Route Path="/invoices" element={<Invoices />} />*/}
              {/*<Route Path="/contacts" element={<Contacts />} />*/}
              {/*<Route Path="/bar" element={<Bar />} />*/}
              {/*<Route Path="/form" element={<Form />} />*/}
              {/*<Route Path="/line" element={<Line />} />*/}
              {/*<Route Path="/pie" element={<Pie />} />*/}
              {/*<Route Path="/faq" element={<FAQ />} />*/}
              {/*<Route Path="/geography" element={<Geography />} />*/}
              {/* <Route Path="/calendar" element={<Calendar />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
