# DAO
Data Access Object의 줄임말이고, 스프링과 데이터 베이스를 연결한다.

DB의 데이터에 접근하기 위한 객체로 직접 DB에 접근하여 데이터를 수정, 조회하는 기능을 수행한다.

DB 접근을 위한 로직과 비즈니스 로직을 분리하기 위해 사용한다.

DB와 연결할 Connection까지 설정되어있는 경우가 많다.

ORM 프레임워크를 사용하는 경우 커넥션 풀이 제공되기도 하여, 직접 DAO를 별도로 만들지 않는 경우도 많다.

> Connection Pool 이란?
JDBC API를 이용해 데이터베이스와 연결되는 Connection 객체를 생성하기 위해 많은 오버헤드가 발생한다. 이를 해소하기 위해 미리 Connection을 만들어 관리하고, 애플리케이션의 요청에 따라 Connection 객체를 제공하는것을 Connection Pool이라고 한다.

# DTO
Data Transfer Object의 줄임말이다.

MVC 구조 사이사이에서 데이터 교환을 위한 객체이다.
> 계층간의 데이터 교환을 위한 Java Beans

로직없이 필드와 getter & setter만 가진 클래스다.

# VO
Value Object

관계형 데이터 베이스의 레코드에 대응되는 자바 클래스이다.

DTO와 비슷하지만 Read-Only라는 특징을 가지고 있어서 값을 바꿀 수 없다. (getter만 존재)

DTO는 통신을 위해 사용되는 객채, VO는 이름처럼 값을 담기만 하는 객체이다.

객체 비교를 위해 equals()와 hashcode()를 오버라이딩 해줘야한다.
> 참조끼리의 비교 -> 필드끼리의 비교

# Entity
데이터베이스의 테이블을 나타내는 클래스이다.

JPA를 통해 데이터 베이스에 저장되고 관리됩니다.

Entity 클래스는 실제 데이터베이스의 테이블과 1 대 1로 매핑된다.
> 이러한 기술을 ORM (Object-Relational Mapping)이라고 부른다.

비즈니스 로직을 포함할 수 있다.

변경을 최소화해야 하므로, DTO와 분리해서 관리한다.

### JPA & ORM

ORM (Object-Relational Mapping)은 애플리케이션의 객체를 관계형 데이터베이스에 매핑하는것을 말한다.

SQL문이 아닌 객체, 메서드를 통해 DB를 제어할 수 있다.

JPA (Java Persistance API)는 Java에서 ORM 기술의 표준으로 사용되는 인터페이스의 모음이다.

인터페이스이므로 이를 구현한 라이브러리들이 여럿 존재한다.

JPA를 사용하면, SQL이 아닌 객체를 중심적으로 개발할 수 있다.

JPA를 사용할때의 또다른 이점은 객체의 상속관계, 연관관계를 데이터베이스에 저장할 수 있다는 점이다.