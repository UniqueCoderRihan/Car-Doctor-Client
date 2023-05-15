import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const {_id,title,img,price} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="w-3/4 rounded-lg" src={img} alt="Image " /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <p className="text-orange-500 font-bold">${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}><button className="btn btn-primary">Booking Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;