import React, { useState, useEffect } from 'react';
import GithubCorner from '@uiw/react-github-corners';
import { Github } from '@uiw/react-shields';

// import logo from './logo.svg';
import KeyBoard from '@uiw/react-mac-keyboard';
// import MarkdownPreview from '@uiw/react-markdown-preview';
import Footer from './components/Footer';

import styles from './App.module.css';
import './App.css';
import pkg from '../package.json';


declare type KeyCodeData = {
  keycode: number;
  name: string[];
};

export type OpenVersionWebsite = (event: React.ChangeEvent<HTMLSelectElement>) => void;

const App = () => {
  const [keyStr, setKeyStr] = useState([]);
  const [keyCode, setKeyCode] = useState([]);

  useEffect(() => {
    return document.removeEventListener('keyup', onKeyUpEvent);
    // function pkeys(keys, key) {
    //   if (keys.indexOf(key) === -1) keys.push(key);
    //   return keys;
    // }
  });

  const onKeyUpEvent = () => {
    setKeyCode([]);
    setKeyStr([]);
  }

  const openVersionWebsite: OpenVersionWebsite = (e) => {
    if (e.target && e.target.value) {
      window.location.href = e.target.value;
    }
  }

  const onKeyBoardMouseUp = () => {
    setKeyStr([]);
  }

  const onKeyBoardMouseDown = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, item: KeyCodeData) => {
    if (item.keycode > -1) {
      setKeyStr([]);
    }
  }
  // let DocumentStrSource = DocumentStr;
  // if (DocumentStrSource) DocumentStrSource = DocumentStr.replace(/([\s\S]*)<!--dividing-->/, '');

  return (
    <div>
      <select className={styles.version} onChange={(e) => openVersionWebsite(e)}>
        <option value="https://jaywcjlove.github.io/hotkeys">
          v
            {pkg.version}
        </option>
        <option value="https://unpkg.com/hotkeys-js@3.4.3/doc/index.html">v3.4.3</option>
        <option value="https://unpkg.com/hotkeys-js@3.4.2/doc/index.html">v3.4.2</option>
        <option value="https://unpkg.com/hotkeys-js@2.0.10/doc/index.html">v2.0.10</option>
      </select>
      {
        keyStr.length > -1 && (
          <div className={styles.keyCodeInfo}>
            {keyStr.map((item) => <span key={`${item}`}>{item}</span>)}
          </div>
        )
      }
      <GithubCorner href="https://github.com/jaywcjlove/hotkeys" target="__blank" />
      <div className={styles.header}>
        <div className={styles.title}>HotKeys.js</div>
        <div className={styles.github}>
          <a href="https://www.npmjs.com/package/hotkeys-js">
            <button type="button">On NPM</button>
          </a>
          <a href="https://github.com/jaywcjlove/hotkeys/">
            <button type="button">Fork on Github</button>
          </a>
          <a href="https://github.com/jaywcjlove/hotkeys/">
            <button type="button">Doc on Github</button>
          </a>
          <a href="https://jaywcjlove.gitee.io/hotkeys/">
            <button type="button">Doc on Gitee</button>
          </a>
        </div>
        <div className={styles.info}>A robust Javascript library for capturing keyboard input and key combinations entered. It has no dependencies. Try to press your keyboard, The following button will highlight.</div>
      </div>
      <KeyBoard
        style={{ top: -40 }}
        onMouseDown={onKeyBoardMouseDown}
        onMouseUp={onKeyBoardMouseUp}
        keyCode={keyCode}
      />
      {/* <MarkdownPreview style={{ maxWidth: 995, margin: '0 auto' }} source={DocumentStrSource} /> */}
      <Footer name="Kenny Wong" href="http://jaywcjlove.github.io" year="2015-present">
        <Github user="jaywcjlove" repo="hotkeys">
          <Github.Social href="https://github.com/jaywcjlove/hotkeys" type="forks" />
          <Github.Social href="https://github.com/jaywcjlove/hotkeys" type="stars" />
          <Github.Social href="https://github.com/jaywcjlove/hotkeys" type="watchers" />
          <Github.Social href="https://github.com/jaywcjlove/hotkeys" type="followers" />
        </Github>
      </Footer>
    </div >
  )
};

export default App;
