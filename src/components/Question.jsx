import PropTypes from 'prop-types'

export default function Question(props){
    return (
        <fieldset>
            <legend>{props.question}</legend>
            <label htmlFor={`${props.name}_notAtAll`}>
                <input 
                    type="radio"
                    id={`${props.name}_notAtAll`}
                    name={props.name}
                    value={0}
                    checked={props.formData[props.name] === 0}
                    onChange={props.handleChange}
                    />
            Not At All (0-1 days)
            </label>
            <label htmlFor={`${props.name}_severalDays`}>
                <input 
                    type="radio"
                    id={`${props.name}_severalDays`}
                    name={props.name}
                    value={1}
                    checked={props.formData[props.name] === 1}
                    onChange={props.handleChange}
                    />
            Serveral Days (2-6 days)
            </label>
            <label htmlFor={`${props.name}_moreThanHalf`}>
                <input 
                    type="radio"
                    id={`${props.name}_moreThanHalf`}
                    name={props.name}
                    value={2}
                    checked={props.formData[props.name] === 2}
                    onChange={props.handleChange}
                    />
            More than half the days (7-11 days)
            </label>
            <label htmlFor={`${props.name}_almostDaily`}>
                <input 
                    type="radio"
                    id={`${props.name}_almostDaily`}
                    name={props.name}
                    value={3}
                    checked={props.formData[props.name] === 3}
                    onChange={props.handleChange}
                    />
            Almost Daily (12-14 days)
            </label>
        </fieldset>
    )
}