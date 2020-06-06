import React from 'react';
import './App.css';
import Home from '../src/contents/Home';
import
{
BrowserRouter as Router,
Route,
} from "react-router-dom";

import Navbar from './components/Navbar';
function App() {
return (
<Router>
<div className="App">
<Navbar />
<Route exact path="/">
<Home />
</Route>
</div>
</Router>
)
}
export default App;