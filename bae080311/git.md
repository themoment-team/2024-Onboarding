# git과 git hub
- git이란 지금까지 오늘날 환경에서 가장 널리 사용되는 최신 버전 제어 시스템입니다.
- GitHub란 소프트웨어 개발자들 사이에서 가장 인기 있는 형상 관리(변경 사항을 추적,제어하는 과정) 플랫폼 중 하나입니다.
# 기본적인 git 명령어들
- git status
    - 현재 상태 확인
- git log
    - 전체 로그 확인
- git init
    - git 저장소 생성하기
- git clone
    - 저장소 복제 및 다운로드
- git add
    - 저장소에 코드 추가
- git commit
    - 커밋 생성
- git push origin master
    - 변경 사항 원격 서버 업로드
- git pull
    - 원격 저장소의 변경 내용을 현재 디렉토리로 가져오기
- git config --list
    - 전체 config 리스트 확인 
# GitHub 협업의 기초
### git branch 관련 명령어
- git diff [브랜치 이름] [다른 브랜치 이름]
    - 변경 내용을 merge 하기 전에 바뀐 내용 비교
- git remote add origin [github 주소]
    - github 주소와 연결 
- git branch [브랜치명]
    - 브랜치 생성
- git checkout [브랜치명]
    - 해당 브랜치로 이동
- git merge [다른 브랜치 이름]
    - 현재 브랜치에 다른 브랜치 수정사항 병합
### branch 전략
- 브랜치는 Git에서 코드의 다양한 버전을 관리하기 위해 사용하는 기능입니다
- Git-Flow
    - 기능 개발, 릴리즈 준비, 유지 보수 등을 위한 브랜치를 명확히 구분하여 관리하는 전략입니다. 이는 복잡한 프로젝트에 적합한 전략으로, 체계적인 브랜치 관리를 가능하게 합니다.
- GitHub Flow
    - 보다 단순화된 브랜치 전략으로, master 브랜치 하나를 기준으로 기능별 브랜치를 생성하여 작업한 후 master에 병합하는 방식입니다.
### Pull repuest
GitHub에서 코드 변경 사항을 다른 개발자에게 알리고, 코드 리뷰를 요청하는 기능입니다. 코드 리뷰는 코드의 품질을 높이고, 버그를 사전에 발견할 수 있는 중요한 과정입니다.
#### Pull request의 중요성
- 코드 리뷰를 통해 다른 개발자의 경험과 지식을 공유할 수 있습니다.
- 코드의 가독성과 유지 보수성을 높일 수 있습니다.
- 자신의 코드 변경 사항을 공유하고, 팀원들로부터 피드백을 받을 수 있습니다.
### 코드 리뷰
코드 리뷰는 동료가 작성한 코드를 점검하고 피드백을 교환하는 과정입니다. 구성원 모두가 책임감을 가지고 새로 추가하거나 변경하는 코드를 검토하는 중요한 활동입니다. 이 문서는 코드 리뷰를 받거나, 코드 리뷰를 하는 사람이 알아야 할 지침을 제공합니다.
#### 코드 리뷰의 기본 원칙 (팀 내의 규정이나 문화에 따라 유연하게 조정)
- 모든 코드는 코드 리뷰를 마친 후에 머지를 해야 합니다.
- 혼자가 아닌 함께 하는 일이기에 우리 모두는 코드 리뷰에 책임감을 갖습니다.
- 특별히 신경을 써야 할 리뷰 포인트는 코멘트를 남겨주세요.
- 자신의 취향을 주장하기 보다는 사실과 데이터를 가지고 의견을 교환해주세요.
#### 코드 리뷰를 요청할 때 지켜야 할 매너
- 변경한 내용에 대한 충분한 정보를 제공하기
- PR 본문을 충실히 작성하기
- 커밋 메시지를 충실히 작성하기
#### 코드 리뷰를 할 때 보아야 할 것
- 유지보수성
- 재사용성
- 안정성    
- 확장성

