import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
import NotFound from "../components/NotFound";
import { baseUrl } from "../shared";

export default function Customer(){
    const { id } = useParams();
    const [customer, setCustomer] = useState();
    const [notFound, setNotFound] = useState();
    //const navigate = useNavigate();
    
    useEffect(() => {
        const url = baseUrl + 'api/customers/' + id;
        fetch(url)
        .then((response) => {
            if(response.status === 404){
                //render a 404 component in this page
                setNotFound(true);
            }
            return response.json()
        })
        .then((data) => {
            setCustomer(data.customer);
        });
    }, []);
    return (
        <>
        {notFound ? <p> The customer with id {id} was not found</p> : null}
            {customer ? 
            <div>
                <p>{customer.id}</p>
                <p>{customer.name}</p>
                <p>{customer.industry}</p>
            </div> : null}
            <Link to="/customers">Go Back</Link>
        </>
    )
}