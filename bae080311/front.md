# const
- const 선언은 블록 범위의 상수를 선언합니다. 
- 값을 재할당할 수 없지만, 객체와 배열의 내부 값은 변경할 수 있습니다.
- 상수는 같은 범위의 상수 또는 변수와 그 이름을 공유할 수 없습니다.
- 상수 초기자(initializer)가 필요합니다.
- 블록 스코프를 가지고 있습니다.
# let
- let 명령문은 블록 스코프의 범위를 가지는 지역 변수를 선언합니다.
- 선언과 동시에 임의의 값으로 초기화할 수도 있습니다.
- let으로 선언한 변수는 자신을 선언한 블록과 모든 하위 블록을 스스로의 스코프로 가집니다.
## const와 let의 차이점
1. 값의 변경 여부:
- const: 상수를 선언하는 키워드로, 한 번 할당된 값을 변경할 수 없습니다. 즉, 한 번 값을 할당하면 이후에는 값을 변경할 수 없습니다.
- let: 변수를 선언하는 키워드로, 값의 변경이 가능합니다. 새로운 값을 할당할 수 있습니다.
2. 초기화:
- const: 반드시 선언과 동시에 초기화되어야 합니다.
- let: 선언과 동시에 값을 할당하지 않고, 이후에 값을 할당해도 됩니다.
3. 호이스팅
- let: 선언 전에 변수를 사용할 수 없습니다.
- const: 호이스팅되어 임시적으로 존재하지만 TDZ(Temporal Dead Zone)에 있으며 초기화되기 전까지는 접근할 수 없습니다.
# function
- 함수 선언
- 함수 정의(또는 함수 선언)는 다음과 같은 함수 키워드로 구성되어 있습니다.
    - 함수의 이름
    - 함수의 매개변수들, 괄호로 묶고 쉼표로 구분합니다.
    - 함수를 정의하는 JavaScript 문으로 중괄호로 묶습니다. { /* ... */ }
## 함수 호출
- 함수를 정의하는 것은 함수의 이름과 수행할 작업을 지정하는 것입니다.
- 함수를 호출하면 지정된 매개 변수를 가지고 작업이 수행됩니다. (필수는 아님)
# js에서 html태그를 가져오는 방법
1. getElementById
- 해당 ID를 가진 요소를 반환합니다.
- 단 하나의 요소만 선택됩니다
- getElementById("Id name") 이렇게 사용합니다.
- Id는 유일해야 하므로 하나의 값은 하나의 요소에만 사용 가능합니다.
- 찾는 Id값이 없으면 null로 반환합니다.
2. getElementsByClassName
- 해당 클래스 이름을 가진 요소들을 반환합니다.
- 여러 개의 요소가 선택될 수 있으며, HTMLCollection으로 반환됩니다.
- getElementsByClassName("class name") 이렇게 사용합니다.
- 자바스크립트에서 HTML의 class요소를 가져올때 사용합니다.
3. querySelector
- CSS 선택자를 사용하여 요소를 선택합니다
- querySelector(.class name tag) 이렇게 사용합니다.
- querySelector(#id name tag) 이렇게 사용합니다.
- 같은 class/id 에 tag가 여러개 존재할 경우 첫번째꺼만 반환합니다.
- getElementById나 getElementsByClassName보다 특정 요소를 가져올 수 있습니다.
- querySelector(".class name tag:first-child")이런식으로 더 자세히 특정하는 것도 가능합니다.
- querySelectorAll은 여러개를 다 return시키고 싶은 경우 사용합니다.
4. getElementsByTagName
- 해당 태그 이름을 가진 요소들을 반환합니다.
- 여러 개의 요소가 선택될 수 있으며, HTMLCollection으로 반환됩니다.
- getElementsByTagName("tag") 이렇게 사용합니다.
# addEventListener
- event란?
    - 사용자(사람)와 상호 작용을 하면서 마우스(키보드, 터치, 펜 등)를 조작하면 그에 대한 반응을 하는 것입니다.
- 특정 event가 발생되었을 때, 특정 함수를 실행할 수 있게 해주는 것이 addEventListener입니다.
- 여러 개의 event를 등록할 수 있습니다.
- 다양한 event
    - mouseover: 해당 객체의 영역 위에 마우스 커서가 진입하는 순간
    - mouseout: 해당 객체의 영역 위에 마우스 커서가 빠져나가는 순간
    - mousedown: 해당 객체의 영역 위에서 마우스 버튼을 누르는 순간
    - mouseup: 해당 객체의 영역 위에서 마우스 버튼을 떼는 순간
    - mousemove: 해당 객체의 영역 위에서 마우스 커서가 움직이는 순간
    - keydown: 키를 눌렀을 때 발생
    - keyup: 키를 뗐을 때 발생
    - keypress: 키를 눌렀을 때 발생 (잘 안 쓰임)
    - click: 마우스 버튼을 클릭하고 버튼에서 손가락을 떼면 발생
    - resize: 브라우저 창의 크기를 조절할때 발생
    - scroll: 스크롤바를 드래그하거나 키보드(up, down)를 사용하거나 마우스 휠을 사용해서 웹페이지를 스크롤 할 때 발생
    - change: 변동이 있을 때 발생
    - focus: 포커스를 얻었을 때 발생
    - load: 로드가 완료 되었을 때 발생
    - select: option 태그 등에서 선택을 했을 때 발생
    - submit: submit 실행 시 발생
# fetch
- fetch 매서드는 JavaScript에서 서버로 네트워크 요청을 보내고 응답을 받을 수 있도록 해주는 매서드입니다.
## 기본 구조
- fetch(url)
.then(res => {
  console.log(res)
})
.catch(error => {
  console.log(error)
})
- 기본적인 구조와 동작은 Promise 객체와 동일합니다.
- 파라미터로 요청을 보낼 url을 입력해 주고 응답을 받아서 추가적인 작업 또한 해줄 수 있습니다.
- then에서 응답 객체 res를 받고, catch에서 에러 요청이 발생했을 때, 에러를 받습니다.
## 요청 정보 파라미터
- fetch의 두 번째 파라미터로 요청에 대한 추가적인 데이터를 입력할 수 있습니다.
    - method : HTTP method와 동일하며 요청 방식을 나타냅니다. (GET, POST, PUT, DELETE 등)
    - headers : 요청 헤더에 대한 정보를 나타냅니다.
    - body : 요청을 보내는 데이터를 나타냅니다. 여러 가지 자료형을 대입할 수 있습니다.