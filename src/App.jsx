import * as React from 'react'
import { Route, Link /* Redirect, Switch */ } from 'react-router-dom'
import { LazyComponent } from '@mornya/react-helper'
import { ScrollingAnchor } from '@mornya/scrolling-anchor-libs'
import './App.scss'
import '@mornya/scrolling-anchor-libs/dist/scrolling-anchor.scss'

const Home = LazyComponent(() => import('components/home'))
const About = LazyComponent(() => import('components/about'), <div>Loading About..</div>)

const utilAreaTopHeight = 120
const utilAreaBottomHeight = 80

/**
 * This is an app of entries.
 *
 * React-Router v4 example:
 *
 * <div>
 *   <Route exact path="/" component={Home}>
 *   <Route path="/about" component={About}/>
 *   <Switch>
 *     <Redirect from="/me/project1" to="/project/1"/>
 *     <Redirect from="/me/project2" to="/project/2"/>
 *   </Switch>
 *   <Route exact path="/project" component={Project} />
 *   <Route path="/project/:no" component={Project} />
 * </div>
 */
export default class App extends React.Component {
  state = {
    utilArea: false,
  }

  refAppWrapper = null
  saNav = null

  constructor (props) {
    super(props)

    this.refAppWrapper = React.createRef()
    this.state.utilArea = false
  }

  onScroll = (nextOffset, prevOffset, maxOffset) => {
    if (nextOffset <= maxOffset - utilAreaBottomHeight) {
      if (nextOffset - prevOffset < 0) {
        if (!this.state.utilArea) {
          this.setState({ utilArea: true })
        }
      } else {
        if (this.state.utilArea) {
          this.setState({ utilArea: false })
        }
      }
    }
  }

  onAttach = (direction, index) => console.log(`${direction}:${index} is ATTACHED!`)

  onDetach = (direction, index) => console.log(`${direction}:${index} is DETACHED!`)

  componentDidMount () {
    this.saNav = new ScrollingAnchor('.scrolling-anchor', {
      offsetAttachTop: this.state.utilArea ? utilAreaTopHeight : 0,
      offsetAttachBottom: this.state.utilArea ? utilAreaBottomHeight : 0,
      onScroll: this.onScroll,
      onAttach: this.onAttach,
      onDetach: this.onDetach,
    })
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (prevState.utilArea !== this.state.utilArea) {
      this.saNav.setPosition({
        offsetAttachTop: this.state.utilArea ? utilAreaTopHeight : 0,
        offsetAttachBottom: this.state.utilArea ? utilAreaBottomHeight : 0,
      })
    }
  }

  render () {
    return (
      <>
        <div className="util-area-top" style={{ top: this.state.utilArea ? 0 : -utilAreaTopHeight }}>
          Navigation Bar Area
        </div>
        <div ref={this.refAppWrapper} className={`app-wrapper ${this.state.utilArea ? 'has-util-area' : ''}`}>
          <div className="scrolling-anchor" data-direction="top">
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React.js</a></li>
                <li>(Scrolling Anchor TOP)</li>
              </ul>
            </nav>
          </div>

          <header>
            <h1>React Demo</h1>
            <h2>Scrolling Anchor library</h2>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
          </header>

          <footer>
            Copyright 2019 by mornya. All rights reserved.
          </footer>

          <div className="scrolling-anchor" data-direction="top">
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React.js</a></li>
                <li>(Scrolling Anchor TOP)</li>
              </ul>
              <div className="aldhoaa">
                A little different height of anchor area
              </div>
            </nav>
          </div>

          <div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div>
          <div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div>
          <div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div>
          <div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div>
          <div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div>

          <div className="scrolling-anchor" data-direction="bottom">
            <nav>
              <div className="aldhoaa">
                A little different height of anchor area
              </div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React.js</a></li>
                <li>(Scrolling Anchor BOTTOM)</li>
              </ul>
            </nav>
          </div>

          <div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div>
          <div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div>
          <div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div>
          <div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div>

          <div className="scrolling-anchor" data-direction="top">
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React.js</a></li>
                <li>(Scrolling Anchor TOP)</li>
              </ul>
            </nav>
          </div>

          <div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div>
          <div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div>
          <div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div>
          <div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div><div>*</div>

          <div className="scrolling-anchor" data-direction="bottom">
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React.js</a></li>
                <li>(Scrolling Anchor BOTTOM)</li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="util-area-bottom" style={{ bottom: this.state.utilArea ? 0 : -utilAreaBottomHeight }}>
          Utility Bar Area
        </div>
      </>
    )
  }

  componentWillUnmount () {
    if (this.saNav) {
      this.saNav.destroy()
    }
  }
}
