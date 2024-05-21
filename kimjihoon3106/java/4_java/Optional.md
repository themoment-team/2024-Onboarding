### Optional

#### Optional
* JAVA 8부터 도입된 Optional은 **값이 없는 경우를 표현하기 위한 클래스**이다.
* Optional 클래스는 제네릭을 사용하여 어떤 타입의 객체도 감싸서 담을수 있다.
* Optional 객체는 값이 존재할 수도 있고, 존재하지 않을 수도 있다.
* NullPointerException을 방지해주는 즉, null인 값을 참조해도 NullPointerException이 발생하지 않도록 값을 래퍼로 감싸주는 타입이다.

---

#### + NPE (NullPointerException)?
* 개발을 할 때 가장 많이 발생하는 예외 중 하나이다
* 참조 변수가 null 값을 가리킬 때 발생한다.
* NPE를 피하려면 nul 여부를 검사해야 하는데, null 검사를 해야하는 변수가 많은 경우 코드가 복잡해지고 번거로워 진다.
* 그래서 null 대신 초기값을 사용하길 권장하기도 한다.

---

* 흔하게 볼수 있는 곳은 Spring Data JPA를 사용할 때 Repository에서 findByid()의 반환값은 Optional타입이다.

```java
Member member = memberRepository.findById(memberId);
```

* IDE가 Optional로 타입을 지정해 준다.
* 반환 타입이 Optional인걸 확인이 가능하다.

```java
Member member = memberRepository.finById(memberId)
                                .orElseThrow(MemberNotFoundException::new)
```
* 반환 값이 Optional 타입이기 때문에 원하는 member를 찾지 못했을 경우 MemberNotFoundException을 발생시켜, NullPointerException을 미리 방지 할 수 있다.

---
#### Optional 객체 생성
* Optional 객체를 생성하려면, of(), ofNullable(), empty()등의 정적 팩토리 메서드를 사용할 수 있다.
* of() 메서드 : **값이 null이 아닌 경우에만** Optional 객체를 생성
* ofNullable() 메서드 : **값이 null인 경우에도** Optional 객체를 생성.
* empty() 메서드 : **값을 갖지않는 빈(empty)** Optional 객체를 생성.
---

#### Optional 객체 접근
* Optional 객체에 접근하기 위해서는 get() 메서드를 사용해야 하낟.
* 하지만 이 방법은 값이 없는 경우에 예외가 발생할 수 있으므로, isPresent() 메서드를 사용하여 값이 존재하는지 여부를 먼저 확인하는 것이 좋다.
* 또한, Optional 객체에 값이 있을 경우에는 orElse()나 orElseGet() 메서드를 사용하여 대체 값을 제공할 수 있다.

#### 다른 메서들과의 연결
* Optional 객체는 다른 메서드들과 연결하여 사용할 수 있다.
* 예를 들어, map() 메서드를 사용하여 Optional 객체의 값을 변환하거나, filter() 메서드를 사용하여 Optional 객체의 값을 검사할 수 있다.

#### Optional 사용 방법
* Optinal타입은 여러가지 메소드를 제공한다.

#### Optional 생성 Static 메소드.

#### Optinal.empty()-값이 Null인 경우
* Optinal은 Wrapper 클래스이기 때문에 값이 없을 수도 있는데, 이때 Optinal.empty()로 생성할 수 있다.
* 기능 : 비어있는 Optional 객체를 생성
* 리턴값 : Optional<T>

```java
// Optional 메소드
Optional<String> optional = Optional.empty();

// 아웃풋
System.out.println(optional.isEmpty()); // true
System.out.println(optional); // Optional empty
System.out.println(optional.isPresent()); // false
```

* Optional 클래스는 내부에서 static 변수로 EMPTY 객체를 미리 생성해서 가지고 있다. 
* 이러한 이유로 빈 객체를 여러 번 생성해줘야 하는 경우에도 1개의 EMPTY객체를 공유함으로써 메모리를 절약하고 있다.

```java
public final class Optional<T> {

    private static final Optional<?> EMPTY = new Optional<>();
    private final T value;

    private Optional() {
        this.value = null;
    }

    ...
}
```

#### Optional.of()-값이 Null이 아닌 경우
* 만약 어떤 데이터가 절대 null이 아니라면 Optional.of()로 생성할 수 있다.
* 만약 Optional.of()로 Null을 저장하려고 하면 NullPointerException이 발생한다.
*  기능: 전달된 값으로 새로운 Optional 객체를 생성.
* 리턴값 : Optional<T>

