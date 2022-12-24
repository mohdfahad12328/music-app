PROJECT_NAME="music-app"

linux-arm64:
	GOOS=linux GOARCH=arm64 go build -o $(PROJECT_NAME)-linux-arm64

linux-amd64:
	GOOS=linux GOARCH=amd64 go build -o $(PROJECT_NAME)-linux-amd64

build: linux-arm64 linux-amd64