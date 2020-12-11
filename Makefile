install:
	npm install

test:
	npm test -s

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint . --ext js,jsx

lint-fix:
	npx eslint . --fix --ext js,jsx

develop:
	npx webpack serve

build:
	rm -rf dist
	NODE_ENV=production npx webpack
