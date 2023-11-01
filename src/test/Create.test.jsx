import { screen, render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { test, describe, expect, beforeEach} from 'vitest'

import {GlobalProvider} from '../context/GlobalContext'
import CreateFormContainer from '../components/create/CreateFormContainer'

describe('Create item', () => {
    beforeEach(()=> {
        render(
            <GlobalProvider>
                <Router>
                    <CreateFormContainer />
                </Router>
            </GlobalProvider>
        )
    })

    test('Renders CreateFormContainer component', () => {
        const text = screen.getByText(/Create item/i)
        expect(text).toBeVisible()
    })

    test('Renders CreateForm component', () => {
        const name = screen.getByLabelText(/Name/i)
        const weight = screen.getByLabelText(/Weight/i)
        const size = screen.getByLabelText(/Size/i)
        expect(name, weight, size).toBeVisible()
    })
})