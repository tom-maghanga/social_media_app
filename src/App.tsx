import { Route, Routes } from "react-router-dom";
import "./globals.css";
import SigninForms from "./_auth/forms/SigninForms";
import SignupForm from "./_auth/forms/SignupForm";
import { Home } from "./_root/pages";
import AuthLayout from "./_auth/AuthLayout";
import { RootLayout } from "./_root/RootLayout";

const App = () => {
  return (
   <main className="flex h-screen">
    <Routes>
        {/**public routers */}
        <Route element={<AuthLayout/>}>
          <Route path="/sign-in" element={<SigninForms/>}/>
          <Route path="/sign-up" element={<SignupForm/>}/>
        </Route>
        {/**private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
    </Routes>
   </main>
  )
}

export default App