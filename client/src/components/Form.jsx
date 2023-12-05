import React from 'react'
import questions from '../assets/questions.js'
import Question from './Question.jsx'


//js file that has an array of questions
//take first question of array and create one radio button question with it
//create formData state that keeps track of all the form responses
//values will start and false and then depending on which answer is clicked. will assign the appropriate score to that formData value
//not at all, several days, more than half the days, and almost daily will be worth 0,1,2,3 points respectively
// when the submit button is clicked. console log the form data. 

export default function Questionnaire(){

    //should i add a subscale property here to help with calculating subscores later?
    const initialState = questions.reduce((acc, question, index) => {
        acc[index] = false
        return acc
    }, {})
    
    const [formData, setFormData] = React.useState(initialState)

    function handleChange(event){
        const {name, value} = event.target
        const numericValue = parseInt(value, 10)
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: numericValue
            }
        })
    }


    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
    }

    const questionElements = questions.map((q, qIndex) => (
        <Question 
            key={`q${qIndex}`}
            question={q.question}
            name={qIndex}
            formData={formData}
            handleChange={handleChange}
        />
    ))

    return (
        <>
            <h2>Over the past two weeks how often did your loved one have problems with:</h2>
            <form onSubmit={handleSubmit}>
                {questionElements}
                <button>Submit!</button>
            </form>
        </>
    )

}