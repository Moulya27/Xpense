import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import AddExpense from "./pages/AddExpense";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <Header />
<Router>
  <Routes>
  <Route path = '/' exact element = {<Home/>}/>
  <Route path = '/add-expense' element = {<AddExpense />}></Route>
  </Routes>
    </Router>
    </>
  );
}

export default App;
