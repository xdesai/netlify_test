all: functions frontend

functions:
	mkdir -p functions_build 
	go get ./serverless_functions/...
	go build -o functions_build/hello ./serverless_functions/...

frontend:
	yarn build
