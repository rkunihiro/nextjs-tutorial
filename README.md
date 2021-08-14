# NextJS (with TypeScript) tutorial

## Setup project

```
npm init -y
npm install next react react-dom
npm install -D typescript @types/react @types/react-dom
```

## Add first page (with TypeScript)

src/pages/index.tsx

```tsx:
import { useState } from "react";
import Head from "next/head";

export default function HomePage() {
    const [message, setMessage] = useState<string>("Hello,World!");
    return (
        <>
            <Head>
                <title>Top Page</title>
            </Head>
            <main>
                <div>{message}</div>
                <button
                    onClick={() => {
                        setMessage("Good-Bye!");
                    }}
                >
                    Bye
                </button>
            </main>
        </>
    );
}
```

```
npx next dev
```

-   tsconfig.json が生成されている
-   next-env.d.ts が生成されている

http://localhost:3000

-   ブラウザでソースコードを表示すると SSR されていることがわかる
    -   body に`<div>Hello,World!</div>`が埋め込まれている
    -   head に`<title>Top Page</title>`が埋め込まれている
-   ボタンをクリックすると`Hello,World!`が`Good-bye!`に変わる(CSR)

## SPA 画面遷移

src/pages/about.tsx

```tsx:
import Link from "next/link";

export default function AboutPage() {
    return (
        <>
            <main>
                <div>About</div>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </main>
        </>
    );
}
```

```
npx next dev
```

http://localhost:3000/about/

-   About ページが表示される
-   a 要素に href が追加されている
-   Back to Home リンクをクリックすると / にアクセスすることなく Home ページが表示される(SPA)

## Custom App / Document

## Lint

```
npm install -D eslint eslint-config-next eslint-config-prettier @typescript-eslint/eslint-plugin
```

```
npx next lint
```

## CSS (Sass)

```
npm install -D sass
```

### Stylelint

```
npm install -D stylelint stylelint-config-standard stylelint-config-sass-guidelines
```

.stylelintrc.json

```json:
{
    "extends": [
        "stylelint-config-standard",
        "stylelint-config-sass-guidelines"
    ]
}
```

```
npx stylelint './src/**/*.scss'
```

## Public

## SSG

next.config.js

```js:
module.exports = {
    trailingSlash: true,
};
```

```
next build
next export
```

## package.json scripts

```

```
