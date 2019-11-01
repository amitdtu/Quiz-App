import React, { useState } from 'react';
import { Input, Label, FormGroup, Button } from 'reactstrap';
import Result from '../Result/Reult';


const Question = (props) => {

    const questions = props.questions;
    const [number, setNumber] = useState(0);
    const [tick, setTick] = useState(null);
    const [res, setRes] = useState(0)
    const [isComplete, setIsComplete] = useState(null)


    const getAnsHandler = (e) => {
        setTick(e.target.value);
    }

    const nextQuesHandler = () => {
        if (tick === questions[number].correct_answer && res !== 10) {
            setRes(prevRes => prevRes + 1)
        }
        setTick(null)
        setNumber(number < 9 ? number + 1 : number);
        if (number === 9) {
            setIsComplete("complete")
        }
    }

    const prevQuesHandler = () => {
        setNumber(number > 0 ? number - 1 : number);
        if (res === 0) {
            setRes(0)
        } else {
            setRes(prevRes => prevRes - 1)
        }

    }



    if (isComplete !== "complete") {
        const options = [...questions[number].incorrect_answers, questions[number].correct_answer];
        return (
            <div className="App" key={number}>
                <h4>Q{number + 1} {questions[number].question}</h4>
                <ul>
                    {options.map((option, index) => (
                        <FormGroup check key={index}>
                            <Label check>
                                <Input type="radio" value={option} onClick={getAnsHandler} name="radio1" />{' '}
                                {option}
                            </Label>
                        </FormGroup>
                    ))}
                </ul>

                <div className="d-flex justify-content-between">
                    <Button color="dark" onClick={prevQuesHandler}>Previous</Button>
                    <Button color="primary" className="text-white" onClick={nextQuesHandler} >Next</Button>
                </div>
            </div>
        )
    } else return <Result result={res} />
}
export default Question;