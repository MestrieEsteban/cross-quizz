import gql from 'graphql-tag'

export const ALL_COURSES_QUERY = gql`
  query allUsers {
    allUsers {
      id
      name
    }
  }
`
