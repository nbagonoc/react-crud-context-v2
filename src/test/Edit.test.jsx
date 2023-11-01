import { screen, render, waitFor } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { test, describe, expect, beforeEach, vi} from 'vitest'
import axios from 'axios'

import {GlobalProvider} from '../context/GlobalContext';
import EditFormContainer from '../components/edit/EditFormContainer'

vi.mock('axios')

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

    test('API is being called', async () => {
        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledTimes(1)
        })
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