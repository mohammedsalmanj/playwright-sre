FROM mcr.microsoft.com/playwright:focal

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npx playwright install --with-deps

CMD ["npx", "playwright", "test", "--reporter=list"]
