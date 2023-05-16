import React, { useState,useEffect } from 'react'
import { getOffset } from '../../../utils/timezone'
import {TIMEZONE_OFFSET} from '../../../constants/timezone'

const ClockForm = ({ value = { title: '', timezone: 'UTC', offset: 0 }, title = true, edit = false, handleClock }) => {
    const [formValue, setFormValue] = useState({ ...value })
   
    useEffect(() => {
        if (TIMEZONE_OFFSET[formValue.timezone]) {
            setFormValue({
                ...formValue,
                offset: TIMEZONE_OFFSET[formValue.timezone]
            })
        }
    }, [formValue.timezone])

    const handleChange = (e) => {
        let { name, value } = e.target
     
        if (name === 'offset') {
            value = Number(value) * 60
        }
        setFormValue({
            ...formValue,
            [name]: value
        })

    }

    const handleSubmit = (e) => {
        console.log('i am here')
        e.preventDefault()
        handleClock(formValue)
    }

   
    return (
        <form onSubmit={handleSubmit} >
            <div>
                <label htmlFor="title">Enter Title</label>
                <input type="text" name="title" id="title" onChange={handleChange} value={formValue.title} disabled={!title} />
            </div>
            <div>
                <label htmlFor="timezone">Select TimeZone</label>
                <select value={formValue.timezone} name="timezone" id="timezone" onChange={handleChange} >
                    <option value="GMT">GMT</option>
                    <option value="UTC">UTC</option>
                    <option value="PST">PST</option>
                    <option value="EST">EST</option>
                    <option value="EDT">EDT</option>
                    <option value="BST">BST</option>
                    <option value="MST">MST</option>
                </select>
            </div>


            {formValue.timezone === 'GMT' || formValue.timezone === "UTC"}{
                <div>
                    <label htmlFor="offset">Enter Offset
                    </label>
                    <select onChange={handleChange} name="offset" id="offset" value={formValue.offset/60}>
                        {getOffset().map((offset) =>
                            <option value={offset} key={offset}>{offset}</option>
                        )}
                    </select>

                </div>
            }
            <button>{edit ? 'Update' : 'Create'}</button>
        </form>
    )
}

export default ClockForm