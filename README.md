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
| [`07-responding-to-events`](./07-responding-to-events) | 이벤트 핸들러 정의와 JSX prop 전달, `preventDefault`, 이벤트 객체 타입, 이벤트 핸들러를 props로 전달, 컴포넌트 네임스페이스 패턴, `useState`로 상태 기억·업데이터 함수, 이벤트 전파와 `stopPropagation`, 이벤트 핸들러의 부수 효과 |
| [`08-declarative-programming`](./08-declarative-programming) | 명령형과 선언형 프로그래밍 비교 (DOM 직접 조작 vs 상태 → `render`), `Proxy` 기반 `createState`, React `useState`로 상태(`typing` / `submitting` / `success`)에 따라 그리는 퀴즈 폼 |
| [`09-react-component-states`](./09-react-component-states) | 컴포넌트 상태와 파생 상태, 상태 끌어올리기와 props로 상태·이벤트 핸들러 전달, 제어 컴포넌트, `debounce`를 적용한 즉시 검색 (사용자 목록 검색), 상품 목록 컴포넌트 분리·상태 연결 (검색·재고 필터·표시 개수), 상태 기반 라우팅과 객체 상태 폼으로 만든 노트 앱 (목록·상세·작성·수정·삭제) |
| [`10-snapshot`](./10-snapshot) | 스냅샷으로서의 State(State as a Snapshot), `useState` 지연 초기화, 객체 상태 불변 업데이트, `memo` / `useCallback` / `useMemo`로 리렌더링 최적화, 제어·비제어 입력 비교 |
| [`11-fetching-data`](./11-fetching-data) | `useEffect`로 부수 효과·정리(cleanup) 함수, `fetch` + `AbortController`로 데이터 가져오기 (로딩·에러 상태), `useRef`로 DOM 참조·`ref` prop 전달, `useEffect` + `useRef`로 채팅 스크롤, `useLayoutEffect`로 레이아웃 측정, 컴포넌트 라이프사이클 시각화, 커스텀 훅(`useUsers`)으로 데이터 가져오기 로직 분리, Context API로 prop drilling 없이 사용자·테마 공유 (`use`, Provider 컴포넌트, 커스텀 훅) |
| [`12-react-with-supabase`](./12-react-with-supabase) | Supabase 클라이언트 연결(`createClient`, 환경 변수, `Database` 타입), Context 기반 직접 구현 라우터(`RouterProvider` / `NavLink` / `history.pushState`), GSAP(`useGSAP`, `gsap.context`)으로 진입 애니메이션을 적용한 쇼핑몰 레이아웃, 커스텀 훅(`useProducts`)으로 상품 조회 분리, Supabase Auth 회원가입(`signUp` + Storage 아바타 업로드)·로그인(`signInWithPassword`)·로그아웃(`signOut`), `AuthProvider` / `useAuth`로 로그인 상태 공유, `onAuthStateChange`로 인증 상태 구독, Storage 아바타 조회(`list` / `getPublicUrl`), 동적 라우팅(`/Product/:id`)으로 상품 상세 조회(`eq` / `single`)·수정(`update`), 상품 등록(Storage 이미지 업로드 + `insert`), SweetAlert2 알림 |

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
- `src/learn/View.tsx` — 컴포넌트 네임스페이스 패턴(`View.HTMLCode`, `View.RespondingToEvents`), `onSubmit`(`React.FormEvent<HTMLFormElement>`)에서 `preventDefault`, `form.elements.namedItem`으로 입력값을 읽어 `setText`로 상태 갱신, `useState` 상태와 일반 변수 비교
- `src/learn/responding-to-events/EventHandleProp.tsx` — `onPrintMessage` 이벤트 핸들러 prop을 받아 `<summary>`의 `onMouseEnter` / `onMouseLeave`에 연결, 상위 컴포넌트의 `setText`(`Dispatch<SetStateAction<string>>`)를 prop으로 받아 하위에서 상태 변경
- `src/learn/responding-to-events/UseStateCounter.tsx` — 지역 변수와 `useState` 상태 변수 비교(지역 변수는 리렌더링되지 않고 초기화됨), `setCount(count + 1)` 반복과 업데이터 함수 `setCount((prev) => prev + 1)` 비교(batching), 증가·감소·초기화 카운터
- `src/learn/responding-to-events/EventPropagation.tsx` — 중첩된 `LayoutBox`로 이벤트 전파(버블링) 확인, 화살표 함수로 핸들러에 인수 전달, `e.stopPropagation()`으로 전파 차단
- `src/learn/responding-to-events/LayoutBox.tsx` — `onClick`, `style`(CSS 사용자 정의 속성 `--color`), `children`과 나머지 props(`...restProps`)를 받는 박스 컴포넌트
- `src/learn/responding-to-events/EventWithSideEffects.tsx` — 렌더링과 달리 순수할 필요가 없는 이벤트 핸들러에서 부수 효과 처리, `setInterval` / `clearInterval`로 `<output>` 카운트 다운
- `src/main.tsx` — `StrictMode`로 학습 페이지 렌더링
- `src/components/Avatar.tsx`, `src/pages/AvatarList.tsx`, `src/data/data.ts` — 06에서 이어지는 아바타 컴포넌트·목록 페이지·데이터
- `vite.config.ts` — 개발 서버 포트 `3000`, `@` 경로 별칭

