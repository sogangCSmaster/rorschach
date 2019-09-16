# rorschach
로르샤흐 채점 프로그램 외주



## API 문서 받은것
/memberList.php?m=protank&p=protank10

1.변수

- m:아이디
- p:비밀번호

2.리턴값

```
{"memberID":"protank","name":"이재학","coin1":"12","comName":"선우테크","useCount1":"1","coin2":"10","useCount2":"0"}
```
- memberID:회원아이디
- name:이름
- comName:상호
- coin1:RORS 코인 수
- useCount1:RORS 사용한 코인 수
- coin2:RORS2 코인 수
- useCount2:RORS2 사용한 코인 수



/coinChk.php?m=protank

1.변수

- m:아이디

2.리턴값

```
{"nowCoin1":"11","nowCoin2":"10"}
```

- nowCoin1 : RORS 사용가능 코인 수
- nowCoin2 : RORS2 사용가능 코인 수



/coinProcess.php?m=protank&c=RORS2&n=1&p=add

1.변수

- m:아이디
- c:코인종류(RORS , RORS2)
- n:검사키값
- p:처리방식(add:검사에 코인 사용, del:검사키에 해당하는 코인 삭제)

2.리턴코드

- ok (정상처리)
- er:01 (add 경우 코인처리 에러)
- er:10 (add 경우 회원의 검사종류, 검사키값이 존재하는 경우, RORS와 RORS2 동일 )
- er:01 (del 경우 코인삭제 에러)
- er:20 (del 경우 조회변수에 해당 내역이 없는 경우, RORS와 RORS2 동일 )
- er:member (일치하는 회원이 없는 경우)