# 다형성

### 객체지향개념에서 다형성이란 하나의 객체가 여러 형태를 가지는 것이다.

한 타입의 참조변수로 여러 타입의 객체를 참조할 수 있도록 만드는 것이다.
> 부모 클래스 타입의 참조 변수로 자식 클래스 인스턴스를 참조할 수 있도록 하는것이다.

```java
class Coffee {
  //code
}
class Americano extends Coffee {
  //code
}
class Espresso extends Coffee {
  //code
}
```

```java
Coffee coffee = new Americano();
//or
Coffee coffee = new Espresso();

```
이 예시에서 위와 같이 Coffee 타입으로 지정한 `coffee`는

`Americano`와 `Espresso` 인스턴스를 모두 가질 수 있다.