```java
// Optional 메소드
// Optional의 value는 절대 null이 아니다.
Optional<String> opt = Optional.of("Hello");

// 아웃풋
System.out.println(opt.get()); // Hello
```

#### Optional.ofNullable()-값이 Null일수도, 아닐수도 있는 경우
* 만약 어떤 데이터가 null이 올 수도 있고 아닐수도 있는 경우에는 Optional.ofNullable로 생성할 수 있다.
* 그리고 이후에 orElse 또는 orElseGet메소드를 이용해서 값이 없는 경우라도 안전하게 값을 가져올 수 있다.
* 기능 : 비어있을 수 있고, 아닐 수도 있는 Optional 객체를 생성.
* 반환값 : Optional<T>

```java
// Optional 메소드
// Optional의 value는 값이 있을 수도 있고 null일 수도 있다.
Optional<String> optional = Optional.ofNullable(getName());

// 아웃풋
Stirng name = optional.orElse("anoymous"); // 값이 있다면 "anonymous"를 리턴 
```

#### Optional 활용 메소드
#### equals()
* 두개의 Optional 객체가 동일한 값을 가지고 있는지 비교한다.
* 기능 : Optional 객체의 값을 비교.
* 리턴값 : boolean

```java
// 인풋
Optional<String> opt1 = Optional.of("Hello");
Optional<String> opt2 = Optional.of("Hello");
Optional<String> opt3 = Optional.of("World");

// Optional 메소드
boolean isEqual1 = opt1.equals(opt2);
boolean isEqual2 = opt1.equals(opt3);

// 아웃풋
System.out.println(isEqual1); // tue
System.out.println(isEqual2); // false
```

#### filter()
* 값이 특정 조건을 만족하는지 검사하고, 조건을 만족하면 그 값을 포함하는 'Optional'객체를 바환하며, 조건을 만족하지 않으면 빈'Optional'객체를 반환한다.
* 이를 통해 조건에 따라 'Optional'객체의 값을 필터링 할 수 있다.
* 기능 : Optional 객체의 값을 조건에 따라 필터링.
* 리턴 값 : Optional

```java
// 인풋
Optional<Integer> opt1 = Optional.of(10);
Optional<Integer> opt2 = Optional.of(1);

// Optional 메소드
Optional<Integer> filter1 = opt1.filter(num -> num < 5);
Optional<Integer> filter2 = opt2.filter(num -> num < 5);

// 아웃풋
System.out.println(filter1.isEmpty()) // true;
System.out.println(filter2.isEmpty()) // false;
```

#### map()
* Optional에 포함된 값을 변환하는데 사용 된다.
* 만약 'Optional'이 값을 가지고 있으면, 제공된 변환 함수를 적용하여 새로운 값을 가진 Optional 객체를 반환한다.
* 만약 'Optional'이 비어 있으면, 빈 'Optional'객체를 반환 한다.
* 기능 : Optional 객체 내부의 값을 변환하여 결과를 새로운 Optional 객체로 반환.
* 리턴값 : Optional<U>

```java
// 인풋
Optional<String> optional = Optional.of("hello");

// Optional 메소드
Optional<Integer> result = optional.map(s -> s.length());

// 아웃풋
System.out.println(result.get()); // 5
```

#### flatMap()
* Optional 객체에 포함된 값을 변환하고, 변환된 결과가 또 다른 'Optional'객체인 경우 이를 평탄화 하는데 사용된다.
* flatMap()은 중첩된 Optional 객체를 하나의 Optional로 합치기 위해 사용된다.
* 기능 : 중첩된 Optional
* 리턴값 : Optional<U>

```java
// 인풋
Optional<String> opt = Optional.of("Hello");

// Optional 메소드
Optional<String> flatMappedOpt = opt.flatMap(str -> Optional.of(str.toUpperCase()));

// 아웃풋
System.out.println(flatMappedOpt.get()); // HELLO
```

#### +) map()과 flatMap()의 차이
* flatMap()은 매핑 합수 자체가 이미 Option이다.
* flatMap()은 map()에 비해 파라미터가 Optional인 것을 확인할 수 있다.
* 즉, map()은 값의 변환이 간단하게 이루어지는 경우데 사용되며, flatMap()은 중첩된 Option객체를 다루거나 매핑 함수 자체가 이미 Optional을 반환하는 경우에 사용한다.

