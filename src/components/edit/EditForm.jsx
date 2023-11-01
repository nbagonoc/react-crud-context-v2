import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { API } from '../../API'
import AlertMessage from '../partials/AlertMessage'
import { useGlobalContext } from '../../hooks/useGlobalContext'

export const EditForm = () => {
    const { _id } = useParams()
    const { alert, errors, dispatch } = useGlobalContext()
    const [formData, setFormData] = useState({
        //no need to over engineer like passing the item in the global state
        name: '',
        weight: '',
        size: '',
    })
    const navigate = useNavigate()

    useEffect(() => {
        dispatch({ type: 'CLEAR_ALERT' }) //clear-out/reset any alert messages on globalstate

        const getItem = async () => {
            try {
                const response = await axios.get(`${API}/${_id}`)
                const item = response.data
                setFormData({
                    name: item.name,
                    weight: item.weight,
                    size: item.size,
                })
            } catch (err) {
                let message = 'Something went wrong!'
                if (err.response && err.response.data) {
                    message = err.response.data.errors.message
                }
                dispatch({
                    type: 'SET_ITEM',
                    payload: {
                        alert: {
                            message,
                            success: false,
                        },
                    },
                })
            }
        }

        getItem()
    }, [_id, dispatch])

    const onChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            const item = {
                name: formData.name,
                weight: formData.weight,
                size: formData.size,
            }
            const response = await axios.put(`${API}/${_id}`, item)
            const message = response.data.success.message
            dispatch({
                type: 'EDIT_ITEM',
                payload: {
                    alert: {
                        message,
                        success: true,
                    },
                },
            })
            navigate('/')
        } catch (err) {
            const errors = err.response.data.errors
            dispatch({ type: 'EDIT_ITEM', payload: { errors, alert: {} } })
        }
    }

    return (
        <div>
            {Object.keys(alert).length === 0 ? (
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
                            value={
                                formData && formData.name ? formData.name : ''
                            }
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
                            value={
                                formData && formData.weight
                                    ? formData.weight
                                    : ''
                            }
                        />
                        <span className="text-danger">
                            {errors && errors.weight
                                ? errors.weight.message
                                : ''}
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
                            value={
                                formData && formData.size ? formData.size : ''
                            }
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
            ) : (
                <AlertMessage />
            )}
        </div>
    )
}

export default EditForm
