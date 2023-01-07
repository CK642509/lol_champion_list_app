# LOL Champion List App (lol-champion-list-app)

## Vite + Vue3 + Quasar + Electron

A Quasar Project

## TODO List

### 小功能

- 多個分頁
  - 可以自定義標題
- 搜尋
  - 搜尋後只顯示符合的英雄
- 排版

### 大型功能

- [autoUpdater](https://www.electronjs.org/docs/latest/api/auto-updater)
  - [config](https://www.electron.build/configuration/publish)
- ORM
  - [Sequelize](https://sequelize.org/)
  - TABLE
    - champion
      - name_en: String
      - name_ch: String
      - date: Date
    - page_1
      - champion: String
      - state: Boolean

### 夢想功能

- 截圖遊戲客戶端畫面，自動判斷有哪些英雄需要被選取

---

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
quasar dev -m electron
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
quasar build
quasar build -m electron
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

### Quasar 新增 Electron

```bash
quasar mode add electron
```
