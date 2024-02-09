FROM node:20-alpine AS base

# 작업 디렉토리 설정함. 애플리케이션의 모든 파일이 위치 할 곳
WORKDIR /app

COPY package.json package-lock.json ./

## 의존성 설치. --production 플래그를 이용해 개발 의존성은 제외한다. -> 이미지 크기를 줄이기 위함인듯.
RUN  npm ci --production

# 애플리케이션의 나머지 파일들을 이미지로 복사.
COPY . .

# Next.js 애플리케이션 빌드. -> Next.js의 Next dev가 아니라, 평범한 웹 페이지처럼 npm run build를 사용한다.
RUN npm run build

# 애플리케이션 실행하기 위한 포트 설정.
EXPOSE 3000

# Launch! \
CMD ["npm", "start"]