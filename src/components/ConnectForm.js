import React, { useState } from 'react'
import axios from 'axios';

function ConnectForm({modalHandler}) {
    const [formData, setFormData] = useState({
        name: "",
        desc: ""
    })
    const { name, desc } = formData;


    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        //    console.log(formData)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData)

        const newResponse = {
            name: name,
            desc: desc
        }
        const config = {
            headers: {
                "Content-Type": "application/json"
            },
        }
        try {
            const body = JSON.stringify(newResponse)
            await axios.post('https://rebsback.vercel.app/response', body, config);


        } catch (err) {
            // console.log("error", err.response.data);
        }  
        modalHandler();
    }


    return (
        <>
            <h1 className='text-center mt-3'>Submit A Response</h1>
            <div className="container connectForm p-5" onSubmit={handleSubmit} >
                <form className="row g-3">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Your Name</label>
                        <input type="text" className="form-control" name='name'
                            value={name} onChange={handleOnChange}
                            required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Message For Me</label>
                        <textarea className="form-control" name='desc' value={desc} onChange={handleOnChange} rows="3" required></textarea>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">Submit Response</button>
                    </div>
                </form>
            </div>



            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {/* {arr.map((element) => {
                        return (
                            <div className="col">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h5 className="card-title">{element.title}</h5>
                                        <p className="card-text">{element.desc}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })} */}
                </div>
            </div>
        </>
    )
}

export default ConnectForm
