import React, { useState } from 'react';



const Contect = () => {
    const [data, setData] = useState({
        fullname: '',
        contactNo: '',
        email: '',
        massage: '',
    });
    const InputEvent = (event) => {

        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });

    };
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`my name is ${data.fullname} my mobile number is ${data.contactNo}
         my email address${data.email} my massage for compony ${data.massage}`)


    }
    return (
        <>
            <div className="my-5" >
                <h1 className="text-center">Contact Now</h1>
            </div>
            <div className="container contact_div">
                <div className="row" >
                    <div className="col-6 col=10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label className="for-label">Full name
                           </label>
                                <input type="text"
                                    className="form-control"
                                    id="exampleFormControlInput"
                                    placeholder="Enter Your Name"
                                    name="fullname"
                                    vlaue={data.fullname}
                                    onChange={InputEvent} />
                            </div>
                            <div className="mb-3">
                                <label className="for-label">E Mail
                           </label>
                                <input type="email"
                                    placeholder="Enter e-mail   @xyz.com"
                                    className="form-control"
                                    id="exampleFormControlInput"
                                    name="email"
                                    vlaue={data.email}
                                    onChange={InputEvent} />
                            </div>
                            <div className="mb-3">
                                <label className="for-label">Contact No
                           </label>
                                <input type="No"
                                    className="form-control"
                                    placeholder="Enter Your No  "
                                    id="exampleFormControlInput"
                                    name="contactNo"
                                    vlaue={data.contactNo}
                                    onChange={InputEvent} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                    Massage
                           </label>
                                <textarea id="" className="form-control" rows="3"
                                    name="massage"
                                    vlaue={data.massage}
                                    onChange={InputEvent}
                                ></textarea>

                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" >Submit Info</button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </>
    );
}

export default Contect