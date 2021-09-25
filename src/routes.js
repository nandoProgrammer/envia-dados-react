import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Form from "./Pages/Form";
import ShowFormData from "./Pages/ShowFormData";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Form }  path="/" exact />
           <Route component = { ShowFormData }  path="/showFormData" />
       </BrowserRouter>
   )
}

export default Routes;