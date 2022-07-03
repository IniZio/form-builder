.PHONY: setup-development
setup-development:
	asdf plugin-add pnpm || true
	asdf plugin-add nodejs || true
	asdf install
	pnpm install