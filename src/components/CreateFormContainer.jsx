import { Link } from 'react-router-dom'
import CreateForm from './CreateForm'

const CreateFormContainer = () => {

  return (
    <div className='card'>
        <div className='card-header'>
            <div className='row'>
                <div className='col-6'>
                    <h3 className='mb-0'>Create Item</h3>  
                </div>
                <div className='col-6'>
                    <Link to='/' className='btn btn-secondary float-end'>Cancel</Link>
                </div>
            </div>
        </div>
        <div className='card-body'>
            <CreateForm />
        </div>
    </div>
  )
}

export default CreateFormContainer