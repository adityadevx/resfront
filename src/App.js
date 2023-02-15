import React, { useState } from 'react'
import ConnectForm from "./components/ConnectForm";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Modal from './components/Modal'
import FetchResponse from "./components/FetchResponse";
import axios from 'axios';

function App() {

  const [show, setShow] = useState(false)
  const [fetchData, setFetchedData] = useState([])
  const [modal, setModal] = useState(null)

  const showHandler = async () => {
    if (!show) {
      setShow(true)
      axios.get('https://rebsback.vercel.app/response')
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
    else {
      setShow(null)
    }
  }

  const modalHandler = () => {
    if (!modal) {
      setModal(true)
    }
    setTimeout(() => {
      setModal(null)
    }, 3000);
  }

  return (
    <Router>
      <div className="App">
        <Navbar showHandler={showHandler} />
        <Routes>
          <Route path="/" element={
          <>
          <Modal modal={modal} />
          <ConnectForm modalHandler={modalHandler}/>
          </>
        }
          />
          <Route path="/about" element={<About />} />
          <Route path="/fetchResponse" element={<FetchResponse showHandler={showHandler} data={fetchData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
