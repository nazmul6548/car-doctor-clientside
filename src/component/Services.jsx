import { useEffect } from "react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Services = () => {
    const [services, setServices] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(result => {
                if (!result.ok) {
                    throw new Error("Failed to fetch services.");
                }
                return result.json();
            })
            .then(data => {
                console.log(data);
                setServices(data);
            })
            .catch(error => {
                setError(error.message);
            });
    }, []);
    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <div>
        <div className="text-center">
            <span className="text-[#FF3811]">services</span>
            <h1 className="text-4xl md:text-6xl p-4 font-bold">Our Services</h1>
            <p className="w-[100%] md:w-3/4 m-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-12">
            {services.map(item => (
                
                    <div key={item._id} className="bg-white shadow-[0_8px_12px_-6px_rgba(0,0,0,0.2)] border p-2 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
                    <img src={item.img} className="w-full rounded-lg text-start" alt={item.title} />
                    <div className="px-4 my-6 text-start">
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                       
                  
                    </div>
                    <div className="flex justify-between">
                    <p className="mt-2 text-sm text-[#FF3811] font-bold">Price :${item.price}</p>
                    <Link to={`/checkout/${item._id}`}>
                    <button className="btn btn-square">
                      {/* <svg xmlns="" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /><FaArrowRight /></svg>
                       */}
                       <FaArrowRight />
                    </button></Link>
                    </div>
                   
                </div>
                
                 
                      
            ))}
        </div>
    </div>
    )
};

export default Services;