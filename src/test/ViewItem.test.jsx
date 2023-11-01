import { screen, render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { test, describe, expect, beforeEach } from 'vitest'

import { GlobalProvider } from '../context/GlobalContext'
import ViewContainer from '../components/view_item/ViewContainer'

describe('View item', () => {
    beforeEach(()=> {
        render(
            <GlobalProvider>
                <Router>
                    <ViewContainer />
                </Router>
            </GlobalProvider>
        )
    })

    test('Renders ViewContainer component', () => {
        const text = screen.getByText(/Item details/i)
        expect(text).toBeVisible()
    })

    test('Renders ViewDetails component', () => {
        const name = screen.getByText(/Name:/i)
        const weight = screen.getByText(/Weight:/i)
        const size = screen.getByText(/Size:/i)
        expect(name, weight, size).toBeVisible()
    })
})
