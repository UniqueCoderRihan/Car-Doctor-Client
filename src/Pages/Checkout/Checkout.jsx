import { useLoaderData } from "react-router-dom";

const Checkout = () => {
    const service = useLoaderData();
    const {title,price,_id} = service;
    return (
        <div>
            <h2>Book Service: {title}</h2>
        </div>
    );
};

export default Checkout;