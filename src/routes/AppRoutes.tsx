import { Button } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SideMenu } from "../shared/components/SideMenu"

export const AppRoutes: React.FC = ({ children }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Button>click</Button>} />
        <Route path='/teste' element={<SideMenu />} />
      </Routes>
    </BrowserRouter>
  )
}