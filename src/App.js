import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import { Background, Card } from './sharedComponents/'
import GlobalStyle from './components/GloablalComponents/Gloabal.style'
import Signup from './components/Signup'
import ClosestMarkets from './components/ClosestMarkets'
import MarketsMap from './components/MarketsMap'

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Background>
        <Card>
          <Router>
            <Route exact path="/" component={Signup} />
            <Route exact path="/markets" component={ClosestMarkets} />
            <Route exact path="/markets-map" component={MarketsMap} />
          </Router>
        </Card>
      </Background>
    </React.Fragment>
  )
}

export default App
