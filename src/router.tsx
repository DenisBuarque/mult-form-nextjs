import { Routes, Route, Link } from "react-router-dom";
import FormStap1 from './pages/FormStap1'
import FormStap2 from './pages/FormStap2'
import FormStap3 from './pages/FormStap3'

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<FormStap1 />} />
            <Route path="/step2" element={<FormStap2 />} />
            <Route path="/step3" element={<FormStap3 />} />
        </Routes>
    )
}