import { useEffect, useState } from 'react'
import { results } from '../data/results'
import { M } from '../Math'

const QuizCategories = () => {
	const [categories, setCategories] = useState([])
	const fetchQuizCategories = () => {
		const formattedData = results.map(category => {
			const incorrectAnswersIndexes = category.incorrect_answers.length
			const randomIndex = Math.random() * (incorrectAnswersIndexes - 0) + 0
			category.incorrect_answers.splice(randomIndex, 0, category.correct_answer)
			return {
				...category,
				answers: category.incorrect_answers,
			}
		})
		setCategories(formattedData)
	}

	useEffect(() => {
		fetchQuizCategories()
	}, [])

	console.log({ categories })
	return (
		<div>
			What is the value of 
			<M m='\pi' />
      {results[0].question}
		</div>
	)
}

export default QuizCategories
