import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link /* Route, Redirect, Switch */ } from 'react-router-dom';
import { ScrollingAnchor, IScrollingAnchorEventTarget } from '@mornya/scrolling-anchor-libs';
import '@mornya/scrolling-anchor-libs/dist/scrolling-anchor.scss';
import './App.scss';

type Props = {};

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
const App: React.FC<Props> = (_props: Props) => {
  const [utilArea, setUtilArea] = useState<boolean>(false);
  const scrollingAnchor = useRef<ScrollingAnchor | null>(null);

  const onScroll = useCallback((nextOffset: number, prevOffset: number, maxOffset: number) => {
    if (nextOffset <= maxOffset - utilAreaBottomHeight) {
      if ((nextOffset - prevOffset < 0) && scrollingAnchor.current) {
        // 스크롤방향이 위쪽일 경우 노출
        setUtilArea(true);
      } else if (scrollingAnchor.current) {
        // 스크롤방향이 아래쪽일 경우 미노출
        setUtilArea(false);
      }
    }
  }, []);

  const onAttach = useCallback((eventTarget: IScrollingAnchorEventTarget) => {
    console.log(`${eventTarget.direction}:${eventTarget.lastIndex} is ATTACHED!`);
  }, []);

  const onDetach = useCallback((eventTarget: IScrollingAnchorEventTarget) => {
    console.log(`${eventTarget.direction}:${eventTarget.lastIndex} is DETACHED!`);
  }, []);

  const onClickMoveScroll = useCallback(() => {
    scrollingAnchor.current?.scrollTo({
      el: document.getElementById('target-area'),
      marginTop: 0,
      delay: 0,
    });
  }, []);

  useEffect(() => {
    if (!scrollingAnchor.current) {
      scrollingAnchor.current = new ScrollingAnchor('.scrolling-anchor', {
        offsetAttachTop: 0, // utilArea 초기값은 false 이므로 0
        offsetAttachBottom: 0, // utilArea 초기값은 false 이므로 0
        onScroll,
        onAttach,
        onDetach,
      });
    }
    return () => {
      scrollingAnchor.current?.destroy();
    };
  }, [onScroll, onAttach, onDetach]); // only mount and unmount

  useEffect(() => {
    scrollingAnchor.current?.setPosition({
      offsetAttachTop: utilArea ? utilAreaTopHeight : 0,
      offsetAttachBottom: utilArea ? utilAreaBottomHeight : 0,
    });
  }, [utilArea]);

  return (
    <>
      <div className="util-area-top" style={{ top: utilArea ? 0 : -utilAreaTopHeight }}>
        Navigation Bar Area
      </div>

      <div className={`app-wrapper ${utilArea ? 'has-util-area' : ''}`}>
        <div className="scrolling-anchor" data-direction="top">
          <nav>
            <ul>
              <li>1ST Scrolling Anchor</li>
              <li>
                <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React.js</a>
              </li>
            </ul>
          </nav>
        </div>

        <header>
          <h1>React Demo</h1>
          <h2>Scrolling Anchor library</h2>
        </header>

        <footer>
          Copyright {new Date().getFullYear()}. mornya. All rights reserved.
        </footer>

        <div className="scrolling-anchor" data-direction="top">
          <nav>
            <ul>
              <li>2ND Scrolling Anchor</li>
              <li>
                <Link to="/">Home</Link>
                <a href="https://github.com/mornya" target="_blank" rel="noopener noreferrer">Github</a>
                <a href="https://npmjs.com/search?q=mornya" target="_blank" rel="noopener noreferrer">NPM</a>
              </li>
            </ul>
            <div className="aldhoaa">
              <span>This anchor a little different height of anchor area!</span>
            </div>
          </nav>
        </div>

        <div style={{ height: '400px' }}/>

        <div className="scrolling-anchor" data-direction="bottom">
          <nav>
            <div className="aldhoaa">
              A little different height of anchor area
            </div>
            <ul>
              <li>2ND Scrolling Anchor (Attaches at BOTTOM)</li>
              <li>
                <a href="https://jstella.kr" target="_blank" rel="noopener noreferrer">jstella</a>
                <a href="https://blog.jstella.kr" target="_blank" rel="noopener noreferrer">blog</a>
              </li>
            </ul>
          </nav>
        </div>

        <div style={{ height: '400px' }}/>

        <div id="target-area" style={{ textAlign: 'center', color: '#fff' }}>
          <span role="img" aria-label="혀를 내밀고 눈웃음 짓는 얼굴">😝</span>
          It&apos;s me, a target element!
          <span role="img" aria-label="키스를 보내는 얼굴">😘</span>
        </div>

        <div style={{ height: '400px' }}/>

        <div className="scrolling-anchor" data-direction="top">
          <nav>
            <ul>
              <li>3RD Scrolling Anchor</li>
              <li><button onClick={onClickMoveScroll}>Click to scroll</button></li>
            </ul>
          </nav>
        </div>

        <div style={{ height: '600px' }}/>

        <div className="scrolling-anchor" data-direction="bottom">
          <nav>
            <ul>
              <li>1ST Scrolling Anchor (Attaches at BOTTOM)</li>
              <li>
                <a href="https://www.instagram.com/m.o.r.n.y.a/" target="_blank" rel="noopener noreferrer">Learn Me</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="util-area-bottom" style={{ bottom: utilArea ? 0 : -utilAreaBottomHeight }}>
        Utility Bar Area
      </div>
    </>
  );
};

export default App;
