책 출간 후 오류가 발견된 부분을 수정합니다.

## 8장 typeorm 명령어
`npm run typeorm migration:create src/migrations/CreateUserTable` 명령어를 수행하면 -d 옵션을 인식하지 못하는 에러가 발생합니다.

```
> ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js "migration:create" "src/migrations/CreateUserTable" "./ormconfig.ts"

cli.js migration:create <path>g npm:load Completed in 48ms

Creates a new migration file.

옵션:
  -h, --help       도움말 표시                                          [불리언]
  -o, --outputJs   Generate a migration file on Javascript instead of Typescript
                                                        [불리언] [기본값: false]
  -t, --timestamp  Custom timestamp for the migration name[숫자] [기본값: false]
  -v, --version    버전 표시                                            [불리언]

알 수 없는 인수입니다: ./ormconfig.ts
```

-d 옵션은 typeorm:generate 명령어에 필수로 포함되어야 하는 인수입니다. 따라서,
1. package.json에서 -d 옵션을 제거하고 ([d820130](https://github.com/dextto/book-nestjs-backend/commit/d820130a6d912c628a2623e659ed7736b2eba37e) 참고)
2. typeorm:generate 명령어를 수행할 때 다음과 같이 직접 -d 옵션을 전달해야 합니다.
```
npm run typeorm migration:generate src/migrations/CreateUserTable -- -d ./ormconfig.ts
```
