import { screen, render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { test, describe, expect, beforeEach} from 'vitest'

import {GlobalProvider} from '../context/GlobalContext'
import ListItemContainer from '../components/list_item/ListItemContainer'

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
    
})