# 생성자

생성자는 new 연산자에 의해서 호출되는 초기화를 위한 함수이다.

생성자의 특징
+ 매개변수는 가질 수 있으나, 리턴타입이 없다.
+ 생성자가 정의되지 않을 경우 빈 생성자가 만들어진다.
+ 생성자는 클래스와 이름이 같아야한다.
+ 생성자 여러개를 오버로딩하여 만들 수 있다.


### 사용 이유

생성자를 사용하면 멤버 변수의 값을 더 쉽게 초기화 할 수 있습니다.

```java
class Car {
	int price;
  int speed;
  String name;
}
public class ProgramMain {
	public static void main(String[] args) {
		Car car = new Car();
		car.price = 1000;
    car.speed = 100;
    car.name = "This is a car";
	}
}
```

위와 같이 생성자를 만들지 않고, 빈 생성자를 이용해 객체를 만들고 멤버 변수를 초기화 하면

하나의 간단한 객체를 얻기 위해 4줄이나 작성하여야 합니다.

심지어 `car.price`, `car.speed` 처럼 불필요하게 반복되어 보이는 코드도 발생합니다.

```java
class Car {
  int price;
  int speed;
  String name;

  public Car(int price, int speed, String name) {
    this.price = price;
    this.speed = speed;
    this.name = name;
  }
}
public class ProgramMain {
  public static void main(String[] args) {
    Car car = new Car(1000, 100, "This is a car");
  }
}
```

생성자를 사용하면, 위와 같이 한번에 초기화된 멤버 변수를 가진 객체를 얻을 수 있습니다.

생성자를 사용하면 인스턴스 생성을 더 효율적으로 처리 할 수 있습니다.

### this

클래스에서 자기자신(인스턴스)를 가르킵니다.
생성자 함수에서 `this`를 통해 멤버 변수들을 초기화 시킬 수 있습니다.

멤버 변수와 같은 이름의 지역변수, 매개변수와 구분하기 위해서 사용합니다.

일반 메서드에서도 사용할 수 있지만, `static` 메서드에선 사용할 수 없습니다.

### this()

자기 자신의 생성자를 호출할 때 사용됩니다.

오버로딩된 생성자에서 다른 생성자를 호출하여 중복코드를 제거하기 위해 사용합니다.

```java
class Car {
  int price;
  int speed;
  String name;

  public Car(String name){
    this(1000,100,name);
  }

  public Car(int price, int speed, String name) {
    this.price = price;
    this.speed = speed;
    this.name = name;
  }
}
public class ProgramMain {
  public static void main(String[] args) {
    Car car = new Car(1000, 100, "This is a car");
  }
}
```

### 오버로딩

생성자도 오버로딩하여 작성할 수 있습니다.

다만 매개변수의 이름만 다른것은 오버로딩되지 않습니다.

```java
class Car {
  int price;
  int speed;
  String name;


  //올바른 오버로딩
  public Car(String name){
    this(1000,100,name);
  }

  //잘못된 오버로딩
  public Car(int price){
    this(price,100,"tester");
  }

  public Car(int speed){
    this(1000,speed,"tester")
  }

  public Car(int price, int speed, String name) {
    this.price = price;
    this.speed = speed;
    this.name = name;
  }
}
public class ProgramMain {
  public static void main(String[] args) {
    Car car = new Car(1000, 100, "This is a car");
  }
}
```