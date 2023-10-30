import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useCallback } from 'react'

import { Api } from '../Api'
import AlertMessage from './partials/AlertMessage'
import { useGlobalContext } from '../hooks/useGlobalContext'
import ViewDetails from './ViewDetails'

const ViewContainer = () => {
    const { _id } = useParams()
    const { item, dispatch } = useGlobalContext()

    // reset states when component unmounts
    const resetState = useCallback(() => {
        dispatch({ type: 'SET_ITEM', payload: { item: {}, alert: {} } })
    }, [dispatch])

    useEffect(() => {
        const getItem = async () => {
            try {
                const response = await axios.get(`${Api}/${_id}`)
                const item = response.data
                dispatch({ type: 'SET_ITEM', payload: { item } })
            } catch (err) {
                const message = err.response.data.errors.message
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
        return resetState // reset states when component unmounts
    }, [_id, dispatch, resetState])

    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <h3 className="mb-0">Item details</h3>
                    </div>
                    <div className="col-6">
                        <Link to="/" className="btn btn-secondary float-end">
                            Back
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                {item ? <ViewDetails item={item} /> : <AlertMessage />}
            </div>
        </div>
    )
}

export default ViewContainer
