import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContex } from '../../Providers/AuthProvider';
const Register = () => {
    const {createUser} = useContext(AuthContex);
    const handleSubmit = event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        
        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=> console.log(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2 mr-12">
                    <img className='' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <h1 className="text-5xl font-bold my-2">Register Now </h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                   <p>alredy Account? <Link to='/login'>Login</Link> </p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary" value="Register" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;