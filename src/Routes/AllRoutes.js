import { Routes, Route } from "react-router-dom";
import { HomePage, ProductDetail, ProductPage, Login, Register, OrderPage, DashboardPage, PageNotFound } from "../Pages";
import { CartPage } from "../Pages/Cart/CartPage";
import { ProtectedRoute } from "./ProtectedRoute";

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="products" element={<ProductPage />}></Route>
            <Route path="products/:id" element={<ProductDetail />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>}></Route>
            <Route path="order-summary" element={<ProtectedRoute><OrderPage /></ProtectedRoute>}></Route>
            <Route path="dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
    )
}
