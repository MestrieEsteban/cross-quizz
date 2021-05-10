import gql from 'graphql-tag'

export const signUpUser = gql`
  mutation signupUser ( $name:  String! , $email: String!, $password: String!){
    signupUser(data: { name:  $name , email: $email, encryptedPassword: $password}) {
      user {
        id
        name
      },
      token
    }
  }
`

export const addStats = gql`
  mutation addStats ( $userId:  Int! , $quizId: Int!, $time: String!, $correctResponse: Int!){
    addStats(data:{userId: $userId, quizId: $quizId, time: $time, correctResponse: $correctResponse})
    {
      time
      correctResponse
    }
  }
`
