## **📜 목차**

🏆 [프로젝트 소개](#-프로젝트-소개)

👨‍💻 [참여자](#-참여자)

🛠 [개발 도구](#-개발-도구)

⏰ [프로젝트 일정](#-프로젝트-일정)

🔗 [API명세서와 ERD설계도](#-api명세서와-erd설계도)
  
📝 [메뉴구조도](#-메뉴-구조도)
  
🖥 [화면 구현 및 코드 리뷰](#-화면-구현-및-코드-리뷰)
  - [회원가입 및 로그인](#회원가입-및-로그인)
  - [홈 / 학원찾기](#홈--학원찾기)
  - [학원 등록](#학원-등록)
  - [학원 상세페이지](#학원-상세페이지)
  - [학생 마이페이지](#학생-마이페이지)
  - [학원 관리자 마이페이지](#학원-관리자-마이페이지)
  - [웹 관리자 마이페이지](#웹-관리자-마이페이지)
   
✏ [느낀점](#-느낀점)

<br/>

## **🏆 프로젝트 소개**

- 프로젝트 제목
  - 학습 나침반 : 학원 정보 제공 웹 사이트

- 프로젝트 목적
  - 학원을 알아보는 사람들이 지역, 과목, 수준 등 다양한 요건을 기반으로 학원을 검색하여 정보를 찾을 수 있도록 하는 플랫폼을 제공

- 바로 가기: https://koreait-j-23-2-2.github.io/compass_front

- 제작 기간
  - 2023.10.25 ~ 2023.11.29

- 주요 기능
  - 회원가입 및 로그인
  - 다양한 검색 옵션 제공
  - 학원 상세 정보 제공
  - 관심학원 등록
  - 학원 등록 및 정보수정 기능
  - 광고 기능
  - 리뷰 작성, 수정, 삭제
  - 문의 작성 및 답변

<br/>

## **👨‍💻 참여자**

<br/>

> **팀장: 변정민** 
- 주요 일정 조율 및 팀원 관리
- ERD 작성 및 DB 설계
- 등록 페이지
    - 학원 등록 DB저장(firebase 이용)
    - firebase 업로드시 interrupt 해결: 프로그레스바 추가 및 다음 업로드 차단
- 상세 페이지
    - 각 DB에서 데이터 불러오기(학원DB, 학원정보DB, 편의사항 DB, 수강연령DB, 수업정보DB)
    - 후기 별점 기능(학원 후기 목록 불러오기, 후기 작성, 수정, 삭제)
    - 학원 관리자는 본인 학원에 리뷰 작성 차단 
- 학생 마이페이지(작성한 후기)
    - 후기 별점 기능(본인이 작성한 후기 목록 불러오기, 후기 수정, 삭제)
<br/>

> **팀원: 정가영**
- 라우트 설정
- OAuth2로그인, 회원가입 기능
- 개인 정보 수정
- 이메일 인증
- 관리자 마이페이지: 학원 승인 기능
- 학원 관리자 마이페이지 
    - 학원 신청 목록(승인 대기, 승인 거절 학원 확인), 
    - 나의 학원(학원 상세 정보 수정)
- 전체 Security 보안, Jwt 토큰
<br/>

> **팀원: 김채원** 
- ERD 작성 및 DB 설계
- 홈: 필터링 매개변수 전달
- 학원 찾기 페이지
    - 학원 필터링(지역, 분야, 이름, 편의시설, 수강연령)
    - 필터링 모달(지역, 카테고리)
- 문의 구현
    - 학생: 문의 작성 및 답변 확인
    - 학원 관리자: 문의 작성 및 답변 확인/문의 답변
<br/>

> **팀원: 이지우**
- 라우트 설정
- 카카오페이 결제 기능
- 학생, 학원관리자 좋아요 기능CRUD
- roleId 값의 따라 mypage 바꾸기
- 유효한 광고 목록
- 리다이렉션
- 후기 작성 권한 관리

<br/>

## **🛠 개발 도구**

### FrontEnd

<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white"/> <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 

### BackEnd

<img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"> <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"> <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> <img src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white">

### 형상 관리
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white">

<br/>

## **⏰ 프로젝트 일정**
![프로젝트_일정](https://github.com/KoreaIt-J-23-2-2/compass_front/assets/137966126/ec7e9d78-4394-4041-8e00-5279012a3ff0)
<br/>

## **🔗 API명세서와 ERD설계도**

### API명세서
https://www.notion.so/bc3babdfb67544f3a07ad13bd6ce9a2a?v=30e68966d92344eca0545ce9f63ecf2b
### ERD설계도
![compass_ERD](https://github.com/KoreaIt-J-23-2-2/compass_front/assets/137966126/21049342-b7a5-442f-bb81-29f020218ae5)
<br/>

## **📝 메뉴 구조도**
![메뉴구조도 drawio](https://github.com/KoreaIt-J-23-2-2/compass_front/assets/137966126/0cf6550d-9b1d-4dfc-bf4a-00d20212c1cc)
<br/>

## **🖥 화면 구현 및 코드 리뷰**


### **회원가입 및 로그인**
<details>
<summary>로그인 유효성 검사 및 예외 처리 영상 그 외 토큰 부여 및 권한 코드 리뷰</summary>

![회원가입 및 로그인](https://github.com/KoreaIt-J-23-2-2/compass_front/assets/137989664/9d67bee5-eb25-4dd6-910d-f4e482bd4098)

<div markdown="1">

## **OAuth2 로그인**
  
### **Front End**
  
**html 코드**

```html
    <div css={S.SLoginBox}>
        <img src={MainLogo} alt="" css={S.SMainLogo}/>
        <div css={S.SkakaoLoginBtn}><img css={S.SKakaoBtn} src={kakaologin} onClick= {handleKaKaoLogin} /></div>
        <div css={S.SNaverLoginBtn}><img css={S.SNaverBtn} src={naverlogin} onClick= {handleNaverLogin} /></div>
    </div>
```

</br>

- 네이버, 카카오 아이콘을 클릭시 해당 계정으로 로그인


</br>

**로그인**

```javascript
    const handleKaKaoLogin = () => {
        window.location.href = "https://3-34-44-250.sslip.io/oauth2/authorization/kakao";
    }

    const handleNaverLogin = () => {
        window.location.href = "https://3-34-44-250.sslip.io/oauth2/authorization/naver";
    }
```
- window.location.href를 통해 브라우저의 현재 위치를 해당 주소로 변경, 이 URL은 각각 카카오, 네이버 로그인을 처리하는 서버 엔드포인트로 이동


<br/>

---

### **Back End**

**application.yml**

```html
spring:
  profiles.include:
    - secret
  security:
    oauth2:
      client:
        registration:
          kakao:
            clientId: 2dc5c2ec61e5efeb6b952c1b5d381821
            redirectUri: https://3-34-44-250.sslip.io/login/oauth2/code/kakao
            authorizationGrantType: authorization_code
            clientAuthenticationMethod: POST
            clientName: Kakao
          naver:
            clientId: i4eW_RUc74M3Ci96bJuG
            redirectUri: https://3-34-44-250.sslip.io/oauth2/code/naver
            authorizationGrantType: authorization_code
            clientAuthenticationMethod: POST
            clientName: Naver
        provider:
          kakao:
            authorizationUri: https://kauth.kakao.com/oauth/authorize
            tokenUri: https://kauth.kakao.com/oauth/token
            userInfoUri: https://kapi.kakao.com/v2/user/me
            userNameAttribute: id
          naver:
            authorizationUri: https://nid.naver.com/oauth2.0/authorize
            tokenUri: https://nid.naver.com/oauth2.0/token
            userInfoUri: https://openapi.naver.com/v1/nid/me
            userNameAttribute: response
```

- 카카오, 네이버에 대한 OAuth 2.0 클라이언트 정보를 정의

<br/>

**application-secret.yml**
```html
  security:
    oauth2:
      client:
        registration:
          naver:
            clientSecret:
```

- clientSecret 키는 유출시 보안상의 위험이 있기 때문에 application-secret에 따로 숨김

<br/>


**SecurityConfig(웹 보안 설정)**


```java
@EnableWebSecurity
@Configuration
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final OAuth2SuccessHandler oAuth2SuccessHandler;
    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    private final PrincipalEntryPoint principalEntryPoint;
    private final PrincipalUserDetailsService principalUserDetailsService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors();            // WebMvcConfig의 CORS 설정을 적용
        http.csrf().disable();  // CSRF 보호 비활성화
        http.authorizeRequests()
                .antMatchers("/api/auth/**", "/api/option/**",
                        "/api/academies", "/api/academy/**",
                        "/api/review/**", "/api/purchase/**", "/api/academy/check/**",
                        "/api/ad/academies/random")
                .permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
                .exceptionHandling()
                .authenticationEntryPoint(principalEntryPoint)
                .and()
                .oauth2Login()
                .successHandler(oAuth2SuccessHandler)
                .userInfoEndpoint()
                .userService(principalUserDetailsService);
    }
}
```

- OAuth 2.0을 이용한 소셜 로그인 및 JWT(JSON Web Token) 기반의 인증에 관련된 보안 설정
- JwtAuthenticationFilter : jwt 인증 관련 필터
- OAuth2SuccessHandler에서 OAuth2Login이 성공했을 때의 로직을 처리(마지막에 실행됨)
- PrincipalUserDetailsService : 사용자 정보를 로드하여 OAuth2User를 return 하는 클래스

<br/>

**PrincipalUserDetailsService**

``` java
@Service
public class PrincipalUserDetailsService implements OAuth2UserService {

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2UserService<OAuth2UserRequest, OAuth2User> oAuth2UserService = new DefaultOAuth2UserService();    // 사용자 정보 로드하기 위한 서비스 생성
        OAuth2User oAuth2User = oAuth2UserService.loadUser(userRequest);    // 사용자 정보 로드

        Map<String, Object> attributes = oAuth2User.getAttributes();    // 사용자 정보에서 속성 얻어옴.

        String provider = userRequest.getClientRegistration().getClientName();  // Naver, Kakao 등 provider 이름
        Map<String, Object> response = null;
        switch (provider) {
            case "Naver":
                response = (Map<String, Object>) attributes.get("response");    // 속성에서 response 부분 꺼냄(id, email, name 등의 실질적 사용자 데이터)
                break;
            case "Kakao":
                response = (Map<String, Object>) attributes.get("properties");
                response.put("id", attributes.get("id"));
                break;
        }
        response.put("provider", provider); // provider 속성을 추가해줌.
        return new DefaultOAuth2User(new ArrayList<>(), response, "id");
    }
}
```
- OAuth2 요청을 받아 사용자 정보를 로드해서 provider에 따른 구조대로 필요한 정보를 response Map에 담아준다.


<br/>

**OAuth2SuccessHandler**

``` java
@Component
@RequiredArgsConstructor
public class OAuth2SuccessHandler implements AuthenticationSuccessHandler {

    private final AuthMapper authMapper;
    private final JwtProvider jwtProvider;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        String oauth2Id = authentication.getName(); // PrincipalUserDetailsService의 loadUser에서 return 했던 DefaultOAuth2User의 key값
        User user = authMapper.findUserByOauth2Id(oauth2Id);

        if (user == null) { // 소셜 로그인 돼있는 유저가 없다면 -> 새로 회원가입
            DefaultOAuth2User defaultOAuth2User = (DefaultOAuth2User) authentication.getPrincipal();
            String provider = defaultOAuth2User.getAttributes().get("provider").toString();

            // 회원가입이 안 되었을 때 OAuth2 계정 회원가입 페이지로 이동
            response.sendRedirect("https://3-34-44-250.sslip.io/auth/detail/signup" +
                    "?oauth2Id=" + oauth2Id +
                    "&provider=" + provider);
            return;
        }
        // 소셜 로그인 돼있는 유저가 있다면 -> 로그인
        PrincipalUser principalUser = new PrincipalUser(user);
        UsernamePasswordAuthenticationToken authenticationToken
                = new UsernamePasswordAuthenticationToken(principalUser, null, principalUser.getAuthorities());
        String accessToken = jwtProvider.generateToken(authenticationToken);
        response.sendRedirect("https://3-34-44-250.sslip.io/auth/oauth2/signin" +  // client로 token을 보낸다
                "?token=" + URLEncoder.encode(accessToken));
    }
}
```
- DB에서 요청을 보낸 유저의 oauth2Id가 있는지 확인
- 소셜 로그인 돼있는 유저가 없다면 회원가입 페이지로 redirect를 보낸다.
- 소셜 로그인 돼있는 유저가 있다면 토큰을 담아 클라이언트로 redirect를 보낸다.

<br/>

---

### **Front End**

**SigninOauth2**

``` javascript
function SigninOauth2(props) {  // /auth/oauth2/signin
    // 서버로부터 redirection해서 들어온 token을 localStorage에 저장하는 과정
    const [ searchParams, setSearchParams ] = useSearchParams();
    const queryClient = useQueryClient();

    localStorage.setItem("accessToken", "Bearer " + searchParams.get("token"));
    queryClient.refetchQueries(["getPrincipal"]);

    return <Navigate to={"/"} />
}
```
- 백엔드에서 OAuth2Id 유저가 있을 시에 redirect 되는 경로 파일
- localStorage에 accessToken을 저장해둔다.

<br/>

---

<br/>

## **회원가입**

### **FrontEnd**


**html 코드**
``` html
<div css={S.SContainer}>
    <h1 css={S.STitle}>회원가입</h1>
    <h2 css={S.STitle2}>필요한 정보들을 기입해주세요.</h2>

    <div css={S.SInputBox}>
        <div css={S.SInuptCompartment}>
            <div><input type="email" name="email" placeholder='이메일' onChange={handleInputChange}/></div>
            <div><input type="text" name="name" placeholder='이름' onChange={handleInputChange}/></div>
            <div><input type="text" name="nickname" placeholder='닉네임' onChange={handleInputChange}/></div>
    <div><input type="text" name="phone" placeholder='전화번호' onChange={handleInputChange}/></div>
        </div>
   </div>

    <div css={S.SSigninBtnBox}>
        <div css={S.SSigninTitle}>
            <span>이미 계정이 있으신가요?</span>
        </div>
        <button css={S.SSigninBtn} onClick={handleSigninOnClick}>로그인</button>
    </div>
    <div css={S.SSignupBtnBox}>
        <button css={S.SSignupBtn} onClick={handleSignupSubmit}>가입하기</button>
    </div>
</div>
```
- 회원가입시 필요한 회원 정보를 더 기입


<br/>

**회원가입**

``` javascript
    const [ searchParams, setSearchParams ] = useSearchParams();
    const navigate = useNavigate();

    const [ signupUser, setSignupUser ] = useState({
        email: "",
        oauth2Id: searchParams.get("oauth2Id"),
        name: "",
        nickname: "",
        phone: "",
        provider: searchParams.get("provider")
    });

    const handleSigninOnClick = () => {
        navigate("/auth/signin")
    }

    const handleInputChange = (e) => {
        setSignupUser({
            ...signupUser,
            [e.target.name]: e.target.value
        })
    }

    const handleSignupSubmit = async () => {
        try {
            const response = await instance.post("/auth/signup", signupUser);
            alert("회원가입 완료");
            window.location.replace("/auth/signin");
        } catch (error) {
            console.error(error);
            if(Object.keys(error.response.data).includes("email")) {
                alert("이미 사용중인 이메일입니다. 다시 입력하세요.");
            } else if(Object.keys(error.response.data).includes("nickname")) {
                alert("이미 사용중인 닉네임입니다. 다시 입력하세요.");
            }
        }
    }
```
- 회원가입 버튼 클릭시 handleSignupSubmit 함수 실행, /auth/signup으로 post 요청

<br/>

---

### **Back End**

**AuthController**
``` java
    @ValidAop
    @PostMapping("/api/auth/signup")
    public ResponseEntity<?> signup(
            @Valid @RequestBody SignupReqDto signupReqDto,
            BindingResult bindingResult) {
        return ResponseEntity.ok(authService.signup(signupReqDto));
    }
```
- ValidAop로 유효성 검사

**AuthService**
``` java
    public boolean signup(SignupReqDto signupReqDto) {
        User user = signupReqDto.toUser();
        int errorCode = authMapper.checkDuplicate(user);
        if(errorCode > 0) {
            responseDuplicateError(errorCode);
        }
        return authMapper.saveUser(user) > 0;
    }

    public void responseDuplicateError(int errorCode) {
        Map<String, String> errorMap = new HashMap<>();
        switch (errorCode) {
            case 1:
                errorMap.put("email", "이미 사용중인 이메일입니다.");
                break;
            case 2:
                errorMap.put("nickname", "이미 사용중인 닉네임입니다.");
                break;
            case 3:
                errorMap.put("email", "이미 사용중인 이메일입니다.");
                errorMap.put("nickname", "이미 사용중인 닉네임입니다.");
                break;
        }
        throw new DuplicateException(errorMap);
    }
```
- responseDuplicateError로 닉네임, 이메일 중복 검사
- 에러 코드가 0이면 정상 회원가입

<br/>

**auth_mapper**
``` xml
<insert id="saveUser">
        insert into user_tb
        values(
            0,
            #{email},
            #{oauth2Id},
            #{name},
            #{nickname},
            #{phone},
            #{provider},
            0,
            1
        )
    </insert>
    <select id="checkDuplicate"
            parameterType="com.aws.compass.entity.User"
            resultType="java.lang.Integer">
        select
            (select
                if(count(*) > 0, 1, 0)
            from
                user_tb
            where
                email = #{email}
            )
            + (select
                if(count(*) > 0, 2, 0)
            from
                user_tb
            where
                nickname = #{nickname}
            ) as result
    </select>
```
- user_tb DB에 회원 정보 저장 (enabled: 0(이메일 미인증), role: 1(학생))
- email, nickname 중복 검사(0: 중복x, 1: 이메일 중복, 2: 닉네임 중복, 3: 둘 다 중복)


</div>
</details>

<br/>



### **홈 / 학원찾기**

<details>
<summary>모달 코드 리뷰</summary>
<div markdown="1">

## FrontEnd

각각 다른 컴포넌트와 페이지에서 선택한 조건들을 학원 찾기 페이지에서 모아 필터링하기 때문에 store폴더에서 atom으로 조건들에 대한 상태를 관리한다.

```javascript
import { atom } from 'recoil';

// 지역
export const selectedLocationState = atom({
    key: 'selectedLocationState',
    default: {
        atpt_ofcdc_sc_code: "",
        si_do_name:"",
        admst_zone_nm: ""
    }
});

// 카테고리(분야)
export const selectedCategoryState = atom({
    key: 'selectedCategoryState',
    default: {
        realm_sc_nm: "",
        le_crse_nm: ""
    }
});

// 학원 이름
export const selectedContentState = atom({
    key: 'selectedContentState',
    default: ""
});

// 수강 연령
export const selectedAgeState = atom({
    key: 'selectedAgeState',
    default: []
});

// 시설 및 편의사항
export const selectedConvenienceState = atom({
    key: 'selectedConvenienceState',
    default: []
});
```
### LocationModal

```javascript
const [selectedLocation, setSelectedLocation] = useRecoilState(selectedLocationState); // 선택된 교육청, 행정구역 정보
const [ educationOfficeOptions, setEducationOfficeOptions ] = useState([]); // 교육청 목록
const [ educationOfficeOption, setEducationOfficeOption ] = useState(selectedLocation.atpt_ofcdc_sc_code); // 선택된 교육청
const [ siDoName, setSiDoName ] = useState(selectedLocation.si_do_name);  // 선택된 교육청에서 '교육청'부분을 때낸다
const [ administrativeDistrictOptions, setAdministrativeDistrictOptions ] = useState([]); // 행정구역 목록
const [ administrativeDistrictOption, setAdministrativeDistrictOption ] = useState(selectedLocation.admst_zone_nm); // 선택된 행정구역

// educationOfficeOption이 선택되었거나 administrativeDistrictOption이 존재하는 경우에만 districtOptionShow를 true로 설정
const isDistrictOptionShow = !!educationOfficeOption || !!administrativeDistrictOption;

// educationOfficeOption과 일치하는 administrativeDistrictOptions 필터링
const filteredAdministrativeDistrictOptions = administrativeDistrictOptions.filter(option => {
    return option.educationOfficeCode === educationOfficeOption;
});

<ReactModal isOpen={modalIsOpen} onRequestClose={closeModal} css={S.SLayout}>
    <div css={S.STitle}>지역 선택</div>
    <div css={S.SListContainer}>
        <ul css={S.SEducationOfficeList}>
            {educationOfficeOptions.map((option) => (
                <li key={option.value} onClick={() => {
                    setEducationOfficeOption(option.value);
                    setAdministrativeDistrictOption("");
                    setSiDoName(option.label);
                    }}
                    css={[
                        S.SEducationOfficeListItem, // 기존 스타일을 포함
                        option.value === educationOfficeOption && S.SCategoryListItemSelected // 선택된 li
                    ]}
                >
                    {option.label}
                </li>
            ))}
        </ul>
        <ul css={S.SDistrictOptionList(isDistrictOptionShow)}>    // districtOptionShow가 true일 때 보인다.
            {filteredAdministrativeDistrictOptions.map((option) => (
                <li key={option.administrativeDistrictId} 
                    onClick={() => {setAdministrativeDistrictOption(option.administrativeDistrictName)}}
                    css={[
                        S.SDistrictOptionListItem, // 기존 스타일을 포함
                        option.administrativeDistrictName === administrativeDistrictOption && S.SDistrictOptionListItemSelected // 선택된 li에 대한 스타일
                    ]}
                >
                    {option.administrativeDistrictName}
                </li>
            ))}
        </ul>
    </div>
    <div css={S.ButtonContainer}>
        <button onClick={handleResetButton} css={GS.SButton}>초기화</button>
        <button onClick={closeModal} css={GS.SButton}>선택</button>
    </div>
</ReactModal>
```

### CategoryModal

```javascript
const [ selectedCategory, setSelectedCategory ] = useRecoilState(selectedCategoryState); // 선택된 카테고리, 상세 카테고리 정보  
const [ categoryOptions, setCategoryOptions ] = useState([]); // 카테고리 목록
const [ categoryOption, setCategoryOption ] = useState(selectedCategory.realm_sc_nm); // 선택된 카테고리
const [ categoryDetailOptions, setCategoryDetailOptions ] = useState([]); // 상세 카테고리 목록
const [ categoryDetailOption, setCategoryDetailOption ] = useState(selectedCategory.le_crse_nm); // 선택된 상세 카테고리

// educationOfficeOption이 선택되었거나 administrativeDistrictOption이 존재하는 경우에만 districtOptionShow를 true로 설정
const isDetailOptionShow = !!categoryOption || !!categoryDetailOption;

// categoryOption 일치하는 categoryDetailOptions 필터링
const filteredCategoryDetailOptions = categoryDetailOptions.filter(option => {
    return option.categoryValue === categoryOption;
});

<ReactModal isOpen={modalIsOpen} onRequestClose={closeModal} css={S.SLayout}>
    <div css={S.STitle}>카테고리 선택</div>
    <div css={S.SListContainer}>
        <ul css={S.SCategoryList}>
        {categoryOptions.map((option) => (
            <li
            key={option.value}
            onClick={() => {
                setCategoryOption(option.value);
                setCategoryDetailOption("");
            }}
            css={[
                S.SCategoryListItem, // 기존 스타일을 포함
                option.value === categoryOption && S.SCategoryListItemSelected, // 선택된 li에 대한 스타일
            ]}
            >
            {option.label}
            </li>
        ))}
        </ul>
        <ul css={S.SCategoryDetailList(isDetailOptionShow)}>    // districtOptionShow가 true일 때 보인다. 
        {filteredCategoryDetailOptions.map((option) => (
            <li
            key={option.categoryDetailValue}
            onClick={() => {
                setCategoryDetailOption(option.categoryDetailValue);
            }}
            css={[
                S.SCategoryDetailListItem, // 기존 스타일을 포함
                option.categoryDetailValue === categoryDetailOption &&
                S.SCategoryDetailListItemSelected, // 선택된 li에 대한 스타일
            ]}
            >
            {option.categoryDetailName}
            </li>
        ))}
        </ul>
    </div>
    <div css={S.ButtonContainer}>
        <button onClick={handleResetButton} css={GS.SButton}>
        초기화
        </button>
        <button onClick={closeModal} css={GS.SButton}>
        선택
        </button>
    </div>
</ReactModal>;
```
***

</br>

- 입력 받은 값 처리


### Location
```javascript
// 선택 버튼
const closeModal = () => {
    // 지역 검색 정보
    setSelectedLocation({
        ...selectedLocation,
        atpt_ofcdc_sc_code: educationOfficeOption,
        si_do_name: siDoName,
        admst_zone_nm: administrativeDistrictOption
    })
    setModalIsOpen(false);
    enableBodyScroll();
};

// 초기화
const handleResetButton = () => {
    setEducationOfficeOption("");
    setAdministrativeDistrictOption("");
    setSelectedLocation({
        atpt_ofcdc_sc_code: "",
        si_do_name: "",
        admst_zone_nm: ""
    })
}
```

### Category
```javascript
// 선택 버튼
const closeModal = () => {
    // api로 넘길 카테고리 검색 정보
    setSelectedCategory({
        ...selectedCategory,
        realm_sc_nm: categoryOption,
        le_crse_nm: categoryDetailOption
    })
    setModalIsOpen(false);
    enableBodyScroll();
};

// 초기화
const handleResetButton = () => {
    setCategoryOption("");
    setCategoryDetailOption("");
    setSelectedCategory({
        realm_sc_nm: "",
        category_nm: "",
        le_crse_nm: ""
    });
}
```

***

</br>

- 요청


### LocationModal

```javascript

// 교육청 목록 요청
const educationOfficeOptionsState = useQuery(["educationOfficeOptionsState"], async () => {
    try {
        return await instance.get("/option/education-offices");
    }catch(error) {
        console.error(error);
    }
},
{
    retry: 0,
    refetchOnWindowFocus: false,
    onSuccess: response => {
        setEducationOfficeOptions(response.data.map(option => {
            const label = option.educationOfficeName.substring(0, option.educationOfficeName.length - 3);
            return {value: option.educationOfficeCode, label: label};
        }));
    }
});

// 행정구역 목록 요청
const getAdministrativeDistrictOptionsState = useQuery(["getAdministrativeDistrictOptionsState"], async () => {
    try {
        return await instance.get("/option/administrative-districts");
    } catch (error) {
        console.error(error);
    }
},{
    retry: 0,
    refetchOnWindowFocus: false,
    onSuccess: response => {
        setAdministrativeDistrictOptions(response.data);
    }
});

```

### CategoryModal

``` javascript

// 분야명 목록 요청
const categoryOptionsState = useQuery(["categoryOptionsState"], async () => {
    try {
        return await instance.get("/option/categories");
    }catch(error) {
        console.error(error);
    }
},
{
    retry: 0,
    refetchOnWindowFocus: false,
    onSuccess: response => {
        setCategoryOptions(response.data.map(option => {
            return { value: option.categoryValue, label: option.categoryName }
        }))
    }
});

// 교습과정명 목록 요청
const categoryDetailOptionsState = useQuery(["categoryDetailOptionsState"], async () => {
    try {
        return await instance.get("/option/category-details");
    }catch(error) {
        console.error(error);
    }
},
{
    retry: 0,
    refetchOnWindowFocus: false,
    onSuccess: response => {
        setCategoryDetailOptions(response.data);
    }
});

```

***

## BackEnd

### OptionsController
```java
public class OptionsController {

    private final OptionService optionService;

    // 교육청 전체 불러오기
    @GetMapping("/education-offices")
    public ResponseEntity<?> getEducationOffices() {
        return ResponseEntity.ok(optionService.getEducationOfficeList());
    }

    // 행정구역 전체 불러오기
    @GetMapping("/administrative-districts")
    public ResponseEntity<?> getAdministrativeDistrict() {
        return  ResponseEntity.ok(optionService.getAdministrativeDistrictList());
    }

    // 분야명 전체 불러오기
    @GetMapping("/categories")
    public ResponseEntity<?> getCategories() {
        return  ResponseEntity.ok(optionService.getCategoryList());
    }

    // 교습 과정 목록명 전체 불러오기
    @GetMapping("/category-details")
    public ResponseEntity<?> getCategoryDetails() {
        return  ResponseEntity.ok(optionService.getCategoryDetailList());
    }
}
```

목록 전체를 불러오는 GET요청

### OptionService

```java
public class OptionService {
    private final OptionMapper optionMapper;

    public List<EducationOfficeRespDto> getEducationOfficeList() {
        List<EducationOfficeRespDto> educationOfficeRespDtos = new ArrayList<>();
        optionMapper.getEducationOfficeList().forEach(educationOffice -> educationOfficeRespDtos.add(educationOffice.toEducationOfficeDto()));
        return educationOfficeRespDtos;
    }

    public  List<AdministrativeDistrictRespDto> getAdministrativeDistrictList() {
        List<AdministrativeDistrictRespDto> administrativeDistrictRespDtos = new ArrayList<>();
        optionMapper.getAdministrativeDistrictList().forEach(administrativeDistrict -> administrativeDistrictRespDtos.add(administrativeDistrict.toAdministrativeDistrictDto()));
        return administrativeDistrictRespDtos;
    }

    public List<CategoryRespDto> getCategoryList() {
        List<CategoryRespDto> categoryRespDtos = new ArrayList<>();
        optionMapper.getCategoryList().forEach(category -> categoryRespDtos.add(category.toCategoryDto()));
        return categoryRespDtos;
    }

    public List<CategoryDetailRespDto> getCategoryDetailList() {
        List<CategoryDetailRespDto> categoryDetailRespDtos = new ArrayList<>();
        optionMapper.getCategoryDetailList().forEach(categoryDetail -> categoryDetailRespDtos.add(categoryDetail.toCategoryDetailDto()));
        return categoryDetailRespDtos;
    }
}
```

### repository - OptionMapper
```java
@Mapper
public interface OptionMapper {
    public List<EducationOffice> getEducationOfficeList();
    public List<AdministrativeDistrict> getAdministrativeDistrictList();
    public List<Category> getCategoryList();
    public List<CategoryDetail> getCategoryDetailList();
}
```

### option_mapper

```xml
<mapper namespace="com.aws.compass.repository.OptionMapper">

    <resultMap id="educationOfficeMap" type="com.aws.compass.entity.EducationOffice">
        <id property="educationOfficeId" column="education_office_id" />
        <result property="educationOfficeName" column="education_office_name" />
        <result property="educationOfficeCode" column="education_office_code" />
    </resultMap>
    <resultMap id="administrativeDistrictMap" type="com.aws.compass.entity.AdministrativeDistrict">
        <id property="administrativeDistrictId" column="administrative_district_id" />
        <result property="educationOfficeCode" column="education_office_code" />
        <result property="administrativeDistrictName" column="administrative_district_name" />
    </resultMap>
    <resultMap id="categoryMap" type="com.aws.compass.entity.Category">
        <id property="categoryId" column="category_id" />
        <result property="categoryValue" column="category_value" />
        <result property="categoryName" column="category_name" />
    </resultMap>
    <resultMap id="categoryDetailMap" type="com.aws.compass.entity.CategoryDetail">
        <id property="categoryDetailId" column="category_detail_id" />
        <result property="categoryValue" column="category_value" />
        <result property="categoryDetailValue" column="category_detail_value" />
        <result property="categoryDetailName" column="category_detail_name" />
    </resultMap>

    <select id="getEducationOfficeList" resultMap="educationOfficeMap">
        select
            education_office_id,
            education_office_name,
            education_office_code
        from
            education_office_tb
    </select>

    <select id="getAdministrativeDistrictList" resultMap="administrativeDistrictMap">
        select
            administrative_district_id,
            education_office_code,
            administrative_district_name
        from
            administrative_district_tb
    </select>

    <select id="getCategoryList" resultMap="categoryMap">
        select
            category_id,
            category_value,
            category_name
        from
            category_tb
    </select>

    <select id="getCategoryDetailList" resultMap="categoryDetailMap">
        select
            category_detail_id,
            category_value,
            category_detail_value,
            category_detail_name
        from
            category_detail_tb
    </select>
</mapper>
```
</div>
</details>


<details>
<summary>홈 코드 리뷰</summary>
<div markdown="1">


## FrontEnd

```javascript
const navigate = useNavigate();

const [ selectedLocation, setSelectedLocation ] = useRecoilState(selectedLocationState); // 지역
const [ selectedCategory, setSelectedCategory ] = useRecoilState(selectedCategoryState); // 카테고리
const [ selectedContent, setSelectedContent ] = useRecoilState(selectedContentState); // 학원 이름

const [ modalIsOpen, setModalIsOpen ] = useState(false);
const [ categoryModalIsOpen, setCategoryModalIsOpen ] = useState(false);

// 모달이 열릴 때 스크롤 막기
const disableBodyScroll = () => {
    document.body.style.overflow = 'hidden';
}

// 모달이 닫힐 때 스크롤 복원
const enableBodyScroll = () => {
    document.body.style.overflow = 'auto';
}

const openLocationModal = () => {
    setModalIsOpen(true);
    disableBodyScroll();
};

const openCategoryModal = () => {
    setCategoryModalIsOpen(true);
    disableBodyScroll();
};

const handleInputOnChange = (e) => {
    setSelectedContent(e.target.value);
}

const handleSearch = () => {
    navigate("academy/find/1");
}

<>
    <div css={S.SMainLayout}>
        <div css={S.SMainContainer}>
            <div css={S.STextContainer}>
                <h1><b>학습 나침반</b>에서</h1>
                <h1>쉽고 빠르게 <b>원하는 학원을 찾아보세요.</b></h1>
            </div>
            <div css={S.SImgBox}>
                <img  css={S.SImgBox} src={HomeImg} alt="" />
            </div>
        </div>
    </div>
    <RootContainer>
        <div css={S.SSearchContainer}>
            <div css={S.SInputBox}>
                <input type="text" placeholder='학원명, 지역, 과목으로 검색해보세요' onChange={handleInputOnChange}/>
            </div>
            <div onClick={openLocationModal}>
                <SelectModalBtn>
                    {selectedLocation.atpt_ofcdc_sc_code
                        ? `${selectedLocation.si_do_name} ${selectedLocation.admst_zone_nm}`
                        : "지역 선택"
                    }   
                </SelectModalBtn>
            </div>
            <div onClick={openCategoryModal}>
                <SelectModalBtn>
                    {selectedCategory.realm_sc_nm
                        ? `${selectedCategory.category_nm} ${selectedCategory.le_crse_nm}`
                        : "카테고리 선택"
                    }
                </SelectModalBtn>
            </div>
            <SearchBtn onClick={handleSearch}/>
        </div>
        <div css={S.SLinkContainer}>
            <div css={S.SRegistContainer}>
                <div css={S.SImgCover}>
                    <img css={S.SImg} src={teacher} alt="" />
                </div>
                <div css={S.SCommentContainer}>
                    <div css={S.SRegistTitle}>학원 관리자 등록하기</div>
                    <div css={S.SRegistComment}>학원 나침반에 등록해서 나의 학원을 홍보해보세요!</div>
                    <LinkBtn link={"/academy/regist"} btn={"등록하기"}/>
                </div>
            </div>
            <div css={S.SRegistContainer}>
                <div css={S.SImgCover}>
                    <img css={S.SImg} src={student} alt="" />
                </div>
                <div css={S.SCommentContainer}>
                    <div css={S.SRegistTitle}>나의 관심 학원 보기</div>
                    <div css={S.SRegistComment}>관심있는 학원에 하트를 누르고 한 번에 볼 수 있어요!</div>
                    <LinkBtn link={"/account/mypage/like/1"} btn={"보러가기"} />
                </div>
            </div>
        </div>
        <LocationModal modalIsOpen={modalIsOpen} 
            setModalIsOpen={setModalIsOpen} 
            enableBodyScroll={enableBodyScroll}
            setSelectedLocation={setSelectedLocation}/>
        <CategoryModal modalIsOpen={categoryModalIsOpen} 
            setModalIsOpen={setCategoryModalIsOpen} 
            enableBodyScroll={enableBodyScroll}
            setSelectedCategory={setSelectedCategory}/>
    </RootContainer>
</>

```

- 모달을 열어 선택 시 atom으로 전역에 조건 저장 > 학원 찾기 페이지 랜더링 시 전역에 저장된 조건에 맞는 학원 목록 표시
- 로그인 하지 않고 LinkBtn 클릭 시 alert창 '로그인 후 이용해주세요' 표시 후 로그인 페이지로 이동
- 헤더의 네비게이션바로 이동 시 전역 상태 초기화


</br>

</div>
</details>


<details>
<summary>상세 검색 코드 리뷰</summary>
<div markdown="1">

## FrontEnd
지역, 카테고리와 마찬가지로 store폴더의 searchOptions에서 atom으로 조건들에 대한 상태를 관리한다.

```javascript
import { atom } from 'recoil';

export const selectedAgeState = atom({
    key: 'selectedAgeState',
    default: []
});

export const selectedConvenienceState = atom({
    key: 'selectedConvenienceState',
    default: []
});
```


### FindAcademiesSidebar

```javascript
const [ selectedAgeOptions, setSelectedAgeOptions ] = useRecoilState(selectedAgeState);
const [ selectedConvenienceOptions, setSelectedConvenienceOptions ] = useRecoilState(selectedConvenienceState);

const reset = () => {
    setSelectedAgeOptions([]);
    setSelectedConvenienceOptions([]);
}

<div css={S.FilterLayout}>
    <div css={S.InitialContainer}>
        <h2>상세 검색</h2>
        <button onClick={reset}>필터 초기화</button>
    </div>
    <AgeOptions />
    <ConvenienceOptions />
</div>
```
수강 연령과 시설 및 편의사항을 초기화 할 수 있는 버튼을  AgeOptions와 ConvenienceOptions의 전역 상태에 두어 관리할 수 있게함

### AgeOptions
```javascript
const [ ageOptions, setAgeOptions ] = useState([]);
const [ selectedAgeOptions, setSelectedAgeOptions ] = useRecoilState(selectedAgeState);

<div css={S.FilterContainer}>
    <h3>수강 연령</h3>
    {ageOptions?.map((option) => (
        <div key={option.value}>
            <input
                type="checkbox"
                checked={selectedAgeOptions.includes(option.value)}
                onChange={() => handleCheckboxChange(option.value)}
            />
            {option.label}
        </div>
    ))}
</div>
);
```
### ConvenienceOptions 
```javascript
const [ convenienceOptions, setConvenienceOptions ] = useState([]);
const [ selectedConvenienceOptions, setSelectedConvenienceOptions ] = useRecoilState(selectedConvenienceState);

<div css={S.FilterContainer}>
    <h3>시설 및 편의사항</h3>
    {convenienceOptions?.map((option) => (
        <div key={option.value}>
            <input
                type="checkbox"
                checked={selectedConvenienceOptions.includes(option.value)}
                onChange={() => handleCheckboxChange(option.value)}
            />
            {option.label}
        </div>
    ))}
</div>
```

***

- 입력받은 값 처리

### AgeOptions
```javascript
// 선택된 ConvenienceOption의 value값을 리스트에 추가 또는 제거
const handleCheckboxChange = (value) => {
    setSelectedAgeOptions((prevOptions) => {
        const updatedList = prevOptions.includes(value)
            ? prevOptions.filter(option => option !== value)
            : [...prevOptions, value];

        return updatedList;  // 수정된 배열을 직접 반환
    });
};
```

### ConvenienceOptions 
```javascript
// 선택된 ConvenienceOption의 value값을 리스트에 추가 또는 제거
const handleCheckboxChange = (value) => {
    setSelectedConvenienceOptions((prevOptions) => {
        const updatedList = prevOptions.includes(value)
            ? prevOptions.filter(option => option !== value)
            : [...prevOptions, value];

        return updatedList;  // 수정된 배열을 직접 반환
    });
};
```

***
- 요청

### AgeOptions
```javascript
// 수강 연령 목록  
const ageOptionsState = useQuery(["ageOptionsState"], async () => {
    try {
        return await instance.get("/option/ages");
    }catch(error) {
        console.error(error);
    }
},
{
    retry: 0,
    refetchOnWindowFocus: false,
    onSuccess: response => {
        setAgeOptions(response.data.map(option => {
            return { value: option.ageId, label: option.ageRange }
        }))
    }
});
```

### ConvenienceOptions 
```javascript
// 시설 및 편의사항 목록
const convenienceOptionsState = useQuery(["convenienceOptionsState"], async () => {
    try {
        return await instance.get("/option/conveniences");
    }catch(error) {
        console.error(error);
    }
},
{
    retry: 0,
    refetchOnWindowFocus: false,
    onSuccess: response => {
        setConvenienceOptions(response.data.map(option => {
            return { value: option.convenienceId, label: option.convenienceName }
        }))
    }
});
```

***
</br>

## BackEnd

### OptionsController
```java
public class OptionsController {

    private final OptionService optionService;
    
    // 시설 및 편의사항 전체 불러오기
    @GetMapping("/conveniences")
    public ResponseEntity<?> getConvenienceOptions() {
        return ResponseEntity.ok(optionService.getConvenienceList());
    }

    // 수강 연령 전체 불러오기
    @GetMapping("/ages")
    public ResponseEntity<?> getAgeOptions() {
        return ResponseEntity.ok(optionService.getAgeList());
    }

}
```
목록 전체를 불러오는 GET요청

### OptionsService
```java
public class OptionService {
    private final OptionMapper optionMapper;

    public List<ConvenienceRespDto> getConvenienceList() {
        List<ConvenienceRespDto> convenienceRespDtos = new ArrayList<>();
        optionMapper.getConvenienceList().forEach(convenience -> convenienceRespDtos.add(convenience.toConvenienceDto()));
        return convenienceRespDtos;
    }

    public List<AgeRespDto> getAgeList() {
        List<AgeRespDto> ageRespDtos = new ArrayList<>();
        optionMapper.getAgeList().forEach(age -> ageRespDtos.add(age.toAgeDto()));
        return ageRespDtos;
    }
}
```

### repository - OptionMapper
```java
@Mapper
public interface OptionMapper {
    public List<Convenience> getConvenienceList();
    public List<Age> getAgeList();
}
```

### option_mapper
```xml
<mapper namespace="com.aws.compass.repository.OptionMapper">

    <resultMap id="convenienceMap" type="com.aws.compass.entity.Convenience">
        <id property="convenienceId" column="convenience_id" />
        <result property="convenienceName" column="convenience_name" />
    </resultMap>

    <resultMap id="ageMap" type="com.aws.compass.entity.Age">
        <id property="ageId" column="age_id" />
        <result property="ageRange" column="age_range" />
    </resultMap>


    <select id="getConvenienceList" resultMap="convenienceMap">
        select
            convenience_id,
            convenience_name
        from
            convenience_tb
        order by
            convenience_id
    </select>

    <select id="getAgeList" resultMap="ageMap">
        select
            age_id,
            age_range
        from
            age_tb
        order by
            age_id
    </select>

</mapper>

```

</div>
</details>


<details>
<summary>학원 찾기 코드 리뷰</summary>
<div markdown="1">


## FrontEnd

```javascript
const navigate = useNavigate();
    
const [ selectedLocation, setSelectedLocation ] = useRecoilState(selectedLocationState); // 지역
const [ selectedCategory, setSelectedCategory ] = useRecoilState(selectedCategoryState); // 카테고리
const [ selectedContent, setSelectedContent ] = useRecoilState(selectedContentState); // 학원 이름
const [ inputValue, setInputValue ] = useState(selectedContent); // 학원이름 검색창 

const [ selectedAgeOptions, setSelectedAgeOptions ] = useRecoilState(selectedAgeState); // 수강연령 정보
const [ selectedConvenienceOptions, setSelectedConvenienceOptions ] = useRecoilState(selectedConvenienceState); // 편의사항 정보

const [ classify, setClassify ] = useState("등록순");    

const [ totalCount, setTotalCount ] = useState(0);    // 학원 수
const { page } = useParams();
const [ academyList, setAcademyList] = useState([]);    // 학원 목록

const [ modalIsOpen, setModalIsOpen ] = useState(false);    // Location 모달 열기
const [ categoryModalIsOpen, setCategoryModalIsOpen ] = useState(false);    // Category 모달 열기

// 모달이 열릴 때 스크롤 막기
const disableBodyScroll = () => {
    document.body.style.overflow = 'hidden';
}

// 모달이 닫힐 때 스크롤 복원
const enableBodyScroll = () => {
    document.body.style.overflow = 'auto';
}


<RootContainer>
    <div css={S.SearchLayout}>
        <h1>학원찾기</h1>
        <div css={S.SearchContainer}>    // 선택한 정보가 보이도록 지정
            <div onClick={openLocationModal}>
                <SelectModalBtn>
                    {selectedLocation.atpt_ofcdc_sc_code
                        ? `${selectedLocation.si_do_name} ${selectedLocation.admst_zone_nm}`
                        : "지역 선택"
                    }   
                </SelectModalBtn>
            </div>
            <div onClick={openCategoryModal}>
                <SelectModalBtn>
                    {selectedCategory.realm_sc_nm
                        ? `${selectedCategory.realm_sc_nm === '국제화'
                        ? '외국어'
                        : selectedCategory.realm_sc_nm === '정보'
                        ? 'IT'
                        : selectedCategory.realm_sc_nm.replace(/\(대\)/g, '').trim()} 
                        ${selectedCategory.le_crse_nm.includes("전체") ? "" : selectedCategory.le_crse_nm}`
                        : "카테고리 선택"
                    }
                </SelectModalBtn>
            </div>
            <div>
                <input type="text" 
                    placeholder='나에게 맞는 학원을 찾아보세요' 
                    value={inputValue} 
                    onChange={handleInputOnChange}
                    onKeyUp={handleKeyUp}
                />
            </div>
            <SearchBtn onClick={handleSelectContent}/>
        </div>
    </div>
    <div css={S.PageLayout}>
        <FindAcademiesSidebar />
        <div css={S.SAcademiesContainer}>
            <div css={S.PageContainer}>
                <div css={S.InfoBox}>
                    <div>{totalCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}개의 학원이 있습니다.</div>    // 학원 수는 3자리마다 , 로 표시
                </div>
                <div>
                    <div css={S.HeaderBox}>
                        <h3>이런 학원은 어떠세요?</h3>
                        <div>
                            <span>광고</span>
                            <RiAdvertisementFill size={22}/>
                        </div>
                    </div>
                    <ul css={S.UlBox}>
                    {!getPurchaseAcademyList.isLoading && Array.isArray(getPurchaseAcademyList?.data?.data) && getPurchaseAcademyList?.data?.data.map(academy => {
                        return <LiAcademyBox key={academy.ACADEMY_ID} academy={academy}/>
                    })}
                    </ul>
                </div>
                <div>
                    <div css={S.HeaderBox}>
                        <h3>검색된 정보</h3>
                        <select 
                            css={S.ClassifyBox} 
                            name="classifyBox" id=""
                            value={classify}  // 현재 상태 값을 선택된 값으로 설정
                            onChange={handleClassifyChange}  // 변경 시 이벤트 핸들러 호출
                        >
                            <option value="등록순">등록순</option>
                            <option value="좋아요순">좋아요순</option>
                            <option value="별점순">별점순</option>
                        </select>
                    </div>
                    <ul css={S.UlBox}>
                    {getAcademyList.isLoading ? (
                        <Loading />
                    ) : (
                        getAcademyList.isFetching ? (
                            <Loading />
                        ) : (
                            academyList.length > 0 ? (
                                academyList.map((academy) => {
                                    return <LiAcademyBox key={academy.ACADEMY_ID} academy={academy} />;
                                })
                            ) : (
                                <NoResult />
                            )
                        )
                    )}
                    </ul>
                </div>
            </div>
            {totalCount === 0 ? ( <></> ) : ( <Pagination totalCount={totalCount} link={`/academy/find`}/> ) }    // 학원이 0개일때는 Pagination  숨기기
        </div>
    </div>
    <LocationModal modalIsOpen={modalIsOpen} 
        setModalIsOpen={setModalIsOpen} 
        enableBodyScroll={enableBodyScroll}/>
    <CategoryModal modalIsOpen={categoryModalIsOpen} 
        setModalIsOpen={setCategoryModalIsOpen} 
        enableBodyScroll={enableBodyScroll}/>
</RootContainer>
```
getAcademyList요청이 Loading중이거나 Fetch 중일 때 Loading 페이지를 보여주고 결과가 없을때는 NoResult를 보여줌

### LiAcademyBox - 광고와 학원목록
```javascript
const navigate = useNavigate();

const academyNameWithoutParentheses = academy.ACA_NM.replace(/\([^)]*\)/g, ''); // "()"를 빈 문자열로 대체
const koreanChars = academyNameWithoutParentheses.match(/[ㄱ-ㅎ가-힣]/g); // 한글만 추출
const firstTwoKoreanChars = koreanChars ? koreanChars.slice(0, 2).join('') : '';
const address = academy.FA_RDNMA.split(' ').slice(0, 2).join(' ');
const realm =
    academy.REALM_SC_NM === '국제화'
        ? '외국어'
        : academy.REALM_SC_NM === '정보'
        ? 'IT'
        : academy.REALM_SC_NM.replace(/\(대\)/g, '').trim();

// 랜덤 색상을 useState로 한 번만 생성
const [randomColor, setRandomColor] = useState(generateRandomColor());

// 랜덤 색상을 생성하는 함수
function generateRandomColor() {
    return `rgb(${Math.floor(Math.random() * 127 + 128)}, ${Math.floor(Math.random() * 127 + 128)}, ${Math.floor(Math.random() * 127 + 128)})`;
}

<li css={S.LiBox} className='recent' onClick={()=> {navigate(`/academy/info/1?ACADEMY_ID=${academy.ACADEMY_ID}`)}}>
    {academy.logoImg ? (
        <img src={academy.logoImg} alt={`${academy.ACA_NM}의 로고`}  />
    ): (
        <div css={[S.SRandomImg, { backgroundColor: randomColor }]}>
            <span>{firstTwoKoreanChars}</span>
        </div>
    )}
    <strong>{academy.ACA_NM}</strong>
    <div css={S.SAddress}><FaLocationDot />{address}</div>
    <div>{realm}</div>
    <div css={S.SLikeAndRating}>
        <div>💕{academy.like_count}</div>
        <div>⭐{academy.avg_score}</div>
    </div>
</li>
```
랜덤색상으로 학원이름 앞 두글자를 딴 이미지를 로고에 표시

***
- 입력 받은 값 처리
```
// 조건이 생길 때 학원목록 업데이트, 1page로 이동
useEffect(() => {
    navigate("/academy/find/1");
    if(page === "1") {
        getAcademyList.refetch();
    }
}, [selectedLocation, selectedCategory, selectedContent, selectedAgeOptions.length, selectedConvenienceOptions.length, classify]);


const handleInputOnChange = (e) => {
    setInputValue(e.target.value);
}

// 학원 이름 검색창에서 엔터 쳤을때 검색
const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
        handleSelectContent();
    }
};

const handleSelectContent = () => {
    setSelectedContent(inputValue);
}

// 학원 순서 필터링(등록순, 별점순, 관심학원순)
const handleClassifyChange = (e) => {
    setClassify(e.target.value);
};

const openLocationModal = () => {
    setModalIsOpen(true);
    disableBodyScroll();
};

const openCategoryModal = () => {
    setCategoryModalIsOpen(true);
    disableBodyScroll();
};
```
지역, 카테고리, 이름, 수강연령, 시설 및 편의시설, 배열순서가 바뀔때마다 학원 목록을 다시 불러온다

***
- 요청
```javascript
// 광고 목록 가지고오기
const getPurchaseAcademyList = useQuery(["getPurchaseAcademyList"], async () => {
    try{
        return await instance.get(`/ad/academies/random`)

    } catch(error) {
        console.error(error)
    }
}, {
    retry: 0,
    refetchOnWindowFocus: false
})

// 학원 목록 가지고오기
const getAcademyList = useQuery(["getAcademyList", page], async () => {
    try {
        setTotalCount(0);
        setAcademyList([]);
        const options = {
            params: {
                pIndex: page,
                pSize: 15,
                ATPT_OFCDC_SC_CODE: selectedLocation.atpt_ofcdc_sc_code,
                ADMST_ZONE_NM: selectedLocation.admst_zone_nm,
                REALM_SC_NM: selectedCategory.realm_sc_nm,
                LE_CRSE_NM: selectedCategory.le_crse_nm,
                ACA_NM: selectedContent,
                ageIds: selectedAgeOptions,
                countAgeId: selectedAgeOptions.length,
                convenienceIds: selectedConvenienceOptions,
                countConvenienceId: selectedConvenienceOptions.length,
                classify: classify
            },
            headers: {
                Authorization: localStorage.getItem("accessToken")
            },
            paramsSerializer: params => QueryString.stringify(params, {arrayFormat: 'repeat'})
        }

        // options를 get 요청
        const response = await instance.get("/academies", options);

        // Update academyList with the data from the response
        setAcademyList(response.data.academies);

        // Set the total count
        setTotalCount(response.data.listTotalCount);
        
    } catch (error) {
        console.error(error);
    }
}, {
    retry: 0,
    refetchOnWindowFocus: false
}) 
```
- 광고목록은 유효한 학원 중 랜덤으로 3개 가지고옴 -> 빈도수에 따라 민원 제기 가능 -> 빈도수를 비슷하게 처리하는 로직 필요
- qs 라이브러리를 이용해 ageIds와 convenienceIds는 파라미터를 반복해서 직렬로 전달 -> 서버에서 리스트로 받을 수 있다( IntegerList )
***

## BackEnd

### SecurityConfig

```java
        http.authorizeRequests()
                .antMatchers("/api/auth/**", "/api/option/**",
                        "/api/academies", "/api/academy/**",
                        "/api/review/**", "/api/purchase/**", "/api/academy/check/**",
                        "/api/ad/academies/random")
```

학원 찾기와 학원 상세 페이지는 로그인 하지 않고도 이용 가능

### AcademyController
```java
public class AcademyController {

    private final AcademyService academyService;

    //학원 전체 리스트 가져오기
    @GetMapping("/api/academies")
    public ResponseEntity<?> getAcademies(SearchAcademysReqDto searchAcademysReqDto) {
        return ResponseEntity.ok(academyService.getAcademies(searchAcademysReqDto));
    }
}
```

### AcademyService
```java
public class AcademyService {

    private final AcademyMapper academyMapper;

    public AcademyListRespDto getAcademies(SearchAcademysReqDto searchAcademysReqDto) {
        int listTotalCount = academyMapper.getListTotalCount(searchAcademysReqDto.toVo());    // 학원 수
        List<Academy> academies = academyMapper.getAcademies(searchAcademysReqDto.toVo());    // 학원 목록
        return new AcademyListRespDto(listTotalCount, academies);
    }
}    
```
AcademyListRespDto로 학원 수와 학원을 한번의 요청으로 응답함


### repository - AcademyMapper
```java
@Mapper
public interface AcademyMapper {
    public List<Academy> getAcademies(AcademySearchVo academySearchVo);
    public int getListTotalCount(AcademySearchVo academySearchVo);
}
```
### academy_mapper
```xml
<mapper namespace="com.aws.compass.repository.AcademyMapper">
    <resultMap id="academyMap" type="com.aws.compass.entity.Academy">
        <id property="ACADEMY_ID" column="ACADEMY_ID" />
        <result property="ATPT_OFCDC_SC_CODE" column="ATPT_OFCDC_SC_CODE" />
        <result property="ATPT_OFCDC_SC_NM" column="ATPT_OFCDC_SC_NM" />
        <result property="ADMST_ZONE_NM" column="ADMST_ZONE_NM" />
        <result property="ACA_INSTI_SC_NM" column="ACA_INSTI_SC_NM" />
        <result property="ACA_ASNUM" column="ACA_ASNUM" />
        <result property="ACA_NM" column="ACA_NM" />
        <result property="ESTBL_YMD" column="ESTBL_YMD" />
        <result property="REG_YMD" column="REG_YMD" />
        <result property="REG_STTUS_NM" column="REG_STTUS_NM" />
        <result property="CAA_BEGIN_YMD" column="CAA_BEGIN_YMD" />
        <result property="CAA_END_YMD" column="CAA_END_YMD" />
        <result property="TOFOR_SMTOT" column="TOFOR_SMTOT" />
        <result property="DTM_RCPTN_ABLTY_NMPR_SMTOT" column="DTM_RCPTN_ABLTY_NMPR_SMTOT" />
        <result property="REALM_SC_NM" column="REALM_SC_NM" />
        <result property="LE_ORD_NM" column="LE_ORD_NM" />
        <result property="LE_CRSE_LIST_NM" column="LE_CRSE_LIST_NM" />
        <result property="LE_CRSE_NM" column="LE_CRSE_NM" />
        <result property="PSNBY_THCC_CNTNT" column="PSNBY_THCC_CNTNT" />
        <result property="THCC_OTHBC_YN" column="THCC_OTHBC_YN" />
        <result property="BRHS_ACA_YN" column="BRHS_ACA_YN" />
        <result property="FA_RDNMA" column="FA_RDNMA" />
        <result property="FA_RDNDA" column="FA_RDNDA" />
        <result property="FA_RDNZC" column="FA_RDNZC" />
        <result property="FA_TELNO" column="FA_TELNO" />
        <result property="LOAD_DTM" column="LOAD_DTM" />
        <result property="logoImg" column="logo_img" />
        <result property="like_count" column="LIKE_COUNT" />
        <result property="avg_score" column="AVG_SCORE" />
    </resultMap>

    <select id="getListTotalCount" resultType="int" parameterType="com.aws.compass.vo.AcademySearchVo">
        select
            count(*)
        FROM
            academy_tb
        WHERE
            1 = 1
            <if test="atptOfcdcScCode != null and !atptOfcdcScCode.equals('')">
                AND ATPT_OFCDC_SC_CODE = #{atptOfcdcScCode}
            </if>
            <if test="admstZoneNm != null and !admstZoneNm.equals('')">
                AND ADMST_ZONE_NM = #{admstZoneNm}
            </if>
            <if test="acaAsnum != null and !acaAsnum.equals('')">
                AND ACA_ASNUM = #{acaAsnum}
            </if>
            <if test="acaNm != null and !acaNm.equals('')">
                AND ACA_NM LIKE CONCAT('%', #{acaNm}, '%')
            </if>
            <if test="realmScNm != null and !realmScNm.equals('')">
                AND REALM_SC_NM = #{realmScNm}
            </if>
            <if test="leOrdNm != null and !leOrdNm.equals('')">
                AND LE_ORD_NM = #{leOrdNm}
            </if>
            <if test="leCrseNm != null and !leCrseNm.equals('')">
                AND LE_CRSE_NM = #{leCrseNm}
            </if>
            <if test="ageIds != null and !ageIds.isEmpty()">
                AND ACADEMY_ID IN (
                    SELECT
                        ait.ACADEMY_ID
                    FROM
                        academy_tb at
                        LEFT OUTER JOIN academy_info_tb ait ON ait.ACADEMY_ID = at.ACADEMY_ID
                        LEFT OUTER JOIN attendance_age_tb aat ON aat.academy_info_id = ait.academy_info_id
                    WHERE
                        aat.age_id IN
                        <foreach collection="ageIds" item="ageId" open="(" separator="," close=")">
                            #{ageId}
                        </foreach>
                    GROUP BY
                        ait.ACADEMY_ID
                    HAVING
                        COUNT(DISTINCT aat.age_id) = #{countAgeId}
                )
            </if>
            <if test="convenienceIds != null and !convenienceIds.isEmpty()">
                AND ACADEMY_ID IN (
                    SELECT
                        ait.ACADEMY_ID
                    FROM
                        academy_tb at
                        LEFT OUTER JOIN academy_info_tb ait ON ait.ACADEMY_ID = at.ACADEMY_ID
                        LEFT OUTER JOIN academy_convenience_tb act ON act.academy_info_id = ait.academy_info_id
                    WHERE
                        act.convenience_id IN
                        <foreach collection="convenienceIds" item="convenienceId" open="(" separator="," close=")">
                            #{convenienceId}
                        </foreach>
                    GROUP BY
                        ait.ACADEMY_ID
                    HAVING
                        COUNT(DISTINCT act.convenience_id) = #{countConvenienceId}
                )
            </if>
    </select>

    <select id="getAcademies" parameterType="com.aws.compass.vo.AcademySearchVo" resultMap="academyMap">
        SELECT
            at.ACADEMY_ID,
            at.ATPT_OFCDC_SC_CODE,
            at.ADMST_ZONE_NM,
            at.ACA_ASNUM,
            at.ACA_NM,
            at.REALM_SC_NM,
            at.LE_CRSE_NM,
            at.FA_RDNMA,
            at.FA_RDNDA,
            at.FA_RDNZC,
            at.FA_TELNO,
            ait.logo_img,
            IFNULL(lt.LIKE_COUNT, 0) AS LIKE_COUNT,
            IFNULL(rt.AVG_SCORE, 0) AS AVG_SCORE
        FROM
            academy_tb at
            left outer join academy_info_tb ait ON (ait.ACADEMY_ID = at.ACADEMY_ID)
            left outer join (
                SELECT ACADEMY_ID, COUNT(*) AS LIKE_COUNT
                FROM like_tb
                GROUP BY ACADEMY_ID
            ) lt ON lt.ACADEMY_ID = at.ACADEMY_ID
            left outer join (
                SELECT ACADEMY_ID, AVG(score) AS AVG_SCORE
                FROM review_tb
                GROUP BY ACADEMY_ID
            ) rt ON rt.ACADEMY_ID = at.ACADEMY_ID
        WHERE
            1 = 1
            <if test="atptOfcdcScCode != null and !atptOfcdcScCode.equals('')">
                AND at.ATPT_OFCDC_SC_CODE = #{atptOfcdcScCode}
            </if>
            <if test="admstZoneNm != null and !admstZoneNm.equals('')">
                AND at.ADMST_ZONE_NM = #{admstZoneNm}
            </if>
            <if test="acaAsnum != null and !acaAsnum.equals('')">
                AND at.ACA_ASNUM = #{acaAsnum}
            </if>
            <if test="acaNm != null and !acaNm.equals('')">
                AND at.ACA_NM LIKE CONCAT('%', #{acaNm}, '%')
            </if>
            <if test="realmScNm != null and !realmScNm.equals('')">
                AND at.REALM_SC_NM = #{realmScNm}
            </if>
            <if test="leOrdNm != null and !leOrdNm.equals('')">
                AND at.LE_ORD_NM = #{leOrdNm}
            </if>
            <if test="leCrseNm != null and !leCrseNm.equals('')">
                AND at.LE_CRSE_NM = #{leCrseNm}
            </if>
            <if test="ageIds != null and !ageIds.isEmpty()">
                AND at.ACADEMY_ID IN (
                    SELECT
                        ait.ACADEMY_ID
                    FROM
                        academy_tb at
                        LEFT OUTER JOIN academy_info_tb ait ON ait.ACADEMY_ID = at.ACADEMY_ID
                        LEFT OUTER JOIN attendance_age_tb aat ON aat.academy_info_id = ait.academy_info_id
                    WHERE
                        aat.age_id IN
                        <foreach collection="ageIds" item="ageId" open="(" separator="," close=")">
                            #{ageId}
                        </foreach>
                    GROUP BY
                        ait.ACADEMY_ID
                    HAVING
                        COUNT(DISTINCT aat.age_id) = #{countAgeId}
                )
            </if>
            <if test="convenienceIds != null and !convenienceIds.isEmpty()">
                AND at.ACADEMY_ID IN (
                    SELECT
                        ait.ACADEMY_ID
                    FROM
                        academy_tb at
                        LEFT OUTER JOIN academy_info_tb ait ON ait.ACADEMY_ID = at.ACADEMY_ID
                        LEFT OUTER JOIN academy_convenience_tb act ON act.academy_info_id = ait.academy_info_id
                    WHERE
                        act.convenience_id IN
                        <foreach collection="convenienceIds" item="convenienceId" open="(" separator="," close=")">
                            #{convenienceId}
                        </foreach>
                    GROUP BY
                        ait.ACADEMY_ID
                    HAVING
                        COUNT(DISTINCT act.convenience_id) = #{countConvenienceId}
                )
            </if>
        GROUP BY
            at.ACADEMY_ID
        ORDER BY
            CASE
                WHEN #{classify} = '등록순' THEN ait.academy_info_id
                WHEN #{classify} = '좋아요순' THEN LIKE_COUNT
                WHEN #{classify} = '별점순' THEN AVG_SCORE
                ELSE ait.ACADEMY_ID
            END DESC
        LIMIT #{index}, #{pSize}
    </select>
</mapper>
```
 - 조건에 맞는 학원 수와 학원목록을 가지고 오는 쿼리
 - getAcademies는 동적쿼리를 사용하여 파라미터 값이 있는 경우에만 조건이 추가되게함.
 - 학원을 가지고 오는 시간을 단축하기 위해 ageIds와 convenienceIds는 조건이 있는 경우에만 서브쿼리를 사용해 academy_tb와 조인함
 - ageIds와 convenienceIds는 List이기 때문에 foreach를 사용하여 IN 조건을 줌

***

### AdvertisementController
```java
public class AdvertisementController {

    private final AdvertisementService advertisementService;

    // 광고 학원 랜덤 나타내기
    @GetMapping("/api/ad/academies/random")
    public ResponseEntity<?> getRandomAcademies() {
        return ResponseEntity.ok(advertisementService.getADOfRandomAcademies());
    }


}
```
### AdvertisementService
```java
public class AdvertisementService {
    private final AdvertisementMapper advertisementMapper;

    public List<Academy> getADOfRandomAcademies() {
        return advertisementMapper.getADOfRandomAcademies();
    }
}
```

### repository - AdvertisementMapper
```java
@Mapper
public interface AdvertisementMapper {

    public List<Academy> getADOfRandomAcademies();
}

```

### advertisement_mapper
```xml
<mapper namespace="com.aws.compass.repository.AdvertisementMapper">
    <resultMap id="academyMap" type="com.aws.compass.entity.Academy">
        <id property="ACADEMY_ID" column="ACADEMY_ID" />
        <result property="ATPT_OFCDC_SC_CODE" column="ATPT_OFCDC_SC_CODE" />
        <result property="ATPT_OFCDC_SC_NM" column="ATPT_OFCDC_SC_NM" />
        <result property="ADMST_ZONE_NM" column="ADMST_ZONE_NM" />
        <result property="ACA_INSTI_SC_NM" column="ACA_INSTI_SC_NM" />
        <result property="ACA_ASNUM" column="ACA_ASNUM" />
        <result property="ACA_NM" column="ACA_NM" />
        <result property="ESTBL_YMD" column="ESTBL_YMD" />
        <result property="REG_YMD" column="REG_YMD" />
        <result property="REG_STTUS_NM" column="REG_STTUS_NM" />
        <result property="CAA_BEGIN_YMD" column="CAA_BEGIN_YMD" />
        <result property="CAA_END_YMD" column="CAA_END_YMD" />
        <result property="TOFOR_SMTOT" column="TOFOR_SMTOT" />
        <result property="DTM_RCPTN_ABLTY_NMPR_SMTOT" column="DTM_RCPTN_ABLTY_NMPR_SMTOT" />
        <result property="REALM_SC_NM" column="REALM_SC_NM" />
        <result property="LE_ORD_NM" column="LE_ORD_NM" />
        <result property="LE_CRSE_LIST_NM" column="LE_CRSE_LIST_NM" />
        <result property="LE_CRSE_NM" column="LE_CRSE_NM" />
        <result property="PSNBY_THCC_CNTNT" column="PSNBY_THCC_CNTNT" />
        <result property="THCC_OTHBC_YN" column="THCC_OTHBC_YN" />
        <result property="BRHS_ACA_YN" column="BRHS_ACA_YN" />
        <result property="FA_RDNMA" column="FA_RDNMA" />
        <result property="FA_RDNDA" column="FA_RDNDA" />
        <result property="FA_RDNZC" column="FA_RDNZC" />
        <result property="FA_TELNO" column="FA_TELNO" />
        <result property="LOAD_DTM" column="LOAD_DTM" />
        <result property="logoImg" column="logo_img" />
        <result property="like_count" column="LIKE_COUNT" />
        <result property="avg_score" column="AVG_SCORE" />
    </resultMap>

    <select id="getADOfRandomAcademies"
            resultMap="academyMap">
        select
            pit.ACADEMY_ID,
            at.ACA_NM,
            at.FA_RDNMA,
            at.FA_RDNDA,
            at.REALM_SC_NM,
            at.LE_CRSE_LIST_NM,
            at.FA_TELNO,
            ait.logo_img,
            IFNULL(lt.LIKE_COUNT, 0) AS LIKE_COUNT,
            IFNULL(rt.AVG_SCORE, 0) AS AVG_SCORE
        from
            purchase_info_tb pit
            left outer join academy_info_tb ait ON (ait.ACADEMY_ID = pit.ACADEMY_ID)
            left outer join product_tb pt on(pt.product_id = pit.product_id)
            left outer join academy_tb at on(at.ACADEMY_ID = pit.ACADEMY_ID)
            left outer join (
                SELECT ACADEMY_ID, COUNT(*) AS LIKE_COUNT
                FROM like_tb
                GROUP BY ACADEMY_ID
            ) lt ON lt.ACADEMY_ID = at.ACADEMY_ID
            left outer join (
                SELECT ACADEMY_ID, AVG(score) AS AVG_SCORE
                FROM review_tb
                GROUP BY ACADEMY_ID
            ) rt ON rt.ACADEMY_ID = at.ACADEMY_ID
        where
            now() <![CDATA[ <= ]]> date_add(purchase_date, interval pt.product_period DAY)    // 광고 유효성 검사
        ORDER BY RAND() 
        LIMIT 3;
    </select>
</mapper>
```
유효한 광고를 랜덤으로 배열 후 위의 3개를 가져옴

</div>
</details>


<br/>


### **학원 등록**
<details>
<summary>학원 등록 코드 리뷰</summary>
<div markdown="1">
  
  ### Front-End
  ```html
  {selectedAcademy.length != 0 && (
    <>
      <FileUpload
        academyContent={academyContent}
        setAcademyContent={setAcademyContent}
        uploadeFile={uploadeFile}
        setUploadeFile={setUploadeFile}
      />
      <button onClick={handlesubmissionClick}>제출</button>
    </>
  )}
  ```
  ```javascript
  const handlesubmissionClick = async () => {
    if (uploadeFile.idFile) {
      if (
        matchOption === 'false' &&
        uploadeFile.operationRegistrationFile === 0
      ) {
        alert("아직 업로드 중입니다!");
        return;
      }
      await instance.post("/academy", academyContent, option);
    }
  };
  ```
  - 학원 등록은 입력 순서와 조건이 중요한 프로세스이기 때문에, 단순한 제출 버튼 검증이 아니라 UI 구조와 검증 로직을 함께 설계
  - 학원 선택 전에는 서류 업로드 UI, 제출 버튼 자체가 렌더링되지 않음
  - 제출 시에도 필수 파일 업로드 여부, 조건(match 여부)에 따른 추가 서류 업로드 여부를 다시 한 번 검증
  - 이를 통해 필수 입력이 완료되지 않은 상태에서는 서버 요청 자체가 발생하지 않도록 구조적으로 차단

#### (교육청에 등록된) 학원 검색
```javascript
const lastAcademyRef = useRef();
const scrollContainerRef = useRef(null);

useEffect(() => {
  if (!lastAcademyRef.current || !scrollContainerRef.current) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        getAcademies.refetch();
      }
    },
    {
      root: scrollContainerRef.current,
      threshold: 0.1,
    }
  );

  observer.observe(lastAcademyRef.current);

  return () => observer.disconnect();
}, [academyNameInput, educationOfficeCode]);
```
- 학원 검색 결과는 스크롤 영역 내부에서만 무한 스크롤이 동작하도록 설계
- 스크롤 이벤트를 직접 처리하지 않고 IntersectionObserver를 사용해 목록의 마지막 요소가 노출되는 시점을 기준으로 다음 페이지를 요청

#### 파일 업로드
```javascript
const uploadTask = uploadBytesResumable(storageRef, file, metadata);

uploadTask.on(
  "state_changed",
  (snapshot) => {
    const progressValue = Math.round(
      (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    );
    setProgress((prev) => ({ ...prev, [e.target.name]: progressValue }));
  },
  (error) => reject(error),
  async () => {
    const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);

    setAcademyContent((prev) => ({
      ...prev,
      [e.target.name]: downloadUrl,
    }));

    setUploadeFile((prev) => ({
      ...prev,
      [e.target.name]: 1,
    }));
  }
);
```
- 업로드는 비동기이기 때문에 “업로드 완료” 시점에만 제출 데이터를 확정하도록 설계
- Firebase Storage의 uploadBytesResumable을 사용해 업로드 진행률을 관리
- 업로드가 완료된 시점에만 다운로드 URL을 생성하여 제출 데이터에 반영

```javascript
setAcademyContent((prev) => ({
  ...prev,
  [e.target.name]: downloadUrl, // 실제 서버 전송 값
}));

setUploadeFile((prev) => ({
  ...prev,
  [e.target.name]: 1, // 업로드 완료 여부(제출 가능 판단용)
}));
```
- 업로드 결과값(다운로드 URL)과 업로드 완료 여부는 역할이 다르기 때문에 상태를 분리
- academyContent: 서버로 전달되는 실제 제출 데이터만 관리
- uploadeFile: 업로드 완료 여부를 판단하는 용도로 사용
- FileUpload는 업로드의 진행과 완료만 책임지고, 상위 컴포넌트는 그 결과를 기반으로 제출 흐름을 제어

***
### Back-End
```java
@Transactional(rollbackFor = Exception.class)
public boolean academyRegist(AcademyRegistrationReqDto dto) {
    AcademyRegistration academyRegistration = dto.toAcademyRegist();

    int errorCode = academyMapper.academyDuplicate(academyRegistration.getAcademyId());
    if(errorCode > 0) {
        throw new AcademyException("이미 등록된 학원입니다.");
    }
    return academyMapper.academyRegist(academyRegistration) > 0;
}
```
- 학원 등록은 도메인 규칙상 중복이 불가하므로, 서비스 계층에서 명시적으로 중복 여부를 검증
- 등록 요청 시 기존 학원 등록 여부를 사전에 확인
- 중복일 경우 도메인 예외(AcademyException)를 발생시켜 흐름을 중단, 정상 케이스에만 실제 등록 로직 수행

```sql
  <choose>
      <when test='operationRegistrationFile==null or operationRegistrationFile.equals("")'>
          null,
      </when>
      <otherwise>
          #{operationRegistrationFile},
      </otherwise>
  </choose>
```
- 비즈니스 조건에 따라 선택적으로 들어오는 값에 대해 DB 저장 시점에서 null 처리를 명시적으로 관리

#### Firebase에 파일 저장
```java
@PostConstruct
@PostConstruct
public void initialize() throws Exception {
    String firebaseBase64 = System.getenv("FIREBASE_CONFIG");

    byte[] decodedBytes = Base64.getDecoder().decode(firebaseBase64);
    InputStream serviceAccount = new ByteArrayInputStream(decodedBytes);

    FirebaseOptions options = FirebaseOptions.builder()
        .setStorageBucket(bucketName)
        .setCredentials(GoogleCredentials.fromStream(serviceAccount))
        .build();

    if (FirebaseApp.getApps().isEmpty()) {
        FirebaseApp.initializeApp(options);
    }
}
```
- Firebase 서비스 계정 키를 Base64로 인코딩해 환경변수로 관리
- 애플리케이션 시작 시 Firebase Admin SDK를 초기화
- 소스 코드에 인증 정보를 포함하지 않아 보안 및 배포 환경 관리 용이

```java
public String createCustomToken(String firebaseUid) {
    return FirebaseAuth.getInstance().createCustomToken(firebaseUid);
}
```
- Spring 서버가 Firebase Admin 권한으로 Custom Token 생성
- 클라이언트가 직접 Firebase 인증 정보를 다루지 않도록 설계

```java
String accessToken = jwtProvider.generateAccessToken(user);
String refreshToken = jwtProvider.generateRefreshToken(user);

String firebaseUid = "user_" + user.getUserId();
String firebaseToken = firebaseService.createCustomToken(firebaseUid);
```
- 로그인 성공 시 항상 Firebase Custom Token을 함께 발급
- 프론트엔드는 JWT로 서버 API를 호출하고, Firebase Token으로는 파일 업로드와 같은 Firebase 기능만 수행


</div>
</details>

<br/>


### **학원 상세페이지**
<details>
<summary>학원 상세페이지 코드 리뷰</summary>
<div markdown="1">
  
### Front-End
```javascript
const [isHeaderFixed, setIsHeaderFixed] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsHeaderFixed(window.scrollY > 200);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```
```html
<div css={S.SMoveBar(isHeaderFixed)}>
  <a href="#introduction">학원소개</a>
  <a href="#convenience">시설 및 편의 사항</a>
  <a href="#review">수강후기</a>
  <a href="#classinfo">학원 수업 정보</a>
</div>
```
- 사용자가 원하는 섹션으로 빠르게 이동할 수 있도록, 스크롤 위치에 따라 고정되는 내비게이션과 앵커 이동 구조를 설계
- 스크롤이 일정 지점을 넘으면 내비게이션을 fixed 상태로 전환, 메뉴 클릭 시 해당 섹션으로 즉시 이동

```html
{!!academyData?.academyInfo?.logoImg ? (
  <img src={academyData.academyInfo.logoImg} />
) : (
  <div css={[S.SAcademtLogo, { backgroundColor: color }]}>
    <span>
      {academyData.academy.ACA_NM
        .replace(/\([^)]*\)/g, '')
        .match(/[ㄱ-ㅎ가-힣]/g)
        ?.slice(0, 2)
        .join('')}
    </span>
  </div>
)}
```
```javscript
const getRandomColor = () => {
  const randomColor = `rgb(${Math.floor(Math.random()*127+128)}, ...)`;
  setColor(randomColor);
};
```
- 학원 로고가 없는 경우에도 상세 페이지의 브랜드 영역이 비지 않도록, 이미지 유무와 관계없이 일관된 UI를 제공
- 로고가 없는 경우 학원명에서 한글 두 글자를 추출해 아바타로 표시
- 랜덤한 파스텔 계열 배경색을 적용해 시각적 구분 제공

#### 수강 후기
```javascript
const [modifyButtonState, setModifyButtonState] = useState(false);

const reviewModifyButton = () => {
  setModifyButtonState(true);
  setReviewWriteData(getReview.data.data.review);
};

if (modifyButtonState) {
  await instance.put(`/review`, reviewWriteData);
} else {
  await instance.post("/review", reviewWriteData);
}
```
- 후기 작성과 수정 UI를 분리하지 않고, 하나의 입력 폼에서 상태에 따라 동작을 분기해UI 중복과 상태 복잡도를 감소
- modifyButtonState로 작성/수정 모드를 명확히 구분
- 수정 시 기존 후기 데이터를 입력 폼에 프리필, 동일한 입력 UI를 재사용해 관리 포인트 최소화
```js
const getReview = useQuery(["getReview", modifyButtonState], async () => {
  return await instance.get(`/review/${academyId}/${userId}`);
});
```
- 리뷰 목록과 “내가 작성한 후기”는 목적이 다르기 때문에, 수정 기능을 안정적으로 지원하기 위해 단건 조회 API를 분리
- 내 후기 조회 결과를 수정 모드 진입 시 입력 폼에 바로 적용
- 목록 데이터 구조에 의존하지 않고 수정 기능 구현 가능
```js
const reviewSectionRef = useRef(null);
const [initialRender, setInitialRender] = useState(true);

useEffect(() => {
  if (!initialRender && reviewSectionRef.current) {
    reviewSectionRef.current.scrollIntoView({ behavior: 'auto' });
  }
  setInitialRender(false);
}, [page]);
```
- 후기 페이지 변경 시 후기 섹션으로 자동 스크롤
- 최초 렌더링과 페이지 이동을 구분해 불필요한 스크롤 방지

```js
if (principal.data && principal.data.data.enabled) {
  ... // 작성 가능
  } else if (principal.data && principal.data.data.roleId === 0){
      alert("관리자는 후기를 작성할 수 없습니다.")
  } else if (!principal || !principal.data || principal.data.data.userId === 0){
      alert("로그인 후 이용해주세요.")
      navigate("/auth/signin")
  } else {
      alert("이메일 인증 후 이용해주세요.");
      navigate("/account/mypage/user")
      return;
  }
```
- 비로그인 / 관리자 / 이메일 미인증 사용자에 따라 작성 제한

#### 학원 문의
```js
const isAcademyAdminRegistered = useQuery(["isAcademyAdminRegistered"], ...,
  { onSuccess: res => setIsAcademyRegistered(res.data) }
);

<button css={S.SinquiryButton(isAcademyRegistered)} ...>문의</button>
```
- 학원 등록 여부 조회 후 isAcademyRegistered 상태로 저장(관리자가 등록되어 있지 않으면 문의 불가능)
- 해당 값으로 문의 버튼 스타일/표현을 분기하여 상태를 시각화
***
### Back-End
```java
public AcademyInfoRespDto getAcademy(int ACADEMY_ID) {
    Academy academy = academyMapper.getAcademy(ACADEMY_ID);
    AcademyInfo academyInfo  = academyMapper.getAcademyInfo(ACADEMY_ID);
    List<Convenience> convenienceInfo = academyMapper.getConvenience(ACADEMY_ID);
    List<Age> ageRange = academyMapper.getAgeRange(ACADEMY_ID);
    List<ClassInfo> classInfo = academyMapper.getClassInfo(ACADEMY_ID);
    return new AcademyInfoRespDto(academy, academyInfo, convenienceInfo, ageRange, classInfo);
}
```
- 상세페이지 렌더링에 필요한 정보를 프론트가 여러 번 호출하지 않도록, 서비스 계층에서 필요한 정보를 조합해 단일 응답 DTO로 제공
- 학원 기본 정보 + 상세 정보 + 편의시설 + 수강연령 + 수업 정보를 조회
- 조회 결과를 AcademyInfoRespDto로 묶어 단일 응답으로 반환

```java
public ReviewListRespDto getAcademyReviews(int academyId, int page) {
    int index = (page - 1) * 5;
    return new ReviewListRespDto(
        academyMapper.getAcademyReviews(academyId, index),
        academyMapper.getAcademyReviewCount(academyId)
    );
}
```
- 리뷰: 데이터가 누적되는 영역이므로 페이지 단위 조회
- 프론트 페이지네이션 UI를 위해 리스트와 총 개수 정보를 함께 제공
```java
public boolean writeReview(ReviewReqDto reviewReqDto) {
    Review review = reviewReqDto.toReview();
    int errorCode = academyMapper.reviewDuplicate(review);
    if(errorCode > 0) {
        throw new ReviewException("후기작성은 한 번만 가능합니다...");
    }
    return academyMapper.writeReview(review) > 0;
}
```
- 후기는 서비스 정책상 사용자당 1회만 작성 가능하므로 작성 요청 시 중복 여부를 먼저 확인
- 정상 케이스에서만 저장 수행, 중복이면 ReviewException으로 차단
</div>
</details>

<br/>


### **학생 마이페이지**

<details>
<summary>관심 학원</summary>

![관심학원 기능](https://github.com/KoreaIt-J-23-2-2/compass_front/assets/137989664/e21b6c5a-3504-4e7d-ac96-bca7fca5a316)

### FrontEnd

#### 학원 상세페이지  좋아요 버튼
  ```html
                      
           <div css={S.SSide}>
            <div css={S.SOptionBox}>
                {!getLikeState.isLoading &&
                    <button disabled={!principal?.data?.data}
                    css={S.SLikeButton}
                    onClick={handleLikeButtonClick}>
                        {getLikeState?.data?.data ? <AiFillHeart css={S.SLikeIcon(getLikeState?.data?.data)}/> :
                        <AiOutlineHeart css={S.SLikeIcon(getLikeState?.data?.data)}/>}
                        관심학원
                        <div>{likeCountOfInfo?.data?.data}</div>
                    </button>
                }
                <button css={S.SinquiryButton(isAcademyRegistered)} onClick={handleinquiryButton}>
                    <BsChatLeftTextFill css={S.SinquiryIcon}/>
                    문의
                </button>
            </div>
        </div>
```
      
-   buttton에 onClick를 넣어줌으로써 내가 취한 행동에 대한 값을 함수로 넘겨준다.
-   data의 조건에 따라 값이 달라진다.

#### 입력 받은 값 처리
``` javascript
const getLikeState = useQuery(["getLikeState"], async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            return await instance.get(`/account/like/${academyId}/${userId}`, option)
        } catch(error) {
            console.error(error)
        }
    }, {
        refetchOnWindowFocus: false,
        retry: 0
    })

const likeCountOfInfo = useQuery(["getLikeCountOfInfo"], async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            return await instance.get(`/account/info/like/count/${academyId}`, option)
        } catch(error) {
            console.error(error)
        }
    }, {
        retry: 0,
        refetchOnWindowFocus: false
    })

const handleLikeButtonClick = async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            if(getLikeState?.data?.data) {
                await instance.delete(`/account/like/${academyId}/${userId}`, option);
            } else {
                await instance.post(`/account/like/${academyId}/${userId}`, {}, option);
            }
            getLikeState.refetch();
            likeCountOfInfo.refetch();
        } catch(error) {
            console.error(error)
        }
    }
```
- handleLikeButtonClick 관심 학원을 추가 또는 제거하는 역할
- likeCountOfInfo와 getLikeState : 각각 관심 학원의 좋아요 수와 현재 사용자의 해당 학원에 대한 관심 상태를 가져오는 역할
  
#### 마이페이지 관심학원 리스트 보기
   ```html
        <div>
            <h2>❤️ 나의 관심 학원</h2>
            <div>
                {likeCountOfMypage === 0 ? 
                <EmptyBox comment={"나의 관심 학원을 추가해 보세요!"} link={'/academy/find/1'} btn={"보러 가기"}/> : 
                <ul css={S.UlBox}>
                    {!getLikeAcademiesQuery.isLoading && Array.isArray(getLikeAcademiesQuery?.data?.data) && getLikeAcademiesQuery?.data?.data.map(academy => {
                        return <LiAcademyBox key={academy.ACADEMY_ID} academy={academy}/>
                    })}
                </ul>}
                <Pagination totalCount={likeCountOfMypage.data.data} link={'/account/mypage/like'} search={''}/>
            </div>
        </div>
```
-   getLikeAcademiesQuery 통해 List를 볼 수 있다.

#### 입력 받은 값

```javascript
const userId = principal?.userId

    const getLikeAcademiesQuery = useQuery(["getLikeAcademies", page], async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            return await instance.get(`/account/mypage/like/${userId}/${page}`, option);
        } catch (error) {
            console.error(error);
        }
    }, {
        retry: 0,
        refetchOnWindowFocus: false
    });
```
-  principal에서 추출하여 userId 상수에 할당


### Backend

#### controller
```java

@RestController
@RequiredArgsConstructor
public class AccountController {

    private final AccountService accountService;

  // 좋아요 상태
    @GetMapping("/api/account/like/{academyId}/{userId}")
    public ResponseEntity<?> getLikeState (@PathVariable int userId, @PathVariable int academyId) {
        return ResponseEntity.ok(accountService.getLikeState(userId, academyId));
    }

    // 좋아요 추가
    @PostMapping("/api/account/like/{academyId}/{userId}")
    public ResponseEntity<?> setLike(@PathVariable int userId, @PathVariable int academyId) {
        return ResponseEntity.ok(accountService.setLike(userId, academyId));
    }

    // 좋아요 삭제
    @DeleteMapping("/api/account/like/{academyId}/{userId}")
    public ResponseEntity<?> cancelLike(@PathVariable int userId, @PathVariable int academyId) {
        return ResponseEntity.ok(accountService.cancelLike(userId, academyId));
    }

    // 좋아요 COUNT
    @GetMapping("/api/account/mypage/like/count/{userId}")
    public ResponseEntity<?> getLikeCount(@PathVariable int userId) {
        return ResponseEntity.ok(accountService.getLikeCount(userId));
    }

    // 관심 학원
    @GetMapping("/api/account/mypage/like/{userId}/{page}")
    public ResponseEntity<?> getLikeAcademies(@PathVariable int userId, @PathVariable int page) {
        return ResponseEntity.ok(accountService.getLikeAcademy(userId, page));
    }

    // 관심학원 COUNT
    @GetMapping("/api/account/info/like/count/{academyId}")
    public ResponseEntity<?> getLikeCountOfInfo(@PathVariable int academyId) {
        return ResponseEntity.ok(accountService.getLikeInfoCount(academyId));
    }
}
```
- 좋아요의 CRUD에 대한 데이터 처리

#### DTO
```java
@Builder
@Data
public class AcademyLikeRespDto {
    private int likeId;
    private int userId;
    private int ACADEMYID;
}
```

#### Service
```java
@Service
@RequiredArgsConstructor
public class AccountService {
public boolean getLikeState(int userId, int academyId) {
        return accountMapper.getLikeState(userId, academyId) > 0;
    }

    public boolean setLike(int userId, int academyId) {
        return accountMapper.insertLike(userId, academyId) > 0;
    }

    public boolean cancelLike(int userId, int academyId) {
        return accountMapper.deleteLike(userId, academyId) > 0;
    }

    public int getLikeCount(int userId) {
        return accountMapper.getLikeCountByUserId(userId);
    }

    public List<Academy> getLikeAcademy(int userId, int page) {
        int index = (page - 1) * 5;

        return accountMapper.getLikeAcademies(userId, index);
    }

    public int getLikeInfoCount(int academyId) {
        return accountMapper.getLikeCountByAcademyId(academyId);
    }
}
```
- controller에서 보낸 like에 관한 것들을 받는다.

#### Repository
```java
@Mapper
public interface AccountMapper {
    public int getLikeState(int userId, int academyId);
    public int insertLike(int userId, int academyId);
    public int deleteLike(int userId, int academyId);

    public int getLikeCountByUserId(int userId);
    public List<Academy> getLikeAcademies(int userId, int index);

    public int getLikeCountByAcademyId(int academyId);
}
```
- 데이터베이스와 상호 작용하는 메서드를 정의

#### SQL
```java

    <select id="getLikeState"
            resultType="java.lang.Integer">
        select
            count(*)
        from
            like_tb
        where
            user_id = #{userId}
            and ACADEMY_ID = #{academyId}

    </select>

    <select id="getLikeCountByUserId"
            resultType="java.lang.Integer">
        select
            count(*)
        from
            like_tb
        where
            user_id = #{userId}
    </select>

    <select id="getLikeAcademies"
            resultMap="academyMap">
        SELECT
            at.ACADEMY_ID,
            at.ACA_NM,
            at.REALM_SC_NM,
            at.FA_RDNMA,
            ait.logo_img,
            IFNULL(clt.LIKE_COUNT, 0) AS LIKE_COUNT,
            IFNULL(AVG(rt.score), 0) AS AVG_SCORE
        FROM
            like_tb lt
            LEFT OUTER JOIN academy_tb at ON (at.ACADEMY_ID = lt.ACADEMY_ID)
            LEFT OUTER JOIN academy_info_tb ait ON (ait.ACADEMY_ID =       lt.ACADEMY_ID)
            LEFT OUTER JOIN review_tb rt ON (rt.ACADEMY_ID = lt.ACADEMY_ID)
            LEFT OUTER JOIN (
                SELECT ACADEMY_ID, COUNT(*) AS LIKE_COUNT
                FROM like_tb
                GROUP BY ACADEMY_ID
            ) clt ON clt.ACADEMY_ID = at.ACADEMY_ID
        where
            lt.user_id = #{userId}
        group by
            at.ACADEMY_ID
        order by
            lt.like_id desc
        limit #{index}, 9
    </select>

    <select id="getLikeCountByAcademyId"
            resultType="java.lang.Integer">
        select
            count(*)
        from
            like_tb
        where
            academy_id = #{academyId}
    </select>
    <insert id="insertLike">
        insert into like_tb
        values(0, #{userId}, #{academyId})
    </insert>

    <delete id="deleteLike">
        delete
        from
            like_tb
        where
            user_id = #{userId}
            and ACADEMY_ID = #{academyId}
    </delete>
```
-  좋아요의 CRUD 및 기능을 위한 쿼리문 작성

</details>
  
<details>
<summary>개인 정보 수정</summary>

![개인정보 수정](https://github.com/KoreaIt-J-23-2-2/compass_front/assets/137989664/6b0f558d-5380-4c29-81d8-04b1e35b5d7e)
<br/>

유저의 개인 정보를 수정하는 페이지, 이메일 인증 기능

---

### **Front End**

**html**

``` html
<h2>🛠️ 개인 정보 수정</h2>
<div>
    <div css={S.SButtonBox}>
        <div>
            내 정보
        </div>
        {isEdit? 
        <button onClick={handleEditSubmitOnClick}>확인</button> 
        : <button onClick={handleEditBtnOnClick}>변경하기</button>}
    </div>
    <table css={S.STable}>
        <tbody>
            <tr>
                <td>이메일</td>
                <td>
                    {isEdit ?
                        <input type="text"
                            name='email' 
                            value={newUser.email}
                            onChange={handleInputChange}/>
                        :principalState.data.data.email}
                    {principalState.data.data.enabled > 0 ?
                        <button disabled>
                            인증 완료
                        </button>
                        : (!isEdit ? 
                                <button onClick={handleSendMail}>
                                    인증 하기
                                </button>
                                : <button disabled>
                                    인증 하기
                                </button>)
                    }
                </td>
            </tr>
            <tr>
                <td>이름</td>
                <td>
                    {isEdit ?
                        <input type="text"
                            name='name' 
                            value={newUser.name}
                            onChange={handleInputChange}/>
                        :principalState.data.data.name}
                </td>
            </tr>

            ...

        </tbody>
    </table>
</div>
```
- principalState에 로그인한 유저 정보가 담겨있다.
- isEdit 상태에 따라 input 또는 텍스트로 바꿔준다.
- enabled가 0이면 이메일 인증 안 된 유저, 1이면 인증된 유저

<br/>

**이메일 인증 메일 전송**
``` javascript
    const handleSendMail = async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            await instance.post("/account/auth/email", {}, option);  // 주소, 데이터, 옵션
            alert("인증 메일 전송 완료. 인증 요청 메일을 확인해주세요.");
        } catch (error) {
            alert("인증 메일 전송 실패. 다시 시도해주세요.");
        }
    }
```
- /account/auth/email 로 요청


<br/>

**수정 버튼 클릭 이벤트**
``` javascript
    const handleEditSubmitOnClick = async () => {
        try {
            setIsEdit(false);
            if(JSON.stringify(newUser) !== JSON.stringify(user)) {  // 기존 유저와 달라졌을 때만 수정
                const option = {
                    headers: {
                        Authorization: localStorage.getItem("accessToken")
                    }
                }
                const response = await instance.put(`/account/user/${principalState.data.data.userId}`, newUser, option);
                queryClient.refetchQueries(["getPrincipal"]);
                alert("개인정보 변경이 완료 되었습니다.");
            }
        } catch (error) {
            console.error(error);
            if(Object.keys(error.response.data).includes("email")) {
                alert(error.response.data.email);
            } else if(Object.keys(error.response.data).includes("nickname")) {
                alert(error.response.data.nickname);
            }
            setNewUser(user);
        }
    }
```
- newUser 객체에 변경된 유저 정보를 담아서 /account/user/{userId}로 put 요청
- 기존 유저와 달라졌을 때만 put 요청
- 이메일, 닉네임 중복시, 이메일 유효성 검사 실패시엔 중복 메시지 alert

<br/>

---

<br/>

### **Back End**

**AccountController**

``` java
    // 개인 정보 수정
    @ValidAop
    @PutMapping("/api/account/user/{userId}")
    public ResponseEntity<?> editUser(@PathVariable int userId,
                                      @Valid @RequestBody EditUserReqDto editUserReqDto,
                                      BindingResult bindingResult) {
        return ResponseEntity.ok(accountService.updateUser(userId,editUserReqDto));
    }

    // 이메일 인증하기
    @PostMapping("/api/account/auth/email")
    public ResponseEntity<?> sendAuthenticationMail() {
        return ResponseEntity.ok(accountService.sendAuthMail());
    }

    // 인증된 이메일 가져오기
    @GetMapping("/api/account/auth/email")
    public ResponseEntity<?> authenticateMail (String token) {
        //주소의 토큰을 받고 유효한지 확인
        return ResponseEntity.ok(accountService.authenticateMail(token) ? "인증 완료" : "인증 실패");
    }
```
- ValidAop로 유효성 검사

<br/>

**AccountService**

**인증 메일 전송**
``` java
    public boolean sendAuthMail() {
        PrincipalUser principalUser = (PrincipalUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String toEmail = principalUser.getUser().getEmail();

        MimeMessage mimeMailMessage = javaMailSender.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper(mimeMailMessage, false, "utf-8");
            helper.setSubject("학습 나침반 이메일 인증");
            helper.setFrom("mini011029@gmail.com");
            helper.setTo(toEmail);

            String token = jwtProvider.generateAuthMailToken(toEmail);      //이메일 인증을 위한 토큰 발행

            mimeMailMessage.setText(
                    //html로 mail을 전송하기 위함
                    "<div>" +
                            "<h1>학습 나침반 이메일 인증 메일</h1>"+
                            "<p>이메일 인증을 완료하려면 아래의 버튼을 클릭하세요.</p>" +
                            "<a href=\"https://3-34-44-250.sslip.io/api/account/auth/email?token=" + token + "\">인증하기</a>" +
                    "</div>", "utf-8", "html"
            );
            javaMailSender.send(mimeMailMessage);       //설정한 메시지를 sender를 통해 전달함
        } catch (Exception e) {
            e.printStackTrace();
            throw new SendMailException("이메일 전송이 실패했습니다.");
        }
        return true;
    }
```
- generateAuthMailToken : 이메일 인증 토큰 발행(유효기간 - 5분)
- https://3-34-44-250.sslip.io/api/account/auth/email 로 a 태그 만들어서 인증하도록 한다.

<br/>

**이메일 인증**

``` java
    @Transactional(rollbackFor = Exception.class)
    public boolean authenticateMail(String token) {
        Claims claims = jwtProvider.getClaims(token);
        if(claims == null) {    // 유효하지 않은 토큰
            throw new AuthMailException("만료된 인증 요청입니다.");
        }

        String email = claims.get("email").toString();
        User user = accountMapper.findUserByEmail(email);

        if(user.getEnabled() > 0) { // 이미 인증된 상태
            throw new AuthMailException("이미 인증이 완료된 요청입니다.");
        }

        return accountMapper.updateEnabledToEmail(email) > 0;
    }
```
- 이메일의 a 태그 링크를 통해 들어오는 요청 Service
- 해당 유저의 enabled가 1이라면 이미 인증된 상태로 예외 처리
- 토큰이 유효하다면 enabled를 1로 업데이트(enabled 1 : 인증 상태)

<br/>

**유저 정보 수정**
``` java
    public boolean updateUser(int userId, EditUserReqDto editUserReqDto) {
        User newUser = editUserReqDto.toUser();
        newUser.setUserId(userId);

        int errorCode = accountMapper.checkDuplicateAndIdNot(newUser);
        if(errorCode > 0) {
            authService.responseDuplicateError(errorCode);
        }

        PrincipalUser principalUser = (PrincipalUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User oldUser = principalUser.getUser();

        if(oldUser.getEnabled() > 0 && !Objects.equals(oldUser.getEmail(), newUser.getEmail())) {  // 이메일 변경 하면 enabled 0으로 업데이트 해줘야 함.
            newUser.setEnabled(0);
        } else {
            newUser.setEnabled(oldUser.getEnabled());
        }

        return accountMapper.updateUser(newUser) > 0;
    }
```
- 기존 유저를 가져와 새 유저의 이메일이 변경됐을 때는 enabled를 0으로 변경한다.(enabled 0 : 미인증 상태)

<br/>

**account_mapper.xml**
``` xml
    <update id="updateUser">
        update
            user_tb
        set
            email = #{email},
            name = #{name},
            nickname = #{nickname},
            phone = #{phone},
            enabled = #{enabled}
        where
            user_id = #{userId}
    </update>
    <update id="updateEnabledToEmail">
        update
            user_tb
        set
            enabled = 1
        where
            email = #{email}
    </update>
    <select id="findUserByEmail" resultMap="userMap">
        select
            user_id,
            email,
            oauth2_id,
            name,
            nickname,
            phone,
            provider,
            enabled,
            role_id
        from
            user_tb
        where
            email = #{email}
    </select>
    <select id="checkDuplicateAndIdNot"
            parameterType="com.aws.compass.entity.User"
            resultType="java.lang.Integer">
        select
            (select
                if(count(*) > 0, 1, 0)
            from
                user_tb
            where
                email = #{email}
                and user_id != #{userId}
            )
            + (select
                if(count(*) > 0, 2, 0)
            from
                user_tb
            where
                nickname = #{nickname}
                and user_id != #{userId}
            ) as result
    </select>
```
- checkDuplicateAndIdNot : 이메일, 닉네임이 중복인지 확인하는 sql, 해당 유저의 이메일과 닉네임은 중복체크 되면 안 되기에 user_id != #{userId} 조건을 넣어준다. (0 : 중복x, 1 : 이메일 중복, 2 : 닉네임 중복, 3 : 둘 다 중복)

<br/>
</details>
  
<details>
<summary>학원 신청 목록</summary>

![학원 신청 목록 승인대기  거절](https://github.com/KoreaIt-J-23-2-2/compass_front/assets/137989664/7c33f976-4e43-409a-bfb7-b1f95e233ef5)

<br/>

승인 대기, 승인 거절 상태의 학원을 볼 수 있는 기능

<br/>

---

<br/>

### **Front End**

**html**

``` html
<h2>🗒️ 학원 신청 목록</h2>
<div>
    {getAppliedAcademies?.data?.data.listTotalCount === 0 ? 
    <EmptyBox comment={<>신청한 학원이 없습니다.<br/>학원을 등록해 보세요!</>}
        link={'/academy/regist'} btn={"등록하기"}/> : 
    <>
        <div css={S.SComment}>학원 승인 여부를 확인하고 재신청 해보세요!</div>
        <table css={GS.STable}>
            <tbody>
                <tr>
                    <td>학원 번호</td>
                    <td>학원명</td>
                    <td>승인 여부</td>
                    <td>학원 선택</td>
                </tr>
                {getAppliedAcademies?.data?.data.academyRegistrations.map(academy => {
                    return  <tr key={academy.academyRegistrationId} 
                                style={{ fontWeight: selectedAcademy === academy ? 'bold' : 'normal', color: academy.approvalStatus < 0 ? 'red' : 'black'}}>
                                <td>{academy.acaAsnum}</td>
                                <td>{academy.acaNm}</td>
                                <td>{academy.approvalStatus === 0 ? "승인 대기" : "승인 거절"}</td>
                                <td>
                                    <button css={GS.SButton} onClick={(e) => handleAcademyOnClick(e, academy)}>
                                        {selectedAcademy === academy ? '선택 해제' : '선택'}
                                    </button>
                                </td>
                            </tr>
                })}
            </tbody>
        </table>
        {!getAppliedAcademies.isLoading &&
            <Pagination totalCount={getAppliedAcademies?.data?.data?.listTotalCount}
                link={`/account/mypage/appliedacademy`}/>}
        <div>
            {isApplicatedOpen && !!selectedAcademy && 
                (selectedAcademy?.approvalStatus > 0 ? <></> : 
                    selectedAcademy.approvalStatus === 0 ? 
                    <RetryMyAcademy type={"awaiting"} selectedAcademy={selectedAcademy}/> : 
                    <RetryMyAcademy type={"reject"} selectedAcademy={selectedAcademy}/>)}
        </div>
    </>}
</div>
```
- 승인 대기, 승인 거절 상태의 학원 목록을 가져온다.
- 선택된 학원의 승인 상태에 따라 props로 보내 각각의 기능을 수행한다.

<br/>

**승인 대기, 승인 거절 목록 불러오기**
```javascript
    const getAppliedAcademies = useQuery(["getAppliedAcademy", page], async () => {
        const option = {
            headers: {
                Authorization: localStorage.getItem("accessToken")
            }
        }
        return await instance.get(`/academies/applied/${principal.data.data.userId}/${page}`, option);
    }, {
        refetchOnWindowFocus: false,
        onSuccess: () => {
            setSelectedAcademy(null);
        }
    })
```
- /accademies/applied/{userId}/{page}로 get 요청

<br/>

**html**
``` html
<div>
    <div css={S.SContainer}>
        <div css={S.SInfo}>
            {type === "reject" && "승인 거절된 학원 등록입니다. 거절 사유를 확인한 후 재등록 하세요."}
            {type === "awaiting" && "승인 대기중인 학원 등록입니다. 학원 승인은 3일 이내 완료됩니다."}
        </div>
        {type === "reject" && 
            <>
                <div css={S.SNameContainer}>
                    <span css={S.SName}>
                        거절 사유
                    </span>
                </div>
                <div css={S.SRejectReason}>
                    {selectedAcademy.rejectReason}
                </div>
            </>
        }
        
        <div css={S.SNameContainer}>
            <span css={S.SName}>선택된 학원</span>
        </div>
        <div>
            <div css={S.SAcademyInfoBox}>
                <div><span>학원 번호</span><div>{selectedAcademy.acaAsnum}</div></div>
                <div><span>지역</span><div>{selectedAcademy.admstZoneNm}</div></div>
            </div>
            <div css={S.SAcademyInfoBox}>
                <div><span>학원명</span><div>{selectedAcademy.acaNm}</div></div>
            </div>
        </div>
        <div css={S.SNameContainer}>
            <span css={S.SName}>사전확인서류 제출</span>
        </div>
        {type === "reject" && 
            <>
                <FileUpload academyContent={academyContent} setAcademyContent={setAcademyContent}
                    uploadeFile={uploadeFile} setUploadeFile={setUploadeFile}/>
                <div css={S.SButtonContainer}>
                    <button css={S.SSubmitButton} onClick={handlesubmissionClick}>제출</button>
                </div>
            </>
        }
        {type === "awaiting" && <FileDownload selectedAcademy={selectedAcademy}/>}
    </div>
</div>
```
- props로 보내준 type에 따라 각각의 기능을 수행
- 승인 거절 상태이면 파일을 다시 업로드해 제출할 수 있고, 승인 대기 상태는 제출했던 파일을 다시 다운로드 받아볼 수 있다.

<br/>

**제출 버튼 클릭 이벤트**
```javascript
    const handlesubmissionClick = async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }

            if(uploadeFile.idFile){
                if(academyContent.match === 'false' && uploadeFile.operationRegistrationFile === 0) {
                    alert("아직 업로드 중입니다! 잠시후 시도해주세요.");
                    return;
                }
                await instance.put("/academy/reapplied", academyContent, option);
                alert("업로드가 완료되었습니다. 신청은 3일 이내 확인됩니다.");
            }
        } catch (error) {
            alert(error.response.data.sendFail);
        }
    }
```
- /academy/reapplied로 새로 업로드한 파일을 담아 put 요청

<br/>

---

<br/>

### **Back End**

**AcademyController**

``` java
    // 승인 거절 학원 재신청
    @ValidAop
    @PutMapping("/api/academy/reapplied")
    public ResponseEntity<?> updateAcademyRegist(@Valid @RequestBody AcademyRegistrationReqDto academyRegistrationReqDto, BindingResult bindingResult) {
        return ResponseEntity.ok(academyService.updateAcademyRegist(academyRegistrationReqDto));
    }

    // 신청된 학원 목록 보기
    @GetMapping("/api/academies/applied/{userId}/{page}")
    public ResponseEntity<?> getAppliedAcademies(@PathVariable int userId, @PathVariable int page) {
        return ResponseEntity.ok(academyService.getAppliedAcademies(userId, page));
    }

```
- 페이지네이션을 위해 PathVariable로 page 변수 받아와줌.

<br/>

**AcademyService**

```java
    @Transactional(rollbackFor = Exception.class)
    public boolean updateAcademyRegist(AcademyRegistrationReqDto academyRegistrationReqDto) {
        AcademyRegistration academyRegistration = academyRegistrationReqDto.toAcademyRegist();

        return academyMapper.updateAcademyRegist(academyRegistration) > 0;
    }

    public AppliedAcademiesRespDto getAppliedAcademies(int userId, int page) {
        int index = (page - 1) * 5;

        List<AcademyRegistration> academyRegistrations = academyMapper.getAppliedAcademyRegistrations(userId, index);
        int listTotalCount = academyMapper.getAppliedAcademyCount(userId);

        return new AppliedAcademiesRespDto(academyRegistrations, listTotalCount);
    }
```


<br/>

**academy_mapper**

```xml
    <update id="updateAcademyRegist">
        update
            academy_registration_tb
        set
            approval_status = 0,
            business_registration_file = #{businessRegistrationFile},
            id_file = #{idFile},
            operation_registration_file =
            <choose>
                <when test='operationRegistrationFile==null or operationRegistrationFile.equals("")'>
                    null,
                </when>
                <otherwise>
                    #{operationRegistrationFile},
                </otherwise>
            </choose>
            reject_reason = null
        where
            ACADEMY_ID = #{academyId}
    </update>
    <select id="getAppliedAcademyRegistrations" resultMap="academyRegistrationMap" parameterType="map">
        select
            art.academy_registration_id,
            art.ACADEMY_ID,
            at.ACA_ASNUM,
            at.ACA_NM,
            at.ADMST_ZONE_NM,
            art.match,
            art.user_id,
            art.business_registration_file,
            art.id_file,
            art.operation_registration_file,
            art.approval_status,
            art.reject_reason
        from
            academy_registration_tb art
            left outer join academy_tb at on(at.ACADEMY_ID = art.ACADEMY_ID)
        where
            art.user_id = #{userId}
            and art.approval_status &lt; 1
        order by
            art.approval_status asc,
            art.academy_registration_id desc
        limit #{index}, 5
    </select>
```
- updateAcademyRegist : 
  - approval_status를 -1 -> 0으로 업데이트(승인 거절 -> 승인 대기 상태로 변경)
  - file들 업데이트
  - 거절 사유 null로 비워주기
- getAppliedAcademyRegistrations : 
  - approval_status < 1 -> 승인 대기, 승인 거절 학원들만 조회
  - approval_status 오름차순 -> 승인 거절 상태인 학원이 먼저 보이도록

<br/>

</details>
  
<details>
<summary>나의 문의</summary>

## FrontEnd

### AcademyInquiry
```javascript
const navigate = useNavigate();
const location = useLocation();
const queryParams = new URLSearchParams(location.search);
const academyId = queryParams.get('academyId');

const queryClient = useQueryClient();
const principal = queryClient.getQueryState("getPrincipal");

const [ academyData, setAcademyData ] = useState(); // 학원 정보 상태
const [ inquiryData, setInquiryData ] = useState({    // 문의 정보
    userId: "",
    academyId: "",
    inquiryTitle: "",
    inquiryContent: "",
    answerChecked: 0
});

useEffect(() => {
    setInquiryData({
        ...inquiryData,
        userId: principal.data.data.userId,
        academyId: academyId
    })
}, []);

<RootContainer>
    <div css={S.SLayout}>
        <h1 >문의사항</h1>
        <div css={S.AcademyContainer}>
            학원명: 
            <div>{academyData?.ACA_NM}</div>
        </div>
        <div css={S.InputContainer}>
            <input type="text" name='title' placeholder='제목' onChange={handleTitle}/>
            <textarea placeholder='문의 내용을 입력해주세요!' style={{ resize: "none" }} name="" id="" cols="30" rows="10" onChange={handleContent}></textarea>
        </div>
        <div css={S.ButtonContainer}>
            <button onClick={InquiryButtonClick}>문의하기</button>
        </div>
    </div>
</RootContainer>
```


확인 하지 않은 답변의 개수는 StudentSidebar의 전역에서 관리(학원관리자도 쓰기 때문에)
```javascript
const [uncheckedAnswerCount, setUncheckedAnswerCount] = useState();

        <StudentSidebar
        uncheckedAnswerCount={uncheckedAnswerCount}
        setUncheckedAnswerCount={setUncheckedAnswerCount}
        />
```

### StudentSidebar
```javascript
<MyPageSidebar role={'학생'}>
    <div css={S.IconContainer}>
        <NavLink to='/account/mypage/like/1' activeClassName='active'>
            <div>
                <span>❤️</span>
                <span>관심 학원 {likeCountOfMypage?.data?.data}개</span>
            </div>
        </NavLink>
        <NavLink to='/account/mypage/user' activeClassName='active'>
            <div>
                <span><AiFillSetting/></span>
                <span>개인 정보 수정</span>
            </div>
        </NavLink>
    </div>
    <div css={S.RoleContainer}>
        <NavLink to='/account/mypage/appliedacademy/1' activeClassName='active'>
            🗒️ 학원 신청 목록
        </NavLink>
        <NavLink to='/account/mypage/inquiry/1' activeClassName='active'>
            <div css={S.InquiryBox}>
                📞 나의 문의 
                { uncheckedAnswerCount > 0 && <div>{uncheckedAnswerCount}</div>}
            </div>
        </NavLink>
        <NavLink to='/account/mypage/review/1' activeClassName='active'>
            📜 작성한 후기
        </NavLink>
    </div>
</MyPageSidebar>
```
uncheckedAnswerCount가 0일때는 나타나지 않도록 처리
### MypageInquiry
```javascript
<div>
    <h2>📞 나의 문의</h2>
    <div>
        {getUserInquiryList.data.data.listTotalCount === 0 ? 
        <EmptyBox comment={"정보가 궁금한 학원에 문의를 남겨보세요!"} link={'/academy/find/1'} btn={"보러 가기"}/> : 
        <>
            <div css={S.SComment}>학원을 클릭해서 작성한 문의와 답변을 확인해보세요! 확인 버튼을 누르면 알림이 사라집니다.</div>
            <table css={GS.STable}>
                <tbody>
                    <tr>
                        <td>No</td>
                        <td>학원명</td>
                        <td>문의사항</td>
                        <td>답변</td>
                    </tr>
                    {!getUserInquiryList.isLoading && Array.isArray(getUserInquiryList?.data?.data.inquiries) && getUserInquiryList?.data?.data.inquiries.map(inquiry => {
                        const answerDisplay = inquiry.answer ? 'O' : 'X';
                        return  <tr key={inquiry.inquiryId} 
                                    onClick={() => handleInquiryOnClick(inquiry)} 
                                    style={{
                                        fontWeight: selectedInquiry === inquiry ? 'bold' : 'normal',
                                        color: inquiry.answerChecked === 1 ? 'red' : 'black', cursor: 'pointer'
                                    }}>
                                    <td>{inquiry.inquiryId}</td>
                                    <td>{inquiry.acaNm}</td>
                                    <td>{inquiry.inquiryTitle}</td>
                                    <td>{answerDisplay}</td>
                                </tr>
                    })}
                </tbody>
            </table>
            <Pagination totalCount={getUserInquiryList.data.data.listTotalCount}
                link={'/account/mypage/inquiry'}/>
            {!!selectedInquiry && 
                <SelectedInquiry 
                    selectedInquiry={selectedInquiry}  
                    setSelectedInquiry={setSelectedInquiry}
                    page={page}/>
            }
        </>}
    </div>
</div>
```
getUserInquiryList가 빈값 일때는 보러가기 버튼을 통해 학원 찾기 페이지로 이동 가능

### SelectedInquiry
```javascript
<div css={S.SContainer}>
    <div css={S.SNameContainer}>
        <span css={S.SName}>문의 내역</span>
        <div css={S.SAnswerStatusColor(selectedInquiry.answer)}>{selectedInquiry.answer !== null ? '답변 완료' : '답변 대기중'}</div>
    </div>
    <div>
        <div css={S.SInfoContainer}>
            <span>학원명</span>
            <div>{selectedInquiry.acaNm}</div>
        </div>
        <div css={S.SInfoContainer}>
            <span>제목</span>
            <div>{selectedInquiry.inquiryTitle}</div>
        </div>
        <div css={S.SInfoContainer}>
            <span>내용</span>
            <div>{selectedInquiry.inquiryContent}</div>
        </div>
    </div>
    {!!selectedInquiry.answer && 
        <div css={S.SInfoContainer}>
            <span>답변</span>
            <div>{selectedInquiry.answer}</div>
        </div>}
    <div css={S.SButtonContainer}>
        <button onClick={handleCheckButton}>확인</button>
    </div>
</div>
```

***
- 입력받은 값 처리

### AcademyInquiry
```javascript
const handleTitle = (e) => {
    setInquiryData({
        ...inquiryData,
        inquiryTitle: e.target.value
    });
}

const handleContent = (e) => {
    setInquiryData({
        ...inquiryData,
        inquiryContent: e.target.value
    });
}
```
타이틀과 문의내용이 둘다 입력되어야 문의 가능

### StudentSidebar
```javascript
<div css={S.InquiryBox}>
📞 나의 문의 
{ uncheckedAnswerCount > 0 && <div>{uncheckedAnswerCount}</div>}
</div>
```
uncheckedAnswerCount는 StudentSidebar가 랜더링 될 때마다 불러옴 

### MypageInquiry
```javascript
{!getUserInquiryList.isLoading && Array.isArray(getUserInquiryList?.data?.data.inquiries) && getUserInquiryList?.data?.data.inquiries.map(inquiry => {
    const answerDisplay = inquiry.answer ? 'O' : 'X';
    return  <tr key={inquiry.inquiryId} 
                onClick={() => handleInquiryOnClick(inquiry)} 
                style={{
                    fontWeight: selectedInquiry === inquiry ? 'bold' : 'normal',
                    color: inquiry.answerChecked === 1 ? 'red' : 'black', cursor: 'pointer'
                }}>
                <td>{inquiry.inquiryId}</td>
                <td>{inquiry.acaNm}</td>
                <td>{inquiry.inquiryTitle}</td>
                <td>{answerDisplay}</td>
            </tr>
})}
```
- 답변을 확인 하지 않은 문의는 글자를 붉게 표시
- 문의를 누르면 문의 상세페이지가 표 아래에 나타남
- 선택된 문의는 bold를 써서 나타냄

### SelectedInquiry
```javascript
const handleCheckButton = () => {
    setSelectedInquiry(null);
    queryClient.invalidateQueries(['getUserInquiryList', page]);
}
```
확인 버튼을 누르면 선택된 문의 지우고 리스트 다시 블러오기

***

- 요청
### AcademyInquiry
```javascript
// 학원 정보 가져오기
const getAcademy = useQuery(["getAcademy"], async () => {
    try {
        const options = {
            params: {
                pIndex: 1,
                pSize: 1,
                ACADEMY_ID: academyId
            },
            headers: {
                Authorization: localStorage.getItem("accessToken")
            }
        }
        // api, options를 get 요청
        return await instance.get("/academy", options);
    }catch (error) {
        console.error(error);
    }
},
{
    retry: 0,
    refetchOnWindowFocus: false,
    onSuccess: response => {
        setAcademyData(response.data.academy)
    }
})

// 문의하기 버튼 클릭
const InquiryButtonClick = async() => {
    // inquiryTitle과 inquiryContent가 빈값이나 null인지 확인
    if (!inquiryData.inquiryTitle || !inquiryData.inquiryContent) {
        // 필수 입력값이 비어있는 경우 처리
        alert("제목과 내용을 모두 입력해주세요.");
        return;
    }

    const confirmed = window.confirm(`[${academyData.ACA_NM}]에 문의하시겠습니까?`);
    if (confirmed) {
        const option = {
            headers: {
                Authorization: localStorage.getItem("accessToken")
            }
        }
        try {
            await instance.post("/inquiry", inquiryData, option);
            navigate("/account/mypage/inquiry/1");
        } catch (error) {
            console.error(error);
        }
    } else {
        return;
    }
}
```

### StudentSidebar
```javascript
// 확인하지 않은 문의 수 불러오기
const getUncheckedAnswerCount = useQuery(['getUncheckedAnswerCount'], async () => {
    try {
        const option = {
            headers: {
                Authorization: localStorage.getItem("accessToken")
            }
        }
        return await instance.get(`/inquiry/${principal?.data?.data.userId}/UncheckedAnswerCount`, option)
    } catch (error) {
        console.error(error);
    }
},{
    retry: 0,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
        // uncheckedInquiryCount 값을 가져와서 상태 업데이트
        setUncheckedAnswerCount(data.data);
    }
})
```

### MypageInquiry
```javascript
// 사용자가 작성한 문의 목록 가져오기
const getUserInquiryList = useQuery(['getUserInquiryList', page], async () => {
    try {
        const option = {
            headers: {
                Authorization: localStorage.getItem("accessToken")
            }
        }
        return await instance.get(`/student/inquiries/${principal.data.data.userId}/${page}`,option)
    } catch (error) {
        console.error(error);
    }
}, {
    retry: 0,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
        setSelectedInquiry(null);
        // uncheckedInquiryCount 값을 가져와서 상태 업데이트
        setUncheckedAnswerCount(data.data.uncheckedInquiryCount); 
    }
})

// 문의 선택
const handleInquiryOnClick = async (inquiry) => {
    // 만약 answerChecked가 1이면 서버에 업데이트 요청을 보냄
    if (inquiry.answerChecked === 1) {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            };
            // 서버에 업데이트 요청
            await instance.put(`/inquiry/${inquiry.inquiryId}/updateAnswerChecked?answerChecked=0`, null, option);
            setSelectedInquiry(inquiry);
        } catch (error) {
            console.error(error);
        }
    } else {
        // answerChecked가 0이면 그냥 선택만 함
        setSelectedInquiry(inquiry);
    }
};
```
- 사용자가 작성한 문의 목록 가져오기(정보를 전부 가져온다 -> 선택된 문의에 대한 요청을 따로 날리지 않음)
- 문의 선택 시 답변 확인 업데이트(answer_checked가 1일때만 실행)

## BackEnd

### InquiryController
```java
public class InquiryController {

    private final InquiryService inquiryService;

    // 문의 작성
    @PostMapping("/api/inquiry")
    public ResponseEntity<?> writeInquiry(@Valid @RequestBody WriteInquiryReqDto inquiryReqDto, BindingResult bindingResult) {
        return ResponseEntity.ok(inquiryService.writeInquiry(inquiryReqDto));
    }

    // 사용자(학생)가 작성한 후기 가져오기
    @GetMapping("/api/student/inquiries/{userId}/{page}")
    public ResponseEntity<?> getUserInquiryList(@PathVariable int userId,
                                                @PathVariable int page) {
        return ResponseEntity.ok(inquiryService.getUserInquiries(userId, page));
    }

    // 답변이 달린 문의 확인
    @PutMapping("/api/inquiry/{inquiryId}/updateAnswerChecked")
    public ResponseEntity<?> updateAnswerChecked(@PathVariable int inquiryId, @RequestParam int answerChecked) {
        return ResponseEntity.ok(inquiryService.updateAnswerChecked(inquiryId, answerChecked));
    }

    // 답이 달렸지만 확인하지 않은 문의 수 가져오기
    @GetMapping("/api/inquiry/{userId}/UncheckedAnswerCount")
    public ResponseEntity<?> getUncheckedAnswerCount(@PathVariable int userId) {
        return ResponseEntity.ok(inquiryService.getuncheckedAnswerCount(userId));
    }

}
```

### InquiryService

```java
public class InquiryService {
    private final InpuiryMapper inpuiryMapper;

    @Transactional(rollbackFor = Exception.class)
    public boolean writeInquiry(WriteInquiryReqDto inquiryReqDto) {
        Inquiry inquiry = inquiryReqDto.toInquiry();
        return inpuiryMapper.saveInpuiry(inquiry) > 0;
    }

    public UserInquiriesRespDto getUserInquiries(int userId, int page) {
        int index = (page - 1) * 5;

        List<Inquiry> inquiries = inpuiryMapper.getUserInquiries(userId, index);
        int listTotalCount = inpuiryMapper.getUserInquiriesCount(userId);
        int uncheckedInquiryCount = inpuiryMapper.getUncheckedInquiry(userId);

        return new UserInquiriesRespDto(inquiries, listTotalCount, uncheckedInquiryCount);
    }

    public boolean updateAnswerChecked(int inquiryId, int answerChecked) {
        return  inpuiryMapper.updateAnswerChecked(inquiryId, answerChecked)> 0;
    }

    public int getuncheckedAnswerCount(int userId) {
        return inpuiryMapper.getUncheckedInquiry(userId);
    }
}

```

### repository-InpuiryMapper
```java
@Mapper
public interface InpuiryMapper {
    public int saveInpuiry(Inquiry inquiry);
    public int getUserInquiriesCount(int userId);
    public List<Inquiry> getUserInquiries(int userId, int index);
    public int updateAnswerChecked(int inquiryId, int answerChecked);
    public int getUncheckedInquiry(int userId);
}
```
updateAnswerChecked는 answer_checked를 무조건 0으로 바꾼다

### inpuiry_mapper
```xml
<mapper namespace="com.aws.compass.repository.InpuiryMapper">
    <resultMap id="getUserInquiryMap" type="com.aws.compass.entity.Inquiry">
        <id property="inquiryId" column="inquiry_id"></id>
        <result property="acaNm" column="ACA_NM"></result>
        <result property="inquiryTitle" column="inquiry_title"></result>
        <result property="inquiryContent" column="inquiry_content"></result>
        <result property="answer" column="answer"></result>
        <result property="answerChecked" column="answer_checked"></result>
    </resultMap>

    <insert id="saveInpuiry" parameterType="com.aws.compass.entity.Inquiry">
        insert into inquiry_tb
        value(0, #{userId}, #{academyId}, #{inquiryTitle}, #{inquiryContent}, #{answer}, #{answerChecked})
    </insert>

    <update id="updateAnswerChecked">
        update inquiry_tb
        set
            answer_checked = #{answerChecked}
        where
            inquiry_id = #{inquiryId}
    </update>

    <select id="getUserInquiries" resultMap="getUserInquiryMap">
        SELECT
            it.inquiry_id,
            at.ACA_NM,
            it.inquiry_title,
            it.inquiry_content,
            it.answer,
            it.answer_checked
        FROM
            inquiry_tb it
            LEFT OUTER JOIN academy_tb at ON (at.ACADEMY_ID = it.ACADEMY_ID)
        WHERE
            user_id = #{userId}
        ORDER BY
            it.inquiry_id DESC
        LIMIT #{index}, 5
    </select>

    <select id="getUserInquiriesCount" resultType="java.lang.Integer">
        select
            count(*)
        FROM
            inquiry_tb it
            left outer join academy_tb at on(at.ACADEMY_ID = it.ACADEMY_ID)
        WHERE
            user_id = #{userId}
    </select>

    <select id="getUncheckedInquiry" resultType="java.lang.Integer">
        SELECT
            count(*)
        FROM
            inquiry_tb it
            LEFT OUTER JOIN academy_tb at ON (at.ACADEMY_ID = it.ACADEMY_ID)
        WHERE
            user_id = #{userId}
            and answer_checked = 1
    </select>
</mapper>
```
문의가 작성될때 answer_checked = 0, 답변이 달릴때 answer_checked = 1, 답변을 확인했을 때 answer_checked  = 0이 된다
</details>
  
<details>
<summary>작성한 후기</summary>
<div markdown="1">

### Front-End
```js
const [selectedReview, setSelectedReview] = useState();
const [selectedTarget, setSelectedTarget] = useState();
const [isSelected, setIsSelected] = useState(false);

const reviewOnClick = (e, data) => {
  setSelectedReview(prev => (prev === data ? null : data));

  if (selectedTarget === e.target) {
    setIsSelected(prev => !prev);
    return;
  }
  setSelectedTarget(e.target);
  setIsSelected(true);
};
```
- 리뷰 목록은 테이블로 한눈에 확인
- “선택”한 리뷰만 하단 패널에서 상세 확인/삭제/수정 수행
- 같은 항목을 다시 클릭하면 선택 해제(토글)로 불필요한 화면 이동 제거

```js
const [changeState, setChanegState] = useState(false);

const reviewContentChange = (e) => {
  setSelectedReview({ ...selectedReview, [e.target.name]: e.target.value });
  setChanegState(true);
};

const reviewScoreChange = (value) => {
  setSelectedReview({ ...selectedReview, score: parseFloat(value) });
  setChanegState(true);
};

const reviewSubmitButton = async () => {
  if (changeState) {
    await instance.put(`/review`, selectedReview);
    setChanegState(false);
    return getUserReviews.refetch();
  } else {
    setModifyButtonState(false);
  }
};
```
- 수정 모드에서 실제 변경이 없는데도 서버 요청이 나가는 것을 막아, 불필요한 네트워크 요청과 서버 부하를 줄이도록 구성
- 별점/내용 변경 시에만 changeState=true
- 변경이 있을 때만 수정 API 호출, 변경이 없으면 수정 모드만 종료하여 UX 단순화
***
### Back-End
- 리뷰 작성/수정/삭제 정책 및 단건 조회 분리 설계는 ‘학원 상세페이지 – 수강후기’ 섹션에서 동일하게 적용

```js
public ReviewListRespDto getUserReviews(int userId, int page) {
    int index = (page - 1) * 5;
    return new ReviewListRespDto(
        accountMapper.getUserReviews(userId, index),
        accountMapper.getUserReviewCount(userId)
    );
}
```
- getUserReviews: 현재 페이지의 후기 목록 조회
- getUserReviewCount: 전체 후기 개수 조회
- 두 결과를 ReviewListRespDto로 묶어 프론트에서 Pagination 구성에 바로 활용
</div>
</details>

<br/>


### **학원 관리자 마이페이지**
<details>
<summary>나의 학원</summary>

![나의 학원정보 수정](https://github.com/KoreaIt-J-23-2-2/compass_front/assets/137989664/38ecf768-96e3-472e-b5ff-eaf65702c3fc)

<br/>

승인된 나의 학원 목록을 보고 학원 상세 정보를 수정할 수 있는 기능

---

<br/>

**html - 나의 학원 선택**

```html
<h2>🎒 나의 학원</h2>
<div>
    {getMyAcademies.data.data.listTotalCount === 0 ? 
    <EmptyBox comment={<>나의 학원이 없습니다! <br />학원을 등록하고 승인 받아 나의 학원 정보를 등록해보세요!</>}
        link={'/academy/regist'} btn={"등록하기"}/> :
    <>
        <div css={S.SComment}>나의 <span>학원 정보를 수정</span>해보세요! 학원명을 클릭하면 상세 페이지로 이동합니다.</div>
        <table css={GS.STable}>
            <tbody>
                <tr>
                    <td>학원 번호</td>
                    <td>학원명</td>
                    <td>학원 선택</td>
                </tr>
                { getMyAcademies?.data?.data.academyRegistrations.map(academy => {
                    return  <tr key={academy.academyRegistrationId} 
                                style={{ fontWeight: selectedAcademy === academy ? 'bold' : 'normal'}}>
                                <td>{academy.acaAsnum}</td>
                                <td css={S.SAcaNm} onClick={()=> {navigate(`/academy/info/1?ACADEMY_ID=${academy.academyId}`)}}>{academy.acaNm}</td>
                                <td>
                                    <button css={GS.SButton} onClick={(e) => handleAcademyOnClick(e, academy)}>
                                        {selectedAcademy === academy ? '선택 해제' : '선택'}
                                    </button>
                                </td>
                            </tr>
                })}
            </tbody>
        </table>
        <Pagination totalCount={getMyAcademies?.data?.data?.listTotalCount}
            link={`/account/mypage/myacademy`} />
        <div>
            {selectAcademyInfoOpen && !!selectedAcademy && <DetailMyAcademy selectedAcademy={selectedAcademy}/>}
        </div>
    </> }
</div> 
```
- 승인된 나의 학원 목록 띄워줌
- 학원 선택시 학원 정보 수정 창 띄워줌

<br/>

**나의 학원 불러오기**

```javascript
    const getMyAcademies = useQuery(["getMyAcademies", page], async () => {
        const option = {
            headers: {
                Authorization: localStorage.getItem("accessToken")
            }
        }
        return await instance.get(`/academies/${principal.data.data.userId}/${page}`, option);
    }, {
        refetchOnWindowFocus: false,
        onSuccess: () => {
            setSelectedAcademy(null);
        }
    })
```
- /academies/{userId}/{page}로 get 요청

<br/>

---

<br/>

**html - 학원 상세 정보 가져오기**

```html
<div>
    <div css={S.STitleBox}>
        <span>학원 정보</span>
    </div>
    <div css={S.SImgBox}>
        로고 이미지
        <div>
            <img src={newAcademyDetailInfo.academyInfo.logoImg} alt="" />
            <input type="file" onChange={handleImgInputChange}/>
            {logoImgProgressPercent != 0 && logoImgProgressPercent != 100 && 
                <Line percent={logoImgProgressPercent} strokeWidth={2} strokeColor="#67dce2" trailColor="#D3D3D3"/>
            }
        </div>
    </div>
    <div css={S.SInfoBox}>수강 인원<input type="text" name="classSize" value={newAcademyDetailInfo?.academyInfo?.classSize || ""} onChange={handleInfoInputChange}/></div>
    <div css={S.SInfoBox}>수강 기간<input type="text" name="coursePeriod" value={newAcademyDetailInfo?.academyInfo?.coursePeriod || ""} onChange={handleInfoInputChange}/></div>
    <div css={S.SInfoBox}>수강 목적<input type="text" name="purpose" value={newAcademyDetailInfo?.academyInfo?.purpose || ""} onChange={handleInfoInputChange}/></div>
    <div css={S.SInfoBox}>홈페이지<input type="text" name="homePage" value={newAcademyDetailInfo?.academyInfo?.homePage || ""} onChange={handleInfoInputChange}/></div>
    <div css={S.SInfoBox}>학원 전화번호<input type="text" name="phone" value={newAcademyDetailInfo?.academyInfo?.phone || ""} onChange={handleInfoInputChange}/></div>
</div>
```
- 로고 이미지, 수강 인원, 수강 기간 등의 상세 정보를 입력하는 부분


<br/>

**학원 정보 가져오는 기능**
```javascript
    // 학원 정보 가져오기
    const getAcademy = useQuery(["getAcademy", selectedAcademy], async () => {
        try {
            const options = {
                params: {
                    pIndex: 1,
                    pSize: 1,
                    ACADEMY_ID: selectedAcademy.academyId
                },
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            // api, options를 get 요청
            return await instance.get("/academy", options);
        }catch (error) {
            console.error(error);
        }
    },
    {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setAcademyDetailInfo({
                "academyInfo": response.data.academyInfo ? response.data.academyInfo : academyInfo,
                "age": response.data.age,
                "convenience": response.data.convenience,
                "classInfo": response.data.classInfo
            });
            setNewAcademyDetailInfo({
                "academyInfo": !!response.data.academyInfo ? response.data.academyInfo : academyInfo,
                "age": response.data.age,
                "convenience": response.data.convenience,
                "classInfo": response.data.classInfo
            });

            setSelectedAgeOptions(response.data.age.map(option => {
                return { value: option.ageId, label: option.ageRange }
            }));
            setSelectedConvenienceOptions(response.data.convenience.map(option => {
                return { value: option.convenienceId, label: option.convenienceName }
            }));

            setTableData(
                response.data.classInfo.map((classItem, index) => ({
                    id: index + 1,
                    classInfoId: classItem.classInfoId,
                    className: classItem.className,
                    classPrice: classItem.classPrice
                }))
            );
        }
    })
```
- 이전 AcademyDetailInfo와 새로운 NewAcademyDetailInfo를 가져온다.
- selectedAgeOption, selectedConvenienceOption을 가져와준다. (체크박스에서 선택된 옵션 설정)
- tableData에 classInfo를 가져와 준다.

<br/>


**로고 이미지 업로드 함수**
```javascript
    const handleImgInputChange = (e) => {
        const file = e.target.files[0];
        //firebase에 저장
        const storageRef = ref(storage, `logoImg/${selectedAcademy.academyId}/logoImg.jpg`);    // 해당 파일의 이름으로 firebase의 storage에 저장됨
        const uploadTask = uploadBytesResumable(storageRef, file);        // 파일 업로드가 실행됨
        uploadTask.on(          //업로드가 시작되면
            "state_changed",    //파일이 변경되고 있을 때
            (snapshot) => {     //파일 업로드 대기 중 프로그레스 바 적용할 때 사용
                // 증가하는 %가 들어있음
                setLogoImgProgressPercent(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100));
            },
            (error) => {        //업로드 실패할 경우
                console.error(error);
            },
            () => { //업로드가 완료되었을 경우
                getDownloadURL(storageRef).then(downloadUrl => {    //방금전 성공한 업로드 경로를 가져옴
                    setNewAcademyDetailInfo({
                        ...newAcademyDetailInfo, 
                        "academyInfo": {
                            ...newAcademyDetailInfo.academyInfo,
                            "logoImg": downloadUrl
                        }
                    });
                })
            }
        )
    }
```
- 파이어베이스에 파일을 업로드 하고 업로드된 경로를 가져와 newAcademyDetailInfo 객체에 업데이트 한다.



<br/>

---

<br/>

**html - 수강 연령, 시설 및 편의사항 체크박스**


```html
<div>
    <div css={S.STitleBox}>
        <span>수강 연령</span>
    </div>
    <div css={S.SCheckBox}>
    {!ageOptions.isLoading && ageOptions?.map((option) => (
        <div key={option.value}>
            <input
                type="checkbox"
                checked={selectedAgeOptions.some((selectedOption) => selectedOption.value === option.value)}
                onChange={() => handleCheckboxChange(option, 'age')}
            />
            {option.label}
        </div>
    ))}
    </div>
</div>
<div>
    <div css={S.STitleBox}>
        <span>시설 및 편의사항</span>
    </div>
    <div css={S.SCheckBox}>
    {!convenienceOptionsState.isLoading && convenienceOptions?.map((option) => (
        <div key={option.value}>
            <input
                type="checkbox"
                checked={selectedConvenienceOptions.some((selectedOption) => selectedOption.value === option.value)}
                onChange={() => handleCheckboxChange(option, 'convenience')}
            />
            {option.label}
        </div>
    ))}
    </div>
</div>
```
- 수강 연령, 시설 및 편의사항은 체크박스로 가져와 selectedOption으로 이전에 있던 항목은 체크되도록 한다. 

<br/>

**옵션 가져오는 기능**
```javascript
    const ageOptionsState = useQuery(["ageOptionsState"], async () => {
        try {
            return await instance.get("/option/ages");
        } catch(error) {
            console.error(error);
        }
    },
    {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setAgeOptions(response.data.map(option => {
                return { value: option.ageId, label: option.ageRange }
            }))
        }
    });

    const convenienceOptionsState = useQuery(["convenienceOptionsState"], async () => {
        try {
            return await instance.get("/option/conveniences");
        }catch(error) {
            console.error(error);
        }
    },
    {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setConvenienceOptions(response.data.map(option => {
                return { value: option.convenienceId, label: option.convenienceName }
            }))
        }
    });
```
- ageOption과 convenienceOption을 가져온다.

<br/>

**체크박스 OnChange 함수**


```javascript
    const handleCheckboxChange = (option, optionType) => {
        const optionId = option.value;
        const optionName = option.label;
    
        if (optionType === 'age') {
            const updatedSelectedOptions = selectedAgeOptions.map(({ value }) => value).includes(optionId)
                ? selectedAgeOptions.filter(({ value }) => value !== optionId)
                : [...selectedAgeOptions, { value: optionId, label: optionName }];
            setSelectedAgeOptions(updatedSelectedOptions);
    
            setNewAcademyDetailInfo((prev) => ({
                ...prev,
                age: updatedSelectedOptions.map(({ value, label }) => ({ ageId: value, ageRange: label })),
            }));
        } else {
            const updatedSelectedOptions = selectedConvenienceOptions.map(({ value }) => value).includes(optionId)
                ? selectedConvenienceOptions.filter(({ value }) => value !== optionId)
                : [...selectedConvenienceOptions, { value: optionId, label: optionName }];
    
            setSelectedConvenienceOptions(updatedSelectedOptions);
    
            setNewAcademyDetailInfo((prev) => ({
                ...prev,
                convenience: updatedSelectedOptions.map(({ value, label }) => ({ convenienceId: value, convenienceName: label })),
            }));
        }
    };
```
- optionType에 따라 selectedOptions, newAcademyDetailInfo를 업데이트 해준다.
- map을 통해 value가 optionId를 포함한다면(체크돼있던 걸 해제) filter로 selectedOptions에서 제거해주고, 포함하지 않는다면(체크돼있지 않던 걸 체크) selectedOptions에 추가해준다.

<br/>

---

<br/>

**html - 학원 수업 정보 표**
```html
<div css={S.SClassBox}>
    <div css={S.STitleBox}>
        <span>학원 수업 정보</span>
        <button onClick={addRow} css={GS.SButton}>추가</button>
    </div>
    {tableData.length < 1 ? <div css={S.SEmpty}>수업 정보가 없습니다. 추가 버튼을 눌러 수업 정보를 추가해보세요!</div> : 
    <table css={GS.STable}>
        <tbody>
            <tr>
                <th>번호</th>
                <th>과정명</th>
                <th>가격</th>
                <th>과정 삭제</th>
            </tr>
        {tableData.map((row) => (
            <tr key={row.id}>
                <td>{row.id}</td>
                <td>
                    <input type="text"
                        value={row.className}
                        onChange={(e) => handleClassInputChange(row.id, 'className', e.target.value)}/>
                </td>
                <td>
                    <input type="text"
                        value={row.classPrice}
                        onChange={(e) => handleClassInputChange(row.id, 'classPrice', e.target.value)}/>
                </td>
                <td>
                    <button onClick={() => handleDeleteRow(row.id)} css={GS.SButton}>삭제</button>
                </td>
            </tr>
        ))}
        </tbody>
    </table>}
</div>
```
- 표에서 추가, 삭제 버튼으로 행을 삽입, 삭제 할 수 있다.

<br/>


**수업 정보 표 행 추가, 삭제, 입력 함수**

``` javascript
    const addRow = () => {
        setTableData([
            ...tableData,
            { id: tableData.length + 1, classInfoId: '', className: '', classPrice: '' },
        ]);
    };

    const handleDeleteRow = (id) => {
        const updatedTableData = tableData.filter((row) => row.id !== id);
        // 다시 번호 매기기
        const renumberedTableData = updatedTableData.map((row, index) => ({
          ...row,
          id: index + 1,
        }));
        setTableData(renumberedTableData);

        // 삭제된 데이터를 newAcademyDetailInfo에서도 제거
        const updatedClassInfo = renumberedTableData.map((row) => ({
            className: row.className,
            classPrice: row.classPrice,
        }));

        setNewAcademyDetailInfo((prev) => ({
            ...prev,
            classInfo: updatedClassInfo,
        }));
    };

    const handleClassInputChange = (id, fieldName, value) => {
        const updatedTableData = tableData.map((row) =>
            row.id === id ? { ...row, [fieldName]: value } : row
        );
        setTableData(updatedTableData);
    
        const updatedClassInfo = updatedTableData.map((row) => ({
            className: row.className,
            classPrice: row.classPrice,
        }));
    
        setNewAcademyDetailInfo((prev) => ({
            ...prev,
            classInfo: updatedClassInfo,
        }));
    };  
```
- addRow : 행을 삽입하는 함수, id를 tableData의 크기보다 하나 큰 값으로 두고 나머지 데이터를 빈 값으로 넣어준다.
- handleDeleteRow : 
  - 삭제 버튼을 클릭한 행의 id를 filter로 삭제
  - 앞 번호가 삭제되면 id가 중복될 수 있어 다시 번호를 매겨준다.
  - newAcademyDetailInfo에서도 삭제
- handleClassInputChange : tableData와 newAcademyDetailInfo 업데이트 해준다.


<br/>

---

<br/>

**수정하기 버튼 이벤트**


``` javascript
    const handleEditBtnClick = async () => {
        try {
            const isAnyFieldEmpty = tableData.some((row) => !row.className || !row.classPrice);

            if (isAnyFieldEmpty) {
                alert('수업 과정에 빈 값이 없도록 모두 입력하세요!');
                return;
            }

            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            
            if(JSON.stringify(newAcademyDetailInfo) !== JSON.stringify(academyDetailInfo)) {    // 기존 academyInfo와 달라졌을 때만 수정
                await instance.put("/academy", newAcademyDetailInfo, option);
            }
            alert("수정이 완료되었습니다.");
            getAcademy.refetch();
        } catch (error) {
            alert("수정 오류");
            console.error(error);
        }
    }
```
- 수업 과정에 수업명이나 가격이 비어 있으면 수업 과정에 빈 값이 없도록 하라는 알림
- 기존 academyDetailInfo와 다를 때만 /academy로 put 요청
- academy_info_tb에는 학원이 등록 될 때 내용이 null 값으로 insert되는 트리거가 있으므로 무조건 put 요청만 하면 된다.

<br/>

---

<br/>

### Back End

**AcademyController**


```java
    // 나의 학원보기
    @GetMapping("/api/academies/{userId}/{page}")
    public ResponseEntity<?> getMyAcademies(@PathVariable int userId, @PathVariable int page) {
        return ResponseEntity.ok(academyService.getMyAcademies(userId, page));
    }

    // 학원 정보 수정
    @PutMapping("/api/academy")
    public ResponseEntity<?> editAcademyInfo(@RequestBody EditAcademyInfoReqDto editAcademyInfoReqDto) {
        return ResponseEntity.ok(academyService.editAcademyInfo(editAcademyInfoReqDto));
    }
```



<br/>

**AcademyService**


```java
    public MyAcademiesRespDto getMyAcademies(int userId, int page) {
        int index = (page - 1) * 5;

        List<AcademyRegistration> academyRegistrations = academyMapper.getMyAcademyRegistrations(userId, index);
        int listTotalCount = academyMapper.getMyAcademyCount(userId);

        return new MyAcademiesRespDto(academyRegistrations, listTotalCount);
    }

    @Transactional(rollbackFor = Exception.class)
    public boolean editAcademyInfo(EditAcademyInfoReqDto editAcademyInfoReqDto) {
        AcademyInfo academyInfo = editAcademyInfoReqDto.getAcademyInfo();
        academyMapper.updateAcademyInfo(academyInfo);

        List<Age> ages = editAcademyInfoReqDto.getAge();
        academyMapper.deleteAge(academyInfo.getAcademyInfoId());
        ages.forEach(age -> {
            academyMapper.insertAge(academyInfo.getAcademyInfoId(), age.getAgeId());
        });

        List<Convenience> conveniences = editAcademyInfoReqDto.getConvenience();
        academyMapper.deleteConvenience(academyInfo.getAcademyInfoId());
        conveniences.forEach(convenience -> {
            academyMapper.insertConvenience(academyInfo.getAcademyInfoId(), convenience.getConvenienceId());
        });

        List<ClassInfo> classInfos = editAcademyInfoReqDto.getClassInfo();
        academyMapper.deleteClassInfo(academyInfo.getAcademyInfoId());
        classInfos.forEach(classInfo -> {
            academyMapper.insertClassInfo(academyInfo.getAcademyInfoId(), classInfo);
        });
        return true;
    }
```
- academy_info_tb의 학원 상세 정보들 업데이트
- 수업 연령, 편의 시설, 수업 정보는 한 학원당 여러 개가 있기 때문에 업데이트가 까다로워 해당 학원의 데이터를 모두 삭제한 후 새로운 데이터를 insert 하는 방법을 사용하였다.
- 배열로 정보들을 받아와서 forEach로 하나씩 insert해주었다.


<br/>

**academy_mapper**


```xml
    <select id="getMyAcademyRegistrations" resultMap="academyRegistrationMap" parameterType="map">
        select
            art.academy_registration_id,
            art.ACADEMY_ID,
            at.ACA_ASNUM,
            at.ACA_NM,
            at.ADMST_ZONE_NM,
            art.match,
            art.user_id,
            art.business_registration_file,
            art.id_file,
            art.operation_registration_file,
            art.approval_status,
            art.reject_reason
        from
            academy_registration_tb art
                left outer join academy_tb at on(at.ACADEMY_ID = art.ACADEMY_ID)
        where
            art.user_id = #{userId}
            and art.approval_status = 1
        order by
            art.academy_registration_id desc
        limit #{index}, 5
    </select>
```
- approval_status가 1인 학원 리스트 조회(승인된 학원)


<br/>


```xml
    <update id="updateAcademyInfo" parameterType="com.aws.compass.entity.AcademyInfo">
        update
            academy_info_tb
        set
            logo_img = #{logoImg},
            class_size = #{classSize},
            course_period = #{coursePeriod},
            purpose = #{purpose},
            home_page = #{homePage},
            phone = #{phone}
        where
            academy_info_id = #{academyInfoId}
    </update>
```
- 로고 이미지, 수업 인원, 수업 기간 등 정보 업데이트

<br/>

```xml
    <insert id="insertConvenience">
        insert into academy_convenience_tb
        values(0, #{academyInfoId}, #{convenienceId})
    </insert>
    <insert id="insertAge">
        insert into attendance_age_tb
        values(0, #{academyInfoId}, #{ageId})
    </insert>
    <insert id="insertClassInfo">
        insert into class_info_tb
        values(0, #{academyInfoId}, #{classInfo.className}, #{classInfo.classPrice})
    </insert>
    <delete id="deleteConvenience">
        delete from
            academy_convenience_tb
        where
            academy_info_id = #{academy_info_id}
    </delete>
    <delete id="deleteAge">
        delete from
            attendance_age_tb
        where
            academy_info_id = #{academy_info_id}
    </delete>
    <delete id="deleteClassInfo">
        delete from
            class_info_tb
        where
            academy_info_id = #{academy_info_id}
    </delete>
```
- 수업 연령, 편의 시설, 수업 정보는 해당 academy_info_id의 데이터를 모두 delete한 후 insert 해준다.

<br/>

---

<br/>

</details>
 
<details>
<summary>광고 결제</summary>

![광고결제](https://github.com/KoreaIt-J-23-2-2/compass_front/assets/137989664/dd5537d8-ec3a-411a-8b59-98741f6ed723)

### FrontEnd

#### 카카오 결제 및 마이페이지 결제 리스트

```html
<div>
            <h2>💸 광고 결제</h2>
            <div>
                {getMyAcademies.data.data.listTotalCount === 0 ? 
                <EmptyBox comment={<>광고 결제할 학원이 없습니다! <br />학원을 등록하고 승인 받아 나의 학원을 홍보해보세요!</>}
                    link={'/academy/regist'} btn={"등록하기"}/> :
                <>
                    <div css={S.SComment}><span>광고 결제</span> 하고 <span>나의 학원을 홍보</span>해보세요! 학원명을 클릭하면 상세 페이지로 이동합니다.</div>
                    <table css={GS.STable}>
                        <tbody>
                            <tr>
                                <td>학원 번호</td>
                                <td>학원명</td>
                                <td>학원 선택</td>
                            </tr>
                        { getMyAcademies?.data?.data.academyRegistrations.map(academy => {
                            return  <tr key={academy.academyRegistrationId} 
                                        style={{ fontWeight: selectedAcademy === academy ? 'bold' : 'normal'}}>
                                        <td>{academy.acaAsnum}</td>
                                        <td css={S.SAcaNm} onClick={()=> {navigate(`/academy/info?ACADEMY_ID=${academy.academyId}`)}}>{academy.acaNm}</td>
                                        <td>
                                            <button css={GS.SButton} onClick={(e) => handleAcademyOnClick(e, academy)}>
                                                {selectedAcademy === academy ? '선택 해제' : '선택' }
                                            </button>
                                        </td>
                                    </tr>
                        })}
                        </tbody>
                    </table>
                    {!getMyAcademies.isLoading && 
                        <Pagination totalCount={getMyAcademies?.data?.data?.listTotalCount}
                            link={`/account/mypage/adpayment`}/>}
                    {isPaymentInfoOpen && !!selectedAcademy && (
                    <div css={S.SProductContainer}>
                        {ispurchase.isLoading ? <></> : !!isAcademyPaid
                        ? (
                        <div css={S.SPurchaseInfoBox}>
                            <div css={S.SPurchaseInfo}>
                                <span>결제된 내용</span>
                                <div>상품 : {isAcademyPaid.productName}</div>
                                <div>가격 : {isAcademyPaid.productPrice}원</div>
                                <div>기간 : {isAcademyPaid.productPeriod}일</div>
                                <div>상품 기간 : {formatDate(isAcademyPaid.purchaseDate)} ~ {formatDate(addDays(isAcademyPaid.purchaseDate, isAcademyPaid.productPeriod))}</div>
                                <div>상품설명 : {isAcademyPaid.productPrice}원의 행복</div>
                            </div>
                        </div>
                        )
                        : products.map(product => {
                                return (
                                <div css={S.SProductLayout} onClick={() => { handlePaymentSubmit(product); }}>
                                    <div css={S.SProductImgBox}>
                                        <img css={S.SProductImg} src={productImg} alt="" />
                                        <p css={S.SProductImgText}>{product.productPrice}원</p>
                                    </div>
                                        <div css={S.SProductDetail}>
                                        <div>상품 : {product.productName}</div>
                                        <div>가격 : {product.productPrice}원</div>
                                        <div>기간 : {product.productPeriod}일</div>
                                        <div>상품설명 : {product.productPrice}원의 행복</div>
                                    </div>
                                </div>
                                );
                            })
                        }
                    </div>
                    )}
                </>}
            </div>
        </div>
```
- handlePaymentSubmit 결제를 처리하는 핵심 함수
- 결제된 학원 목록을 테이블로 표시하고, 선택된 학원에 대한 결제 정보를 상세하게 제공
- 결제 정보가 없는 경우에는 알림 메시지와 함께 등록된 학원이 없다는 안내를 제공

#### 입력받은 값
```javascript
// 결제
    const getProduct = useQuery(["getProduct"], async () => {
        try{
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            return await instance.get(`/ad/products`, option)
        } catch(error){
            console.error(error)
        }
    }, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            setProducts(response.data);
        }
    })

    useEffect(() => {
        const iamport = document.createElement("script");
        iamport.src = "https://cdn.iamport.kr/v1/iamport.js";
        document.head.appendChild(iamport);
        return () => {
            document.head.removeChild(iamport);
        }
    }, [])

// 카카오 결제 관련
    const handlePaymentSubmit = (product) => {
        const principal = quertClient.getQueryState("getPrincipal");
        if(!window.IMP) {return}
        const { IMP } = window;
        IMP.init("imp52230315") // IMP를 초기화 시킴

        const paymentData = {
            pg: "kakaopay",
            pay_method: "kakaopay",
            merchant_uid: `mid_${new Date().getTime()}`,
            amount: product.productPrice,
            name: product.productName,
            buyer_name: principal?.data?.data.name,
            buyer_email: principal?.data?.data.email
        }

        IMP.request_pay(paymentData, (response) => {
            const { success, error_msg } = response;

            if(success) {
                const purchaseDate = {
                    productId: product.productId,
                    userId: principal?.data?.data.userId,
                    academyId: selectedAcademy.academyId
                }
                const option = {
                    headers: {
                        Authorization: localStorage.getItem("accessToken")
                    }
                }
                instance.post("/purchase", purchaseDate, option).then(response => {
                    alert("광고결제가 완료되었습니다. 감사합니다!!🙇")
                    ispurchase.refetch()
                    quertClient.refetchQueries(["getPrincipal"])
                })
            } else {
                alert(error_msg);
            }
        })
    }
```
- 아임포트(Iamport): 아임포트는 결제 처리를 도와주는 외부 라이브러리입니다. 초기화 및 결제 요청에 사용됩니다.

  (아임포트)
https://portone.io/korea/koutm_source=google&utm_medium=google_sa&utm_campaign=pf_conversion_2302_kr&utm_content=homepage&gclid=EAIaIQobChMI0Za95tHlggMVzyZ7Bx3TTg0dEAAYASAAEgI14fD_BwE

- 주요 기능:

1. 결제된 학원 표시 :
getMyAcademies 쿼리를 통해 사용자가 결제한 학원 목록을 가져옵니다.
테이블을 사용하여 학원 번호, 학원명, 선택 버튼을 표시

2. 결제 처리 (handlePaymentSubmit) :
카카오 결제를 위해 IMP를 초기화하고, 결제 정보를 구성하여 IMP.request_pay를 호출
결제 성공 시, 해당 정보를 서버에 전송하여 결제 내역을 기록하고, 관련 데이터를 업데이트

3. 상품 목록 표시 :
getProduct 쿼리를 통해 광고 상품 목록을 가져옵니다.
가져온 상품 목록을 렌더링하여 사용자에게 선택할 수 있는 상품을 표시

4. 상품 선택 및 결제 내역 표시 :
사용자가 상품을 선택하면 해당 상품에 대한 결제 정보를 표시
이미 결제한 경우에는 결제된 내용을 상세히 표시하고, 결제되지 않았다면 선택할 수 있는 상품 목록을 제공

#### 학원 찾기 페이지 광고 리스트
```html
  <div>
    <div css={S.HeaderBox}>
        <h3>이런 학원은 어떠세요?</h3>
        <div>
            <span>광고</span>
            <RiAdvertisementFill size={22}/>
        </div>
    </div>
    <ul css={S.UlBox}>
    {!getPurchaseAcademyList.isLoading && Array.isArray(getPurchaseAcademyList?.data?.data) && getPurchaseAcademyList?.data?.data.map(academy => {
        return <LiAcademyBox key={academy.ACADEMY_ID} academy={academy}/>
    })}
    </ul>
</div>
```
- 광고 리스트의 각 학원은 LiAcademyBox 컴포넌트를 통해 표현

#### 입력받은 값
```javascript
// 광고 목록 가지고오기
    const getPurchaseAcademyList = useQuery(["getPurchaseAcademyList"], async () => {
        try{
            return await instance.get(`/ad/academies/random`)

        } catch(error) {
            console.error(error)
        }
    }, {
        retry: 0,
        refetchOnWindowFocus: false
    })
```
- 광고 목록을 가져오기 위해 API 엔드포인트 /ad/academies/random에 비동기 요청을 보냅니다.
- 가져온 학원 목록은 getPurchaseAcademyList.data.data에 저장
- 가져온 학원 목록을 매핑하여 각 학원을 LiAcademyBox로 표시

### Backend

#### Controller
```java
@RestController
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentService paymentService;

    // 광고 목록 가져오기
    @GetMapping("/api/ad/products")
    public ResponseEntity<?> getProducts() {
        return ResponseEntity.ok(paymentService.getProducts());
    }

    // 광고 결제된 학원
    @PostMapping("/api/purchase")
    public ResponseEntity<?> purchase(@RequestBody PurchaseReqDto purchaseReqDto) {
        return ResponseEntity.ok(paymentService.purchase(purchaseReqDto));
    }

    // 광고 정보 유효성 검사
    @GetMapping("/api/purchase/check")
    public ResponseEntity<?> getPurchaseInfo(@RequestParam int userId, @RequestParam int academyId) {
        return ResponseEntity.ok(paymentService.isPurchase(userId, academyId));
    }
}
```
- 광고 제품 및 구매와 관련된 엔드포인트를 관리

#### DTO
```java
  @Data
@Builder
public class PurchaseReqDto {

    private int purchaseInfoId;
    private int academyId;
    private int userId;
    private int productId;
    private Date purchaseDate;
    private int productPeriod;

    public Purchase toPurchase() {
        return Purchase.builder()
                .purchaseInfoId(purchaseInfoId)
                .academyId(academyId)
                .userId(userId)
                .productId(productId)
                .purchaseDate(purchaseDate)
                .build();
    }
}
```
- 광고와 관련된 정보의 데이터 전송 객체

#### Service
```java
@Service
@RequiredArgsConstructor
public class PaymentService {

    private final PaymentMapper paymentMapper;

    public List<ProductRespDto> getProducts() {
        List<ProductRespDto> productRespDtos = new ArrayList<>();
        paymentMapper.getProducts().forEach(product -> {
            productRespDtos.add(product.toProduct());
        });
        return productRespDtos;
    }

    public boolean purchase(PurchaseReqDto purchaseReqDto) {
        return paymentMapper.savePurchase(purchaseReqDto.toPurchase()) > 0;
    }

    public PurchaseInfoRespDto isPurchase(int userId, int academyId) {
        if(!Objects.isNull(paymentMapper.checkPurchase(userId, academyId))) {
            return paymentMapper.checkPurchase(userId, academyId).toPurchaseInfoDto();
        }
        return null;
    }
}
```
- 결제와 관련된 작업을 처리하는 비즈니스 로직이 포함된 서비스

- 광고 제품 가져오기 : paymentMapper.getProducts()를 사용하여 광고 제품 목록을 가져옵니다.
- 학원을 위한 광고 구매 : 제공된 구매 정보로 paymentMapper.savePurchase()를 호출하여 구매를 시작합니다.
- 광고 정보 유효성 검사 : paymentMapper.checkPurchase()를 호출하여 광고 정보의 유효성을 확인합니다.

#### Repository
```java
@Mapper
public interface PaymentMapper {

    public List<Product> getProducts();
    public int savePurchase(Purchase purchase);
    public Product checkPurchase(int userId, int academyId);
}
```
- 결제와 관련된 데이터베이스 상호 작용을 위한 MyBatis Mapper 인터페이스
#### SQL
```java
<resultMap id="productMap" type="com.aws.compass.entity.Product">
        <id property="productId" column="product_id"/>
        <result property="productName" column="product_Name"/>
        <result property="productPrice" column="product_price"/>
        <result property="productPeriod" column="product_period"/>
        <result property="purchaseDate" column="purchase_date"/>
    </resultMap>

    <resultMap id="purchaseMap" type="com.aws.compass.entity.Purchase">
        <id property="purchaseInfoId" column="purchase_info_id"/>
        <result property="academyId" column="academy_id"/>
        <result property="userId" column="user_id"/>
        <result property="productId" column="product_id"/>
        <result property="purchaseDate" column="purchase_date"/>
    </resultMap>

    <insert id="savePurchase" parameterType="com.aws.compass.entity.Purchase">
        insert into purchase_info_tb
        values(0, #{academyId}, #{userId}, #{productId}, CONVERT_TZ(NOW(), 'UTC', 'Asia/Seoul'))
    </insert>

    <select id="getProducts"
            resultMap="productMap">
        select
            pt.product_id,
            pt.product_name,
            pt.product_price,
            pt.product_period
        from
            product_tb pt
    </select>

    <select id="checkPurchase" resultMap="productMap">
        SELECT
            pit.purchase_date,
            pt.product_name,
            pt.product_period,
            pt.product_price
        FROM
            purchase_info_tb pit
            left outer join product_tb pt on(pt.product_id = pit.product_id)
        where
            user_id = #{userId}
            and ACADEMY_ID = #{academyId}
            and now() <![CDATA[ <= ]]> date_add(purchase_date, interval pt.product_period DAY)
    </select>
```
- 결과 매핑: SQL 쿼리 결과를 Java 객체에 매핑하기 위한 결과 맵을 정의 (productMap 및 purchaseMap)
- Insert 쿼리 (savePurchase)
- purchase_info_tb 테이블에 새로운 구매 레코드를 삽입
- Select 쿼리 (getProducts 및 checkPurchase)


</details>
  
<details>
<summary>나의 학원 문의</summary>

#### 나의 문의는 학생과 동일

## FrontEnd
### MypageConsultation
```javascript
const navigate = useNavigate();
const { page } = useParams();

const queryClient = useQueryClient();
const principal = queryClient.getQueryState("getPrincipal");

const [ academyList, setAcademyList ] = useState();
const [ selectedAcademy, setSelectedAcademy ] = useState({ value: null, label: '전체' });
const [ selectedInquiry, setSelectedInquiry ] = useState();
const [ unansweredOnly, setUnansweredOnly ] = useState(0);

<div>
    <h2>📩 나의 학원 문의</h2>
    <div>
        {getMyAcademyAll.data.data.listTotalCount === 0 ? 
        <EmptyBox comment={"나의 학원이 없습니다."} link={'/academy/regist'} btn={"등록하기"}/> : 
        <>
            <div css={S.SOptionBox}>
                <Select options={academyList} 
                    css={S.SSelect}
                    defaultValue={selectedAcademy}
                    onChange={handleAcademyChange} 
                />
                <div>
                    <input 
                        type="checkbox" 
                        id='unansweredOnly' 
                        onChange={handleUnansweredOnlyChange} 
                    />
                    <label htmlFor="unansweredOnly">미답변 문의</label>
                </div>
            </div>
            <div>
                {!getInquiryList.isLoading && getInquiryList.data.data.inquiries.length === 0 ? 
                <div css={S.SEmptyBox}>{selectedAcademy.label}에는 남겨진 문의가 없습니다...</div> : 
                <>
                    <table css={GS.STable}>
                        <tbody>
                            <tr>
                                <td>No</td>
                                <td>학원명</td>
                                <td>문의사항</td>
                                <td>등록자</td>
                                <td>답변</td>
                            </tr>
                            { getInquiryList?.data?.data.inquiries.map(inquiry => {
                                const answerDisplay = inquiry.answer ? 'O' : 'X';
                                return  <tr key={inquiry.inquiryId} 
                                            onClick={() => handleInquiryOnClick(inquiry)} 
                                            style={{ fontWeight: selectedInquiry === inquiry ? 'bold' : 'normal', cursor: 'pointer'}}>
                                            <td>{inquiry.inquiryId}</td>
                                            <td>{inquiry.acaNm}</td>
                                            <td>{inquiry.inquiryTitle}</td>
                                            <td>{inquiry.nickname}</td>
                                            <td>{answerDisplay}</td>
                                        </tr>
                            })}
                        </tbody>
                    </table>
                    {!getInquiryList.isLoading &&
                        <Pagination totalCount={getInquiryList.data.data.listTotalCount}
                            link={`/account/mypage/consultation`}/>}
                    {!!selectedInquiry && 
                        <SelectedInquiry
                            key={selectedInquiry.inquiryId}
                            selectedInquiry={selectedInquiry}
                            setSelectedInquiry={setSelectedInquiry}
                            page={page} 
                            selectedAcademy={selectedAcademy}
                        />
                    }
                </>}
            </div>
        </>
        }
    </div>
</div>
```
- 등록된 학원들의 문의 조회 가능
- 학원 및 미답변 문의 필터링 가능 

### SelectedInquiry
```javascript
const queryClient = useQueryClient(); // useQueryClient 훅을 사용하여 queryClient 가져오기
const [ inquiry, setInquiry ] = useState({
    answer: selectedInquiry.answer,
    answerChecked: 1
});

<div css={S.SContainer}>
    <div css={S.SNameContainer}>
        <div css={S.SNameContainerLeft}>
            <div css={S.SName}>문의 내역</div>
            <div css={S.SAnswerStatusColor(selectedInquiry.answer)}>
                {selectedInquiry.answer ? '답변 완료' : '답변 대기중'}
            </div>
        </div>
        <div css={S.SClose} onClick={handleClose}>✖</div>
    </div>
    <div>
        <div css={S.SInfoContainer}>
            <span>학원명</span>
            <div>{selectedInquiry.acaNm}</div>
        </div>
        <div css={S.SInfoContainer}>
            <span>제목</span>
            <div>{selectedInquiry.inquiryTitle}</div>
        </div>
        <div css={S.SInfoContainer}>
            <span>내용</span>
            <div css={S.SInquiry}>{selectedInquiry.inquiryContent}</div>
        </div>
    </div>
    <div css={S.SLine}></div>
    <div css={S.SInquiryAnswerContainer}>
        <div css={S.SInquiryAnswer}>
            <span>답변</span>
            <textarea name="" id="" cols="80" rows="10"
                defaultValue={inquiry.answer}
                onChange={handleAnswerOnChange}
            />
        </div>
        <div css={S.SButtonContainer}>
            <button onClick={handleAnswerSubmit}>
                확인
            </button>
        </div>
        
    </div>
</div>
```
- 랜더링 될 때 answerChecked = 1로 고정 -> 작성자에게 답변이 달리거나 수정되었을 때 안내
- 답변 수정 및 작성 가능 

***
- 입력받은 값 처리

### MypageConsultation
```javascript
// 학원 선택 -> 기본 전체
const handleAcademyChange = (selectedOption) => {
    setSelectedAcademy(selectedOption);
};

// 문의 선택
const handleInquiryOnClick = (inquiry) => {
    setSelectedInquiry(inquiry);
}

// 미답변 문의 선택 여부 checked = 미답변 문의만 표시
const handleUnansweredOnlyChange = (event) => {
    setUnansweredOnly(event.target.checked ? 1 : 0);
};

if(getMyAcademyAll.isLoading || getInquiryList.isLoading) {
    return <></>;
}
```

### SelectedInquiry
```javascript
// 서버로 보낼 값 setting
const handleAnswerOnChange = (e) => {
    setInquiry({
        ...inquiry,
        answer: e.target.value
    });
}

// 닫기 버튼
const handleClose = () => {
    setSelectedInquiry(null);
}
```

***
- 요청

### MypageConsultation
```javascript
// 내가 가진 학원 목록
const getMyAcademyAll = useQuery(['getMyAcademyAll'], async () => {
    try {
        const option = {
            headers: {
                Authorization: localStorage.getItem("accessToken")
            }
        }
        return await instance.get(`/academies/${principal.data.data.userId}`,option)
    } catch (error) {
        console.error(error);
    }
}, {
    retry: 0,
    refetchOnWindowFocus: false,
    onSuccess: response => {
        setAcademyList([{ value: null, label: '전체' }, ...response.data.map(academy => {
            return { value: academy.academyId, label: academy.acaNm };
        })])
        
    }
})

// 내가 가진 학원에 대한 문의 목록
const getInquiryList = useQuery(['getInquiryList', page, selectedAcademy, unansweredOnly], async () => {
    try {
        const option = {
            params: {
                userId: principal.data.data.userId,
                academyId: selectedAcademy ? selectedAcademy.value : null,
                page: page,
                unansweredOnly: unansweredOnly
            },
            headers: {
                Authorization: localStorage.getItem("accessToken")
            }
        }
        return await instance.get(`/academy/inquiries`,option)
    } catch (error) {
        console.error(error);
    }
}, {
    retry: 0,
    refetchOnWindowFocus: false,
    onSuccess: () => {
        setSelectedInquiry(null);
    }
})
```

### SelectedInquiry
```javascript
// 답변 저장
const handleAnswerSubmit = async () => {
    if (inquiry.answer === selectedInquiry.answer) {
        return;
    }
    if (inquiry.answer === "") {
        alert("답변을 입력해 주세요");
        return;
    }
    try {
        const option = {
            headers: {
                Authorization: localStorage.getItem("accessToken")
            }
        }
        await instance.put(`/inquiry/${selectedInquiry.inquiryId}/answer`, inquiry, option);
        alert("답변 완료.")
        // getInquiryList 쿼리를 다시 불러오기 위해 invalidateQueries 사용
        queryClient.invalidateQueries(['getInquiryList', page, selectedAcademy]);
    } catch (error) {
        console.error(error);
    }
}
```
답변 완료 후 문의 목록을 다시 불러와 답변이 들어간것을 보여줌
</br>

## BackEnd

### 나의학원 전부 가져오기 부분
### AcademyController 
```java
public class AcademyController {

    private final AcademyService academyService;

    // 나의 학원 정보
    @GetMapping("/api/academies/{userId}")
    public ResponseEntity<?> getMyAcademyNames(@PathVariable int userId) {
        return ResponseEntity.ok(academyService.getMyAcademyNames(userId));
    }
}
```

### AcademyService 
```java
public class AcademyService {

    private final AcademyMapper academyMapper;

    public List<MyAcademyNamesRespDto> getMyAcademyNames(int userId) {
        List<MyAcademyNamesRespDto> myAcademyNamesRespDtos = new ArrayList<>();
        academyMapper.getAcademyByuserId(userId).forEach(academy -> myAcademyNamesRespDtos.add(academy.toMyAcademyNamesRespDto()));
        return myAcademyNamesRespDtos;
    }
}
```

### repository - AcademyMapper 
```java
@Mapper
public interface AcademyMapper {
    public List<Academy> getAcademyByuserId(int userId);
}
```

### academy_mapper 
```xml
<mapper namespace="com.aws.compass.repository.AcademyMapper">
    <select id="getAcademyByuserId" resultType="com.aws.compass.entity.Academy">
        select
            ait.ACADEMY_ID,
            at.ACA_NM
        from
            academy_info_tb ait
            left outer join academy_tb at on(at.ACADEMY_ID = ait.ACADEMY_ID)
        where
            ait.user_id = #{userId}
    </select>
</mapper>
```
등록이 된 학원만 있는 academy_info_tb에서 user_id로 학원을 찾아 ACADEMY_ID와 이름만 가지고 온다 -> 필터링에 사용

***
### 문의답변 부분
### InquiryController 
```java
public class InquiryController {

    private final InquiryService inquiryService;

    // 등록된 학원 문의 가져오기
    @GetMapping("/api/academy/inquiries")
    public ResponseEntity<?> getInquiryList(AcademyInquiryReqDto inquiryReqDto) {
        System.out.println(inquiryReqDto);
        return ResponseEntity.ok(inquiryService.getInquiryList(inquiryReqDto));
    }

    // 문의 답변 작성
    @PutMapping("/api/inquiry/{inquiryId}/answer")
    public ResponseEntity<?> writeInquiryAnswer(@PathVariable int inquiryId,
                                                @Valid @RequestBody WriteInquiryAnswerReqDto inquiryAnswerReqDto,
                                                BindingResult bindingResult) {
        return ResponseEntity.ok(inquiryService.writeInquiryAnswer(inquiryId, inquiryAnswerReqDto));
    }
}
```

### InquiryService 
```java
public class InquiryService {
    private final InpuiryMapper inpuiryMapper;

    public AcademyInquiriesRespDto getInquiryList(AcademyInquiryReqDto inquiryReqDto) {
        int index = (inquiryReqDto.getPage() - 1) * 5;
        int userId = inquiryReqDto.getUserId();
        int academyId = inquiryReqDto.getAcademyId();
        int unansweredOnly = inquiryReqDto.getUnansweredOnly();
        List<AcademyInquiry> inquiries = inpuiryMapper.getAcademyInquiries(userId, index, academyId, unansweredOnly);
        int listTotalCount = inpuiryMapper.getAcademyInquiriesCount(userId, academyId, unansweredOnly);

        return new AcademyInquiriesRespDto(inquiries, listTotalCount);
    }

    @Transactional(rollbackFor = Exception.class)
    public boolean writeInquiryAnswer(int inquiryId, WriteInquiryAnswerReqDto inquiryAnswerReqDto) {
        Inquiry inquiry = inquiryAnswerReqDto.toInquiry();
        inquiry.setInquiryId(inquiryId);
        return inpuiryMapper.updateInquiry(inquiry) > 0;
    }
}

```
unansweredOnly는 미답변 항목 필터링을 위한 변수이다.

### repository - InpuiryMapper 

```java
@Mapper
public interface InpuiryMapper {
    public List<AcademyInquiry> getAcademyInquiries(int userId, int index, int academyId, int unansweredOnly);
    public int getAcademyInquiriesCount(int userId, int academyId, int unansweredOnly);
    public int updateInquiry(Inquiry inquiry);
}
```

### inpuiry_mapper
```xml
<mapper namespace="com.aws.compass.repository.InpuiryMapper">

    <resultMap id="getAcademyInquiryMap" type="com.aws.compass.entity.AcademyInquiry">
        <id property="inquiryId" column="inquiry_id"></id>
        <result property="academyId" column="ACADEMY_ID"></result>
        <result property="acaNm" column="ACA_NM"></result>
        <result property="nickname" column="nickname"></result>
        <result property="inquiryTitle" column="inquiry_title"></result>
        <result property="inquiryContent" column="inquiry_content"></result>
        <result property="answer" column="answer"></result>
        <result property="answerChecked" column="answer_checked"></result>
    </resultMap>

    <update id="updateInquiry">
        update inquiry_tb
        set
            answer= #{answer},
            answer_checked = #{answerChecked}
        where
            inquiry_id = #{inquiryId}
    </update>

    <select id="getAcademyInquiries" resultMap="getAcademyInquiryMap">
        SELECT
            it.inquiry_id,
            it.ACADEMY_ID,
            at.ACA_NM,
            ut.nickname,
            it.inquiry_title,
            it.inquiry_content,
            it.answer,
            it.answer_checked
        FROM
            inquiry_tb it
            LEFT OUTER JOIN academy_tb at ON (at.ACADEMY_ID = it.ACADEMY_ID)
            LEFT OUTER JOIN academy_info_tb aif ON(aif.ACADEMY_ID = it.ACADEMY_ID)
            LEFT OUTER JOIN user_tb ut ON(ut.user_id = it.user_id)
        where
            aif.user_id = #{userId}
            <if test="academyId != null and !academyId.equals('') and !academyId.equals(0)">
                and it.ACADEMY_ID = #{academyId}
            </if>
            <if test="unansweredOnly.equals(1)">
                AND it.answer IS NULL
            </if>
        order by
            it.inquiry_id desc
        LIMIT #{index}, 5
    </select>

    <select id="getAcademyInquiriesCount" resultType="java.lang.Integer">
        SELECT
            count(*)
        FROM
            inquiry_tb it
            LEFT OUTER JOIN academy_tb at ON (at.ACADEMY_ID = it.ACADEMY_ID)
            LEFT OUTER JOIN academy_info_tb aif ON(aif.ACADEMY_ID = it.ACADEMY_ID)
            LEFT OUTER JOIN user_tb ut ON(ut.user_id = it.user_id)
        where
            aif.user_id = #{userId}
            <if test="academyId != null and !academyId.equals('') and !academyId.equals(0)">
                and it.ACADEMY_ID = #{academyId}
            </if>
            <if test="unansweredOnly.equals(1)">
                AND it.answer IS NULL
            </if>
    </select>
</mapper>
``` 
답변은 answer과 answer_checked만 업로드 형식으로 들어감 -> 추가적인 질문을 할때는 문의를 새로 써야한다

</details>

<br/>


### **웹 관리자 마이페이지**
<details>
<summary>학원 등록 대기목록</summary>

<br/>

승인 대기 중인 학원들을 모아 웹 관리자가 승인/승인 거부 할 수 있도록 만든 페이지

<br/>

---

<br/>

### **Front End**

**html**

``` html
<h2>📜 학원 등록 대기목록</h2>
<div>
    {getAcademies.data.data.listTotalCount === 0 ? <div css={S.SEmptyBox}>등록 대기중인 학원이 없습니다.</div> : 
    <>
        <div css={S.SComment}>
            승인 대기 중인 학원들을 승인 거절 또는 승인 해주세요.
        </div>
        <table css={GS.STable}>
            <tbody>
                <tr>
                    <th>학원 번호</th>
                    <th>학원명</th>
                    <th>신청자</th>
                    <th>학원 선택</th>
                </tr>
                { getAcademies?.data?.data.academyRegistrations.map(academy => {
                    return  <tr key={academy.academyRegistrationId} 
                                style={{ fontWeight: selectedAcademy === academy ? 'bold' : 'normal' }}>
                                <td>{academy.acaAsnum}</td>
                                <td>{academy.acaNm}</td>
                                <td>{academy.name}</td>
                                <td>
                                    <button css={GS.SButton} onClick={(e) => handleAcademyOnClick(e, academy)}>
                                        {selectedAcademy === academy ? '선택 해제' : '선택'}
                                    </button>
                                </td>
                            </tr>
                })}
            </tbody>
        </table>
        {!getAcademies.isLoading && 
            <Pagination totalCount={getAcademies.data.data.listTotalCount}
                link={'/account/mypage/academyawating'}/>}
        {isWaitingAcademyOpen && !!selectedAcademy && <SelectedAcademy selectedAcademy={selectedAcademy}/>}
    </>}
</div>
```
``` html
<div css={S.SContainer}>
    <div css={S.SNameContainer}>
        <span css={S.SName}>선택된 학원</span>
    </div>
    <div css={S.SSelectedAcaContainer}>
        <div css={S.SAcademyInfoBox}>
            <div><span>학원 번호</span><div>{selectedAcademy.acaAsnum}</div></div>
            <div><span>지역</span><div>{selectedAcademy.admstZoneNm}</div></div>
            <div><span>신청자</span><div>{selectedAcademy.name}</div></div>
        </div>
        <div css={S.SAcademyInfoBox}>
            <div><span>학원명</span><div>{selectedAcademy.acaNm}</div></div>
        </div>
    </div>
    <div css={S.SNameContainer}>
        <span css={S.SName}>사전확인서류 제출</span>
    </div>
    <FileDownload selectedAcademy={selectedAcademy}/>
</div>
<div css={S.SButtonBox}>
    <button onClick={handleDisapprovalOnClick} css={S.SDeclineBtn}>승인 거절</button>
    <button onClick={handleApprovalOnClick} css={S.SApprovalBtn}>승인</button>
</div>
```
- 승인 대기중인 학원 리스트를 보여준다. 선택 버튼을 누르면 해당 학원의 정보와 업로드한 파일을 다운받아 볼 수 있다.
- 승인 버튼과 승인 거절 버튼으로 해당 학원을 승인/승인 거절 할 수 있다.


<br/><br/>

**승인 대기 학원 목록 가져오기**

``` javascript
    const getAcademies = useQuery(["getAcademies", page], async () => {
        const option = {
            headers: {
                Authorization: localStorage.getItem("accessToken")
            }
        }
        return await instance.get(`/admin/academies/awaiting/${page}`, option);
    }, {
        refetchOnWindowFocus: false,
        onSuccess: () => {
            setSelectedAcademy(null);
        }
    })
```
- /admin/academies/awaiting 으로 요청


<br/>

**승인 버튼 클릭**
``` javascript
    const handleApprovalOnClick = async () => {
        try {
            const requestData = {
                academyRegistrationId: selectedAcademy.academyRegistrationId,
                userId: selectedAcademy.userId
            }
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            await instance.put('/admin/academy/approval', requestData, option);
            alert("승인 완료");
            queryClient.refetchQueries(["getAcademies"]);
        } catch (error) {
            console.error(error);
        }
    }
```
- /admin/academy/approval로 승인할 학원의 데이터 담아 요청
- 승인 후 대기 학원 목록 refetch

<br/>


**승인 거절 버튼 클릭**
``` javascript
    const handleDisapprovalOnClick = async () => {
        const rejectReason = prompt("거절 사유를 입력하세요: ");

        if(rejectReason !== null && rejectReason.trim() !== "") {
            try {
                const requestData = {
                    academyRegistrationId: selectedAcademy.academyRegistrationId,
                    rejectReason: rejectReason
                }
                const option = {
                    headers: {
                        Authorization: localStorage.getItem("accessToken")
                    }
                }
                await instance.put(`/admin/academy/disapproval`, requestData, option);
                alert("승인 거절 완료");
                queryClient.refetchQueries(["getAcademies"]);
            } catch (error) {
                console.error(error);
            }
        } else {
            alert("거절 사유를 입력하지 않아 취소되었습니다.");
        }
    }
```
- /admin/academy/disapproval로 승인 거절할 학원의 데이터 담아 요청
- 거절 사유를 입력하지 않을 시 취소되도록 함.

<br/>

---

<br/>

### **Back End**


**AdminController**
``` java
    // 대기 학원 가져오기
    @GetMapping("/api/admin/academies/awaiting/{page}")
    public ResponseEntity<?> getAwaitingAcademies(@PathVariable int page) {
        return ResponseEntity.ok(adminService.getAwaitingAcademies(page));
    }

    // 학원 승인하기
    @PutMapping("/api/admin/academy/approval")
    public ResponseEntity<?> approvalAcademy(@RequestBody ApprovalAcademyReqDto approvalAcademyReqDto) {
        return ResponseEntity.ok(adminService.approvalAcademy(approvalAcademyReqDto));
    }

    // 학원 승인 거절하기
    @PutMapping("/api/admin/academy/disapproval")
    public ResponseEntity<?> disapprovalAcademy(@RequestBody DisapprovalReqDto disapprovalReqDto) {
        return ResponseEntity.ok(adminService.disapprovalAcademy(disapprovalReqDto));
    }
```
- 페이지네이션을 위해 page번호를 PathVariable로 받아온다.

<br/>

**AdminService**
``` java
    public AwaitingAcademiesRespDto getAwaitingAcademies(int page) {
        int index = (page - 1) * 5;

        List<AcademyRegistration> academyRegistrations = adminMapper.getAcademyRegistrations(index);
        int listTotalCount = adminMapper.getAwaitingAcademyCount();

        return new AwaitingAcademiesRespDto(academyRegistrations, listTotalCount);
    }

    @Transactional(rollbackFor = Exception.class)
    public boolean approvalAcademy(ApprovalAcademyReqDto approvalAcademyReqDto) {
        return adminMapper.updateApprovalState(approvalAcademyReqDto.getAcademyRegistrationId()) > 0
                && adminMapper.updateUserRole(approvalAcademyReqDto.getUserId()) > 0;
    }

    @Transactional(rollbackFor = Exception.class)
    public boolean disapprovalAcademy(DisapprovalReqDto disapprovalReqDto) {
        return adminMapper.updateApprovalStatus(disapprovalReqDto.getAcademyRegistrationId(), disapprovalReqDto.getRejectReason()) > 0;
    }
```
- getAwaitingAcademies : 승인 대기 목록과 리스트 길이를 return
- approvalAcademy : 
  - 학원의 승인 상태를 변경(0(승인 대기) -> 1(승인))
  - user의 role 변경(1(학생) -> 2(학원 관리자))
- disapprovalAcademy :
  - 학원의 승인 상태, 거절 사유 변경(0(승인 대기) -> -1(승인 거절))

<br/>

**admin_mapper**
``` xml
    <update id="updateApprovalState">
        update
            academy_registration_tb
        set
            approval_status = 1
        where
            academy_registration_id = #{academyRegistrationId}
    </update>
    <update id="updateUserRole">
        update
            user_tb
        set
            role_id = 2
        where
            user_id = #{userId}
    </update>
    <update id="updateApprovalStatus" parameterType="map">
        update
            academy_registration_tb
        set
            approval_status = -1,
            reject_reason = #{rejectReason}
        where
            academy_registration_id = #{academyRegistrationId}
    </update>

    <select id="getAcademyRegistrations" resultMap="academyRegistrationMap">
        select
            art.academy_registration_id,
            art.ACADEMY_ID,
            at.ACA_ASNUM,
            at.ACA_NM,
            at.ADMST_ZONE_NM,
            art.match,
            art.user_id,
            ut.name,
            art.business_registration_file,
            art.id_file,
            art.operation_registration_file
        from
            academy_registration_tb art
                left outer join academy_tb at on(at.ACADEMY_ID = art.ACADEMY_ID)
                left outer join user_tb ut on(ut.user_id = art.user_id)
        where
            art.approval_status = 0
        order by
            art.academy_registration_id asc
        limit #{index}, 5
    </select>
    <select id="getAwaitingAcademyCount" resultType="java.lang.Integer">
        select
            count(*)
        from
            academy_registration_tb
        where
            approval_status = 0
    </select>
```
- getAcademyRegistrations : approval_status가 0인 것들만(승인 대기 상태인 것) 가져옴
- 오래된 승인 대기 학원부터 가져오기 위해 id 오름차순으로 가져옴


</details>

<br/>



<br/>

## **✏ 느낀점**
> **팀장: 변정민** 
- 이번 프로젝트의 팀장을 처음 맡게 되었을 때 과연 이 프로젝트를 잘 이끌어 갈 수 있을까라는 생각이 막연하게 들었습니다. 저 혼자 이끌어가는 것이 아닌 팀원들과 매일 회의하고, 진행 척도를 체크하면서 주고받는 대화들을 통해 방향을 잡을 수 있었습니다. 팀원들의 역량을 높이기 위해 전부 CRUD를 맡아서 할 수 있도록 진행하였고, 진행 척도를 체크하며 서로 할 일을 파악하고 도움을 주는 방향으로 이끌어 나갈 수 있었습니다.
- 배운 대로 단순히 firebase에 업로드하면 된다고 생각했지만, 여러 개의 파일을 올리는 과정에서 interrupt가 발생해 이전 파일이 업로드되지 않았습니다. 사용자 입장에서 생각하면 사용자는 이 과정을 모르니 당연히 interrupt를 해결해야만 했습니다. 진행 중 상태를 알리는 프로그레스바를 만들고, 다음 단계를 진행하려면 알림창을 띄워 아직 업로드되지 않음을 알리는 방향으로 사용성을 높였습니다.
- 여러 개의 DB에서 값을 가져오다 보니 한 번에 들고 오면 SQL문이 너무 늘어나고 시간도 오래 걸렸습니다. 따로 가져와서 값을 전달할 때만 합쳐서 들고 오는 방향으로 진행했더니 시간도 줄어들고 값을 들고 와서 확인하는 데도 불편함이 줄었습니다.
- 후기 수정을 할 때 최신 값이 안 넘어오고 자꾸 이전의 값이 넘어왔습니다. 그 과정에서 언제 리뷰를 다시 가져와야 하는지, 언제 수정 버튼의 상태를 변경해야 하는지 등 다시 생각하는 과정에서 해답을 찾을 수 있었습니다.
- 혼자 진행하는 프로젝트였다면 1달이라는 시간 내에 해결하지 못하고, 문제점을 찾는 과정에서도 오래 걸렸을 것 같다고 느꼈습니다. 함께 프로젝트를 진행하면서 코드를 리뷰하는 과정에서 버그를 찾고 사용성에 대해서 생각하면서 서로 피드백했더니 코드와 사용성에 대한 이해도가 높아지고 프로젝트의 완성도를 높일 수 있었습니다.

<br/>

> **팀원: 정가영** 
-  프로젝트를 통해 협업과 소통의 중요성을 깨달았습니다. 매일 아침 회의록 작성과 코드 리뷰를 통해 팀 전체가 프로젝트 진행 상황을 파악했습니다. 이로써 코드의 이해도가 높아지고 재사용이 쉬워졌습니다. 할 일의 우선 순위 설정을 통해 프로젝트의 완성도를 높였습니다.
 보안 부분을 맡아 jwt 토큰과 Security에 대한 이해를 높였고, OAuth2를 활용한 소셜 로그인을 구현했습니다. 관리자 마이페이지에서는 학원 승인 기능을 도입하여 학원 정보를 효과적으로 관리할 수 있었습니다. 학원 상세 정보 수정에서는 여러 테이블에서 데이터를 가져오고 업데이트하는 과정에서 어려움을 겪었지만, 이를 통해 많은 것을 배울 수 있었습니다.
 전체적인 디자인 수정을 담당하며 사용자가 한 눈에 기능을 파악하고 편리하게 사용할 수 있을 지 고민하는 과정을 통해 디자인 원칙 및 사용성에 대한 이해가 깊어지게 되었습니다. 

<br/>

> **팀원: 김채원** 
- 프로젝트를 시작할 때 여러 사람과 어떤 웹사이트를 만들지 목표를 잡는 것부터 시작하는 프로젝트는 처음이었기 때문에 긴장도 되고, 배운 지식으로 얼마나 실질적인 결과물을 만들어 낼 수 있을지에 대한 궁금증도 있었습니다. 프로젝트를 진행하면서 제가 알고 있다고 생각한 부분도 실제로는 모르는 것이 많았습니다. 특히, 학원 찾기 페이지를 맡아 DB의 정보를 다루는 일이 많았는데, 오랜 시간이 지난 MySQL 문법들을 기억하기 위해 이전에 공부했던 자료를 찾아보며 복습해야 했고, MyBatis 동적 쿼리 문법을 이용하여 조건이 있는 경우에만 필터를 적용하는 방법을 배웠습니다. 다루는 정보가 많았기에 정보를 빠르게 가져오기 위한 쿼리를 짜기 위해 노력했습니다. 이 부분에서 시간이 많이 소요되었지만, 팀원들의 배려로 문의 부분을 맡아 CRUD 과정도 해볼 수 있었습니다.
- 계획을 세우고 시작했지만, 예상치 못한 상황과 추가 요구사항으로 인해 일이 계속 늘어나면서, 그때마다 팀원들과 소통하며 역할을 나누어 일을 신속하게 처리하는 것이 중요하다는 것을 배웠습니다. 프로젝트 초반에는 OpenAPI를 사용하다가 정보 처리 문제로 인해 정보를 DB에 저장해 사용해야 했는데, 이에 따라 코드를 수정해야 했고, 이로 인해 일부 기능을 포기하고 다른 방식으로 개선할 수 있을 것 같은 코드들도 시간에 쫓겨 수정하지 못한 것이 아쉬웠습니다.
- 학원 찾기 페이지에서 전체 초기화 버튼이 있으면 사용자가 편하게 모든 조건을 리셋 후 새로운 조건을 넣을 수 있어서 구현하려 했지만, 초기화 후 모달이 켜지면 이전 값이 남아있는 문제가 있었습니다. 그것을 해결하려 시간을 쓰기에는 다른 기능들이 많이 남아있었기에 조건별 초기화 버튼만 만들고 모든 조건을 초기화하는 버튼을 구현하지 못하였습니다. 이 부분은 프로젝트가 끝난 후 혼자서라도 개선해 보려고 합니다. 또 하나 아쉬운 점은 관심 학원 페이지에서 관심 학원 목록을 가져올 때 본인의 관심 학원을 가져와야 했는데, user_id를 조건으로 주면 해당 학원의 관심 학원 수를 얻을 수 없어, like_tb 테이블을 서브쿼리로 조인하여 사용했습니다. 이 방법으로는 값은 잘 나왔지만, 여러 방법을 시도해 보지 못하고 이 방법만 사용한 것이 아쉬웠습니다. 이 부분도 프로젝트가 끝난 후 다른 방법을 찾아보고 개선해 볼 계획입니다.

<br/>

> **팀원: 이지우** 
-  프로젝트가 시작하기에 앞서서 많으면 많고 적다면 적은 프로그래밍을 배웠다고 생각했습니다. 저의 지식으로 프로젝트를 할 수 있을까? 팀원들에게 피해를 주지는 않을까 걱정하면서 시작하였습니다. 처음에는 뭐가 무엇인지 잘 모르는 상태로 시작해서 당황도 하고 하였지만 팀장님과 팀원분들의 도움으로 점점 어떻게 해야 하는지 감이 잡혀 왔습니다. 그러면서 배웠던 것은 더욱 자세히 알게 되었고 모르는 것을 하면서 새로운 것들을 터득하게 되었습니다. 그 결과로 만들어진 프로젝트는 팀 전체의 노력 결정체로 다가왔습니다. 하지만 이러한 성취와 만족감과 더불어 피로감도 느꼈습니다. 프로젝트 기간의 집중과 노력으로 인해 몸과 마음이 지쳤기 때문입니다. 향후 다른 프로젝트를 하게 되면 몸과 마음을 잘 단련하고 해야겠다는 생각이 들었습니다. 또 한 프로젝트를 돌아보면서 부족한 부분을 발견했습니다. 완벽한 결과물을 만들 수 없다는 것을 깨닫게 되었고, 그것을 향한 개선의 기회로 여겼습니다. 미흡한 점을 보완하고 발전하는 과정이 지속적인 학습과 성장을 가져다줄 것이라 생각했습니다!! 팀장님 팀원분들 최고!!


<br/>

