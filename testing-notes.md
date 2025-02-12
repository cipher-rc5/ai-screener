# Cipher Unit Test Notes

## Easy to Fix Eliza Error

if encountering better-sqlite3 error on unit initialization simply rebuild the node_module

error

```json
⛔ ERRORS
   Error starting agents: 
   {"tries":["/Users/cipher009/Desktop/ai-agents/agent-athena/node_modules/.pnpm/better-sqlite3@11.5.0/node_modules/better-sqlite3/build/better_sqlite3.node","/Users/cipher009/Desktop/ai-agents/agent-athena/node_modules/.pnpm/better-sqlite3@11.5.0/node_modules/better-sqlite3/build/Debug/better_sqlite3.node","/Users/cipher009/Desktop/ai-agents/agent-athena/node_modules/.pnpm/better-sqlite3@11.5.0/node_modules/better-sqlite3/build/Release/better_sqlite3.node","/Users/cipher009/Desktop/ai-agents/agent-athena/node_modules/.pnpm/better-sqlite3@11.5.0/node_modules/better-sqlite3/out/Debug/better_sqlite3.node","/Users/cipher009/Desktop/ai-agents/agent-athena/node_modules/.pnpm/better-sqlite3@11.5.0/node_modules/better-sqlite3/Debug/better_sqlite3.node","/Users/cipher009/Desktop/ai-agents/agent-athena/node_modules/.pnpm/better-sqlite3@11.5.0/node_modules/better-sqlite3/out/Release/better_sqlite3.node","/Users/cipher009/Desktop/ai-agents/agent-athena/node_modules/.pnpm/better-sqlite3@11.5.0/node_modules/better-sqlite3/Release/better_sqlite3.node","/Users/cipher009/Desktop/ai-agents/agent-athena/node_modules/.pnpm/better-sqlite3@11.5.0/node_modules/better-sqlite3/build/default/better_sqlite3.node","/Users/cipher009/Desktop/ai-agents/agent-athena/node_modules/.pnpm/better-sqlite3@11.5.0/node_modules/better-sqlite3/compiled/23.4.0/darwin/arm64/better_sqlite3.node","/Users/cipher009/Desktop/ai-agents/agent-athena/node_modules/.pnpm/better-sqlite3@11.5.0/node_modules/better-sqlite3/addon-build/release/install-root/better_sqlite3.node","/Users/cipher009/Desktop/ai-agents/agent-athena/node_modules/.pnpm/better-sqlite3@11.5.0/node_modules/better-sqlite3/addon-build/debug/install-root/better_sqlite3.node","/Users/cipher009/Desktop/ai-agents/agent-athena/node_modules/.pnpm/better-sqlite3@11.5.0/node_modules/better-sqlite3/addon-build/default/install-root/better_sqlite3.node","/Users/cipher009/Desktop/ai-agents/agent-athena/node_modules/.pnpm/better-sqlite3@11.5.0/node_modules/better-sqlite3/lib/binding/node-v131-darwin-arm64/better_sqlite3.node"]}
```

fix

```sh
cd node_modules/better-sqlite3 && pnpm rebuild && cd ../.. && pnpm build && pnpm start
```
