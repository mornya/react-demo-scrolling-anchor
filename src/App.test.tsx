import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ReduxMockStore } from '@mornya/react-helper'
import App from './App'

// Redux 미들웨어 설정 및 초기 상태 등을 설정
const store = ReduxMockStore.create()

describe('App Test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>,
      div,
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
