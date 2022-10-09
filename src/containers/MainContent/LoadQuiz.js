import styled, { css } from 'styled-components';
import React, { useEffect, useState } from "react";
import Form from './Form';
import PrevAndNext from '../../components/PrevAndNext';
import { Button } from '@mui/material';
import axios from "axios";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const MyQuiz = styled.div`
  height: 15%;
  background: transparent;
  margin-left: 25%;
  margin-right: 25%;
  width:  50%;
  border-radius: 3px;
  border: 2px solid palevioletred;
  background: #add8e6;;
`
const QuizSize = styled.div`
  margin-top: 10px;
  width: 50%;
  margin-right: 25%;
  margin-left: 25%;
`

const Score = styled.p`
`;

const mockupData = {
    ID: "0",
    Text: "AzureQuestions",
    Question: [
        {
            ID: "1",
            Text: "This is a question - 1",
            Answer: [
                {
                    ID: 0,
                    Text: "Value",
                    Correct: true
                },
                {
                    ID: 1,
                    Text: "Value",
                    Correct: true
                },
                {
                    ID: 2,
                    Text: "Value",
                    Correct: true
                },
                {
                    ID: 3,
                    Text: "Value",
                    Correct: true
                }
            ]
        },
        {
            ID: "2",
            Text: "This is a question - 2",
            Answer: [
                {
                    ID: 0,
                    Text: "Value",
                    Correct: true
                },
                {
                    ID: 1,
                    Text: "Value",
                    Correct: true
                },
                {
                    ID: 2,
                    Text: "Value",
                    Correct: true
                },
                {
                    ID: 3,
                    Text: "Value",
                    Correct: true
                }
            ]
        },
        {
            ID: "3",
            Text: "This is a question - 3",
            Answer: [
                {
                    ID: 0,
                    Text: "Value",
                    Correct: true
                },
                {
                    ID: 1,
                    Text: "Value",
                    Correct: true
                },
                {
                    ID: 2,
                    Text: "Value",
                    Correct: true
                },
                {
                    ID: 3,
                    Text: "Value",
                    Correct: true
                }
            ]
        }
    ]
}



const MyButton = styled(Button)`
	margin: 10px;
`;

const fetchItemData = (url) => fetch("http://localhost:8080/quiz", {
    headers: {
        Accept: 'application/json',
    },
    credentials: 'same-origin',
}).then((response) => {

    // console.log("response data is: ", response.data);
    console.log("response.body is: ", parseJSON(response));
    if (response.status != 404) {
        return parseJSON(response);
    }
    return null;
})


async function getQuizFromAPI() {
    try {
        const config = {
            baseURL: "http://localhost:8080/quiz",
            method: "GET"
        };
        try {
            const result = await axios.get("http://localhost:8080/quiz");
            console.log(result.data,'GetQuiz')
            return result.data;
        } catch (error) {
            if (typeof error.response !== "undefined") {
                console.error("api error");
                return false;
            }
        }
    } catch (error) {
        console.log("error api");
        console.error(error);
    }
}

const parseJSON = (response) => response.json();


const LoadQuiz = ({chooseQuiz, providedQuiz}) => {

	const onSubmitScore = (event) => {
		// answers.push(count);
		// console.log("answers is: ", answers);
	}

    const [quiz, setQuiz] = React.useState(mockupData);

    const handleChange = (event) => {
        setQuiz(event.target.value);
        chooseQuiz(event.target.value);
    };

     const loadTheQuiz = (event) => {
        console.log("quuiz is:", quiz);
        providedQuiz(quiz);

        // useFetchQuiz();

        // const getApi = getQuizFromAPI().Result;

        // console.log("getApi is: ", getApi);
        
        // const response = fetchItemData("")
        // .then((response) => {
        //   if (response.length === 0) {
        //     // throw createDEXFRequestError();
        //   }
        //   console.log("response is: ", response);
        //   return response;
        // //   return remapItemData(response,businessRules);
        // }).then((response) => {
        //     console.log("response again is: ", response);
        //     return response;
        //   //   return remapItemData(response,businessRules);
        //   })

        // // const data = fetchItemData();
        // console.log("data is: ", response);
    };


    return (
        <MyQuiz>
            Which quiz do you want to test?
            <QuizSize>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Quiz</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={quiz}
                            label="Quiz"
                            onChange={handleChange}
                        >
                            <MenuItem value={1}>First quiz</MenuItem>
                            <MenuItem value={2}>Second quiz</MenuItem>
                            <MenuItem value={3}>Third quiz</MenuItem>
                        </Select>
                        <MyButton variant={'contained'} onClick={loadTheQuiz}>Submit</MyButton>
                    </FormControl>
                </Box>
            </QuizSize>
        </MyQuiz>
    );
}

export default LoadQuiz;
