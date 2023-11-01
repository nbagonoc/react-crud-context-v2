import { screen, render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { test, describe, expect, beforeEach} from 'vitest'

import {GlobalProvider} from '../context/GlobalContext';
import EditFormContainer from '../components/edit/EditFormContainer'
import EditForm from '../components/edit/EditForm'

describe('Edit item', () => {
    beforeEach(()=> {
        render(
            <GlobalProvider>
                <Router>
                    <EditFormContainer />
                </Router>
            </GlobalProvider>
        )
    })

    test('Renders EditFormContainer component', () => {
        const text = screen.getByText(/Edit item/i)
        expect(text).toBeVisible()
    })

    test('Renders EditForm component', () => {
        const name = screen.getByLabelText(/Name/i)
        const weight = screen.getByLabelText(/Weight/i)
        const size = screen.getByLabelText(/Size/i)
        expect(name, weight, size).toBeVisible()
    })
})