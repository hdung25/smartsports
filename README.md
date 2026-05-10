# Smart Sports

Marketing website cho **Smart Sports** (501(c)3 nonprofit) — Next.js 14 + Tailwind CSS, deploy trên Vercel.

## Pages

- `/` — Homepage (Flow 2 trong Figma)
- `/events` — Events (Flow 4 trong Figma)

## Local development

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

Production build:

```bash
npm run build
npm run start
```

## Tech stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS với brand tokens trong `tailwind.config.ts`
- Google Fonts — Poppins (qua `next/font`)
- `lucide-react` cho icons

## Cấu trúc

```
src/
├── app/
│   ├── layout.tsx        Header + Footer dùng chung, font, metadata
│   ├── page.tsx          Homepage (Flow 2)
│   ├── events/page.tsx   Events page (Flow 4)
│   └── globals.css
└── components/
    ├── Header.tsx
    ├── Footer.tsx
    ├── HomeHero.tsx
    ├── HowItWorks.tsx
    ├── WhyItMatters.tsx
    ├── WhatMakesDifferent.tsx
    ├── SuccessLooksLike.tsx
    ├── Testimonials.tsx        carousel client component
    └── BuildWhatsNext.tsx
public/images/                  logo, pic1..6, anhmoi1..4, blog1..2
```

## Deploy GitHub + Vercel

1. **Khởi tạo repo:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Smart Sports site"
   ```

2. **Đẩy lên GitHub:**
   - Tạo repo mới (private/public tùy bạn) trên https://github.com/new
   - Đổi remote và push:
     ```bash
     git remote add origin https://github.com/<your-username>/smartsports.git
     git branch -M main
     git push -u origin main
     ```

3. **Deploy Vercel:**
   - Đăng nhập https://vercel.com với tài khoản GitHub
   - Add New → Project → Import repo `smartsports`
   - Vercel tự nhận diện Next.js — giữ nguyên defaults:
     - Framework Preset: Next.js
     - Build Command: `next build`
     - Output Directory: `.next`
   - Không cần ENV variable.
   - Bấm **Deploy**.

4. Mỗi lần `git push` lên `main` → Vercel tự rebuild.

## Việc tiếp theo (sau khi deploy)

- Bổ sung danh sách upcoming events ở trang `/events`.
- Thêm trang Blogs và route động `/blogs/[slug]`.
- Thêm form đăng ký nhận tin (newsletter).
- Hoàn thiện responsive cho mobile và tablet (hiện stack cơ bản).
