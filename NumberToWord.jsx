import { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';


export function NumberToWord()
{

    const ones=["zero","one","two","three","four","five","six","seven","eight","nine"]
    const teens=["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen","sixteen", "seventeen", "eighteen", "nineteen"]
    const tens = ["", "", "twenty", "thirty", "forty", "fifty","sixty", "seventy", "eighty", "ninety"];

    const[getValue,setValue]=useState();

    const[getConvertedValue,setConvertedValue]=useState("zero")

    function changeValue(e)
    {
        setValue(e.target.value);
    }

    function convertClick()
    {
        //console.log(getValue);
        if(getValue==0)
        {
            setConvertedValue("zero")
        }
        else if(getValue>=1 && getValue<=9)
        {
            setConvertedValue(ones[getValue]);
        }

        else if(getValue>=11 && getValue<=19)
        {
            setConvertedValue(teens[getValue-10])
        }

        else if(getValue<100)
        {
            let ten=Math.floor(getValue/10);
            let one=getValue % 10;
            
            setConvertedValue(tens[ten] + (one ? " " + ones[one] : ""))
        }

        else{
            setConvertedValue("Enter Valid value");
        }

    }
    return(
        <>
         <div className='w-100 d-flex justify-center bg-light p-4' style={{height:"800px"}}>
            <div className='container w-25 h-50 bg-white rounded rounded-3 border-2 p-2'>
                <h2 className='text-info my-2 text-center'>Number to text converter</h2>
                <dl>
                    <dt className='m-2'>Enter Number</dt>
                    <dd><input type="number" placeholder='Enter Number' className='form-control' onChange={changeValue}/></dd>
                </dl>
                <button className='btn btn-primary w-100 my-2' onClick={convertClick}>Convert</button>
                <h3 className='my-2 text-center text-info-emphasis'>{getConvertedValue}</h3>
            </div>
         </div>
        </>
    )
}