### 08-declarative-programming

- `src/programming/imperative-step1.ts` — 체크박스 `change` 이벤트에서 버튼의 `disabled`·텍스트를 직접 바꾸는 명령형 코드
- `src/programming/imperative.ts` — `insertAdjacentHTML`로 퀴즈 폼을 삽입하고 `show` / `hide` / `enable` / `disable` 헬퍼로 로딩·에러·성공 화면을 하나씩 조작하는 명령형 퀴즈 폼 (`async` / `await`, `try` / `catch` / `finally`)
- `src/programming/declarative.ts` — 상태 데이터(`checked`)만 보고 UI를 그리는 `render` 함수, `createState`의 `setState`로 상태를 바꾸면 다시 렌더링 (`declare global`로 `globalThis.update` 타입 선언)
- `src/programming/declarative.tsx` — `useState`로 `answer` / `error` / `status`(`typing` / `submitting` / `success`)를 선언하고 이벤트 핸들러는 상태만 변경, 상태에 따라 `disabled`·로딩·에러 메시지·성공 화면을 선언적으로 렌더링하는 React 퀴즈 폼
- `src/lib/createState.ts` — `Proxy`로 직접 수정을 막고 `action(key, value)`로만 값을 바꿔 콜백(`render`)을 호출하는 상태 관리 미니 툴 (`createState.js`는 JSDoc 타입 버전)
- `src/main.tsx` — `StrictMode`로 React 퀴즈 폼을 `#root`에 렌더링
- `index.html` — 명령형·선언형 체크박스 예제 마크업, `main.tsx`·`imperative.ts`·`declarative.ts`를 모듈로 로드
- `vite.config.ts` — 개발 서버 포트 `3000`, `@` 경로 별칭

### 09-react-component-states

