# HTTP
> #### Hypertext Transfer Protocol
---

HTTP(Hypertext Transfer Protocol)는 인터넷에서 데이터를 주고받기 위한 프로토콜입니다.

HTTP는 클라이언트와 서버 간의 통신을 담당하며, 웹 브라우저와 웹 서버 간에 HTML, 이미지, 동영상 등의 리소스를 전송하는 데 사용됩니다.


클라이언트가 서버에게 요청을 보내면 서버는 해당 요청에 대한 응답을 반환합니다.
이를 통해 웹 페이지를 불러오거나 데이터를 전송할 수 있습니다.

#### 특징
+ 클라이언트는 서버의 응답이 올 때까지 기다린다.
+ 무상태(stateless) 프로토콜이다.
+ 요청(request)과 응답(response)의 형태로 이루어져 있다.
+ start line or status line, header, body로 이루어져 있다.

##### Start line
HTTP **요청**의 첫번째 줄에 해당한다.
HTTP method, Request Target, HTTP version으로 이루어져 있다.
```http
GET /test.html HTTP/1.1
```
##### Status line
HTTP **응답**의 첫번째 줄에 해당한다.
HTTP version, Status code, Status text로 이루어져 있다.
```http
HTTP/1.1 200 OK
```

##### Header
HTTP 헤더는 클라이언트와 서버가 요청 또는 응답으로 부가적인 정보를 전송할 수 있도록 해준다.
대소문자 구분을 하지 않는다.
각각의 컨텍스트는 `Name: Value` 형태이다.

