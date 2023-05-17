import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { geoApiOptions } from "../../api";
import { GEO_API_URL } from "../../api";

const Search = ({ onSearchChange }) => {  // onSearchChange la mot function
    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        // console.log(inputValue);
        return fetch(GEO_API_URL + "cities?minPopulation=10000&namePrefix=" + inputValue.toString(), geoApiOptions)
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.country}`
                        }
                    })
                }
            })
            .catch(err => console.error(err));
    }

    // when user interacts with the search field, this func is called and receives
    // the user's input as the searchData argument
    const handleOnChange = (searchData) => {
        setSearch(searchData); // update search
        onSearchChange(searchData); // call the function onSearchChange
    }

    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}   // handleOnChange's argument in value field
            loadOptions={loadOptions}   // fetch and return data
        />
    )
}

export default Search;