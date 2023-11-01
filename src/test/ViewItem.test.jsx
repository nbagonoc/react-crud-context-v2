import { screen, render, waitFor } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { test, describe, expect, beforeEach, vi } from 'vitest'
import axios from 'axios'

import { GlobalProvider } from '../context/GlobalContext'
import ViewContainer from '../components/view_item/ViewContainer'

vi.mock('axios')

describe('View item', () => {
    beforeEach(() => {
        render(
            <GlobalProvider>
                <Router>
                    <ViewContainer />
                </Router>
            </GlobalProvider>
        )
    })

    test('API is being called', async () => {
        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledTimes(1)
        })
    })

    test('Renders ViewContainer component', () => {
        const text = screen.getByText(/Item details/i)
        expect(text).toBeVisible()
    })

    test('Renders AlertMessage component', () => {
        const AlertMessage = screen.getByTestId('AlertMessage')
        expect(AlertMessage).toBeTruthy()
    })

    test('Renders ViewDetails component', () => {
        const name = screen.getByText(/Name:/i)
        const weight = screen.getByText(/Weight:/i)
        const size = screen.getByText(/Size:/i)
        expect(name, weight, size).toBeVisible()
    })
})
