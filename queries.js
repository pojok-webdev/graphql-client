saveDivision = (args)=>{
    return `
    mutation {
    saveDivision(input:{
      id:`+args.id+`,
      description:"`+args.description+`",
      name:"`+args.name+`"
    })
   {
    id
  }
  }
`}
saveEmployee = (args)=>{
    return `
    mutation {
        saveEmployee(input: {
          id:`+args.id+`,
          level:`+args.level+`,
          username:"`+args.username+`",
          division:{
            id:1
            name:"`+args.division.name+`"
          },
        }) {
          id
        }
        }`
}
getDivision = id => {
  return `
  getDivision{
    id
    name
    description
  }
  `
}
getDivisions = ()=>{
  return `
  {
    getDivisions{
      id
      name
      description
    }
  }
  `
}
updateEmployee = (args)=>{
  return `
  mutation {
    updateEmployee(input:{
      id:`+args.id+`,username:"`+args.username+`",level:`+args.level+`
    })
    {id}
  }
  `
}
module.exports = {
    saveDivision:saveDivision,
    saveEmployee:saveEmployee,
    updateEmployee:updateEmployee,
    getDivisions: getDivisions
}
