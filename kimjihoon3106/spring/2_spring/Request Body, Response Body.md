### Request Body, Response Body

* HTTP 프로토콜에서 클라이언트와 서버 간의 데이터 교환 시 사용하는 두 가지 중요한 개념이다. 
* 이들은 주로 웹 애플리케이션에서 RESTful API 호출, 폼 제출, 파일 업로드 및 다운로드 등 다양한 상황에서 사용된다.
* 클라이언트에서 서버로 통신하는 메시지를 요청(request) 메시지라고 하며, 서버에서 클라이언트로 통신하는 메시지를 응답(response) 메시지라고 한다.
* 웹에서 화면전환(새로고침) 없이 이루어지는 동작들은 대부분 비동기 통신으로 이루어진다.
* 비동기통신을 하기위해서는 클라이언트에서 서버로 요청 메세지를 보낼 때, 본문에 데이터를 담아서 보내야 하고, 서버에서 클라이언트로 응답을 보낼때에도 본문에 데이터를 담아서 보내야 한다. 
* 이 본문이 바로 body 이다.
* 즉, 요청본문 requestBody, 응답본문 responseBody 을 담아서 보내야 한다. 

#### Request Body
* Request Body는 클라이언트가 서버로 데이터를 보낼 때 HTTP 요청 메시지의 본문 부분이다.
* 주로 POST, PUT, PATCH와 같은 메서드에서 사용된다.
* 클라이언트가 서버로 전송하고자 하는 데이터가 포함된다.

#### 1. Json 데이터 전송
```java
POST /api/users HTTP/1.1 // POST 메서드를 사용하여 /api/users 엔드포인트에 요청을 보냅니다.
Host: example.com // 요청을 보낼 서버의 호스트 이름입니다.
Content-Type: application/json // 요청 본문의 콘텐츠 유형을 JSON 형식으로 지정합니다.
{
    "username": "john_doe",// 사용자 이름 데이터입니다.
    "email": "john.doe@example.com"// 이메일 데이터입니다.
}
```
#### 2. 폼 데이터 전송
```java
POST /submit-form HTTP/1.1 // POST 메서드를 사용하여 /submit-form 엔드포인트에 요청을 보냅니다.
Host: example.com // 요청을 보낼 서버의 호스트 이름입니다.
Content-Type: application/x-www-form-urlencoded // 요청 본문의 콘텐츠 유형을 URL 인코딩된 폼 데이터 형식으로 지정합니다.

name=John+Doe&age=30 // 폼 데이터: 이름은 "John Doe"이고 나이는 30입니다.

```

#### 3. 파일 업로드
```java
POST /upload HTTP/1.1 // POST 메서드를 사용하여 /upload 엔드포인트에 요청을 보냅니다.
Host: example.com // 요청을 보낼 서버의 호스트 이름입니다.
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW // 멀티파트 폼 데이터를 전송하며 경계를 지정합니다.

------WebKitFormBoundary7MA4YWxkTrZu0gW // 멀티파트 경계 시작
Content-Disposition: form-data; name="file"; filename="example.txt" // 파일 필드 이름과 파일 이름을 지정합니다.
Content-Type: text/plain // 파일의 콘텐츠 유형을 지정합니다.

(file content here) // 파일의 실제 내용이 들어갑니다.
------WebKitFormBoundary7MA4YWxkTrZu0gW-- // 멀티파트 경계 종료

```
---

#### Response Body
* Response Body는 서버가 클라이언트로 데이터를 보낼 때 HTTP 응답 메시지의 본문 부분이다.
* 서버가 클라이언트의 요청에 대한 결과나 데이터를 포함하여 응답한다.
* 주로 200 OK, 201 Created 등의 성공 응답과 함께 전송되며, 오류 메시지도 포함될 수 있다.

#### 1. JSON 데이터 응답
```java
HTTP/1.1 200 OK // HTTP 상태 코드 200: 요청이 성공적으로 처리되었음을 나타냅니다.
Content-Type: application/json // 응답 본문의 콘텐츠 유형을 JSON 형식으로 지정합니다.

{
    "id": 1, // 사용자 ID 데이터입니다.
    "username": "john_doe", // 사용자 이름 데이터입니다.
    "email": "john.doe@example.com" // 이메일 데이터입니다.
}
```

