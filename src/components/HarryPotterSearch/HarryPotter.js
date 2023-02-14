import { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import Loader from "./Loader";

export default function HarryPotter() {
    const [data, setData] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setIsLoading(true);
        const response = await fetch("https://hp-api.onrender.com/api/characters");
        const data = await response.json();
        setData(data.slice(0, 24));
        setSearchResults(data.slice(0, 24));
        setIsLoading(false);
    };

    return isLoading ? (
        <Loader />
    ) : (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h1>Total characters : {searchResults.length}</h1>
            <Searchbar data={data} setSearchResults={setSearchResults} />
            {searchResults?.length > 1 ? (
                searchResults.map((item) => (
                    <div key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <div>
                            <h2>{item.name}</h2>
                            <h2>{item.gender}</h2>
                            <h2>{item.eyeColour}</h2>
                        </div>
                    </div>
                ))
            ) : (
                <h2> No Match Found</h2>
            )}
        </div>
    );
}
