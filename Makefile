install: #install dependencies
	npm ci

brain-games: #run game
	node bin/brain-games.js

brain-even:
	node games/brain-even.js

brain-calc:
	node games/brain-calc.js

brain-gcd:
	node games/brain-gsd.js

brain-progression:
	node games/brain-progression.js

brain-prime:
	node games/brain-prime.js

publish: #run publishing
	npm publish --dry-run

lint:
	npx eslint .
