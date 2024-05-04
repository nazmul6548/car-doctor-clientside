import { useLoaderData } from "react-router-dom";


const Checkout = () => {
    const data = useLoaderData()
    console.log(data);
    const {description,price,img,title} = data;
    return (
        <div>
            <h1>hi {title}</h1>
        </div>
    );
};

export default Checkout;