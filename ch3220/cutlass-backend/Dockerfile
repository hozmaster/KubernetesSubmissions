FROM golang:1.25-alpine AS builder

ENV CGO_ENABLED=0 \
    GOOS=linux \
    GOARCH=amd64

WORKDIR /build

COPY ../cutlass-feeder/go.mod ./cutlass-go/src ./

RUN go build -o cutlass-go .



FROM node:alpine
LABEL authors="Olli-Pekka Wallin"

WORKDIR /usr/src/app
COPY --from=builder /build/cutlass-go /bin/cutlass-go

COPY . .

RUN yarn install --frozen-lockfile
EXPOSE 3010

CMD ["node", "index.js"]
