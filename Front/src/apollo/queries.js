import gql from 'graphql-tag'

export const siginUser = gql`
  query {
    signinUser( data : { email : $email, encryptedPassword: $password} ){
      token,
    }
  }
`
