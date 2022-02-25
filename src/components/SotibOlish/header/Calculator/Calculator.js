import './calculator.css'
import {useState} from "react";

function Calculator(){
    const [data,setData] = useState('')

    function handleClick(e){
            setData(data.concat(e.target.name))
    }

    function backspace(){
        setData(data.slice(0,-1))
    }

    function clear(){
        setData('')
    }
    function calculate(){
        try{
            setData(eval(data).toString())
        }catch(err){
            setData('Error')
        }
    }
    return(
        <div className={'calc'} >
        <div className={'container'}>
            <form>
                <input type="text" value={data} placeholder={'0'}/>
            </form>

            <div className="keypad">
                <button className={'clear'} onClick={clear} id={'clear'}>Clear</button>
                <button onClick={backspace} id={'backspace'}>C</button>
                <button name={'/'} onClick={handleClick}>&divide;</button>
                <button name={'7'} onClick={handleClick}>7</button>
                <button name={'8'} onClick={handleClick}>8</button>
                <button name={'9'} onClick={handleClick}>9</button>
                <button name={'*'} onClick={handleClick}>&times;</button>
                <button name={'4'} onClick={handleClick}>4</button>
                <button name={'5'} onClick={handleClick}>5</button>
                <button name={'6'} onClick={handleClick}>6</button>
                <button name={'-'} onClick={handleClick}>&ndash;</button>
                <button name={'1'} onClick={handleClick}>1</button>
                <button name={'2'} onClick={handleClick}>2</button>
                <button name={'3'} onClick={handleClick}>3</button>
                <button name={'+'} onClick={handleClick}>+</button>
                <button name={'0'} onClick={handleClick}>0</button>
                <button name={'.'} onClick={handleClick}>.</button>
                <button onClick={calculate} id={'result'}>=</button>
            </div>
        </div>
        </div>
    )
}
export default Calculator