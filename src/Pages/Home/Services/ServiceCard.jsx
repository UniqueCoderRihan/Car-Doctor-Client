
const ServiceCard = ({ service }) => {
    const {title,img,price} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <p className="text-orange-500 font-bold">${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">More </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;