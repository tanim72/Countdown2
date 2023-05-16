import React, {useState, useEffect} from 'react'; 
import Button from '@material-ui/core/Button';

function Question({ question, correct, incorrect }) {

    const [shuffle, setshuffle] = useState([]);

    useEffect(() => {
    const allAnswers = [...incorrect, correct]
    setshuffle(allAnswers.sort(() => Math.random() - 0.3)); 
    }, [correct, incorrect]); 

    const [clickedAnswer, setClickedAnswer] = useState(null); 

    function checkIfCorrect(answer) {
        if(answer !== clickedAnswer){
            return ''; 
        }
        else{
            if(answer === correct){ 
                return 'g';
            }
            else{
                return 'r';
            }
        }
    }

    function handleAnswerClick(answer) {
        if(clickedAnswer === null){
            setClickedAnswer(answer);
        }
    }

    return (
        <div>
            <h2 htmlSet={{ __html: question }}></h2>

            <ul>
                {shuffle.map((answer, index) => (
                    <li key={index}>
                    <Button 
                    variant='contained'
                    style={{backgroundColor: checkIfCorrect(answer)}}
                    onClick={() => handleAnswerClick(answer)}
                    disabled={clickedAnswer !== null}
                    >{answer} 
                    </Button>
                    
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Question; 