- `src/pages/users/UserPage.tsx` — `useState`로 `searchTerm` / `users` / `isInstantSearch` 상태 선언, 상태 업데이트 핸들러를 하위 컴포넌트에 전달(상태 끌어올리기), `filter` + `some`으로 이름·이메일·도시를 대소문자 구분 없이 검색한 파생 상태 `searchedUserList`
- `src/pages/users/components/UserSearchBox.tsx` — `onSubmit`에서 `preventDefault` 후 입력값 검증(`trim`, 빈 값 `alert`)과 `onSearch` 호출, 목록 초기화(`onReset`), 즉시 검색 모드일 때만 `debounce`(300ms)를 적용한 `onChange` 연결, `useId`로 `label`·`input` 연결
- `src/pages/users/components/InstantSearch.tsx` — `checked`를 상위 상태(`isInstantSearch`)로 제어하는 즉시 검색 토글 체크박스 (제어 컴포넌트)
- `src/pages/users/components/UserList.tsx`, `UserItem.tsx` — `map`과 `key`로 사용자 목록 렌더링, CSS 사용자 정의 속성(`--i`, `--hue`)으로 항목별 애니메이션 순서·색상 지정
- `src/pages/users/components/UserListCount.tsx` — 검색 결과 수 / 전체 수 출력, 비율(`--ratio`)로 진행 막대 표시 (전체 수 `0`일 때 나눗셈 방지)
- `src/pages/users/types/user.ts` — `UserType` 타입
- `src/pages/products/ProductPage.tsx` — `useState`로 `products` / `searchTerm` / `onlyInStock` 상태 선언, 검색어·재고 조건으로 거른 파생 상태 `filteredProducts`, 상태와 핸들러를 하위 컴포넌트에 props로 전달
- `src/pages/products/components/ProductSearch.tsx`, `StockFilter.tsx` — `value` / `checked`를 상위 상태로 제어하는 검색 입력·재고 필터 체크박스 (제어 컴포넌트, `useId`로 `label` 연결)
- `src/pages/products/components/ProductList.tsx`, `ProductItem.tsx` — `map`과 `key`로 상품 목록 렌더링, `inStock`에 따라 `sold-out` 클래스·배지 텍스트 결정, `toLocaleString()`으로 가격 표시
- `src/pages/products/components/ProductCount.tsx` — 표시 개수 / 전체 개수 출력
- `src/pages/products/types/product.ts`, `data.ts` — `ProductType` 타입과 타입을 지정한 상품 데이터 (`name`, `price`, `inStock`)
- `src/NoteApp/App.tsx` — `useState`로 노트 목록(지연 초기화 `useState(() => getNoteList())`)과 `routeInfo`(`route` / `noteId`) 상태 관리, `switch`로 라우트별 페이지 렌더링하는 상태 기반 라우팅, 노트 추가(전개 연산자)·수정(`map`)·삭제(`filter`) 핸들러로 불변 업데이트, 파생 상태 `newNoteId`(`Math.max`로 최대 id + 1)·`selectedNote`(`find`), 컴포넌트 구조 다이어그램 주석
- `src/NoteApp/routes.ts` — `as const`로 선언한 라우트 상수 (`list` / `detail` / `create` / `edit`)
- `src/NoteApp/api/getNote.ts`, `getUser.ts` — `notes.json`에 작성자 정보(`expand.user`)를 합친 노트 목록·단일 노트 조회, 사용자 목록·단일 사용자 조회 (`typeof` 기반 `Note` 타입)
- `src/NoteApp/pages/NoteListPage.tsx`, `NoteDetailPage.tsx`, `NoteCreatePage.tsx` — 노트 목록·상세(상위 상태의 `note`를 받아 `dangerouslySetInnerHTML`로 HTML 본문 출력, 노트가 없으면 에러 표시, 수정 링크로 편집 페이지 이동)·작성 페이지, `onChangeRoute`로 페이지 전환
- `src/NoteApp/pages/NoteEditPage.tsx` — 선택한 노트와 `onEdit` / `onDelete` 핸들러를 `NoteForm`(`mode='edit'`)에 전달하는 노트 편집 페이지
- `src/NoteApp/components/NoteForm.tsx` — 여러 입력(`input` / `textarea` / `select`)을 객체 상태 하나로 관리, 계산된 속성명(`[name]: value`)으로 불변 업데이트, `onReset`에서 상태 초기화, `mode`(`create` / `edit`)에 따라 초기값(지연 초기화, `convertHTMLToText`)·`onSubmit` 핸들러·작성자 선택 표시·버튼(추가·초기화 / 수정·삭제) 분기, 제출 시 `convertTextToHTMLString`으로 본문 변환
- `src/NoteApp/components/NoteList.tsx`, `BackLink.tsx`, `PrintError.tsx` — 핸들러를 반환하는 함수(`handleClick(id)`)로 상세 이동하는 노트 목록, `preventDefault` 후 목록으로 돌아가는 링크, `role="alert"` 에러 메시지
- `src/utils/debounce.ts` — 마지막 호출 후 일정 시간 뒤에 실행하는 `debounce` (제네릭 `Parameters<T>`·`ReturnType` 타입 예시 포함)
- `src/utils/throttle.ts` — 일정 시간 동안 한 번만 실행하는 `throttle`
- `src/utils/convertSlug.ts`, `convertTextToHTMLString.ts` — 공백을 `-`로 바꾸는 슬러그 변환, 텍스트 ↔ HTML 문자열 변환 (`escapeHTML`로 XSS 방지)
- `src/data/users.json`, `notes.json` — 사용자·노트 데이터
- `src/Playground.tsx`, `src/main.tsx` — `StrictMode`로 `#react-app`에 실습 페이지(`NoteApp` / `ProductPage` / `UserPage`) 렌더링
- `vite.config.ts` — 개발 서버 포트 `3000`, `@` 경로 별칭

### 10-snapshot

