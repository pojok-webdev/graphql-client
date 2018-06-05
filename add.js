var { request } = require('graphql-request')
const query = `
mutation {
    createCourse(input: {
      id:5,
      title:"GraphSQL",
      author:"puji widi",
      description:"My First Graphsql",
      topic:"node",
      url:"test"
    }) {
      id
      title
    }
    }
`
request('http://localhost:4000/graphql',query)
.then(data=>console.log(data))