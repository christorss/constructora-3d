import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'mobile-layout-tuning',
      transformIndexHtml() {
        return [{
          tag: 'style',
          children: `
            @media (max-width: 480px) {
              .hero h1 { font-size: clamp(2.55rem, 13vw, 4rem); line-height: .9; }
              .hero-copy { left: 6vw; right: 6vw; bottom: 10vh; }
              .nav-shell { padding-inline: 4vw; }
              .nav-cta { font-size: .68rem; letter-spacing: .06em; }
              .section-pad { padding-inline: 6vw; }
              .project-meta h3 { font-size: 1.35rem; }
              .video-label { gap: .75rem; line-height: 1.45; }
            }
          `,
        }]
      },
    },
  ],
})