- `src/components/Counter.tsx` — 렌더링 시점의 State를 찍어 두는 스냅샷 개념(`setNumber(number + 5)` 후에도 현재 렌더링의 `number`는 그대로), 업데이터 함수(`n => n + 5`) 반복 호출과 비교, `useState(slowInit)` 지연 초기화로 초기값 계산을 첫 렌더링에만 실행
- `src/components/Form.tsx` — 초기 상태 객체를 계산하는 함수로 지연 초기화, 전개 연산자(`...form`)로 객체 상태 불변 업데이트한 제어 입력
- `src/components/memo-1/Parent.tsx`, `Child.tsx` — 부모 리렌더링 시 자식도 리렌더링되는 동작 확인, `memo`로 감싼 자식에 `useCallback(fn, [])`으로 기억한 함수를 props로 전달해 불필요한 리렌더링 방지 (의존성 배열 비교 설명)
- `src/components/memo-2/Parent.tsx`, `Child.tsx` — `memo` 자식에 배열 props 전달 시 참조 유지 방법 비교 (`useMemo`로 배열 기억 vs 컴포넌트 밖 상수 `STUDENTS`), `memo`(컴포넌트)·`useCallback`(함수)·`useMemo`(배열·객체·계산값) 용도 정리
- `src/components/memo-3/App.tsx`, `List.tsx`, `ListItem.tsx` — `useMemo`로 `count`에 의존하는 배열 기억, `useCallback`으로 클릭 핸들러 기억, `memo`로 감싼 목록·항목 컴포넌트의 리렌더링 확인
- `src/components/controlled/Form.tsx` — `value` + `onChange`로 React가 제어하는 제어 입력과 `defaultValue`로 첫 값만 반영하는 비제어 입력 비교 (폼 리셋·검증·자동완성엔 `value` 권장)
- `src/Playground.tsx`, `src/main.tsx` — `StrictMode`로 `#react-app`에 실습 컴포넌트(`Counter` / `Form` / `Parent` / `App` / `controlled/Form`) 렌더링
- `vite.config.ts` — 개발 서버 포트 `3000`, `@` 경로 별칭

### 11-fetching-data

- `src/components/effect/Effect-step01.tsx` — `useEffect` 의존성 배열별 실행 시점(생략 시 매 렌더링, `[]`는 마운트 후 한 번, `[count]`는 값 변경 시), 정리 함수에서 `clearInterval`로 `setInterval` 청소
- `src/components/effect/Effect.tsx` — 커스텀 훅 `useUsers`가 반환한 `users` / `loading` / `error`로 로딩·에러·목록 렌더링 (컴포넌트는 "무엇을 보여줄지", 훅은 "어떻게 가져올지"로 관심사 분리)
- `src/hook/useUsers.ts` — `useEffect`에서 `fetch`로 JSONPlaceholder 사용자 목록 가져오기, `res.ok` 검사, `AbortController`로 언마운트 시 요청 취소(`AbortError` 무시)하는 데이터 가져오기 커스텀 훅
- `src/components/context/App.tsx`, `Parent.tsx`, `Child.tsx`, `GrandChild.tsx` — `<ThemeProvider>`와 `<UserContext value>`로 감싸 props 전달 없이 손자 컴포넌트에서 사용자 이름·테마 사용, 버튼으로 사용자 변경·테마 전환 (`useContext`(React 18+) / `use`(React 19+) 비교)
- `src/components/context/UserContext.tsx` — `UserContextType` 인터페이스와 `createContext<UserContextType | null>(null)`
- `src/components/context/ThemeContext.tsx` — `light` / `dark` 상태와 `toggleTheme`을 제공하는 `ThemeProvider` 컴포넌트, Provider 밖에서 사용 시 에러를 던지는 `useTheme` 훅
- `src/components/context/themes.ts` — `lightTheme` / `darkTheme` 색상·간격 객체와 `typeof`로 만든 `ThemeType`
- `src/hook/useUserContext.tsx` — `use(UserContext)`로 컨텍스트를 읽고 `null`이면 에러를 던지는 커스텀 훅
- `src/components/ref/Parent.tsx`, `Child.tsx` — `useRef`로 DOM 요소를 선언형으로 참조해 `focus()`, React 19의 `ref` prop 전달과 React 18의 `forwardRef` 비교
- `src/components/effectAndRef/Parent.tsx`, `Child.tsx` — 메시지 추가 시 `useEffect`에서 `ref`로 잡은 스크롤 박스를 `scrollTo({ top: scrollHeight, behavior: 'smooth' })`로 맨 아래 이동하는 채팅방 (`scrollIntoView` 방식 비교, `memo` 자식)
- `src/components/layoutEffect/Parent.tsx` — 렌더링 → DOM 업데이트 → `useLayoutEffect` → 화면 그리기 → `useEffect` 실행 순서 확인, `getBoundingClientRect()`로 박스 높이 측정 (툴팁 위치·크기 측정·스크롤 조정 등 용도)
- `src/react-lifecycle.html` — 라이프사이클 지도, 단계별 실행, 부모·자식 실행 순서를 보여주는 React 컴포넌트 라이프사이클 시각화 페이지
- `src/@types/global.d.ts` — `declare global`로 선언한 `User` 타입과 `Address`·`Geo`·`Company` 인터페이스
- `src/main.tsx` — `StrictMode`로 `#react-app`에 실습 컴포넌트(`Effect` / `ref` / `effectAndRef` / `layoutEffect` / `context/App`) 렌더링
- `vite.config.ts` — 개발 서버 포트 `3000`, `@` 경로 별칭

