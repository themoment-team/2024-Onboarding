# Wrapper Class (래퍼 클래스)

기본 데이터 타입을 객체로 표현해야 할때 사용한다.

기본 데이터 타입을 클래스로 감싼 형태.

![alt](./WrapperClass.webp)

> 박싱 : 기본타입의 데이터 -> 래퍼 클래스의 인스턴스로 변환하는 과정이다

> 언박싱 : 래퍼 클래스의 인스턴스에 저장된 값 -> 기본 타입의 데이터로 꺼내는 과정이다

```java
// 박싱
// Integer 래퍼 클래스 wrappedNum 에 12 의 값을 저장
Integer wrappedNum = new Integer(12);

// 언박싱
// 래퍼 클래스 wrappedNum 의 값을 꺼내 가져온다.
int unboxedNum = wrappedNum.intValue();
```

JDK 1.5부터 자동적으로 박싱과 언박싱을 지원하기 시작했다.
```java
//오토박싱
Integer num = 21;

// 오토 언박싱
int n = num;
```

___

### 사용 이유

+ 메소드에 전달된 인수를 수정하려는 경우 오브젝트가 필요하다.
값의 변경 VS 참조에 의한 변경
+ java.util 패키지에서 객체만 처리하므로 Wrapper class가 필요하다.
(collection framework 포함)