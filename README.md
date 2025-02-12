# AiScreener

## Edit the character files

Open `src/character.ts` to modify the default character. Uncomment and edit.

### Custom characters

To load custom characters instead:

- Use `pnpm start --characters="path/to/your/character.json"`
- Multiple character files can be loaded simultaneously

### Add clients

```
clients: [Clients.TWITTER, Clients.DISCORD],
```

## Duplicate the .env.example template

```bash
cp .env.example .env
```

\* Fill out the .env file with your own values.

### Add login credentials and keys to .env

```
DISCORD_APPLICATION_ID="discord-application-id"
DISCORD_API_TOKEN="discord-api-token"
...
OPENROUTER_API_KEY="sk-xx-xx-xxx"
...
TWITTER_USERNAME="username"
TWITTER_PASSWORD="password"
TWITTER_EMAIL="your@email.com"
```

## Install dependencies and start your agent

```bash
pnpm i && pnpm start
```

Note: this requires node to be at least version 22 when you install packages and run the agent.

### Ciphers Changes

- Updated package.json to natively include clean script
- added types for yargs and better-sqlite3
- unit includes image-generation, twitter, dexscreener, and web-search plugins

```sh
pnpm add -D @types/yargs @types/better-sqlite3
```

improved [chat/index](src/chat/index.ts) type safety by specifying types

to incorporate `plugin-twitter`

```sh
pnpm add agent-twitter-client
```
