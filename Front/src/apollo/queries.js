import gql from 'graphql-tag'

export const ALL_COURSES_QUERY = gql`
  query allUsers {
    allUsers {
      id
      name
    }
  }
`
export const ALL_QUIZ_QUERY = gql`
  query getQuiz {
    getQuiz {
      id
      name
	  image
    }
  }
`
export const ALL_GETQUIZ_QUERY = gql`
	query quizByIdQ($id: Int){
		quizById(id: $id){
			name
			question{
				id
				title
				response{
					response1
					response2
					response3
					response4
					correctResponse
				}
			}
		}
	}`