#### 2. HTML 페이지 응답
```java
HTTP/1.1 200 OK // HTTP 상태 코드 200: 요청이 성공적으로 처리되었음을 나타냅니다.
Content-Type: text/html // 응답 본문의 콘텐츠 유형을 HTML 형식으로 지정합니다.

<html>
    <head><title>Example</title></head> // HTML 문서의 헤더 부분: 제목을 "Example"로 지정합니다.
    <body>
        <h1>Hello, World!</h1> // HTML 문서의 본문 부분: "Hello, World!"라는 제목을 표시합니다.
    </body>
</html>

```

#### 3. 파일 다운로드
```java
HTTP/1.1 200 OK // HTTP 상태 코드 200: 요청이 성공적으로 처리되었음을 나타냅니다.
Content-Type: application/octet-stream // 응답 본문의 콘텐츠 유형을 이진 파일 데이터로 지정합니다.
Content-Disposition: attachment; filename="example.txt" // 파일 다운로드 대화 상자를 열고 파일 이름을 "example.txt"로 지정합니다.

(file content here) // 파일의 실제 내용이 들어갑니다.
```
#### +) JSON
* Java Script Object Notation 
* 키와 값(key-value) 한쌍으로 이루어진 데이터 오브젝트를 전달하기 위해 사용하는 개방형 표준 포맷이다.
* http통신 시 데이터를 주고받을 때 흔히 쓰이는 데이터 포맷 (josn, xml... ) 중 하나이다. 
* 비동기식 통신(ajax)을 위해, 넓게는 xml을 대체하는 주요 데이터 포맷이다. 
* 특히, 인터넷에서 자료를 주고 받을 때 그 자료를 표현하는 방법으로 알려져 있다. 
* 자료의 종류에 큰 제한은 없으며, 특히 컴퓨터 프로그램의 변수값을 표현하는 데 적합하다.
---

#### @RequestBody, @ResponseBody
* 클라이언트에서 서버로 필요한 데이터를 요청하기 위해 JSON 데이터를 요청 본문에 담아서 서버로 보내면, 서버에서는 @RequestBody 어노테이션을 사용하여 HTTP 요청 본문에 담긴 값들을 자바객체로 변환시켜, 객체에 저장한다. 
* 서버에서 클라이언트로 응답 데이터를 전송하기 위해 @ResponseBody 어노테이션을 사용하여 자바 객체를 HTTP 응답 본문의 객체로 변환하여 클라이언트로 전송한다. 

#### @RequestBody
* 이 어노테이션이 붙은 파라미터에는 http요청의 본문(body)이 그대로 전달된다. 
* 일반적인 GET/POST의 요청 파라미터라면 @RequestBody를 사용할 일이 없을 것이다.
* 반면에 xml이나 json기반의 메시지를 사용하는 요청의 경우에 이 방법이 매우 유용하다.
* HTTP 요청의 바디내용을 통째로 자바객체로 변환해서 매핑된 메소드 파라미터로 전달해준다. 

#### @ResponseBody
* 자바객체를 HTTP요청의 바디내용으로 매핑하여 클라이언트로 전송한다.
* @ResponseBody 가 붙은 파라미터가 있으면 HTTP요청의 미디어타입과 파라미터의 타입을 먼저 확인한다.
* 메세지 변환기 중에서 해당 미디어타입과 파라미터 타입을 처리할 수 있다면, HTTP요청의 본문 부분을 통째로 변환해서 지정된 메소드 파라미터로 전달해준다.
* 즉, @Responsebody 어노테이션을 사용하면 http요청 body를 자바 객체로 전달받을 수 있다.

#### +) @RestController
* @Controller와는 다르게 @RestController는 리턴값에 자동으로 @ResponseBody가 붙게되어 별도 어노테이션을 명시해주지 않아도 HTTP 응답데이터(body)에 자바 객체가 매핑되어 전달 된다.
* @Controller인 경우에 바디를 자바객체로 받기 위해서는 @ResponseBody 어노테이션을 반드시 명시해주어야한다. 