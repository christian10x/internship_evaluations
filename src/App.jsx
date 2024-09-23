import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import AppRouter from "./router/app.router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="app">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="header-main">
            <Header />
            <div className="main">
            <AppRouter></AppRouter>
            </div>
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