### 12-react-with-supabase

- `src/supabase/supabase.tsx` — `import.meta.env`의 `VITE_SUPABASE_URL` / `VITE_SUPABASE_PUBLISHABLE_KEY`로 `createClient<Database>` Supabase 클라이언트 생성
- `src/supabase/database.types.ts` — Supabase CLI로 생성한 `Database` 타입 (`products` 테이블 `Row` / `Insert` / `Update`)
- `src/vite-env.d.ts` — `ImportMetaEnv`로 Supabase 환경 변수 타입 선언
- `src/router/RouterProvider/index.tsx` — `RouterContext`로 현재 경로·`setHistoryRoute`·`params` 공유, `:param` 패턴을 정규식으로 매칭, `popstate` 이벤트 구독(`useLayoutEffect`), `useMemo`로 컨텍스트 값 기억, `useRouter` / `useParams` 훅
- `src/router/RouterProvider/NotFound.tsx` — 일치하는 라우트가 없을 때 보여주는 404 페이지 (CSS Modules)
- `src/router/router.tsx` — `title` / `path` / `element`로 구성한 라우트 목록 (메인·상품등록·상품상세·상품목록·고객지원·로그인·회원가입), `/Product/:id` 동적 라우팅
- `src/components/NavLink.tsx` — `preventDefault` 후 `setHistoryRoute`와 `history.pushState`로 새로고침 없이 이동, 현재 경로면 활성 클래스 적용
- `src/components/auth/AuthProvider.tsx` — 마운트 시 `supabase.auth.getUser()`로 로그인 사용자(`id` / `email` / `user_metadata.nickname`, 없으면 이메일 앞부분) 상태 설정, `onAuthStateChange`로 `SIGNED_IN` / `SIGNED_OUT` 이벤트에 따라 사용자 갱신(정리 함수에서 `unsubscribe`), `signOut()` 후 사용자 비우는 `logout`, `user` / `isAuth` / `logout`을 Context로 제공, Provider 밖에서 사용 시 에러를 던지는 `useAuth` 훅
- `src/api/getAvatarUrl.ts` — `supabase.storage.from('avatars').list`(`search: userId`)로 사용자 id로 시작하는 파일을 찾아 `getPublicUrl`로 공개 URL 반환
- `src/components/Layout/Header.tsx` — `useAuth`로 로그인 시 닉네임 인사말 표시, `filter`로 로그인·회원가입 메뉴 숨김·상품상세·상품등록 메뉴 항상 숨김, `useEffect`에서 `getAvatarUrl`로 아바타 이미지 표시(`ignore` 플래그, 없으면 기본 이미지), `confirm` 후 `logout`을 호출하는 로그아웃 링크
- `src/components/Layout/Footer.tsx` — 저작권 문구 푸터 (CSS Modules)
- `src/hook/useProducts.ts` — `Database` 타입에서 `Pick`으로 필요한 컬럼만 고른 `ProductItem` 타입, `useEffect`에서 `select('id, name, price, sale, image_url, description')`로 상품 조회, `ignore` 플래그로 늦게 도착한 응답 무시, `products` / `loading` 반환하는 커스텀 훅 (`Tables` / `TablesInsert` / `TablesUpdate` 타입 주석)
- `src/pages/Home.tsx` — `useGSAP`(`scope`: `ref`)으로 제목·문구를 `stagger` 페이드 업하는 메인 페이지
- `src/pages/Product.tsx` — `useProducts`로 상품 조회 후 로딩 표시, `useGSAP`(`dependencies`, `scope`, `revertOnUpdate`)으로 상품 목록 진입 애니메이션, 할인율(`sale`)로 실제 판매가 계산·`toLocaleString()` 표시, 비로그인 시 안내 화면, 상품 클릭 시 `history.pushState` + `setHistoryRoute`로 상세(`/Product/:id`) 이동, 상품 등록 버튼
- `src/pages/ProductDetail.tsx` — `useParams`로 받은 `id`로 `select('*').eq('id', id).single()` 상품 단건 조회(`Tables<'products'>` 타입, `ignore` 플래그, 로딩·에러 처리), 상품명 입력 후 `update({ name }).eq('id', id).select()`로 수정(빈 결과는 권한 없음으로 처리), 할인가 계산, 수정·뒤로가기 버튼 (CSS Modules)
- `src/pages/CreateProduct.tsx` — 제어 컴포넌트로 상품명·설명·가격·할인율(정규식으로 숫자만 허용)·이미지 파일 입력, 로그인·필수값 검사, `storage.from('product-images').upload`(`${user.id}_${Date.now()}` 파일명, `upsert`) → `getPublicUrl` → `from('products').insert`로 상품 등록 후 상품목록 이동 (CSS Modules)
- `src/pages/Register.tsx` — 제어 컴포넌트로 이메일·비밀번호·비밀번호 확인·닉네임 입력, 비밀번호 일치 검사, `supabase.auth.signUp`(`options.data`에 `nickname`), `FileReader.readAsDataURL`로 아바타 미리보기, `supabase.storage.from('avatars').upload`(`upsert`)로 프로필 이미지 업로드, `Swal.fire` 완료 알림 후 로그인 페이지 이동
- `src/pages/Login.tsx` — 제어 컴포넌트로 이메일·비밀번호 입력, `supabase.auth.signInWithPassword`로 로그인·에러 메시지 표시, `Swal.fire` 성공 알림 후 `history.pushState` + `setHistoryRoute`로 메인 이동, 회원가입 페이지 링크
- `src/pages/Contact.tsx` — 고객지원 준비 중 페이지
- `src/App.tsx`, `src/main.tsx` — `AuthProvider`로 감싼 `RouterProvider`(`navigation`에 `Header`)와 `Footer`로 앱 레이아웃 구성, `StrictMode`로 `#react-app`에 렌더링
- `vite.config.ts` — 개발 서버 포트 `3000`, `@` 경로 별칭

