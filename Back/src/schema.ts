import { makeExecutableSchema } from '@graphql-tools/schema'
import { countReset, time } from 'console'
import { Context } from './context'
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const typeDefs = `
type Mutation {
	signupUser(data: UserCreateInput!): AuthPayload!
	createQuiz(data: QuizCreateInput!): Quiz!
	addStats(data: UserAddStatsInput!): UserQuiz!
}

type Query {
  signinUser(data: UserCreateInput!): AuthPayload!
  allUsers: [User!]!
  getQuiz: [Quiz!]!
  quizById(id: Int): Quiz!
  getUserById(id: Int): User!
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
	time: String
	correctResponse: Int
	userId: Int
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

input UserAddStatsInput {
	userId: Int
	quizId: Int
	time: String
	correctResponse: Int
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
			const user = await context.prisma.user.findUnique({
				where: { email: args.data.email }
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
		getUserById: (_parent: any, args: { id: number }, context: Context) => {
			return context.prisma.user.findUnique({
				where: { id: args.id },
				select: {
					name: true,
					email: true,
					userQuiz: {
						select: {
							quizId: true,
							time: true,
							correctResponse: true,
						}
					}
				}
			})
		}
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
		addStats: async (_parent: any, args: { data: UserAddStatsInput }, context: Context) => {
			const user = await context.prisma.user.findUnique({
				where: { id: args.data.userId }
			})
			if (user) {
				return context.prisma.userQuiz.create({
					data: {
						quizId: args.data.quizId,
						time: args.data.time,
						correctResponse: args.data.correctResponse,
						userId: args.data.userId
					},
				})
			}
		},
		createQuiz: (_parent: any, args: { data: QuizCreateInput }, context: Context) => {

		}
	},
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
interface UserAddStatsInput {
	[x: string]: any
	userId: number
	quizId: number,
	time: string,
	correctResponse: number
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
