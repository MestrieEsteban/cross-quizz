import { makeExecutableSchema } from '@graphql-tools/schema'
import { DateTimeResolver } from 'graphql-scalars'
import { Context } from './context'

const typeDefs = `
type Mutation {
  signupUser(data: UserCreateInput!): User!
  createQuiz(data: QuizCreateInput): Quiz!
}

type Query {
  allUsers: [User!]!
  getQuiz: [Quiz!]!
  quizById(id: Int): Quiz!
}

type User {
  email: String!
  id: Int!
  name: String
  encryptedPassword: String!
  userQuiz: [UserQuiz!]!
}

type UserQuiz {
	id:    Int
	quizId: Int
	stats: [Stats!]!
	userId: Int
}

type Stats {
	id: Int
	time: String
	correctResponse: Int
	userQuizId: Int
}

type Quiz {
	id: Int
	name : String
	question: [Question!]!
}

type Question {
	id: Int
	title: String
	response: [Response!]!
	quizId: Int
}

type Response {
	id: Int
	response1: String
	response2: String
	response3: String
	response4: String
	correctResponse: Int
	questionId: Int
}

input UserCreateInput {
  email: String!
  name: String
  encryptedPassword: String!
}

input QuizCreateInput {
	name: String
	title: String
	response1: String
	response2: String
	response3: String
	response4: String
	correctResponse: Int
}

input UserUniqueInput {
  email: String
  id: Int
}

`

const resolvers = {
	Query: {
		allUsers: (_parent: any, _args: any, context: Context) => {
			return context.prisma.user.findMany()
		},
		getQuiz: (_parent: any, _args: any, context: Context) => {
			return context.prisma.quiz.findMany()
		},
		quizById: (_parent, args: { id: number }, context: Context) => {
			console.log(args.id)
		  return context.prisma.quiz.findUnique({
			  where: { id: args.id },
			  select: {
				  name: true,
				  question: {
					  select: {
						  id: true,
						  title: true,
						  response: {
							  
						  }
					  }
				  },
			  }
		  })
		},
	},
	Mutation: {
		signupUser: (_parent: any, args: { data: UserCreateInput }, context: Context) => {
			return context.prisma.user.create({
				data: {
					name: args.data.name,
					email: args.data.email,
					encryptedPassword: args.data.password,
				},
			})
		},
		createQuiz: (_parent: any, args: { data: QuizCreateInput }, context: Context) => {

		}
	},
	// User: {
	// 	posts: (parent, _args, context: Context) => {
	// 		return context.prisma.user.findUnique({
	// 			where: { id: parent?.id }
	// 		}).posts()
	// 	}
	// }
}
interface UserCreateInput {
	[x: string]: any
	email: string,
	name?: string,
	encryptedPassword: string,
}
interface QuizCreateInput {
	[x: string]: any
	name: string,
	title: string,
	response1: string,
	response2: string,
	response3: string,
	response4: string,
	correctResponse: number
}

export const schema = makeExecutableSchema({
	resolvers,
	typeDefs,
})
