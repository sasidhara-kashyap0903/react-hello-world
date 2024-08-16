import { useState, useEffect } from "react";

export default function Coffee() {
    const [data, setData] = useState([]);
    const getData = async () => {
        try {
            const resp = await fetch('https://api.sampleapis.com/coffee/hot');
            const json = await resp.json();
            setData(json);
        } catch (err) {
            setData(err.message);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container-fluid my-4 d-flex flex-column align-items-center">
            {
                data.map((coffee,id)=>{ 
                    return   <div class="card border-info mb-3" style={{"max-width": '25rem'}} key={coffee.id}>
                            <img src={coffee.image} class="card-img-top" alt="..."></img>
                            <h1 class="fw-bold p-2">{coffee.title}</h1>
                            <div class="card-body">
                                <p class="card-title">{coffee.description}</p>
                                <hr></hr>
                                <h4>Ingredients</h4>
                                <p class="card-text">{coffee.ingredients}</p>
                            </div>
                        </div>
                })
            }
        </div>
    )
}