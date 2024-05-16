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

___

#### 번외

(OOP스러운 코드를 위해 getter & setter를 지양하자는 의견도 존재한다)[https://colabear754.tistory.com/173]