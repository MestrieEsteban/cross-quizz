import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { schema } from './schema'
import { context } from './context'
const cors = require( `cors` );
const app = express()

app.use(cors());
app.use(
  '/',
  graphqlHTTP({
    schema,
    context: context,
    graphiql: true,
  }),
)

app.listen(4000)
console.log(`\
⭐️ Server ready at: http://localhost:4000/
`)
