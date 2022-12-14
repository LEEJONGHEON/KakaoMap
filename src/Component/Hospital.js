import { useState } from "react";
import SearchMap from "./SearchMap";

const Hospital = () => {
    const [query, setQuery] = useState('강남');
    
    return (
        <div>
            <SearchMap query={query} setQuery={setQuery} type="병원"/>
        </div>
    );
}

export default Hospital;