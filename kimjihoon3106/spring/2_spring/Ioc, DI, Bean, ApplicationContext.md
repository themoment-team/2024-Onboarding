### IOC, DI, Bean,  ApplicationContext

#### IOC (Inversion Of Control)
* "제어의 역전"을 뜻하는데 객체의 생성부터 호출, 관리등을 개발자가 결정하는 것이 아니라. 외부에서 결정되는 것을 의미한다.
* 의존 관계 주입이라고도 하며, 어떤 객체가 사용하는 의존 객체를 직접 만들어 사용하는게 아니라, 주입 받아 사용하는 방법을 말한다.
* 또한 DI(Dependency Injection)이라고도 한다.

#### DI (Dependency Injection)
* DI는 Dependency Injection의 약자로, 우리말로는 **의존 주입**이라고 한다.
*  여기서 말하는 의존은 객체 간의 의존을 의미한다.
* Ex)
>   * 예를 들어 회원 가입을
>   MemberService 클래스에서 구현한다고
>   해보자.이 때, 기능이
>   MemberRepository에 있어 회원 가입
>   시 MemberRepository의 메서드 save
>  ()가 필요하다면,MemberService 
>  클래스는 MemberRepository 클래스에
>   의존한다고 표현할 수 있다.

```java
class MemberService{
	// MemberService는 MemberRepository에 의존한다.
	private MemberRepository memberRepository;
    
	void join(Member member){
	    memberRepository.save(member);
     }
}
```
* DI는 IoC의 대표적인 기능으로 의존하는 객체를 직접 생성하는 대신, 의존 객체를 전달받는 방식을 사용한다.
* 의존관계주입을 할 때엔 DIP, OCP 원칙에 위배하지 않도록 인터페이스(추상 클래스)에 의존하도록 해야 한다.
* 의존관계주입은 @Autowired 어노테이션을 이용하며, 의존관계주입하는 방법에는 크게 세 가지가 있다.
1. 생성자 주입
2. 수정자(setter) 주입
3. 필드 주입
---
#### 빈 (Bean)
* 스프링 컨테이너에 의해 관리되는 재사용 가능한 소프트웨어 컴포넌트이다.
* 즉, 스프링 컨테이너가 관리하는 자바 객체를 뜻하며, 하나 이상의 빈을 관리한다.

#### 스프링 빈 (Spring Bean)
* 빈은 인스턴스화된 객체를 의미하며, 스프링 컨테이너에 등록된 객체를 스프링 빈이라고 한다.
* @Bean 어노테이션을 통해 메서드로부터 반환된 객체를 스프링 컨테이너에 등록한다
* 빈은 클래스의 등록 정보, Getter/Setter 메서드를 포함하며, 컨테이너에 사용되는 설정 메타 데이터로 생성된다.

+) 설정 메타데이터 : XML 또는 자바 어노테이션, 자바 코드로 표현하여, 컨테이너의 명령과 인스턴스화, 설정, 조립할 객체 등을 정의한다.

#### 빈(Bean) 접근 방법
* ApplicationContext(스프링 컨테이너)를 사용하여 bean의 정의를 읽고 액세스 할 수 있다.

```java
// 빈을 만들고 구성
ApplicationContext context = new ClassPathXmlApplicationContext("services.xml", "daos.xml");

// 구성된 인스턴스 검색
PetStoreService service = context.getBean("memberRepository", memberRepository.class);

// 구성된 인스턴스 사용
List<String> userList = service.getUsernameList();
```
* getBean() 메서드를 통해 bean의 인스턴스를 가져올 수 있다.

#### BeanDefinition
* 스프링의 다양한 설정 형식(Java, XML 등)은 BeanDefinition이라는 추상화 덕분에 할 수 있는 것이다.
* Bean은 BeanDefinition(빈 설정 메타정보)으로 정의되고, BeanDefinition에 따라 활용하는 방법이 달라진다.
* BeanDefinition은 속성에 따라 컨테이너가 Bean을 어떻게 생성하고 관리할지를 결정한다.
* @Bean 어노테이션 또는 <bean> 태그당 1개씩 메타 정보가 생성된다.
* Spring이 설정 메타정보를 BeanDefinition 인터페이스를 통해 관리하기 때문에 컨테이너 설정을 XML, Java로 할 수 있는 것이다.
* 스프링 컨테이너는 설정 형식이 XML인지 Java 코드인지 모르며, BeanDefinition만 알면 된다.

#### Bean Scopes
* Bean의 정의는 클래스의 정의와 마찬가지로 하나의 빈 정의를 통해 많은 객체 인스턴스를 만들 수 있습니다.
* 특정 빈 정의에서 생성된 객체에 연결할 다양한 종속성과 구성 값을 제어할 수 있을 뿐만 아니라 특정 빈 정의에서 생성된 객체의 범위도 제어할 수 있습니다.
* Bean은 생성 시 여러 Scope을 사용할 수 있는데 그 중 하나로 사용하도록 할 수 있습니다.
* Spring Framework는 6가지 범위를 지원하며, 이 중 4개는 Web-Aware ApplicationContext를 사용하는 경우에만 사용할 수 있습니다. 사용자 정의 범위를 만들 수도 있습니다.
* 그 중 Singleton Scope가 기본 값인데 각 Spring IoC 컨테이너에서는 타입하나당 하나의 객체 인스턴스를 생성하도록 합니다.

