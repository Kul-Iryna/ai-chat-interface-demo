# Install iOS update · Prototype

Interactive React prototype of the Figma **User flow – Install iOS update** from [AI_Chat_Interface](https://www.figma.com/design/80aZPIWHt3clRXjb9cAMZ5/AI_Chat_Interface?node-id=24-400).

## Run

```bash
export PATH="$HOME/.local/node/bin:$PATH"
npm install
npm run dev
```

Open [http://127.0.0.1:5173](http://127.0.0.1:5173).

## What’s included

- Happy path: sign in → Face ID → new chat → type → thinking → steps → confirmed → settings-updated banner
- Error scenarios: Face ID fail, network fail, can’t install
- Side panel to jump between screens, or click through the phone UI
