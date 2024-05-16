### 생성자, Getter, Setter, Builder

#### 생성자 (Constructor)
* 생성자는 객체가 생성될 때 호출되는 객체 초기화 메서드이다.
* 인스턴스 변수의 초기화 작업에 주로 사용되며, 인스턴스 생성 시에 실행되어야 할 작업을 위해서도 사용된다.
* 생성자에서 초기값을 세팅해 주었어도 언제든 값을 바꿀 수 있다.
* 메서드처럼 클래스 내에 선언되며, 구조도 메서드와 유사하지만 리턴값이 없다.

#### 조건
* 메서드 이름과 클래스 이름이 동일해야 한다.
>   클래스로부터 객체를 생성할 때 어떤 클래스의 생성자를 호출할지 결정하는 데 사용되기 때문이다<br>

* 반환 타입이 없거나 void 이여야 한다.
>   생성자가 호출될 때 객체가 생성되고, 새로운 인스턴스에 대한 참조가 반환되기 때문이다.
* 생성자는 오버로딩 될 수 있다.
>   하나의 클래스에 여러 개의 생성자를 정의할 수 있고, 이를 통해 다양한 매개변수 조합을 허용하고 객체를 다양한 방식으로 초기화할 수 있다.
* 상속 시 기본 생성자를 제공해야 한다.
>   만약 클래스가 명시적으로 생성자를 정의하지 않으면 컴파일러가 자동으로 기본 생성자를 제공한다.(단, 클래스가 생성자를 하나라도 정의하지 않은 경우)
* 생성자는 인스턴스 변수를 초기화할 수 있어야 한다.
>   생성자는 객체의 초기 상태를 설정하는 역할을 수행한다 따라서 생성자는 객체의 인스턴스 변수를 초기화할 수 있어야 한다.
* 컴파일 시 생성자가 존재해야 한다.
>   생성자는 클래스의 일부이므로 클래스를 컴파일할 때 생성자가 존재해야 한다. 생성자가 누락되면 컴파일러가 오류를 발생시킨다.

#### 생성자 생성 방법

Ex)

```java
public class Constructor {
	// 기본 생성자(Default Constructor, 매개변수를 받지 않는 생성자)
    // 클래스에 명시적으로 구현된 생성자 없다면 기본 생성자가 추가되어 컴파일 된다.
    public Constructor() {
    	// 객체가 생성될 때 실행되는 코드를 작성한다.
        // 일반적으로 객체의 초기 상태를 설정하거나 초기화 작업을 수행한다.
    }
    
    // 매개변수를 받는 생성자(Parameterized Constructor, 매개변수를 받는 생성자)
    public Constructor(int parameter1, String prameter2) {
    	// 매개변수를 받아 객체를 초기화하는 생성자이다.
        // 생성자를 통해 전달된 매개변수를 사용하여 객체의 초기 상태를 설정할 수 있다.
    }
}
```

* this키워드, 복사 생성자

```bash
public class Constructor {

	// (value를 선언 (private로 지정한 이유 (보안과 데이터 무결성을 유지하기 위해))
    private int value1;
    private int value2;
    
    // 생성자 1
    public Constructor(int value1, int value2) {
    
    	// this 키워드를 사용하여 현재 객체의 value 속성을 초기화 한다.
        this.value1 = value1;
        this.value2 = value2;
    }
    
    // 생성자 2
    public Constructor() {
    
    	// this 키워드를 사용하여 현재 클래스의 다른 생성자를 호출한다.
        // 매개변수를 받는 생성자를 호출하고, 매개변수로 값(ex 0)을 전달한다.
       	this(0, 0);
    }
    
    // 생성자 3
    public Constructor(Constructor original) {
    
    	// 생성자를 이용하여 인스턴스를 복사할 수 있다.
        this(original.value1, original.value2);
        
        // 필드를 복사하여 새로운 인스턴스를 생성할 수 있다.
        this.value1 = original.value1;
        this.value2 = original.value2;
    }
    
    // + 생성자를 사용하여 생성된 객체를 복사할 수 있다.
    Constructor original = new Constructor(0, 0);
    Constructor copy = new Constructor(original);
}
```

* 생성자의 이름으로 클래스 이름 대신 this키워드를 사용한다.
* 한 생성자에서 다른 생성자를 호출(= 생성자 간의 chaining)할 때는 반드시 첫 줄에서만 호출이 가능하다.
* 인스턴스의 값을 복사하여 같은 값을 가지는 인스턴스를 만들 때 생성자를 사용할 수 있다.
* 생성된 객체를 다른 객체로 복사할 수 있으므로,  원복 객체를 보존할 수 있다.


#### Getter & Setter

* private로 선언되어 있는 클래스를 외부 클래스에서 집접적으로 접근하여 작업하기 위해 사용한다.
* 정보 은닉의 핵심 원칙 중 하나인 캡슐화를 구현하는 데 사용된다.
* 정보은닉을 통해 객체의 상태를 보호하고 외부에서 직접적으로 접근하는 것을 제한해 무결성을 보호한다.

#### Getter

* 객체의 값을 반환하는 메서드이다.
* 주로 속성 값을 읽을 때 사용된다.
* Getter 메서드의 이름은 주로 "get"으로 시작하며, 해당 속성의 값을 반환한다.

