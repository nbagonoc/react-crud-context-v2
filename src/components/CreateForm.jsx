import axios from 'axios'
import { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { useNavigate } from 'react-router-dom'
import { Api } from '../Api'


export const CreateForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        weight: '',
        size: '',
    })
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()
    const { createItem } = useContext(GlobalContext)

    const onChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const item = {
            name: formData.name,
            weight: formData.weight,
            size: formData.size,
        }

        try {
            const response = await axios.post(Api, item)
            const message = response.data.success.message
            console.log(message)
            setErrors({})
            navigate('/')
        } catch (err) {
            setErrors(err.response.data.errors)
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='mb-3'>
                <label htmlFor='item-name'>Name</label>
                <input
                    id='item-name'
                    name='name'
                    autoComplete='off'
                    type='text'
                    placeholder='Enter item name'
                    className={`form-control ${errors.name ? 'border-danger' : ''}`}
                    onChange={onChange}
                    value={formData.name}
                />
                <span className='text-danger'>{errors.name ? errors.name.message : ''}</span>
            </div>
            <div className='mb-3'>
                <label htmlFor='weight'>Weight</label>
                <input
                    id='weight'
                    name='weight'
                    type='text'
                    placeholder='Enter item weight'
                    className={`form-control ${errors.weight ? 'border-danger' : ''}`}
                    onChange={onChange}
                    value={formData.weight}
                />
                <span className='text-danger'>{errors.weight ? errors.weight.message : ''}</span>
            </div>
            <div className='mb-3'>
                <label htmlFor='size'>Size</label>
                <input
                    id='size'
                    name='size'
                    type='text'
                    placeholder='Enter item size'
                    className={`form-control ${errors.size ? 'border-danger' : ''}`}
                    onChange={onChange}
                    value={formData.size}
                />
                <span className='text-danger'>{errors.size ? errors.size.message : ''}</span>
            </div>
            <div className='mb-3'>
                <button type='submit' className='btn btn-primary'>
                    Save
                </button>
            </div>
        </form>
    )
}

export default CreateForm
