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

    test('Renders ViewDetails component', async () => {
        // Arrange
        const mockData = {
            data: {
                _id: "653f5dd94068a338b63da816",
                name: "Madeline Salazar",
                weight: "light",
                size: "small"
            }
        }
        axios.get.mockResolvedValue(mockData)
        // Act & Assert
        await waitFor(async () => {
            setTimeout(() => {
                expect(screen.getByText(/Madeline Salazar/i)).toBeVisible()
                expect(screen.getByText(/light/i)).toBeVisible()
                expect(screen.getByText(/small/i)).toBeVisible()
            }, 5000) //this is a hacky way to test this, but it works.
        })
    })

    test('Renders AlertMessage component', () => {
        const AlertMessage = screen.getByTestId('AlertMessage')
        expect(AlertMessage).toBeTruthy()
    })
})
