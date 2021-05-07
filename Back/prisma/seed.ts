import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Mahmoud',
    email: 'mahmoud@prisma.io',
  },
]

const quizData: Prisma.QuizCreateInput[] = [
	{
		name: 'Harry potter',
		question: {
			create: [
				{
					title: "De quoi la famille Dursley a-t'elle le plus peur?",
					response: {
						create: [
							{
								response1: 'Des voisins curieux',
								response2: 'Des hiboux',
								response3: 'De Harry',
								response4: 'De tout ce qui peut les faire paraître étranges',
								correctResponse: 4
							}
						]
					}
				},
				{
					title: "Qui est Gellert Grindelwald ?",
					response: {
						create: [
							{
								response1: 'Un professeur de Poudlard',
								response2: 'Un mangemort',
								response3: 'un ami d\'Ariana',
								response4: 'Aucune de ces propositions',
								correctResponse: 3
							}
						]
					}
				},
				{
					title: "Qu'est ce que la S.A.L.E ?",
					response: {
						create: [
							{
								response1: 'Un surnom donné à Hermione par Ron',
								response2: 'Un association créée par Harmione',
								response3: 'Un nom donné à la cabane de Hagrid',
								response4: 'Une salle secrète dans Poudlard',
								correctResponse: 2
							}
						]
					}
				},
				{
					title: "Dans HP6, qu'utilise Harry pour sauver Ron de l'empoisonnement dans le bureau de Slughorn ?",
					response: {
						create: [
							{
								response1: 'Un Bézoart',
								response2: 'Une potion apprise durant le cours de Potions',
								response3: 'Ce n\'est pas lui qui l\'a sauvé, c\'est Slughorn',
								response4: 'Du chocolat fourré au filtre d\'amour',
								correctResponse: 1
							}
						]
					}
				},
				{
					title: "Quel titre porte le livre qu'offrent Fred & Georges à Ron dans le 7eme Tome ?",
					response: {
						create: [
							{
								response1: 'Le Quidditch à travers les âges',
								response2: 'Filtres d\'amour à l\'usage de jeunes sorciers désesperés',
								response3: 'Douze moyens infaillibles de séduire les sorcières',
								response4: 'Bien vivre sa rousseur',
								correctResponse: 3
							}
						]
					}
				},
			]
		}
	}
]

async function main() {
  console.log(`Start seeding ...`)
//   for (const u of userData) {
//     const user = await prisma.user.create({
//       data: u,
//     })
//     console.log(`Created user with id: ${user.id}`)
//   }
	for (const q of quizData) {
		const quiz = await prisma.quiz.create({
			data: q,
		})
	}
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