#### get()
* 'Optional' 객체에 포함된 값을 반환한다.
* 그러나 'get()' 메서드는 Optional 이 값을 가지고 있는 경우에만 호출해야 하며, 값이 없는 경우 'NoSuchElementException'을 발생시킨다.
* 따라서 이 메서드는 주의해서 사용해야 한다.
* 기능 : Optional 객체의 값을 가져온다.(만약 값이 존재하지 않는 경우, NoSuchElementException이 발생된다)
리턴값 : T

```java
// 인풋
Optional<String> opt1 = Optional.ofNullable("Hello");
Optional<String> opt2 = Optional.ofNullable(null);
        
// 아웃풋
System.out.println(opt1.get()); // Hello
System.out.println(opt2.get()); // NoSuchElementException
```

#### isEmpty()
* 'Optional' 객체가 값을 포함하지 않는 . 지여부를 확인하는데 사용된다.
* 이 메서드는 Java 11에서 도입되었으며, 이전 버전에서는 사용할수 없다.
* 'isEmpty()'메서드는 Optional객체가 비어있는 경우 true를 반환하고, 값이 있는 경우 false를 반환 한다.
* 기능 : Optional 객체가 비어있는지 확인.
* 리턴값 : boolen

```java
// 인풋
Optional<String> opt1 = Optional.ofNullable("Hello");
Optional<String> opt2 = Optional.ofNullable(null);

// 아웃풋
System.out.println(opt1.isEmpty()); // false
System.out.println(opt2.isEmpty()); // true
```

#### isPresent()
* Optional 객체가 값을 포함하고 있는지 여부를 확인하는데 사용된다.
* isPresent() 메서드는 Optional 객체가 값을 포함하고 있는 경우 true를 반환하고, 값이 없는 경우 false를 반환한다.
* 기능 : Optional 객체가 있는지 확인
* 리턴값 : boolen

```java
// 인풋
Optional<String> opt1 = Optional.ofNullable("Hello");
Optional<String> opt2 = Optional.ofNullable(null);

// 아웃풋
System.out.println(opt1.isPresent()); // true
System.out.println(opt2.isPresent()); // false
```

#### ifPresnet()
* Optional 객체가 값을 포함하는 경우에만 주어진 동작(람다 표현식)을 실행한다.
* 이메서드는 값이 있는 경우에만 해당 동작을 수행하며, 값이 없는 경우에는 아무런 동작도 수행하지 않는다.
* 기능 : Optional 객체가 있다면 내부 연산을 실행
* 리턴값 : void

```java
// 인풋
Optional<String> opt1 = Optional.ofNullable("Hello");
Optional<String> opt2 = Optional.ofNullable(null);

// 아웃풋
opt1.ifPresent(str -> System.out.println(str)); // Hello
opt2.ifPresent(str -> System.out.println(str));
```

#### ifPresentOrElse()
* Java 9에서 'Optional'클래스에 추가된 메서드로, ifPresent()와 orElse() 메서드를 결합한 것이다.
* Optional 객체가 값을 포함하는 경우에는 주어진 동작을 실행하고, 값이 없는 경우에는 대체 값을 제공하여 처리할 수 있다.
* 기능 : Optional 객체가 있다면 내부 연산을 실행, 없다면 또 다른 내부 연산을 실행
* 리턴값 : void

```java
// 인풋
Optional<String> opt1 = Optional.ofNullable("Hello");
Optional<String> opt2 = Optional.ofNullable(null);

// 아웃풋
opt1.ifPresentOrElse(str -> System.out.println(str), 
						() -> System.out.println("null")); // Hello
opt2.ifPresentOrElse(str -> System.out.println(str), 
						() -> System.out.println("null")); // null
```

#### or()
* Optional 객체가 비어 있는 경우에만 대체 Optional 객체를 제공합니다. 
* 이 때, 대체 Optional 객체가 값을 포함하든 포함하지 않든 상관없이 대체 Optional 객체를 반환합니다.
* 기능: Optional 객체가 비어있다면, 다른 Optinal 객체를 반환.
* 리턴값: Optional<T>

