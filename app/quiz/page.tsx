import { promises as fs } from 'fs'
import path from 'path'
import type { Metadata } from 'next'
import QuizClient from './QuizClient'

export const metadata: Metadata = {
  title: 'Voter Alignment Quiz - PoliGrade',
  description: 'Take our 27-question quiz to discover which of our six policy-based parties aligns with your political beliefs. Get your results in minutes and see which politicians match your values.',
}

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
