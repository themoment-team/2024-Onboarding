# http란?
하이퍼텍스트 전송 프로토콜(HTTP)은 월드 와이드 웹의 토대이며 하이퍼텍스트 링크를 사용하여 웹 페이지를 로드하는 데 사용됩니다. 
- 특징
    - 거의 모든 형태의 데이터 전송 가능합니다.
    - 서버 간에 데이터를 주고 받을 때도 대부분 HTTP 사용합니다.
## HTTP 속성
- HTTP 상태 코드
    - 1XX (Informational): 요청이 받아들여졌으며 처리 중입니다.
    - 2XX (Success): 요청이 성공적으로 수행되었습니다.
    - 3XX (Redirection): 요청을 완료하려면 추가 작업이 필요합니다.
    - 4XX (Client Error): 클라이언트에 오류가 있어 요청을 수행할 수 없습니다.
    - 5XX (Server Error): 서버에 오류가 있어 요청을 수행할 수 없습니다.
    - 200 (OK): 요청이 성공했으며, 서버가 요청을 제대로 처리했습니다.
    - 301 (Moved Permanently): 리소스가 새 URL로 영구적으로 이동되었습니다.
    - 400 (Bad Request): 클라이언트 요청이 잘못되었습니다.
    - 404 (Not Found): 요청한 리소스를 찾을 수 없습니다.
    - 500 (Internal Server Error): 서버가 요청을 처리하는 동안 오류가 발생했습니다.
- stateless 특징
    - 서버가 클라이언트의 상태를 보존하지 않습니다.
    - 장점은 서버가 확장성이 높습니다.
    - 단점은 클라이언트가 추가 데이터를 전송해야 합니다.
    - 모든 것을 stateless상태로 설계할 수 있는 경우도 있고 없는 경우도 있습니다.
- stateful 특징
    - 항상 같은 서버가 유지 되어야 합니다.
    - 상태에 대해 저장해야하기 때문에 백업 스토리지가 요구됩니다.
- stateful과 stateless의 차이점
    - 서버가 클라이언트의 상태를 보존하느냐에서 차이점이 존재합니다.
- connectionless 특징
    - 서버가 클라이언트의 상태를 보존하지 않습니다.
    - HTTP는 기본이 연결을 유지하지 않는 모델입니다.
    - 일반적으로 초 단위의 이하의 빠른 속도로 응답합니다.
    - 서버 자원을 매우 효율적으로 사용할 수 있습니다.
    - 3 way handshake를 하는 시간이 추가됩니다.
- Persistent Connection 특징
    - connectionless의 단점을 해결하기 위해 생겼습니다.
    - 연결을 바로 끊지 않고 지정된 시간만큼 대기하는 방식 입니다.
    - 지정된 시간 내에 요청이 발생한다면 계속 연결된 상태를 유지할 수 있습니다.
    - 단점은 process 수가 너무 많아져 문제가 발생할 수 있습니다.
## HTTP 메서드
- GET
    - 서버에 전달하고 싶은 데이터는 query(쿼리 파라미터, 쿼리 스트링)를 통해서 전달합니다.
    - 메시지 바디를 사용해서 데이터를 전달할 수 있지만, 지원하지 않는 곳이 많아서 안 사용 하는 것이 좋습니다.
    - 리소스를 바꾸거나 변경하는 곳에는 절대 사용하면 안됩니다.
    - query string
        - URL에 추가 정보를 포함하여 서버에 데이터를 전달하는 방법입니다.
        - 쿼리 스트링은 ?로 시작하며, 각 쌍은 key=value 형식으로 구성되며 &로 구분됩니다.
- POST
    - 요청 데이터를 처리 합니다.
    - 메시지 바디를 통해 서버로 요청 데이터를 전달합니다.
        - 메시지 바디를 통해 들어온 데이터를 처리하는 모든 기능을 수행합니다.
    - 주로 전달된 데이터로 신규 리소스 등록, 프로세스 처리에 사용합니다.
    - 다른 메서드로 처리하기 애매한 경우에도 사용합니다.
- PUT 
    - 리소스가 있으면 대체 합니다
    - 리소스가 없으면 생성합니다.
    - 클라이언트가 리소스를 식별합니다.
        - 클라이언트가 리소스 위치를 알고 URI를 지정합니다.
        - POST와 비슷한 기능이 있지만 다른 메서드 입니다.
        - 리소스의 모든 것을 업데이트 합니다.
- PATCH
    - 리소스의 일부를 업데이트 합니다.
    - 부분적으로 변경하기 때문에 데이터 원본이 유지 됩니다.
- DELETE
    - 리소스를 제거하는 역할을 합니다.
    - 요청 리소스 경로의 데이터를 삭제합니다.
## HTTP 메시지
- 시작 라인 요청 메시지
    - HTTP 메서드
    - 요청 대상
    - HTTP의 버전
- HTTP header
    - HTTP 전송에 필요한 모든 부가 정보를 적습니다.
    - 표준 헤더의 종류는 매우 여러가지 입니다.
    - 필요 시 임의의 헤더를 추가할 수 있습니다.
- HTTP 메시지 body
    - 실제 전송할 데이터를 넣습니다.
## 웹 브라우저의 동작 흐름
1. 먼저 우리가 주소창에 www.abc.com이라고 치게 되면, 웹 브라우저는 DNS에게 호스트의 IP주소를 물어보게 됩니다.
2. 브라우저는 이 IP주소에 있는 서버를 찾아갑니다.
3. 3-way Handshake라는 과정을 거쳐 서버에게 자료를 요청합니다.
4. 이제 자료를 요청할 수 있게 된 브라우저는, 서버에게 해당 주소에 있는 데이터를 요청하는데, 이것이 HTTP Request입니다
5.  서버가 요청을 받으면 브라우저에게 데이터를 보내주는데, 이를 Http Response라고 합니다.
6. 최종적으로 브라우저는 사용자에게 결과 화면을 출력합니다. 