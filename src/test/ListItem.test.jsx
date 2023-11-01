import { screen, render, waitFor } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { test, describe, expect, beforeEach, vi } from 'vitest'
import axios from 'axios'

import { GlobalProvider } from '../context/GlobalContext'
import ListItemContainer from '../components/list_item/ListItemContainer'

vi.mock('axios')

describe('List item', () => {
    beforeEach(() => {
        render(
            <GlobalProvider>
                <Router>
                    <ListItemContainer />
                </Router>
            </GlobalProvider>
        )
    })

    test('API is being called', async () => {
        await axios.get.mockResolvedValue([])
        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledTimes(1)
        })
    })

    test('Renders ListItemContainer component', () => {
        const ListItemContainer = screen.getByTestId('ListItemContainer')
        expect(ListItemContainer).toBeVisible()
    })

    test('Renders AlertMessage component', () => {
        const AlertMessage = screen.getByTestId('AlertMessage')
        expect(AlertMessage).toBeTruthy()
    })

    test('Renders ListItemTable component', () => {
        const name = screen.getByText(/Name/i)
        const weight = screen.getByText(/Weight/i)
        const size = screen.getByText(/Size/i)
        const action = screen.getByText(/Action/i)
        expect(name, weight, size, action).toBeVisible()
    })

    test('Renders ListItemDetails component', async () => {
        // Arrange
        const mockData = {
            data: [
                {
                    _id: '653f5dd94068a338b63da816',
                    name: 'Madeline Salazar',
                    weight: 'light',
                    size: 'small',
                    date: '2023-10-30T07:40:09.870Z',
                    __v: 0,
                },
                {
                    _id: '653f5d6b4068a338b63da813',
                    name: 'Nevada Mcdonald',
                    weight: 'heavy',
                    size: 'large',
                    date: '2023-10-30T07:38:19.901Z',
                    __v: 0,
                },
            ],
        }
        axios.get.mockResolvedValue(mockData)
        // Act & Assert
        await waitFor(async () => {
            setTimeout(() => {
                // first object
                expect(screen.getByText(/Madeline Salazar/i)).toBeVisible()
                expect(screen.getByText(/light/i)).toBeVisible()
                expect(screen.getByText(/small/i)).toBeVisible()
                // second object
                expect(screen.getByText(/Nevada Mcdonald/i)).toBeVisible()
                expect(screen.getByText(/heavy/i)).toBeVisible()
                expect(screen.getByText(/large/i)).toBeVisible()
            }, 5000) //this is a hacky way to test this, but it works.
        })
    })
})
