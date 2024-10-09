import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Overview from "@/page/Overview";
import BlankLayout from "@/components/BlankLayout";
import History from "@/page/History";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<BlankLayout />}>
          <Route index element={<Overview />} />
          <Route path="history" element={<History />} />
        </Route>
        <Route path="login" element={<Overview />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
