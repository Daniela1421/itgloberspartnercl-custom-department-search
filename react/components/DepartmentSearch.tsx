import React, { useState } from "react";
import { useCssHandles } from "vtex.css-handles"; 
import { useQuery } from "react-apollo"; 
import QUERY_VALUE from "../graphql/getDepartmentGroup.graphql";

import DepartmentGroup from "./DeparmentGroup";
import { SearchBar } from "vtex.store-components";
import "./styles.css"

const DepartmentSearch = () => {
  const { data, loading} = useQuery(QUERY_VALUE);
  const [slug, setSlug] = useState(""); 
  const CSS_HANLDES = [
    "deparment__search--container", 
    "department__search--searchBar"
  ]
  const handles = useCssHandles(CSS_HANLDES)

  return loading 
  ? 
    <div>Loading....</div> 
  : 
    <div className={`flex ${handles["deparment__search--container"]}`}>
      <DepartmentGroup 
        departments={data?.categories}
        handleSetSlug={setSlug}
      />
      <SearchBar className= {handles["department__search--searchBar"]}
        customSearchPageUrl={slug}
        placehoder="¿Qué buscas en Kanu Pet?"
        displayMode="search-and-clear-buttons"
      /> 
    </div>
}

export default DepartmentSearch