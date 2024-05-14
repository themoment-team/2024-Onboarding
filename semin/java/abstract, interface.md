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

따라서 인터페이스 메서드는 접근 지정자를 붙이지 않아도, 기본적으로 `public abstract`로 컴파일된다.
> 였지만 `Default Method`가 등장했다.

인터페이스 메소드 선언 시에 default를 명시하게 되면 인터페이스 내부에서도 로직이 포함된 메소드를 선언할 수 있습니다.

```java
interface MyInterface { 
    default void printHello() { 
    	System.out.println("Hello World"); 
    } 
}
```

처음 코드를 작성할때 메서드의 필요성이 있다면 Abstract class를 우선적으로 고려해야 합니다.

하지만 기존에 존제하던 인터페이스를 이용하여서 구현된 클래스들을 만들고 있는 도중,

인터페이스에 추가적으로 구현해야할 메서드가 있다면 이미 이 인터페이스를 구현한 클래스와의 호환성이 떨어 지게 됩니다.

이럴때 default 메서드를 사용하면 하위 호환성이 유지됨과 동시에 인터페이스를 보완할 수 있습니다.

<br>

인터페이스에서의 변수는 `static final`로 지정해야한다.

꼭 `static final`로 지정하지 않더라도 인터페이스의 멤버 변수는
컴파일 과정에서 자동적으로 `static final`이 된다. (상수화)

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