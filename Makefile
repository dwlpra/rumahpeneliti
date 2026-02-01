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

build: ## Build for production (static export)
	pnpm build

deploy: build ## Build and deploy to Cloudflare Pages
	pnpm wrangler pages deploy dist --commit-dirty=true

clean: ## Clean build output
	rm -rf dist .next

deploy-all: clean install deploy ## Clean, install, build and deploy
