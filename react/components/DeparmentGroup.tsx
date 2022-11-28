import React from "react"; 
import { useCssHandles } from "vtex.css-handles";

import "./styles.css"; 

type Props = {
  departments: [Category], 
  handleSetSlug: any
}

type Category = {
  id: number, 
  name: string, 
  slug: string
}

const DepartmentGroup = ({departments, handleSetSlug}: Props) => {

  const onHandleSetSlug = (event: any) => {
    handleSetSlug(`${event.target.value}/$\{term\}&map=ft`)
  }

  const CSS_HANDLES = [
    "department__group--select"
  ]

  const handles = useCssHandles(CSS_HANDLES)

  const departmentOptions: any = departments.map((department: Category)=> {
    return (
      <option
        value= {department.slug}
        key= {department.id}
      >
        {department.name} 
      </option>
    )
  }) 
  return (
    <select className={handles["department__group--select"]}
      onChange={onHandleSetSlug}
      defaultValue="value0"
    >
      <option disabled value="value0">Ver departamentos </option>
      {departmentOptions}
    </select>
  )
}

export default DepartmentGroup;