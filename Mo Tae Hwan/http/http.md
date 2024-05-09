# HTTP
========


## HTTP 란?
---------------

>   HTTP는 "Hypertext Transfer Protocol"의 약자로, 인터넷에서 데이터를 주고받는 데 사용되는 프로토콜이다.
>   >   웹 브라우저와 웹 서버 간에 정보를 전송하는 데 사용된다.

### http 특징
+ 간단함 : HTTP는 간단하고 직관적인 프로토콜입니다. 요청과 응답이라는 기본적인 구조를 가지고 있으며, 텍스트 기반의 통신을 통해 이루어집니다.
+ 무상태(Stateless): 각각의 요청과 응답은 독립적입니다. 이전 요청과 상태를 공유하지 않으며, 서버는 클라이언트의 상태를 기억하지 않습니다. 이는 서버 측에서 연결을 유지하지 않아도 되므로 확장성이 좋고, 부하를 분산할 수 있는 장점을 제공합니다.
+ 연결 지향(Connection-Oriented): 기본적으로 HTTP는 연결을 유지하지 않는 특성을 가지고 있지만, HTTP/1.1부터는 지속적인 연결(Persistent Connection)을 지원합니다. 이를 통해 여러 요청과 응답을 단일 TCP 연결에서 처리할 수 있으므로 성능을 향상시킬 수 있습니다.
+ 지속적인 연결(Keep-Alive):  클라이언트와 서버 간의 단일 TCP 연결을 통해 여러 HTTP 요청과 응답을 교환하는 것입니다.
>   여기서 TCP(Transmission Control Protocol)는 컴퓨터 네트워크에서 데이터를 안정적으로 전송하기 위한 프로토콜을 말한다.

### 메서드(Methods)
>   클라이언트가 서버에게 요청을 보내는 방법을 정의한다. 
>   >   가장 널리 사용되는 메서드는 GET(자원을 요청), POST(자원을 생성), PUT(자원을 업데이트), DELETE(자원을 삭제), PATCH(리소스 일부 수정) 등이 있다
>   >   >   PATCH는 PUT과 비슷하지만, PUT은 전체 리소스를 교체하는 데 사용되는 반면, PATCH는 리소스의 일부만을 수정하는 데 사용된다.

### HTTP 메시지 구조
>   + HTTP 요청 메시지는 클라이언트(일반적으로 웹 브라우저)가 서버로 보내는 메시지입니다. 요청 라인, 헤더, 본문으로 구성됩니다.
>   + HTTP 응답 메시지는 서버가 클라이언트에게 보내는 메시지입니다. 상태 라인, 헤더, 본문으로 구성됩니다.

### 웹 브라우저의 흐름
>   사용자가 주소를 입력 후 브라우저가 서버에 해당 웹 페이지를 요청한다
>   >   서버는 요청에 대한 응답을 보내준다
>   >   >   브라우저는 받은 내용을 해석하여 사용자에게 웹 페이지를 보여준다