# @RequestBody

이 어노테이션이 붙은 파라미터에는 http요청의 본문(body)이 그대로 전달된다. 

일반적인 GET/POST의 요청 파라미터라면 @RequestBody를 사용할 일이 없을 것이다.

반면에 xml이나 json기반의 메시지를 사용하는 요청의 경우에 이 방법이 매우 유용하다.

HTTP 요청의 바디내용을 통째로 자바객체로 변환해서 매핑된 메소드 파라미터로 전달해준다.

@ResponseBody 
자바객체를 HTTP요청의 바디내용으로 매핑하여 클라이언트로 전송한다.

@RestController를 사용하면 @ResponseBody가 자동적으로 적용된다.