#### Setter

* 객체의 속성 값을 설정하는 메서드이다.
* 외부로부터 데이터를 전달받아 변수에 저장한다.
* 매개변수만 있고, 리턴값은 없는 메서드로 정의한다.

#### Getter와 Setter를 사용하는 이유

* private를 관리할 메서드에게 공통된 이름을 가지게 되면 관리하기 편해지기 때문이다.
* private로 선언하고 getter와 setter메서드를 사용하여 필드의 값을 제어하는 이유는 캡슐화를 위해서이다.
* 객체 지향 프로그래밍에서는 안정성과 유지보수가 중요하기 때문에 캡슐화가 빠지면 안 된다.

```bash
public class Person {

    private String name;
    private int age;
    
    // Getter 메서드
    // 'name'의 값을 반환
    public String getName() {
        return name;
    }
    
    // Setter 메서드
    // 'name'의 값을 설정
    public void setName(String name) {
        this.name = name;
    }
    
    // Getter 메서드
    // 'age'의 값을 반환
    public int getAge() {
        return age;
    }
    
    // Setter 메서드
    // 'age'의 값을 설정
    public void setAge(int age) {
        this.age = age;
    }
}
```
* getter메서드는 get+변수명(첫 글자는 대문자)을 사용하는 것이 좋다.
* setter메서드는 setter+변수명(첫 글자는 대문자)을 사용하는 것이 좋다.

#### Builder
* 객체 생성을 더 유연하게 하고 가독성을 높이는 디자인 패턴이다.
* 일반적으로 많은 매개변수를 가진 객체를 생성할 때 사용된다.
* 빌더 패턴은 생성하는 과정을 간소화하고, 객체의 필수 및 선택적 매개 변수를 명확하게 정의할 수 있도록 한다.

#### 빌더 패턴의 주요 구성요소

* Builder 클래스: 객체를 생성하기 위한 빌더 클래스를 정의한다, 객체의 필수 및 선택적 매개변수를 설정하는 메서드가 포함된다.
* Product 클래스: 생성할 객체의 클래스이다, 빌더 패턴을 사용하여 생성할 객체의 모양을 정의한다.

#### 빌더 패턴(Builder Pattern)의 장점

* 필요한 데이터만 설정할 수 있다.
* 유연성을 확보할 수 있다.
* 가독성을 높일 수 있다.
* 변경 가능성을 최소화할 수 있다.

#### +빌더패턴을 구현할 필요가 없는 경우

* 객체의 생성을 라이브러리로 위임하는 경우
* 변수의 개수가 2개 이하이며, 변경 가능성이 없는 경우

Ex)

```java
public class Person {
    private String name;
    private int age;
    private String address;
    
    // Builder 클래스 정의
    // 정적(static)으로 정의하여 빌더 클래스를 외부 클래스의 인스턴스 생성 없이 직접 사용할 수 있도록 하기 위해
    // 빌더 클래스를 통해 객체를 생성하므로, 빌더 클래스의 인스턴스를 생성하는 것은 불필요
    // -> 코드의 가독성이 향상된다.
    public static class Builder {
    
        private String name;
        private int age;
        private String address;
        
        // 'name'필드는 필수적인 속성임으로 빌더 객체를 반환하지 않는다 
        // -> 필수적인 속성이 설정되었는지 확인가능.
        public Builder(String name) {
            this.name = name;
        }
        
        // this로 반환함으로써 메서드 체이닝을 가능하게 한다.
        // 메서드 체이닝을 사용하여 빌더 클래스의 메서드를 연속해서 호출할수 있게 된다
        // -> 코드를 간결하고 가독성 있게 작성할 수 있다.
        public Builder age(int age) {
            this.age = age;
            return this;
        }
        
        public Builder address(String address) {
            this.address = address;
            return this;
        }
        
        public Person build() {
            return new Person(this);
        }
    }
    
    // Person 생성자
    private Person(Builder builder) {
        this.name = builder.name;
        this.age = builder.age;
        this.address = builder.address;
    }
    
    // Getter 메서드
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    public String getAddress() {
        return address;
    }
}
```

#### @Setter, @Getter
* Lombok 라이브러리에서 제공되는 기능으로,
* 일반적으로 Getter와 Setter 메서드를 자동으로 생성해 준다.

#### 장점
* 코드가 간결해진다.
* 중복 코드를 제거할 수 있다.
* 변경에 용이하다.
* 가독성이 향상된다.

```java
// Getter와Setter 메서드를 사용한 경우
public class MyClass {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
-----------------------------------
// @Getter 와 @Setter 어노테이션을 사용한 경우
import lombok.Getter;
import lombok.Setter;

public class MyClass {
    @Getter @Setter
    private String name;
}
```

#### @Builder

* Lombok 라이브러리에서 제공되는 기능으로,
* 빌더 패턴을 구현할 때 사용된다

#### 장점

* 어노테이션을 사용하면 빌더패턴을 쉽게 적용할 수 있다
* 코드의 가독성과 유지보수성을 높일 수 있다.
* 중복 코드를 제거할 수 있다.
* 불변성을 유지하여 객체의 안정성을 보장한다.

