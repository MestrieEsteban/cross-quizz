import { makeExecutableSchema } from '@graphql-tools/schema'
import { Context } from './context'
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const typeDefs = `
type Mutation {
	signupUser(data: UserCreateInput!): AuthPayload!
	createQuiz(data: QuizCreateInput): Quiz!
}

type Query {
  signinUser(data: UserCreateInput!): AuthPayload!
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

input UserLoginInput {
  email: String!
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

type AuthPayload {
  token: String
  user: User
}

`

const resolvers = {
	Query: {
		allUsers: (_parent: any, _args: any, context: Context) => {
			return context.prisma.user.findMany()
		},
		signinUser: async (_parent: any, args: { data: UserLoginInput }, context: Context) => {
			const hashedPass = await bcrypt.hash(args.data.encryptedPassword, 10)
			const  user  = await context.prisma.user.findUnique({
				where: {email: args.data.email}
			})
			if (user) {
				if (bcrypt.compareSync(args.data.encryptedPassword, user.encryptedPassword)) {
					const token = jwt.sign({ userId: user.id }, "salut")
					return {
						token,
						user,
					}
				}
			}
		},
		getQuiz: (_parent: any, _args: any, context: Context) => {
			return context.prisma.quiz.findMany()
		},
		quizById: (_parent: any, args: { id: number }, context: Context) => {
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
		signupUser: async (_parent: any, args: { data: UserCreateInput }, context: Context) => {
			const hashedPass = await bcrypt.hash(args.data.encryptedPassword, 10)
			const { encryptedPassword, ...user } = await context.prisma.user.create({
				data: {
					name: args.data.name,
					email: args.data.email,
					encryptedPassword: hashedPass,
				},
			})
			const token = jwt.sign({ userId: user.id }, "salut")
			return {
				token,
				user,
			}
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
interface UserLoginInput {
	[x: string]: any
	email: string,
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