[대표적인 요청 컨텍스트](https://developer.mozilla.org/ko/docs/Web/HTTP/Headers#%EC%9A%94%EC%B2%AD_%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8)
+ Host
+ User-Agent

[대표적인 응답 컨텍스트](
https://developer.mozilla.org/ko/docs/Web/HTTP/Headers#%EC%9D%91%EB%8B%B5_%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8
)
+ Allow
+ Server
[전체 컨텍스트 보기](https://developer.mozilla.org/ko/docs/Web/HTTP/Headers)

```http
Host: google.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.6312.122 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Accept-Encoding: gzip, deflate, br
Accept-Language: ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7
Priority: u=0, i
Connection: close
```

## HTTP Method

#### 멱등성이란?
요청을 한번 했을 때와, 여러번 했을때의 결과가 같은경우 `멱등성을 가진다` 라고 표현합니다.

HTTP 메서드는 주어진 리소스에 수행하길 원하는 행동을 나타냅니다.

HTTP 메서드는 다음과 같은 것들이 있습니다.
+ `GET`
오직 데이터를 받기만 합니다.
+ `HEAD`
GET과 똑같이 응답만을 요구하지만 응답 본문(body)를 포함하지 않습니다.
+ `POST`
특정 리소스에 엔티티를 제출할 때 사용합니다.
+ `PUT`
요청 페이로드를 사용해 새로운 리소스를 생성하거나, 대상 리소스의 데이터를 대체합니다.
POST와의 차이점으로, [멱등성](#멱등성이란)을 가집니다.
+ `DELETE`
특정 리소스를 삭제합니다.
[멱등성](#멱등성이란)을 가집니다.
+ `CONNECT`
요청한 리소스에 대해 양방향 연결을 시작합니다.
ex) TCP 연결 시작
+ `OPTIONS`
서버에 대해 허용된 통신 옵션을 요청합니다.
+ `TRACE`
리소스에 대한 경로를 따라 메시지 루프백 테스트를 수행하여 디버깅을 제공합니다.
+ `PATCH`
리소스의 부분적인 수정을 할 때 사용됩니다.
데이터의 완전한 교체만을 수행하는 PUT과 달리 [멱등성](#멱등성이란)을 가지지 않는다.

## [HTTP Status](https://developer.mozilla.org/ko/docs/Web/HTTP/Status)
#### 서버에서 요청에 대한 응답의 상태를 나타냅니다
100 ~ 103 : 정보응답

200 ~ 226 : 성공응답

300 ~ 308 : 리다이렉션 메시지

400 ~ 451 : 클라이언트 에러 응답

500 ~ 511 : 서버 에러 응답

#### 자주 사용되는 http status
+ [100 : Continue](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/100)
이 응답은 지금까지의 상태가 괜찮으며 클라이언트가 계속해서 요청을 하거나 이미 요청을 완료한 경우에는 무시해도 되는 것을 알려줍니다.
+ [200 : OK](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/200)
요청이 성공적으로 처리되었다는것을 알려줍니다.
+ [201 : Created](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/201)
요청이 성공적으로 처리되었고, 새로운 리소스가 생성되었음을 알립니다.
주로 POST, PUT 요청에 따라옵니다.
+ [400 : Bad Request](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/400)
이 응답은 잘못된 요청으로 인하여 서버가 요청을 이해할 수 없음을 의미합니다.
+ [401 : Unauthorized](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/401)
요청한 리소스에 대한 유효한 인증이 없기 때문에 요청이 거부되었음을 나타냅니다.
+ [403 : Forbidden](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/403)
요청이 권한으로 인해 거절되었음을 나타냅니다.
401 Unauthorized랑 비슷하지만 재인증을 하더라도 요청을 거부합니다.
+ [404 : Not Found](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/404)
서버가 요청받은 리소스를 찾을 수 없음을 나타냅니다.
리소스가 영구적으로 삭제되었음을 나타내진 않습니다.
리소스가 영구적으로 삭제된 경우, `410 Gone`이 사용되는것이 이상적입니다.
+ [**418 : I'm a teapot**](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/418)
서버가 찻주전자이기 때문에 커피 내리기를 거절했음을 나타냅니다.
하이퍼 텍스트 커피 주전자 제어 규약(Hyper Text Coffee Pot Control Protocol)에 대한 참조이며
만우절 기념으로 1998년 IETF에서 출판한 [RFC](https://www.ietf.org/rfc/rfc2324.txt)에 포함되었습니다.
+ [500 : Internal Server Error](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/500)
서버가 요청을 처리하는 과정에서 예상치 못한 오류가 발생했음을 알려줍니다.
catch되지 않은 에러, 더 정확한 5xx 에러 코드를 찾이 못했을 때 발생합니다.


## IP
IP는 인터넷 프로토콜의 약자로, 인터넷에서 서로 다른 장치간의 
통신을 위한 규약이다.
인터넷에서 연결된 모든기기의 고유한 주소를 **IP 주소**라고 한다.


## TCP/UDP
> Transmission Control Protocol / User Datagram Protocol

#### TCP란?
TCP는 전송 제어 프토토콜로, 데이터를 보내고 받는 방법을 지정한다는 의미이다.
TCP는 데이터를 전송하기 전에 수신자와의 연결을 설정한다. TCP는 전송이 시작되면 모든 패킷이 순서대로 도착하도록 한다.

TCP는 **속도가 아닌 안정성**을 위해 사용된다.
수신자는 TCP를 통해 도착하는 각 패킷 수신을 확인한다.
수신이 확인되지 않은 경우 누락된 패킷이 다시 전송된다.

TCP는 모든 패킷이 순서대로 도착하는지 확인해야 하므로 일부 패킷이 누락된 경우 TCP/IP를 통해 데이터를 로드하는 데 시간이 더 오래 걸릴 수 있습니다.

#### UDP란?
UDP는 사용자 데이터그램 프로토콜이다.
UDP는 **TCP보다 빠르지만, 안정성도 떨어집니다**.
UDP는 패킷이 순서대로 모두 전달되는지 확인하지 않으며 전송을 시작하거나 수신하기 전에 연결을 설정하지 않습니다.
또한 누락된 패킷이 있는지 확인하지 않습니다.