#### Singleton Scope
* 싱글톤 빈의 하나의 공유 인스턴스만 관리되며 해당 빈 정의와 일치하는 ID 또는 ID를 가진 빈에 대한 모든 요청은 Spring 컨테이너에서 반환되는 하나의 특정 빈 인스턴스로 귀결됩니다.
* 빈을 정의하고 싱글톤으로 범위가 지정되면 Spring IoC 컨테이너는 해당 빈 정의에 의해 정의된 객체의 인스턴스를 정확히 하나만 생성합니다
* Spring의 싱글톤 빈 개념은 GoF(Gang of Four) 패턴 책에 정의된 싱글톤 패턴과 다릅니다. 
* GoF 싱글톤은 특정 클래스의 하나의 인스턴스만 ClassLoader당 생성되도록 개체의 범위를 하드 코딩합니다. (ClassLoader 당 해당 타입의 객체를 하나만 생성하도록 함)
* 단일 Spring 컨테이너의 특정 클래스에 대해 하나의 빈을 정의하면 Spring 컨테이너는 해당 빈 정의에 의해 정의된 클래스의 인스턴스를 하나만 생성합니다.(Spring 컨테이너 당 해당 타입의 객체를 하나만 생성하도록)
---

#### 스프링 컨테이너 (ApplicationContext)
* Spring framework에서는 스프링 컨테이너를 통해 객체(Bean)들을 관리한다.
* 여기서 스프링 컨테이너가 ApplicationContext이다.

#### BeanFactory와 ApplicationContext
* BeanFactory는 스프링 컨테이너의 최상위 인터페이스이며, 스프링 빈을 관리하고 조회하는 역할을 담당한다.
* .getBean()과 같은 기능은 BeanFactory가 지원하는 기능이다.
* ApplicationContext는 BeanFactory 기능을 모두 상속받아서 제공한다.
* 스프링 빈을 관리&조회하는 기능 외에도 앱 개발에 필요한 편리한 부가 기능들을 제공한다.
* BeanFactory는 거의 사용하지 않고, ApplicationContext를 사용하기 때문에 ApplicationContext를 스프링 컨테이너라 한다.

* 자바 설정 클래스를 기반으로 스프링 컨테이너를 만들 수 있다.
* new AnnotationConfigApplicationContext(AppConfig.class) -> ApplicationContext 인터페이스의 구현체

* 싱글톤 패턴이란 클래스의 인스턴스가 딱 1개만 생성되는 것을 보장하는 디자인 패턴인데,
* 스프링 컨테이너는 싱글턴 패턴을 적용하지 않아도, 객체 인스턴스를 싱글톤으로 관리한다. 
* 빈(객체)를 스프링 컨테이너에 등록하고, 빈 조회 요청 시 새로 생성하지 않고 스프링 컨테이너에서 빈을 찾아서 반환한다.
---
#### spring 컨테이너의 생성과 빈 등록 과정.

#### 1. 스프링 컨테이너 생성
* 스프링 컨테이너를 생성할 수 있다.
* 이 때 매개변수로 구성 정보를 전달해야 한다.
* 스프링 컨테이너 생성후, 구성 정보(AppConfig.class)를 활용한다.

Ex)
```java
// 스프링 컨테이너 생성 - 구성 정보로 AppConfig.class로 설정
ApplicationContext ac = new AnnotationConfigApplicationContext(AppConfig.class);
```

#### 2. 스프링 빈 등록
* AppConfig.class에서 등록했던 빈 정보를 참고하여 스프링 컨테이너에 저장한다.
* 스프링 컨테이너는 <key:빈 이름, value:빈객체> 형태로 빈을 저장한다.

#### 3. 스프링 빈 의존 관계 설정
* 스프링 컨테이너는 설정 정보를 참고해서 의존 관계 주입(DI)를 한다.
---
#### @Configuration과 싱글톤 컨테이너
* 스프링 컨테이너가 객체들을 싱글톤으로 관리하기 위해 @Configuration을 사용한다.
* 스프링은 @Configuration이 붙은 클래스를 설정 정보로 사용한다.
* AppConfig라는 클래스에 @Configuration을 추가했다고 가정하면, 스프링은 CGLIB이라는 바이트코드를 조작하는 라이브러리를 사용해서 AppConfig 클래스를 상속받은 다른 클래스(AppConfig@CGLIB)를 생성한다.
* 그리고 이 클래스(AppConfig@CGLIB)를 스프링 빈에 등록한다. 그리고 이 클래스는 빈들을 싱글톤이 되도록 보장해준다.
---
#### Spring IoC Container
* Spring 프레임워크의 핵심 구성 요소로, 애플리케이션 컴포넌트의 생성, 구성, 관리 및 라이프사이클을 제어한다. 
* IoC 컨테이너는 객체 간의 의존성을 자동으로 주입하여 애플리케이션의 결합도를 낮추고 유연성을 높여준다.

#### Spring IoC 컨테이너의 주요 기능

#### 빈(Bean) 정의:
* 빈은 Spring IoC 컨테이너가 관리하는 객체를 의미합니다. 
* 빈 정의는 XML, Java 어노테이션, Java 코드 등으로 설정할 수 있습니다.

#### 의존성 주입:

* IoC 컨테이너는 빈 정의에 따라 의존성을 자동으로 주입합니다.

#### 빈 라이프사이클 관리:

* IoC 컨테이너는 빈의 생성부터 소멸까지의 라이프사이클을 관리합니다. 
* 빈 초기화 메서드와 소멸 메서드를 정의하여 특정 시점에 실행될 코드를 지정할 수 있습니다.

```java
package com.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {
    public static void main(String[] args) {
        // ApplicationContext를 사용하여 IoC 컨테이너 초기화
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // 빈을 가져옴
        HelloWorld helloWorld = (HelloWorld) context.getBean("helloWorld");

        // 메서드 호출
        helloWorld.printMessage();
    }
}
```

```java
package com.example;

public class HelloWorld {
    private String message;

    public void setMessage(String message) {
        this.message = message;
    }

    public void printMessage() {
        System.out.println(message);
    }
}
```
---