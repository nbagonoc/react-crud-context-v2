import { useState, useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'
import { Link, useNavigate } from 'react-router-dom'
// import {v4 as uuid} from 'uuid'

export const CreateForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        weight: '',
        size: '',
    })
    const navigate = useNavigate()
    const { createItem } = useContext(GlobalContext)

    const onChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const newItem = {
            name: formData.name,
            weight: formData.weight,
            size: formData.size,
        }
        createItem(newItem)
        navigate('/')
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="item-name">Name</label>
                <input
                    id="item-name"
                    type="text"
                    placeholder="Enter item name"
                    // className={`form-control ${errors.name ? 'border-danger' : ''}`}
                    className="form-control"
                    onChange={onChange}
                    value={formData.name}
                />
                {/* <span className='text-danger'>{errors.name ? errors.name.message : ''}</span> */}
            </div>
            <div className="mb-3">
                <label htmlFor="weight">Weight</label>
                <input
                    id="weight"
                    type="text"
                    // className={`form-control ${errors.weight ? 'border-danger' : ''}`}
                    className="form-control"
                    onChange={onChange}
                    value={formData.weight}
                />
                {/* <span className='text-danger'>{errors.weight ? errors.weight.message : ''}</span> */}
            </div>
            <div className="mb-3">
                <label htmlFor="size">Size</label>
                <input
                    id="size"
                    type="text"
                    // className={`form-control ${errors.size ? 'border-danger' : ''}`}
                    className="form-control"
                    onChange={onChange}
                    value={formData.size}
                />
                {/* <span className='text-danger'>{errors.size ? errors.size.message : ''}</span> */}
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
