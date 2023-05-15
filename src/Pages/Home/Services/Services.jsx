import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services,setServices]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="mt-4">
            <div className="text-center space-y-2">
                <h3 className="text-2xl text-orange-500">Services</h3>
                <h2 className="text-4xl font-bold">Our Services </h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, expedita. Odit magni hic quos voluptates. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-2 my-2">
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
            
        </div>
    );
};

export default Services;