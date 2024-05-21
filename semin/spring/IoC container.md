# IoC Container

IoC는 Inversion of Control의 약자로,

객체의 생성, 생명주기 관리, 의존성 관리등 객체의 제어권이 컨테이너에게 있음을 의미한다.

### IoC의 분류
1.DL (Dependency Lockup)

저장된 Bean에 접근하기 위해 컨테이너가 제공하는 API를 사용하여 Bean을 Lockup한다.

Dependency Lookup은 의존성을 해결하는 방법 중 하나로, 컨테이너로부터 필요한 의존성을 직접 조회하여 가져오는 방식입니다.

#### Bean 이란?

스프링에서 Bean은 스프링에 의해 관리되는 객체를 말한다.

new 연산자를 쓰지 않고, 스프링에 의해 생성되고 관리된다.

@Coponent 어노테이션을 사용하면 스프링에서 컴포넌트 스캔을 통해 빈으로 등록한다.

또 다른 방법으로는 @Configuration 클래스 내에서 @Bean 어노테이션을 사용해서 등록할 수 있다.

+ **과정**
1. 객체 생성: 클라이언트 객체가 IoC 컨테이너에서 생성됩니다.

2. 의존성 조회: 클라이언트 객체가 자신의 의존성을 해결하기 위해 컨테이너에 직접 요청을 보냅니다.

3. 의존성 반환: 컨테이너는 요청받은 의존성을 찾아 클라이언트 객체에 반환합니다.

DL 사용시 컨테이너 종속이 증가하기 때문에 주로 DI를 사용합니다.

2.[DI (Dependency Injection)](./DI.md)

### 컨테이너 종류

Spring에서는 BeanFactory와 ApplicationContext, 두가지의 컨테이너를 제공한다.

일반적으로 더 많은 기능을 제공하는 ApplicationContext를 더 많이 사용한다.

BeanFactory는 IoC 컨테이너의 기본 인터페이스로, 단순히 객체를 생성하고 의존성을 처리하는 기능을 합니다.

ApplicationContext는 BeanFactory의 확장으로, 추가적으로 국제화 메세지 관리, 이벤트 발행등의 기능이 있다.