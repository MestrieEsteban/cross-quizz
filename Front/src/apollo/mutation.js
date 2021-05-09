import gql from 'graphql-tag'

export const signUpUser = gql`
  mutation signupUser ( $name:  String! , $email: String!, $password: String!){
    signupUser(data: { name:  $name , email: $email, encryptedPassword: $password}) {
      user {
        id,
        name
      },
      token
    }
  }
`

