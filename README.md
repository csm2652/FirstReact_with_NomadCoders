**# Movie App 2021**



React Js Fundamentals Course (2021 follow!)

with NomadCoders



**# What I Learn...**

+ React는 자바스크립트 라이브러리로, 컴포넌트라는 작고 isolate된 code fragment를 이용하여 복잡한 UI를 구성하도록 돕는다.
  + 개별 컴포넌트는 `props` 라는 매겨변수를 받아오고, `render`함수를 통해 표시할 뷰 계층 구조를 반환한다.
  + `render` 함수는 화면에서 보고자 하는 내용을 반환한다. React는 설명을 전발받고  결과를 표시한다. 특히 `render`는 렌더링할 내용을 경량화한 **React 엘리먼트**를 반환합니다. 다수의 React 개발자는 “JSX”라는 특수한 문법을 사용하여 React의 구조를 보다 쉽게 작성합니다

+ 왜 function component이 아닌 class component를 쓰는가? -> function에는 없는 

  state를 구현하기 위해서...

  + state는 object이고, component에는 data를 넣을 공간이 있으며, data는 변한다. 바꿀 데이터를 state안에 넣는다.

  

  + 이때, state는 직접 조작해선 안된다. ex) this.state.count = 1

    react에서 지원하는 `setstate`를 이용해서 state를 조작해야 react가 render()를 부를때, 변경된 state를

    가지고 refresh 하게 된다. 안그러고 직접 조작하면, render()시 state의 update없이 불려진다.

+ 짤막 팁: ES6부터 ``을 사용하여 스트링 문장 안에서도 ${var}과 같은 문법을 통해 변수를 바로 쓸 수 있다.