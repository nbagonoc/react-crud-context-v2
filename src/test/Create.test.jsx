import { screen, render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { test, describe, expect} from 'vitest'

import {GlobalProvider} from '../context/GlobalContext'
import CreateFormContainer from '../components/create/CreateFormContainer'
import CreateForm from '../components/create/CreateForm'

describe('Create', () => {    
    test('Renders CreateFormContainer component', () => {        
        render(
            <GlobalProvider>
                <Router>
                    <CreateFormContainer />
                </Router>
            </GlobalProvider>
        )
        const text = screen.getByText(/Create item/i)
        expect(text).toBeVisible()
    })

    test('Renders CreateForm component', () => {        
        render(
            <GlobalProvider>
                <Router>
                    <CreateForm />
                </Router>
            </GlobalProvider>
        )
        const name = screen.getByLabelText(/Name/i)
        const weight = screen.getByLabelText(/Weight/i)
        const size = screen.getByLabelText(/Size/i)
        expect(name, weight, size).toBeVisible()
    })
})