# EST-16 React

EST-16 React 수업 실습 저장소입니다. 빌드 도구 없이 브라우저의 ES Module과 [esm.sh](https://esm.sh) CDN으로 React 19를 불러와, React의 동작 원리부터 단계적으로 익힙니다.

## 구성

| 폴더 | 내용 |
| --- | --- |
| [`00-basic`](./00-basic) | 실제 DOM과 가상 DOM 비교, `createElement` / `createRoot`를 직접 구현해보는 실습 |
| [`01-getting-started-react`](./01-getting-started-react) | React 19의 `React.createElement`와 `ReactDOM.createRoot`로 UI(행성 리스트) 렌더링, `Proxy` 반응성 데이터로 재렌더링 |
| [`02-component-with-props`](./02-component-with-props) | 클래스 컴포넌트와 함수 컴포넌트, `props`로 데이터를 전달해 행성 리스트·아바타 목록 구성 |

### 00-basic

- `src/VartualvsActual.js` — Web API로 만든 실제 DOM과 가상 요소 객체를 비교
- `src/lib/virtual/` — React API를 흉내 낸 `createElement`, `isValidElement`, `Component`
- `src/lib/virtual-dom/` — 가상 요소를 실제 DOM에 렌더링하는 `createRoot`
- `src/main.js` — React(CDN)로 나라별 인사말을 무작위로 렌더링

### 01-getting-started-react

- `src/1.rendering-react-app.js` — `React.createElement`로 중첩 요소(`ul > li > img, span, button`)를 만들고 배열 `map`으로 리스트 렌더링
- `src/main.js` — `Proxy`로 만든 반응성 데이터의 `set`에서 `render()`를 다시 호출해 리스트 갱신, `root.unmount()`로 언마운트
- `src/styles/` — 테마, 유틸리티, 실습용 CSS

### 02-component-with-props

- `src/components/planet/` — 행성 리스트 컴포넌트 `PlanetList`, `PlanetItem` (클래스 컴포넌트 `React.Component` / `_` 접미사는 함수 컴포넌트 버전)
- `src/components/avatar/Avatar.js` — `name`, `status`, `size` props를 받아 상태(`online` / `offline` / `away` / `disturb`)별 아이콘과 `aria-label`을 렌더링하는 함수 컴포넌트
- `src/pages/` — 컴포넌트를 조합한 페이지 (`PlanetPage` 클래스, `PlanetPage_` 함수, `AvatarPage`)
- `src/data.js` — 행성 리스트 데이터
- `src/main.js` — `createElement`(`h`)로 페이지 컴포넌트를 렌더링
- `src/styles/` — 테마, 기본, 아바타, 실습용 CSS

## 실행 방법

Node.js가 필요합니다. 각 폴더에서 따로 실행합니다.

```bash
cd 00-basic            # 또는 01-getting-started-react, 02-component-with-props
npm install
npm run dev
```

브라우저에서 http://localhost:3000 을 열면 됩니다. (`live-server`가 파일 변경 시 자동 새로고침)

## 기술

- React 19.1 / ReactDOM 19.1 (esm.sh CDN, ES Module)
- live-server (개발 서버)
- ESLint (`00-basic`)

## License

MIT
