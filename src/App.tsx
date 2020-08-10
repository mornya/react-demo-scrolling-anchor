import React, { RefObject } from 'react';
import { Link /* Route, Redirect, Switch */ } from 'react-router-dom';
import { ScrollingAnchor } from '@mornya/scrolling-anchor-libs';
import '@mornya/scrolling-anchor-libs/dist/scrolling-anchor.scss';
import './App.scss';

interface Props {}

interface State {
  utilArea: boolean;
}

const utilAreaTopHeight = 120;
const utilAreaBottomHeight = 80;

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
export default class App extends React.Component<Props, State> {
  readonly state: State = {
    utilArea: false,
  };

  private readonly refAppWrapper: RefObject<HTMLDivElement>;
  private saNav: ScrollingAnchor | null = null;

  constructor (props: Props) {
    super(props);

    this.refAppWrapper = React.createRef();
  }

  onScroll = (nextOffset: number, prevOffset: number, maxOffset: number) => {
    if (nextOffset <= maxOffset - utilAreaBottomHeight) {
      if (nextOffset - prevOffset < 0) {
        if (!this.state.utilArea) {
          this.setState({ utilArea: true });
        }
      } else {
        if (this.state.utilArea) {
          this.setState({ utilArea: false });
        }
      }
    }
  };

  onAttach = (direction: string, index: number) => console.log(`${direction}:${index} is ATTACHED!`);

  onDetach = (direction: string, index: number) => console.log(`${direction}:${index} is DETACHED!`);

  onClickMoveScroll = () =>
    this.saNav?.scrollTo({
      el: document.getElementById('target-area'),
      marginTop: 0,
      delay: 0,
    });

  componentDidMount () {
    this.saNav = new ScrollingAnchor('.scrolling-anchor', {
      offsetAttachTop: this.state.utilArea ? utilAreaTopHeight : 0,
      offsetAttachBottom: this.state.utilArea ? utilAreaBottomHeight : 0,
      onScroll: this.onScroll,
      onAttach: this.onAttach,
      onDetach: this.onDetach,
    });
  }

  componentDidUpdate (prevProps: Props, prevState: State) {
    if (prevState.utilArea !== this.state.utilArea) {
      this.saNav?.setPosition({
        offsetAttachTop: this.state.utilArea ? utilAreaTopHeight : 0,
        offsetAttachBottom: this.state.utilArea ? utilAreaBottomHeight : 0,
      });
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
                <li><a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React.js</a></li>
                <li>(Scrolling Anchor TOP)</li>
              </ul>
            </nav>
          </div>

          <header>
            <h1>React Demo</h1>
            <h2>Scrolling Anchor library</h2>
          </header>

          <footer>
            Copyright 2020. mornya. All rights reserved.
          </footer>

          <div className="scrolling-anchor" data-direction="top">
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React.js</a></li>
                <li><button onClick={this.onClickMoveScroll}>Scroll to target element</button></li>
                <li>(Scrolling Anchor TOP)</li>
              </ul>
              <div className="aldhoaa">
                A little different height of anchor area
              </div>
            </nav>
          </div>

          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>

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

          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div id="target-area" style={{ textAlign: 'center', color: '#fff' }}>~~~ It&apos;s me, a target element! ~~~</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>

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

          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>

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
    );
  }

  componentWillUnmount () {
    this.saNav?.destroy();
  }
}
