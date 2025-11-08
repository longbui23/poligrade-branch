import { promises as fs } from 'fs'
import path from 'path'
import QuizClient from './QuizClient'

interface QuizQuestion {
  id: number
  issueArea: string
  question: string
  point: number
}

async function getQuizQuestions(): Promise<QuizQuestion[]> {
  const filePath = path.join(process.cwd(), 'public', 'questionnaire.json')
  const fileContents = await fs.readFile(filePath, 'utf8')
  return JSON.parse(fileContents)
}

export default async function QuizPage() {
  const questions = await getQuizQuestions()

  return <QuizClient questions={questions} />
}
