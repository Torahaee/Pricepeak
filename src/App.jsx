import React from "react";

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import { ThemeProvider } from "./components/theme-provider.jsx";

import { Navbar } from "./components/navigation/Navbar.jsx";

import { LandingPage } from "./pages/LandingPage";

import { ProductAnalysisPage } from "./pages/ProductAnalysis";

import { DashboardPage } from "./pages/Dashboard";

import { PriceComparisonPage } from "./pages/Compare";

import { AuthPage } from "./pages/auth.jsx";

export default function App() {
    return (
        <ThemeProvider
            defaultTheme="dark"
            storageKey="pricepeak-theme"
        >

            <BrowserRouter>

                <div className="min-h-screen bg-background font-sans antialiased text-foreground selection:bg-primary/30 relative overflow-x-hidden">

                    {/* Navbar */}
                    <Navbar />

                    {/* Main */}
                    <main>

                        <Routes>
                            <Route
                                path="/auth"
                                element={<AuthPage />}
                            />

                            <Route
                                path="/"
                                element={<LandingPage />}
                            />

                            <Route
                                path="/analysis/:id"
                                element={<ProductAnalysisPage />}
                            />

                            <Route
                                path="/dashboard"
                                element={<DashboardPage />}
                            />

                            <Route
                                path="/compare"
                                element={<PriceComparisonPage />}
                            />

                        </Routes>
                    </main>

                    {/* Footer */}

                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}