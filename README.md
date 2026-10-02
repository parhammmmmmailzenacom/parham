<div align="center">

# 🔥 Parham

**A bold, red-on-black VPN control panel — powered by [Xray-core](https://github.com/XTLS/Xray-core) and shipped to [Railway](https://railway.app) in one click.**

*Clean client links. Live stats. Gorgeous subscription pages. No config, no fuss.*

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/new)

</div>

<br/>

> [!TIP]
> **Fork → Deploy on Railway → Expose port `8080` → Open the panel.** Four steps, zero config, live in minutes.

<br/>

## ✨ Theme

A signature **red/black "Parham" look** across the whole panel:

- 🩸 Deep-red accent (`#ee3a3a`) with glowing gradient buttons and red scrollbar
- 🫧 Animated gradient backdrop + floating bubbles (canvas, zero deps)
- 🔊 Real UI sounds (Kenney CC0) — click, toggle, open/close, success/error — with a mute button
- ✨ Ripple + spark burst on every real tap, modal pop-in, toast shake on errors
- 🃏 Frosted-glass cards (`backdrop-blur`) with a red hover glow
- 🅿️ Glowing red **P** logo + `Made with 🔥 by Parham` footer

## ✨ Features

| Area | What you get |
|:--|:--|
| **Dashboard** | Live CPU, RAM, Swap and Storage metrics, plus one-click Backup & Restore |
| **Users** | Rich create form, summary cards, responsive table, live **Connected IPs** |
| **Inbounds** | Five HTTP inbounds auto-seeded on first boot, each with a unique port |
| **Activity Log** | A live timeline of every administrative event |
| **Settings & Admins** | Owner and Admin roles, scoped permissions, per-admin data quotas |
| **Subscription** | Per-user page with live usage chart, QR codes and base64 sub links |
| **Telegram Bot** | Optional bot: get your sub link + QR right in Telegram |
| **Security** | JWT sessions, built-in rate limiting, sniffing fully disabled |

**How traffic flows** — TLS is terminated at the Railway edge; all client links use `security=tls` on port `443`. Only `ws`, `httpupgrade` and `xhttp` transports are supported.

<br/>

## 🚀 Deploy on Railway

**No code required:**

1. **Fork this repository** — click **Fork** at the top-right.
2. **Create a Railway project** — **New Project → Deploy from GitHub repo**, pick your fork.
3. **Deploy** — Railway reads the `Dockerfile` and builds automatically.
4. **Expose port `8080`** — **Settings → Networking → Generate Domain**, port **`8080`**.
5. **Add a volume (optional)** — attach a **Volume** at **`/data`** so data survives redeploys.
6. **Open your panel** — visit the generated domain, land on **Setup**, create your **Owner** account.

> [!IMPORTANT]
> Only port **`8080`** is exposed. Ports `10085` and `20000–20004` are Xray's internal ports on `127.0.0.1` — never expose them.

<br/>

## ⚙️ Environment variables

**All optional.**

| Variable | Default | Description |
|:--|:--|:--|
| `PORT` | `8080` | HTTP port. **Expose this one on Railway.** |
| `JWT_SECRET` | *auto* | Signs admin session cookies. Auto-generated if unset. |
| `XRAY_VERSION` | `v26.9.9` | Xray-core release fetched on first boot. |
| `PARHAM_DATA_DIR` | `/data` | Persistent data directory (mount a volume here). |
| `PUBLIC_DOMAIN` | *auto* | Override for a custom domain. Falls back to `RAILWAY_PUBLIC_DOMAIN`. |
| `XRAY_API_PORT` | `10085` | Internal Xray stats API port. |
| `XRAY_INBOUND_BASE_PORT` | `20000` | Base port for internal inbound listeners. |

<br/>

## 🛠️ Local development

**Requires Node.js ≥ 22.5 (Node 24 recommended).**

```bash
npm install     # install all workspaces
npm run dev     # web on :5173, server on :8080 (proxied)

npm run build   # production build (web + server)
npm start       # serve API + built frontend on :8080
```

```
apps/
├─ web/           React + Vite + Tailwind (Parham red/black theme) frontend
│  └─ src/
│     ├─ components/parham-fx.*  Bubbles, ripples, sounds, glow effects
│     ├─ components/ui/          Neobrutalist primitives (glass cards, glow buttons)
│     ├─ pages/                  Dashboard · Users · Inbounds · Activity · Settings · Subscription
│     └─ lib/                    API client, auth context, brand, helpers
└─ server/        Express + Node (node:sqlite) backend
   └─ src/
      ├─ xray.ts          Binary fetch, process manager, traffic stats, client IPs
      ├─ xray-config.ts   Config builder (sniffing fully disabled)
      ├─ tunnel.ts        WS/HTTPUpgrade via net.Socket, XHTTP via http-proxy
      ├─ links.ts         VLESS/VMess/Trojan link generation
      ├─ users.ts         User model, traffic reset, sub-token logic
      ├─ auth.ts          Owner/Admin roles, permissions, sessions
      └─ routes.ts        Authenticated REST API
```

<br/>

## 📞 Support

Telegram: **[@par1234mehr](https://t.me/par1234mehr)**

<br/>

## 📄 License

**Proprietary — © 2025 Parham, all rights reserved.** Published for transparency and personal self-hosting only. Fork and run your own instance, but selling, white-labeling, removing attribution, or claiming authorship are prohibited without permission. See [LICENSE](LICENSE).
