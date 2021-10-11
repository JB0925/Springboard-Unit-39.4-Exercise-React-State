import React, { useState } from "react";
import "./EightBall.css";

const eightBallQuestions = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
];

const EightBall = props => {
    const idx = () => Math.floor(Math.random() * eightBallQuestions.length);
    const startState = {msg: "Think of a question.", color: "black"};
    const startColorCount = {goldenrod: 0, green: 0, red: 0};
    const [question, setQuestion] = useState(startState);
    const [colorCount, setColorCount] = useState(startColorCount);

    const updateDOM = () => {
        const color = question.color;
        console.log(color)
        setColorCount({ ...colorCount, [color]: colorCount[color] + 1});
        setQuestion(eightBallQuestions[idx()]);
    };

    return (
        <div className="EightBall">
            <div className="EightBall-main" 
                 style={{backgroundColor: question.color}}
                 onClick={() => updateDOM()}>
                <p>{question.msg}</p>
            </div>
            <button onClick={() => setQuestion(startState)}>Reset</button>
            <div className="EightBall-colors">
                <p>Yellow: {question.color === "goldenrod" ? colorCount.goldenrod + 1 : colorCount.goldenrod}</p>
                <p>Green: {question.color === "green" ? colorCount.green + 1 : colorCount.green}</p>
                <p>Red: {question.color === "red" ? colorCount.red + 1 : colorCount.red}</p>
            </div>
        </div>
    );
};

export default EightBall;