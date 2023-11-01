import { screen, render } from '@testing-library/react'
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

    test('API is being called', () => {
        // Not using mockData here, since this is only unit-test, not integration
        // const mockData = axios.get.mockResolvedValue([
        //     {
        //         _id: '653f5dd94068a338b63da816',
        //         name: 'Madeline Salazar',
        //         weight: 'Repellendus Eos cu',
        //         size: 'Ea eligendi qui vel ',
        //         date: '2023-10-30T07:40:09.870Z',
        //         __v: 0,
        //     },
        //     {
        //         _id: '653f5d6b4068a338b63da813',
        //         name: 'Nevada Mcdonald',
        //         weight: 'Temporibus dolores q',
        //         size: 'Beatae laudantium v',
        //         date: '2023-10-30T07:38:19.901Z',
        //         __v: 0,
        //     },
        // ])
        expect(axios.get).toHaveBeenCalledTimes(1)//all i really care for the front-end is the API has been called
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
