import { useGlobalContext } from '../../hooks/useGlobalContext'

const AlertMessage = () => {
    const { alert, dispatch } = useGlobalContext()
    const handleClose = () => {
        dispatch({ type: 'CLEAR_ALERT'})
    }

    return (
        <div data-testid='AlertMessage'>
            {(alert && alert.message) && (
                <div
                    className={`alert alert-${
                        alert.success ? 'success' : 'warning'
                    } alert-dismissible fade show`}
                    role='alert'
                >
                    <strong>{alert.message}</strong>
                    <button
                        type='button'
                        className='btn-close'
                        data-bs-dismiss='alert'
                        aria-label='Close'
                        onClick={handleClose}
                    ></button>
                </div>
            )}
        </div>
    )
}

export default AlertMessage
