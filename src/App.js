import React, { useState } from 'react'
import ConnectForm from "./components/ConnectForm";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import FetchResponse from "./components/FetchResponse";
import axios from 'axios';



function App() {

  const [show, setShow] = useState(false)
  const [fetchData,setFetchedData] = useState([])

  const showHandler = async () => {
    if (!show) {
      setShow(true)
      const response = await axios.get('https://rebsback.vercel.app/response');
      axios.get('/response')
        .then(response => {
          // Handle response
          // console.log(response.data);
          setFetchedData(response.data)
        })
        .catch(err => {
          // Handle errors
          // console.error(err);
        });
    }
    else{
      setShow(null)
    }
  }

  return (
    <Router>
      <div className="App">
        <Navbar showHandler={showHandler} />
        <Routes>
          <Route path="/" element={<ConnectForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/fetchResponse" element={<FetchResponse showHandler={showHandler}  data= {fetchData}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
