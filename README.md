#### 프로젝트
Create-react-app으로 기본 프로젝트 구성

#### 실행방법

1.
```bash
npm install
```
2.
```bash
npm start
```

```
#### 프로젝트 구조

```bash
├── node_modules
├── src
│   ├── Components
│   │	├── Common
│   │	│    ├── Header.js
│   │	│    └── Header.css
│   │	├── SearchFilters.css
│   │	├── SearchFilters.js
│   │	├── SearchList.css
│   │	├── SearchList.js
│   ├── Root
│   │	├── App.css
│   │	└── App.js
│   ├── index.css
│   └── index.js
├── public
├── package-lock.json
└── package.json

``` 
#### 추가 설명
1. 타이틀(Header)과 필터(SearchFilter)는 공통으로 상단으로 위치 하기 때문에 Common 폴더로 분리
2. 토글 필터 적용 : props 를 통한 전달
3. 무한 스크롤 적용 : IntersectionObserver
4. 구현하지 못한 점 : 검색 기능

#### 느낀점
무한 스크롤을 처음 적용해봐서 해당 기능을 적용하는 데 시간이 걸렸고, 필터들의 파라미터를 props 받아서 진행해서 그런지 퍼포먼스 적으로 부족한 느낌이 들었고, 좀 더 컴포넌트화를 하지 못한 점이 아쉬웠다.

