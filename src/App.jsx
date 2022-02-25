import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Store from "./pages/Store";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Protected Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/store" element={<Store />} />
        {/* Protected Routes */}

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
        {/* 404 Page */}
      </Routes>
    </Fragment>
  );
}

/*
Attention: Only the first query parameter is prefixed with a ? (question mark), all subsequent ones will be prefixed with a & (ampersand). That is how URLs work and nothing related to our API. Here's a full example with two parameters apiKey and includeNutrition: https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true. 
*/

// const API_KEY = process.env.REACT_APP_API_KEY;
// const url = `https://api.spoonacular.com/recipes/716429/information?apiKey=${API_KEY}`;
// https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2

/* 
const getData = async () => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

getData(); 
*/
