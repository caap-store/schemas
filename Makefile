
get-schema:
	curl https://schema.org/version/latest/schemaorg-current-https.jsonld -o jsonld.json

generate:
	@echo "Downloading latest schema"
	@make get-schema
	@echo "Compiling"
	yarn tsc
	@echo "Generating"
	./out/cli.js
	@echo "Linting"
	yarn lint