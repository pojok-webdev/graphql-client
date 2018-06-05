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
module.exports = {
    saveDivision:saveDivision,
    saveEmployee:saveEmployee,
    getDivisions: getDivisions
}
