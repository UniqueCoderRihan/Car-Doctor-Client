import { useLoaderData } from "react-router-dom";

const Checkout = () => {
    const service = useLoaderData();
    const { title, price, _id } = service;
    const handleSubmit=event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const fristName = form.fristName.value;
        const lastName = form.lastName.value;
        const phone = form.phone.value;
        const message = form.message.value;
        const name= fristName+''+ lastName;
        console.log(name,phone,email,message);
    }
    return (
        <div>
            <h2>Book Service: {title}</h2>

            <div className="hero min-h-screen bg-base-200">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Frist Name</span>
                            </label>
                            <input type="text" name="fristName" placeholder="Frist Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input type="text" placeholder="Last Name" name="lastName" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Phone Number</span>
                            </label>
                            <input type="number" placeholder="Enter Your Phone Number" name="phone" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="email" required className="input input-bordered" />

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