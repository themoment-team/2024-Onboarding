# Builder

빌더는 복잡한 객체를 단계적으로 생성할 수 있는 디자인 패턴입니다.

빌더를 사용하여 인스턴스의 생성과정을 가독성 좋게 만들 수 있습니다.

> 생성자, 수정자를 통한 생성과의 차이
생성자는 같은 타입의 인수가 여러개일 경우 개발자가 이를 쉽게 알아보기 힘들다. (혼동의 가능성)
생성방법이 여러개라면(ex: 선택적인 인수) 오버로딩이 많아짐
수정자를 통한 생성은 수정자가 호출되는중에는 일관성이 파괴된다.
또한 수정자(setter)를 통한 생성은 setter 메서드를 생성하면서 멤버 변수의 은닉성, 안전에 위험이 생긴다.

> 다른 언어의 경우 named parameter라는 방법도 존재한다.

### Build 패턴을 사용하게 된다면..

```java
public class User {

  private Long id;
  private String email;
  private String password;
  private String name;

  public User(Long id, String email, String password) {
    this.id = id;
    this.email = email;
    this.password = password;
  }
  //any code


  static public class Builder {
    private Long id;
    private String email;
    private String password;

    public Builder() {
    }

    public Builder(User user) {
      this.id = user.id;
      this.email = user.email;
      this.password = user.password;
    }

    public Builder id(Long id) {
      this.id = id;
      return this;
    }

    public Builder email(String email) {
      this.email = email;
      return this;
    }

    public Builder password(String password) {
      this.password = password;
      return this;
    }

    public User build() {
      return new User(id, email, password);
    }
  }
}
//in main method...
User user = new User.Builder()
    .email("your@email.com")
    .password("1234")
    .name("just name")
    .build();

```

빌더 패턴을 사용하면 생성자와 수정자를 이용한 방법의 장점만을 가져올 수 있다.

일관성을 유지함과 동시에 불필요한 setter를 생성하지 않고, 가독성도 좋다.

또 다른 장점은 java에서 지원하지 않는 optional parameter, default parameter를 간접적으로 구현할 수 있다.
> 여기서 optional parameter는 java의 Optional\<T>가 아닌 선택적 인수를 말한다.

### 단점

1. 코드 복잡성 증가
빌더 패턴을 적용하면 클래스의 수가 두배가 되며

그만큼 관리해야할 코드의 양이 늘어난다.

2. 생성자보다 성능이 떨어진다

매번 빌더의 메서드를 여러번 거쳐 인스턴스화 하기 때문에 당연하게도 성능이 떨어진다.

### 남용금지

가진 단점들로 인해, 멤버 변수의 수가 적고, 변경 가능성이 없다면

빌드 패턴을 피하는 것이 좋다.