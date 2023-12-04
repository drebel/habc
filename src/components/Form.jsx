import React from 'react'
import questions from '../assets/questions.js'


//js file that has an array of questions
//take first question of array and create one radio button question with it
//create formData state that keeps track of all the form responses
//values will start and false and then depending on which answer is clicked. will assign the appropriate score to that formData value
//not at all, several days, more than half the days, and almost daily will be worth 0,1,2,3 points respectively
// when the submit button is clicked. console log the form data. 

export default function Questionnaire(){

    
    const initialState = questions.reduce((acc, question) => {
        acc[question.id] = false
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

    return (
        <>
            <h2>Over the past two weeks how often did your loved one have problems with:</h2>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>{questions[0].question}</legend>
                    <label htmlFor={`${questions[0].id}_notAtAll`}>
                        <input 
                            type="radio"
                            id={`${questions[0].id}_notAtAll`}
                            name={`${questions[0].id}`}
                            value={0}
                            checked={formData[questions[0].id === 0]}
                            onChange={handleChange}
                            />
                    Not At All (0-1 days)
                    </label>
                    <label htmlFor={`${questions[0].id}_severalDays`}>
                        <input 
                            type="radio"
                            id={`${questions[0].id}_severalDays`}
                            name={`${questions[0].id}`}
                            value={1}
                            checked={formData[questions[0].id === 1]}
                            onChange={handleChange}
                            />
                    Serveral Days (2-6 days)
                    </label>
                    <label htmlFor={`${questions[0].id}_moreThanHalf`}>
                        <input 
                            type="radio"
                            id={`${questions[0].id}_moreThanHalf`}
                            name={`${questions[0].id}`}
                            value={2}
                            checked={formData[questions[0].id === 2]}
                            onChange={handleChange}
                            />
                    More than half the days (7-11 days)
                    </label>
                    <label htmlFor={`${questions[0].id}_almostDaily`}>
                        <input 
                            type="radio"
                            id={`${questions[0].id}_almostDaily`}
                            name={`${questions[0].id}`}
                            value={3}
                            checked={formData[questions[0].id === 3]}
                            onChange={handleChange}
                            />
                    Almost Daily (12-14 days)
                    </label>
                </fieldset>
                <button>Submit!</button>
            </form>
        </>
    )

}