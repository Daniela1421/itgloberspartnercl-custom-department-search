import React, { useState } from "react";
import { useQuery } from "react-apollo"; 
import QUERY_VALUE from "../graphql/getDepartmentGroup.graphql"

import DepartmentGroup from "./DeparmentGroup"
import { SearchBar } from "vtex.store-components"

const DepartmentSearch = () => {
  const { data, loading} = useQuery(QUERY_VALUE);
  const [slug, setSlug] = useState(""); 

  console.log("mi slug seleccionado es", slug);
  
  // console.log("mis datos de query son: ", data?.categories[0]?.children);
  
  return loading 
  ? 
    <div>Loading....</div> 
  : 
    <div className="flex">
      <DepartmentGroup 
        departments={data?.categories}
        handleSetSlug={setSlug}
      />
      <SearchBar 
        customSearchPageUrl={slug}
        placehoder="¿Qué buscas en Kanu Pet?"
        displayMode="search-and-clear-buttons"
      /> 
    </div>
}

export default DepartmentSearch