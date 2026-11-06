# EST-16 React

EST-16 React 수업 실습 저장소입니다. 빌드 도구 없이 브라우저의 ES Module과 [esm.sh](https://esm.sh) CDN으로 React 19를 불러와, React의 동작 원리부터 단계적으로 익힙니다.

## 구성

| 폴더 | 내용 |
| --- | --- |
| [`00-basic`](./00-basic) | 실제 DOM과 가상 DOM 비교, `createElement` / `createRoot`를 직접 구현해보는 실습 |
| [`01-getting-started-react`](./01-getting-started-react) | React 19의 `React.createElement`와 `ReactDOM.createRoot`로 UI(행성 리스트) 렌더링 |

### 00-basic

- `src/VartualvsActual.js` — Web API로 만든 실제 DOM과 가상 요소 객체를 비교
- `src/lib/virtual/` — React API를 흉내 낸 `createElement`, `isValidElement`, `Component`
- `src/lib/virtual-dom/` — 가상 요소를 실제 DOM에 렌더링하는 `createRoot`
- `src/main.js` — React(CDN)로 나라별 인사말을 무작위로 렌더링

### 01-getting-started-react

- `src/main.js` — `React.createElement`로 중첩 요소(`ul > li > img, span, button`)를 만들어 렌더링
- `src/styles/` — 테마, 유틸리티, 실습용 CSS

## 실행 방법

Node.js가 필요합니다. 각 폴더에서 따로 실행합니다.

```bash
cd 00-basic            # 또는 01-getting-started-react
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
