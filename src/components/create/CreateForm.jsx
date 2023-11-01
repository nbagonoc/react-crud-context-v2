import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { API } from '../../API'
import { useGlobalContext } from '../../hooks/useGlobalContext'

export const CreateForm = () => {
    const { errors, dispatch } = useGlobalContext()
    const [formData, setFormData] = useState({
        name: '',
        weight: '',
        size: '',
    })
    const navigate = useNavigate()

    useEffect(() => {
        dispatch({ type: 'CLEAR_ALERT' }) //clear-out/reset any alert messages on globalstate
    },[dispatch])

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
            const response = await axios.post(API, item);
            const message = response.data.success.message;
            dispatch({
                type: 'CREATE_ITEM',
                payload: {
                    alert: {
                        message,
                        success: true,
                    },
                },
            })
            navigate('/')
        } catch (err) {
            const errors = err.response.data
            dispatch({ type: 'CREATE_ITEM', payload: errors })
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="item-name">Name</label>
                <input
                    id="item-name"
                    name="name"
                    autoComplete="off"
                    type="text"
                    placeholder="Enter item name"
                    className={`form-control ${
                        errors && errors.name ? 'border-danger' : ''
                    }`}
                    onChange={onChange}
                    value={formData.name}
                />
                <span className="text-danger">
                    {errors && errors.name ? errors.name.message : ''}
                </span>
            </div>
            <div className="mb-3">
                <label htmlFor="weight">Weight</label>
                <input
                    id="weight"
                    name="weight"
                    type="text"
                    placeholder="Enter item weight"
                    className={`form-control ${
                        errors && errors.weight ? 'border-danger' : ''
                    }`}
                    onChange={onChange}
                    value={formData.weight}
                />
                <span className="text-danger">
                    {errors && errors.weight ? errors.weight.message : ''}
                </span>
            </div>
            <div className="mb-3">
                <label htmlFor="size">Size</label>
                <input
                    id="size"
                    name="size"
                    type="text"
                    placeholder="Enter item size"
                    className={`form-control ${
                        errors && errors.size ? 'border-danger' : ''
                    }`}
                    onChange={onChange}
                    value={formData.size}
                />
                <span className="text-danger">
                    {errors && errors.size ? errors.size.message : ''}
                </span>
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-primary">
                    Save
                </button>
            </div>
        </form>
    )
}

export default CreateForm
