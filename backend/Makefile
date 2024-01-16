.PHONY: run build

dev:
	go run cmd/main.go serve

build:
	CGO_ENABLED=0 go build -o bin/cloud-poc cmd/main.go

run:
	./bin/cloud-poc serve