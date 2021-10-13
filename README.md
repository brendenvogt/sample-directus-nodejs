# Project Setup
- `git init`
- `npx gitignore node`
- `npm init`
- `touch index.js`
- `npm install @directus/sdk`
- `npm install`
- `node index.js`

- other helpful tips
``` sh
npx license mit > LICENSE
npx gitignore node
npx covgen YOUR_EMAIL_ADDRESS
npm init -y
```

## Usage
- `node index.js`

```sh
{
  data: [
    {
      id: 1,
      user_created: 'd0df0c1d-c97e-474b-a260-dc5835ca983b',
      date_created: '2021-10-13T08:47:42.428Z',
      title: 'My Cool Product'
    },
    {
      id: 2,
      user_created: 'd0df0c1d-c97e-474b-a260-dc5835ca983b',
      date_created: '2021-10-13T08:47:59.255Z',
      title: 'My second product'
    }
  ],
  meta: undefined
}
[ 'My Cool Product', 'My second product' ]
```