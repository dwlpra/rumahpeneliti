.PHONY: help install dev build deploy deploy-all clean

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-15s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## Install dependencies
	pnpm install

dev: ## Start development server
	pnpm dev

build: ## Build for production
	pnpm build

deploy: build ## Build and deploy to Cloudflare Pages
	npx wrangler pages deploy dist

clean: ## Clean build output
	rm -rf dist

deploy-all: clean install deploy ## Clean, install, build and deploy