## 실행 방법

Node.js가 필요합니다. 각 폴더에서 따로 실행합니다.

```bash
cd 00-basic            # 또는 01-getting-started-react, 02-component-with-props, 03-react-with-jsx-transform
npm install
npm run dev
```

브라우저에서 http://localhost:3000 을 열면 됩니다. (`live-server`가 파일 변경 시 자동 새로고침)

`04-vite-template/vite-custom-template`, `05-html-vs-jsx-markup`, `06-component-purity`, `07-responding-to-events`, `08-declarative-programming`, `09-react-component-states`, `10-snapshot`, `11-fetching-data`, `12-react-with-supabase`는 Vite 프로젝트입니다.

```bash
cd 05-html-vs-jsx-markup   # 또는 04-vite-template/vite-custom-template, 06-component-purity, 07-responding-to-events, 08-declarative-programming, 09-react-component-states, 10-snapshot, 11-fetching-data, 12-react-with-supabase
npm install
npm run dev                # Vite 개발 서버
npm run build              # 타입 검사(tsc -b) 후 빌드
npm run lint               # ESLint
```

`05`~`12`는 http://localhost:3000, `04-vite-template`은 Vite 기본 포트 http://localhost:5173 에서 열립니다.

`12-react-with-supabase`는 폴더 안 `.env`에 `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`를 설정해야 합니다. (`.env`는 커밋하지 않음)

## 기술

- React 19.1 / ReactDOM 19.1 (esm.sh CDN, ES Module) — `00`~`03`
- React 19.3 / ReactDOM 19.3 (npm) — `04`, `05`
- React 19.1 / ReactDOM 19.1 (npm) — `06`~`12`
- Vite 8 + `@vitejs/plugin-react` — `04`, `05`
- Vite 7 + `@vitejs/plugin-react` 4 — `06`~`12`
- TypeScript (`03`은 `tsc`로 JSX 컴파일, `04`~`12`는 `tsc -b` 타입 검사)
- `@supabase/supabase-js` 2 (Supabase 클라이언트, `12`)
- GSAP 3 + `@gsap/react` (애니메이션, `12`)
- SweetAlert2 11 (알림 모달, `12`)
- `@babel/standalone` (브라우저 JSX 변환, `03`)
- live-server (개발 서버, `00`~`03`)
- ESLint (`00-basic`, `04`~`12`)

## License

MIT
