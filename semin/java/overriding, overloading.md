# Overriding

부모 클래스로부터 상속받은 메서드를 자식 클래스에서 재정의 하는것을 의미한다.

### 조건
오버라이딩 하려는 메서드의 이름, 매개변수, 리턴 타입이 모두 같아야한다.

`@Override`은 명시적으로 그 함수가 Overriding 되었음을 알려주는 어노테이션이다.

컴파일시에 해당 함수가 오버라이딩된 함수가 아니라면 에러를 낸다.

또한 개발자의 입장에서 코드를 읽을때 해당함수가 오버라이딩된 함수임을 쉽게 알 수 있다.

ex)
```java
class Student {
   public void sayHello() {
      System.out.println("나는 학생");
   }
}

class GsmStudent extends Student {
   @Override
   public void sayHello() {
      System.out.println("나는 소마고 학생");
   }
}
```

# Overloading

클래스에서 이미 존재하는 메서드를 **덮어쓰는**것을 말한다.

클래스 내에 이미 사용하려는 이름과 같은 이름을 가진 메소드가 있더라도 매개변수의 개수 또는 타입이 다르면, 같은 이름을 사용해서 메소드를 **재정의**할 수 있다.

### 조건

메소드의 이름이 같고, 매개변수의 개수나 타입이 달라야한다.
리턴타입만 다른것은 오버로딩 할 수 없다.

ex)
```java
class Student {
   public void sayHello() {
      System.out.println("나는 학생");
   }
   public void sayHello(String name) {
      System.out.println("나는" + name);
   }
   public void sayHello(int grade){
      System.out.println("나는" + grade + "학년");
   }
}
```