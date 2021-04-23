import { useEffect, useState } from 'react';
import { results } from '../data/results';

const Quiz = () => {
	const [categories, setCategories] = useState([]);
	const fetchQuizCategories = () => {
		const formattedData = results.map(category => {
			const incorrectAnswersIndexes = category.incorrect_answers.length;
			const randomIndex = Math.random() * (incorrectAnswersIndexes - 0) + 0;
			category.incorrect_answers.splice(
				randomIndex,
				0,
				category.correct_answer
			);
			return {
				...category,
				answers: category.incorrect_answers,
			};
		});
		setCategories(formattedData);
	};

	useEffect(() => {
		fetchQuizCategories();
	}, []);

	console.log({ categories });

	return <div>{results[0].question}</div>;
};

export default Quiz;
