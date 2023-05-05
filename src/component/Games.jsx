import React from "react";

const Games = () => {
    const [items, setItems] = React.useState([]);
    const [offset, setOffset] = React.useState(0);
    const [isDataLoaded, setIsDataLoaded] = React.useState(false);

    let api_url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`;

    React.useEffect(() => {
        fetchData();
    }, [offset]);

    if (!isDataLoaded) {
        return (
            <div>
                <h1> Please chill, data is still loading </h1>
            </div>
        );
    }

    function fetchData() {
        fetch(api_url)
        .then((response) => response.json())
        .then((json) => {
            setItems(json);
            setIsDataLoaded(true);
        })
    }

    function nextPage() {
        setOffset(offset + 20);
    }

    function prevPage() {
        if(offset > 0) {
            setOffset(offset - 20);
        }
    }

    const image_url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    const png = ".png";

    return (
        <div className="App">
            <h1 className="title"> Pokémon </h1>
            {items.results.map((item) => (
                <ul style={{"listStyleType": "none", "display": "inline-block",}} key={item.url.slice(34).slice(0,-1)}>
                    <li>
                        {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                        <img width='250' src={image_url + item.url.slice(34).slice(0,-1) + png} alt={"picture of" + item.name}></img>
                    </li>
                </ul>
            ))}
            <div className="buttonContainer">
                <button className="button next" onClick={prevPage}>&#8592;</button>
                <button className="button prev" onClick={nextPage}>&#8594;</button>
            </div>
        </div>
    );
};

export default Games;