var { request } = require('graphql-request')
const query = `
{
    course(id:1) {
        id
        author
        title
        topic
    }
}
`
request('http://localhost:4000/graphql',query)
.then(data=>console.log(data))