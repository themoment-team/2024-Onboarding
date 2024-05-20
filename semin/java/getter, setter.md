# Getter, Setter

private한 멤버 변수를 다룰때 사용하는 메서드이다.
> 또는 그러한 메서드를 지향하는 디자인 패턴

private 접근 제어자를 사용한 멤버 변수는 외부에서 조회/변경이 불가능하다.

이때 getter와 setter를 사용하여 멤버 변수의 은닉성을 유지한 체로 외부 접근이 가능하도록 만들 수 있다.

이름에서 나타나듯 **getter는 값을 가져와 리턴**하고, **setter는 데이터를 전달받아 저장**한다.

+ getter
내부에 저장된 값을 외부로 리턴
매개변수 없이 리턴값만 가짐
메서드 명은 `get[멤버변수명]` 형태로 짓는것이 일반적이다

+ setter
외부로부터 데이터를 전달받아 멤버 변수에 저장
메개변수만 있고 리턴 타입이 없음
메서드 명은 `set[멤버변수명]` 으로 짓는것이 일반적이다

```java
class Example {
	private int num = 10;

	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	} 
}
```

### Lombok
Lombok은 어노테이션을 기반으로 코드를 자동완성 해주는 라이브러리이다.
Lombok을 이용하면 Getter, Setter, Equlas, ToString 등과 다양한 방면의 코드를 자동완성 시킬 수 있다.

```java
//Before Lombok
public class Car {
  private int speed;
  private String name;

  public int getSpeed() {
    return this.speed;
  }
  public int setSpeed(int speed) {
    this.speed = speed;
  }
  public int getName() {
    return this.name;
  }
}

//After Lombok
@Getter
public class Car {
  @Setter
  private int speed;

  private String name;
}
```

이처럼 Lombok을 사용하면, Getter, Setter를 포함한 여러가지 보일러 플레이트 코드를 줄일 수 있다.
___

## 번외

(OOP스러운 코드를 위해 getter & setter를 지양하자는 의견도 존재한다)[https://colabear754.tistory.com/173]

### Setter를 지양해야하는 이유

OOP의 주요 원칙중 하나는 정보 은닉이다.

멤버 변수를 private로 설정하고 getter & setter를 만들게 되면 은닉된것처럼 보인다.

하지만 필드만 숨겼을뿐, 언제나 외부에서 값을 조회하고 변경할 수 있으므로,

이것이 정보를 완전히 은닉했다고 볼 수 없다.

#### 변경이유를 알 수 없다.
```java
class Account {
    private long money;
    
    public Account(long money) {
        this.money = money;
    }
    
    public void setMoney(long money) {
        this.money = money;
    }
}

Account myAccount = new Account(500);
myAccount.setMoney(1000);
```

위 코드에서 알 수 있는점은 계좌의 돈이 500으로 초기화 되었다가 1000으로 설정되었다는 것이다.

우리는 이전상황을 알고 있기에 돈이 500 늘었단 것을 알 수 있다.

하지만 `setMoney`만 놓고 보았을땐, 돈이 입금되어 1000이 되었는지, 출금되어 1000이 되었는지 알 수 없다.

값의 변경 이유를 위해 다른 객체(계층)이/가 필요 할 수도 있다.

#### 다른 객체로 책임이 분산된다
> 단일책임 원칙 위배

OOP에선 각각의 객체에게 역할이 있으며, 외부에서 그 객체에게 필요한 동작을 요청하는것이 이상적인 그림이다.

이때, 외부 객체는 가능한, 동작을 요청하는 객체를 위해 하는일이나 아는 정보가 없어야 한다.

하지만 setter를 사용하면 자연스럽게 비즈니스 로직이 다른곳으로 떠넘겨지게 된다.

### 해결방법
```java
class Account {
    private long money;
    
    public void withdraw(long amount) {
        if (amount > money) {
            throw new IllegalArgumentException("잔액이 부족합니다.");
        }
        
        money -= amount;
    }
}
```

setter 대신, 의도가 명확하고 구체적인 메서드를 사용하면 더욱 깨끗하고 안전한 코드 작성이 가능하다.