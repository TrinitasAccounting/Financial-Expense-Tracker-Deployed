import React from "react";
// import App from "./components/App";
import "./index.css";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppNavBar from "./components/AppNavBar";
import TransactionsMainPage from "./components/TransactionsPage/TransactionsMainPage";
import DashboardPage from "./components/DashboardPage/DashboardPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <AppNavBar />,
        children: [
            {
                path: '/transactions',
                element: <TransactionsMainPage />
            },
            {
                path: '/',
                element: <DashboardPage />
            },
        ]
    }
])





const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router} />);
