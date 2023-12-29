
# Word Test
> **토이 프로젝트 - TodoList** <br/> **개발기간: 2023.12.28 ~ 2023.12.29**                                                                                                                          

## 프로젝트 소개
이 프로젝트는 간단한 투두리스트를 만드는 것이지만 그동안 개념이 부족해 사용해보지 못 했던 여러 기능, 기술들을 사용하여 만든 프로젝트이다.
> 이번 프로젝트에서 사용한 것들
- tailwind css 사용하기
- JSON-server를 사용하여 REST-API를 구축하기
- 리덕스를 사용하여 상태 관리 하기
- 커스텀 훅을 사용하여 좀 더 깔끔한 코드 작성하기
 

## 시작 가이드
### Requirements
For building and running the application you need:

- [Node.js 21.1.0](https://nodejs.org/ca/blog/release/v21.1.0/)
- [Npm 10.2.0](https://www.npmjs.com/package/npm/v/10.2.0)

### Installation
``` bash
$ git clone https://github.com/Ji-Sung05/TodoList.git
```

#### Frontend
```
$ npm install 
$ npm start
```

---

## Stacks 🧑‍💻

### Environment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)             

### Config
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)        

### Development
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Styled-Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Communication
![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

## 화면 구성 📺
| TodoList                        | 
| :---------------------------------: | 
| <img src="https://github.com/Ji-Sung05/todo_ji/assets/115493374/f9243c53-90c9-443e-b73c-b93389ea8f74" width="300" />
  |



---
## 주요 기능 📦

### ⭐️ Redux-Toolkit
- `createSlice` 함수를 사용하여 Reducer 및 Action을 쉽게 생성할 수 있고 `extraReducers` 옵션을 통해 비동기 작업의 상태 변화에 따른 처리를 할 수 있다.

<img src="https://github.com/Ji-Sung05/loginform/assets/115493374/c078062d-58b7-4b33-b88c-f0907198b673" width="300" />

### ⭐️ createAsyncThunk
- `createAsyncThunk` 은 Redux Toolkit에서 제공하는 유틸리티 함수로 비동기 작업을 수행하고, 성공 및 실패에 따라 알맞은 액션을 디스패치하는 Thunk 함수를 생성할 수 있다.

### ⭐️ 커스텀 훅
- 커스텀 훅을 사용하면 컴포넌트에서 상태 및 이벤트 핸들러를 하나로 묶어서 간결하게 관리할 수 있다.

---
## 아키텍쳐

### 디렉토리 구조
```bash
C:.
├─components
│  └─UI
│    └─List.js
│    └─NewList.js
│    └─TodoList.js
├─db
│  └─data.json
├─fonts
├─hooks
│  └─UseEditForm.js
│  └─UseTodoForm.js
├─store
│  └─index.js
│  └─thunkFunction.js
│  └─todoSlice.js
├─styles
└─utils
```
## 회고록
이번 프로젝트를 하면서 새로운 개념들을 이해하고 적용하기 위해 많은 시간을 보냈다. 무작정 강의 영상 보면서 따라 치는 것이 아닌 강의에 나온 개념을 직접 내 프로젝트에 사용하면서 고쳐나가니 훨씬 이해가 잘 되는 것 같다. 리덕스를 사용하여 상태 관리하는 것과 createAsyncThunk, 커스텀 훅은 기본적이면서도 중요한 개념이기 때문에 다음 프로젝트에도 사용하여 익숙해져야겠다.
