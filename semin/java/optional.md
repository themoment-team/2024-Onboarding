# Optional

Java Optional 클래스는 NullPointerException을 방지하기 위해 생겨났다.

값을 한번 감싸주는 일종의 래퍼 클래스라고 볼 수 있다.

`Optional<T>`에서 T는 Optional이 감쌀 자료의 타입(클래스)이다.

### static 메서드

#### 1. Optional.empty()
비어있는 Optional 인스턴스를 생성한다.

#### 2. Optional.of(T value)
값을 가진 Optional 인스턴스를 생성한다

#### 3. Optional.ofNullable(T value)
비어있을수도 있고, 아닐수도 있는 Optional 인스턴스를 생성한다.

### 일반 메서드
> 일반 메서드중 자주 쓰이는 것

#### equals(Object obj)

객체의 값을 비교하고 같으면 true를 반환한다.

#### isEmpty()

객체의 값이 비어있는지 확인한다.

#### isPresent()

객체의 값이 있는지 확인한다.

#### get()

Optional의 값을 반환한다.
만약 비어있을경우 NoSuchElementException이 발생한다.
-> `isPresent`와 조합하여 사용

#### or(Supplier<? Extends Optional<? Extends T>> supplier)

Optional이 비어있다면 다른 Optional를 반환한다.

#### orElse(T other)

Optional이 비어있다면 전달된 값을 반환한다.

___

### 번외

몇몇 언어가 가지고 있는 optional parameter를 java에서도 지원하기 위해 찾아보았지만, 다른 내용의 스택오버플로우가 튀어나왔다.

Optional를 매개변수로 받는 경우인데, 이 경우는 추천되지 않으며

심지어는 IDE에서도 미리 경고를 띄워준다.

**사용하면 안되는 이유**

1. 메서드에 조건부 로직을 추가하도록 만든다.

2. 매개변수의 값이 null, 값을 가진 Optional, 값이 없는 Optional로 3가지 경우를 신경써야한다.

3. Optional은 Wrapper Class의 한 종류로, 오버헤드가 발생한다.