# Bookstore App

**Bookstore App**는 Node.js, Express, MongoDB를 백엔드로, React를 프론트엔드로 사용하여 만든 풀스택 웹 애플리케이션입니다. 이 프로젝트는 책 목록 관리, 상세 정보 조회, 책 추가/수정/삭제 기능을 제공합니다.

## 기능

- **책 목록 및 페이징:**  
  책 목록을 불러오고, 페이징을 통해 항목을 확인할 수 있습니다. 목록 항목을 클릭하면 상세 페이지로 이동합니다.

- **책 상세 정보:**  
  상세 페이지에서는 선택한 책의 제목, 저자, 출판사, 판매 수량 등의 정보를 확인할 수 있으며, 수정 및 삭제 기능을 제공합니다.

- **책 추가/수정:**  
  별도의 폼 페이지에서 책 정보를 입력하여 새 책을 추가하거나 기존 책 정보를 수정할 수 있습니다.

- **삭제 기능:**  
  상세 페이지에서 책을 삭제할 수 있으며, 삭제 전 사용자 확인 메시지를 표시합니다.

## 기술 스택

- **백엔드:**  
  - Node.js
  - Express
  - MongoDB (Mongoose)

- **프론트엔드:**  
  - React
  - React Router
  - Axios

- **스타일링:**  
  - 기본 CSS

## 프로젝트 구조

```plaintext
bookstore-app/
├── backend/         # Express, MongoDB 백엔드 코드
│   ├── controllers/ # API 컨트롤러
│   ├── models/      # Mongoose 모델
│   ├── routes/      # API 라우터
│   ├── .env         # 환경 변수 (예: MONGODB_URI, PORT)
│   └── server.js    # Express 서버 시작 파일
└── frontend/        # React 프론트엔드 코드
    ├── public/
    ├── src/
    │   ├── pages/   # BookListPage, BookDetailPage, BookFormPage 등
    │   ├── App.js   # 라우터 및 내비게이션 구성
    │   ├── App.css  # 공통 스타일링
    │   └── index.js
    └── package.json
