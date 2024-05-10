# abstract

abstract는 사전적인 의미로는 `추상적인`을 뜻한다.

자바에선 아직 선언만 있고, 정의(구현)은 없다는 것을 뜻한다.

주로 클래스와 메서드에 사용되는 키워드이다.

### 추상 메서드

하위 클래스에서 반드시 오버라이딩해야만 사용할 수 있는 메서드이다.

자바에서 추상 메서드를 선언하여 사용하는 목적은 추상 메서드가

포함된 클래스를 상속받는 하위 클래스가 반드시 추상 메서드를 구현하도록 하기 위함이다.
```java
abstract ReturnType MethodName();
```

### 추상 클래스

추상 클래스는 하나 이상의 추상 메서드를 포함하는 클래스를 뜻한다.

이런 추상 클래스는 객체 지향 프로그래밍에서 중요한 특징인 다형성을 가지는 메서드의 집합을 정의하도록 한다.

추상 클래스를 상속받는 모든 클래스에서는 추상 클래스에 포함된 추상 메서드를 재정의 해야한다.

> 추상 클래스는 추상 메소드를 포함한 점을 제외하면, 일반 클래스와 모든 점이 같다. 생성자, 필드, 일반 메서드등

# Interface

Inerface는 추상 메서드만으로 이루어진 클래스이다.

즉, abstract class와 달리 일반 메서드를 포함할 수 없다.

인터페이스에서의 변수는 무조건 `static final`로 지정해야한다.

```java
public interface Car{
    public static final int price = 1500;

    public void Ride();

    public void RideReverse();

    public void ChangeGear();

    public double Acceleration();
}
```

Interface는 부모, 자식 관계인 상속 관계에 얽메이지 않고, 공통 기능이 필요 할때, Abstract Method를 정의해놓고 구현(implements)하는 Class에서 각 기능들을 Overridng하여 여러가지 형태로 구현할 수 있기에 다형성과 연관되어 있다.