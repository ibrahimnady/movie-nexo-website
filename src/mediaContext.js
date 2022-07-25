import axios from "axios";

const { createContext, useState, useEffect } = require("react");

export let MediaContext = createContext([]);
export function MediaContextProvieder(props) {
    const [movis, setMovis] = useState([])
    const [tv, setTv] = useState([])
    const [people, setpeople] = useState([])
    async function getTrending(mediaType, callback) {
        let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=0d3d1e9e1c59328e1b2d6061742ec320`)
        callback(data.results.slice(0, 10));
    }
    useEffect(() => {
        getTrending('movie', setMovis)
        getTrending('tv', setTv)
        getTrending('person', setpeople)
    }, [])


    return <MediaContext.Provider value={{movis,tv,people}}>

        {props.children}
    </MediaContext.Provider>
}