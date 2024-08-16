import { Link, useParams } from "react-router-dom";

export default function Home(){
    let {name} = useParams();

    return(
        <div className="container-fluid d-flex flex-column align-items-center justify-content-center" style={{"height" : "100vh"}}>
            <div className="text-center">
                <div className="text-center fw-bolder display-1">
                    Hello {name} Welcome,
                </div>
                <p className="fst-italic text-success">
                    This is Hello World Project By Deepcodr
                </p>
                <Link to="/coffee" className="link-danger">View Popular Coffee List</Link>
            </div>
        </div>
    );
}