```java
 // 인풋
Optional<String> optional1 = Optional.empty();
Optional<String> optional2 = Optional.of("Hello");

// Optional 메소드 사용
Optional<String> result1 = optional1.or(() -> Optional.of("World"));
Optional<String> result2 = optional2.or(() -> Optional.of("World"));

// 아웃풋
System.out.println(result1.get()); // World
System.out.println(result2.get()); // Hello
```

### orElse()
* Optional 객체가 비어 있는 경우에만 대체 값을 제공합니다. 
8 이 때, 대체 값을 반환합니다.
* 기능: Optional 객체가 비어있다면, 전달된 기본값 other를 반환.
* 리턴값: T

```java
// 인풋
Optional<String> optional1 = Optional.empty();
Optional<String> optional2 = Optional.of("Hello");

// Optional 메소드 사용
String result1 = optional1.orElse(null);
String result2 = optional2.orElse(null);

// 아웃풋
System.out.println(result1); // null
System.out.println(result2); // Hello
```

### orElseGet()
* 기능: Optional 객체가 비어있다면, 내부 함수를 실행하여 생성된 기본값을 반환.
* 리턴값: T

```java
// 인풋
Optional<String> optional1 = Optional.empty();
Optional<String> optional2 = Optional.of("Hello");

// Optional 메소드 사용
String result1 = optional1.orElseGet(() -> null);
String result2 = optional2.orElseGet(() -> null);

// 아웃풋
System.out.println(result1); // null
System.out.println(result2); // Hello
```

#### orElseThrow()
* Optional이 비어 있을 때 예외를 발생시키는 메서드입니다.
* 주로 값이 반드시 있어야 하는 상황에서 사용됩니다. 
* 값이 없을 때 예외를 발생시키는 것이기 때문에, 이를 통해 호출하는 쪽에서 값을 반드시 처리하도록 강제할 수 있습니다.
* 기능: Optional 객체가 비어있다면, Exception을 발생.
* 반환: T
```java
// 파라미터 X
// 인풋
Optional<String> optional = Optional.empty();


// Optional 메소드 사용
String result = optional.orElseThrow(); // NoSuchElementException 발생
```
```java
/// 파라미터 O
// 인풋
Optional<String> optional = Optional.empty();


// Optional 메소드 사용
String result = optional
					.orElseThrow(IllegalArgumentException::new); 
// IllegalArgumentException 발생
```

#### stream()
* Java 9에서 도입된 메서드로, Optional에 포함된 값을 Stream으로 변환하는 기능을 제공합니다. 
* 이 메서드를 사용하면 Optional 객체를 손쉽게 스트림 파이프라인으로 통합할 수 있습니다. 
* Optional이 비어있으면 빈 스트림을 반환하고, 값이 있으면 해당 값을 포함하는 스트림을 반환합니다.
* 기능: Optional 객체의 값을 Stream으로 변환.
* 리턴값: Stream<T>

```java
// 인풋
Optional<String> optional = Optional.of("Hello");

// Optional 메소드 사용
optional.stream()
        .map(String::toUpperCase)
        .forEach(System.out::println); // HELLO
```

### toString()
* toString() 메서드는 Optional 객체의 문자열 표현을 반환합니다. 
* Optional 객체가 값을 가지고 있는지 여부에 따라 다른 문자열을 반환합니다. 
* 이를 통해 Optional 객체의 내용을 쉽게 확인할 수 있습니다.
* 값이 있는 경우: Optional[value] 형식의 문자열을 반환합니다.
* 값이 없는 경우: Optional.empty 문자열을 반환합니다.
* 기능: Optional의 내부값을 String 문자열로 바꿔 반환.
* 리턴값: String

```java
// 인풋
Optional<String> optional = Optional.of("Hello");

// Optional 메소드 사용
String stringValue = optional.toString();

// 아웃풋
System.out.println(stringValue); // "Optional[Hello]"
```

#### hashCode()
* Optional 객체의 해시 코드를 반환합니다
* 해시 코드는 객체를 효율적으로 비교하거나 HashSet 또는 HashMap 같은 해시 기반 컬렉션에서 사용할 수 있게 해줍니다.
* 기능: Optional 객체의 HashCode를 반환.
* 리턴값: int

```java
// 인풋
Optional<String> optional = Optional.of("Hello");
        
// Optional 메소드 사용
int hashCode = optional.hashCode();

// 아웃풋
System.out.println(hashCode); // 해시 코드
```