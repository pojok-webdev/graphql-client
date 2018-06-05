import { request } from 'graphql-request'
const query = `{
    movie(title:"Inception"){
        releaseDate
        actors{
            name
        }
    }
}`
request('https://api.graph.cool/simple/v1/movies',query)
.then(data=>console.log(data))