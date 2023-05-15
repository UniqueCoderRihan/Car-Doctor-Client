import { useContext } from "react";
import { json, useLoaderData } from "react-router-dom";
import { AuthContex } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Checkout = () => {
    const {user} = useContext(AuthContex)
    const service = useLoaderData();
    
    const { title, price, _id } = service;
    const handleSubmit=event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const message = form.message.value;
        const email = form.email.value;
        const amount = form.amount.value;
        const order ={
            customerName: name,
            customerEmail: email,
            amount: amount,
            details: message
        }
        console.log(order);
        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers:{
                'content-type':"application.json;"
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.acknowledged){
                Swal.fire({
                    title: 'Success!',
                    text: 'ThankYou! We Received Your Booking!!',
                    icon: 'success',
                    confirmButtonText: 'Done'
                  })
            }
            else{
                Swal.fire({
                    title: 'Error!',
                    text: 'Please Try Again Letter',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div>
            <h2 className="text-3xl text-center my-2">Book Service: {title}</h2>

            <div className="hero min-h-screen bg-base-200">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Name</span>
                            </label>
                            <input type="text" name="name" placeholder=" Name" defaultValue={user?.displayName} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" placeholder="Date" name="date" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Amount</span>
                            </label>
                            <input type="text" name="amount" defaultValue={"$"+ price} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="email" defaultValue={user?.email} required className="input input-bordered" />

                        </div>
                    </div>
                    <div className="my-3">
                        <textarea name="message" rows="8" cols="70" placeholder="Enter Your Message about Service ">
                        </textarea>
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" value="Confirm Order" className="btn btn-primary btn-block" />
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Checkout;