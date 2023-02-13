import { useState } from "react";

const styles = {
    padding: "10px",
    margin: "5px",
    background: "lightgreen",
    width: "100px",
    height: "100px",
    display: "inline-block"
};
const FilterMenu = () => {
    const data = ["dog", "cat", "lizard", "dog", "cat", "dog", "lizard", "dog"];
    let buttonList = ["all", "dog", "cat", "lizard"];

    const [filter, setFilter] = useState("all");

    return (
        <div className="App">
            <div style={{ margin: "10px" }}>
                <h1>
                    Current filter <u>{filter}</u>
                </h1>
                {buttonList.map((buttonItem) => {
                    return (
                        <button onClick={() => setFilter(buttonItem)}>{buttonItem} </button>
                    );
                })}
            </div>
            {data.map((item, i) =>
                filter === item || filter === "all" ? (
                    <div key={i} style={styles}>
                        {item}
                    </div>
                ) : null
            )}
        </div>
    );
}
export default FilterMenu

