# EST-16 React

EST-16 React 수업 실습 저장소입니다. 빌드 도구 없이 브라우저의 ES Module과 [esm.sh](https://esm.sh) CDN으로 React 19를 불러와, React의 동작 원리부터 단계적으로 익힙니다.

## 구성

| 폴더 | 내용 |
| --- | --- |
| [`00-basic`](./00-basic) | 실제 DOM과 가상 DOM 비교, `createElement` / `createRoot`를 직접 구현해보는 실습 |
| [`01-getting-started-react`](./01-getting-started-react) | React 19의 `React.createElement`와 `ReactDOM.createRoot`로 UI(행성 리스트) 렌더링, `Proxy` 반응성 데이터로 재렌더링 |
| [`02-component-with-props`](./02-component-with-props) | 클래스 컴포넌트와 함수 컴포넌트, `props`로 데이터를 전달해 행성 리스트·아바타 목록 구성 |
| [`03-react-with-jsx-transform`](./03-react-with-jsx-transform) | `@babel/standalone`으로 브라우저에서 JSX 변환, TypeScript(`"jsx": "react-jsx"`)로 JSX를 `react/jsx-runtime` 호출로 컴파일 |
| [`04-vite-template`](./04-vite-template) | Vite + React + TypeScript 커스텀 템플릿 구성 (`@` 경로 별칭, 환경 변수 타입, props 타입을 지정한 `Avatar` 컴포넌트) |
| [`05-html-vs-jsx-markup`](./05-html-vs-jsx-markup) | HTML과 JSX 마크업 비교, Fragment, 텍스트·속성·`style` 데이터 바인딩 실습 (프로필 카드), JSX 속성 규칙, 조건부 렌더링·조건부 표시, 리스트 렌더링(`key`) 실습 (주문 카드·플레이리스트 카드), JSX가 렌더링하는 값·렌더링하지 않는 값 |
| [`06-component-purity`](./06-component-purity) | 순수 함수와 부수 효과(side-effect) 비교, `StrictMode`의 이중 실행으로 컴포넌트 순수성 확인 |
| [`07-responding-to-events`](./07-responding-to-events) | 이벤트 핸들러 정의와 JSX prop 전달, `preventDefault`, 이벤트 객체 타입, 이벤트 핸들러를 props로 전달, 컴포넌트 네임스페이스 패턴 |

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

### 03-react-with-jsx-transform

- `src/main.babel.js` — `<script type="text/babel">`과 `@babel/standalone`(CDN)으로 브라우저에서 JSX를 변환해 아바타·행성 컴포넌트 렌더링
- `src/main.tsx` — JSX로 작성한 `Avatar`, `AvatarListPage` 컴포넌트 (TypeScript 컴파일 원본)
- `src/main.js` — `tsc`로 `main.tsx`를 컴파일한 결과 (`_jsx` / `_jsxs` 자동 JSX 런타임 호출)
- `tsconfig.json` — `"jsx": "react-jsx"`, `strict` 등 컴파일 옵션
- `index.html` — `importmap`으로 `react/jsx-runtime`을 esm.sh에 매핑하고 `src/main.js`를 모듈로 로드
- `server.js` — Node.js에서 `live-server` API로 개발 서버 실행 (`public/` 마운트)
- `src/components/`, `src/pages/` — 02에서 이어지는 행성·아바타 컴포넌트와 페이지

### 04-vite-template

- `vite-custom-template/vite.config.ts` — `@vitejs/plugin-react` 설정, `@` → `src` 경로 별칭
- `vite-custom-template/tsconfig.json` — `moduleResolution: "bundler"`, `paths` 별칭, `vite/client` 타입
- `vite-custom-template/src/vite-env.d.ts` — `ImportMetaEnv`로 `import.meta.env.VITE_USER_NAME` 타입 선언
- `vite-custom-template/src/components/Avatar.tsx` — `AvatarProps` 타입(`status` 유니온)을 지정한 아바타 컴포넌트
- `vite-custom-template/src/pages/AvatarPage.tsx` — `Avatar`를 조합한 아바타 목록 페이지
- `vite-custom-template/src/main.tsx` — `createRoot`로 `#root`에 페이지 렌더링, `root` 요소가 없으면 경고 출력

### 05-html-vs-jsx-markup

- `src/learn/index.tsx` — `<abbr>`로 HTML·JSX 약어를 표시하는 `Headline`과 학습 페이지 구성
- `src/learn/JSX_Markup.tsx` — 학습 데이터를 구조 분해해 데이터 바인딩·조건부 렌더링·조건부 표시·리스트 렌더링 컴포넌트를 설명 목록(`<dl>`)으로 구성
- `src/learn/DataBinding.tsx` — Fragment(`<>`)와 `{}`로 무작위 상태 메시지 바인딩
- `src/learn/JSXAttributes.tsx` — HTML과 JSX 속성 차이 (`htmlFor`, camelCase `tabIndex`·`maxLength`·`readOnly`, `aria-*`·`data-*` 예외, `CSSProperties` 타입 `style` 객체, self closing 태그, boolean 속성)
- `src/learn/ConditionalRendering.tsx` — `switch`로 이미지 타입별 이미지 결정, `&&`·삼항 연산자로 이미지·스피너 조건부 렌더링, `undefined` 출력 비교 (`PropsWithChildren`)
- `src/learn/ConditionalDisplay.tsx` — `hidden` 속성으로 `<picture>`(avif / webp / png) 표시 여부 제어, 조건부 렌더링과 조건부 표시 비교
- `src/learn/RenderList.tsx` — `map`과 `key`로 리스트 렌더링, `toReversed()` 역순 렌더링, `Object.entries`와 `<Fragment key>`로 객체를 설명 목록으로 렌더링
- `src/learn/RenderableValues.tsx` — JSX가 렌더링하는 값(문자열, 숫자 `0`·`NaN`, 배열)과 렌더링하지 않는 값(`null`, `undefined`, `true` / `false`, 빈 문자열), 객체는 `JSON.stringify`로 출력, `&&` 왼쪽이 `0`일 때 주의점과 삼항 연산자로 빈 목록 처리
- `src/data/learn.ts` — 상태 메시지, 이미지 타입, 라이브러리 정보 등 타입을 지정한 학습 데이터
- `src/practice/dataBinding/profileCard.tsx` — 구조 분해 할당, 텍스트·표현식·속성·`style` 객체·중첩 객체·배열 메서드 결과 바인딩, 불리언 출력 처리로 만든 프로필 카드
- `src/practice/dataBinding/data.ts` — `Profile` 인터페이스와 프로필·오늘의 한마디 데이터
- `src/practice/conditionalRendering/OrderCard.tsx` — `if` 조기 반환(취소 주문), 템플릿 리터럴 `className`, 삼항 연산자(회원 배지·버튼), `&&`(배송 중 스피너·요청사항), `couponCount > 0`으로 `0` 출력 방지, `satisfies Record`로 상태 라벨 매핑한 주문 카드
- `src/practice/conditionalRendering/OrderCard copy.tsx` — 주문 카드 실습 정답 예시
- `src/practice/conditionalRendering/data.ts` — `OrderStatus` 유니온, `Order` 인터페이스(선택적 `requestMessage?`)와 주문 데이터
- `src/practice/renderList/PlayListCard.tsx` — `for...of` + `push`로 태그 목록 생성, 렌더 함수(`renderSongItem`)와 `map`, `filter`로 좋아요한 곡 추출, `Object.entries` + `<Fragment key>`로 정보 설명 목록, `toReversed()` 역순 렌더링, 삼항 연산자로 빈 목록 처리한 플레이리스트 카드
- `src/practice/renderList/data.ts` — `Song`, `PlaylistInfo`, `Playlist` 인터페이스와 플레이리스트 데이터
- `src/practice/index.tsx` — 프로필 카드·주문 카드·플레이리스트 카드 실습 페이지 구성 (`playlists.map`으로 카드 렌더링)
- `src/utils/getRandom.ts` — 무작위 인덱스를 반환하는 유틸 함수
- `src/utils/isTrueOrFalse.ts` — 무작위 불리언을 반환하는 유틸 함수
- `vite.config.ts` — 개발 서버 포트 `3000`, `@` 경로 별칭

### 06-component-purity

- `src/learn/about-purity.ts` — 순수 함수(`truncateText`, `square`, `sum`: 동일 입력 → 동일 출력)와 외부 변수에 의존하는 비순수 함수(`multiply`) 비교, 부수 효과 예시(`console.log`, DOM 조작, 브라우저 API, 스토리지, 서버 요청)와 `fetch`로 유저 정보를 가져와 DOM에 출력하는 `fetchUserInfo`
- `src/components/Headline.tsx` — 컴포넌트 밖 변수 `count`를 렌더링 중 변경하는 비순수 컴포넌트 예시
- `src/main.tsx` — `StrictMode`로 컴포넌트를 두 번 실행해 순수성 확인, `#root`가 없으면 에러 발생
- `src/components/Avatar.tsx`, `src/pages/AvatarList.tsx` — `status`별 아이콘을 표시하는 아바타 컴포넌트와 목록 페이지
- `src/data/data.ts` — 아바타 데이터
- `index.html` — `src/learn/about-purity.ts`를 모듈로 로드
- `vite.config.ts` — 개발 서버 포트 `3000`, `@` 경로 별칭

### 07-responding-to-events

- `src/learn/index.tsx` — `NavContents`와 `View`의 하위 컴포넌트로 학습 페이지 구성
- `src/learn/NavContents.tsx` — 학습 주제 탐색 `<nav>`, 이벤트 핸들러(`React.MouseEvent<HTMLAnchorElement>`) 안에서 `preventDefault`와 DOM 조작 등 부수 효과 처리
- `src/learn/View.tsx` — 컴포넌트 네임스페이스 패턴(`View.HTMLCode`, `View.RespondingToEvents`), `onSubmit`(`React.FormEvent<HTMLFormElement>`)에서 `preventDefault`, `useState` 상태와 일반 변수 비교
- `src/learn/responding-to-events/EventHandleProp.tsx` — `onPrintMessage` 이벤트 핸들러 prop을 받아 `<summary>`의 `onMouseEnter` / `onMouseLeave`에 연결
- `src/main.tsx` — `StrictMode`로 학습 페이지 렌더링
- `src/components/Avatar.tsx`, `src/pages/AvatarList.tsx`, `src/data/data.ts` — 06에서 이어지는 아바타 컴포넌트·목록 페이지·데이터
- `vite.config.ts` — 개발 서버 포트 `3000`, `@` 경로 별칭

## 실행 방법

Node.js가 필요합니다. 각 폴더에서 따로 실행합니다.

```bash
cd 00-basic            # 또는 01-getting-started-react, 02-component-with-props, 03-react-with-jsx-transform
npm install
npm run dev
```

브라우저에서 http://localhost:3000 을 열면 됩니다. (`live-server`가 파일 변경 시 자동 새로고침)

`04-vite-template/vite-custom-template`, `05-html-vs-jsx-markup`, `06-component-purity`, `07-responding-to-events`는 Vite 프로젝트입니다.

```bash
cd 05-html-vs-jsx-markup   # 또는 04-vite-template/vite-custom-template, 06-component-purity, 07-responding-to-events
npm install
npm run dev                # Vite 개발 서버
npm run build              # 타입 검사(tsc -b) 후 빌드
npm run lint               # ESLint
```

`05`~`07`은 http://localhost:3000, `04-vite-template`은 Vite 기본 포트 http://localhost:5173 에서 열립니다.

## 기술

- React 19.1 / ReactDOM 19.1 (esm.sh CDN, ES Module) — `00`~`03`
- React 19.3 / ReactDOM 19.3 (npm) — `04`, `05`
- React 19.1 / ReactDOM 19.1 (npm) — `06`, `07`
- Vite 8 + `@vitejs/plugin-react` — `04`, `05`
- Vite 7 + `@vitejs/plugin-react` 4 — `06`, `07`
- TypeScript (`03`은 `tsc`로 JSX 컴파일, `04`~`07`은 `tsc -b` 타입 검사)
- `@babel/standalone` (브라우저 JSX 변환, `03`)
- live-server (개발 서버, `00`~`03`)
- ESLint (`00-basic`, `04`~`07`)

## License

MIT
