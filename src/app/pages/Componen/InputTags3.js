import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './inputtags3.scss'


const InputTags3 = (props) => {

    // const label = ['anjay']
    const [show, setShow] = useState(false);
    // const [items, setItems] = useState(label)
    const [inputValue, setInputValue] = useState('')
    const [data, setData] = useState([])


    const handleKeyDown = (e) => {
        console.log(e.keyCode)

        if(e.keyCode === 13) {
           if (inputValue !== '') {
              
                props.setItems([
                    ...props.items, inputValue
                ])
             
           }
            setInputValue('')
            // console.log(items, 'item')
        }

        if (e.keyCode === 8) {
            // return console.log('true')
            if ( inputValue === '') {
                props.setItems((item) =>  item.filter((item, i) => i !== 0) )
                // console.log(items, 'ini')
            }
        }
    }
    

    const handleRemove = (e) => {
        let id = e.target.parentElement.id
        props.setItems((item) => item.filter((item, i) => i !== parseInt(id)))
    }

    return (
    
        <div className='tag' >
                <ul >
                    {props.items.map((item, i) => {
                        return (
                            <li className='items' key={i} id={i}>
                                <span className='label'>{item}</span>
                                <span className='delete-icon' onClick={handleRemove}>X</span>
                            </li>
                        )
                    })}
                    <input type='text' placeholder={props.placeholder} required onKeyDown={handleKeyDown} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                </ul>
        </div>

              
    )
}





export default InputTags3