import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Horizon Habitat Projet — Rénovation Intérieure Argenteuil'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          width: '100%',
          height: '100%',
          backgroundColor: '#26211C',
          padding: '64px',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '4px',
            backgroundColor: '#D4854A',
          }}
        />

        {/* Logo area */}
        <div
          style={{
            position: 'absolute',
            top: '48px',
            left: '64px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#D4854A',
            }}
          />
          <span
            style={{
              color: '#F8F4EF',
              fontSize: '14px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              opacity: 0.6,
            }}
          >
            Horizon Habitat Projet
          </span>
        </div>

        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              color: '#D4854A',
              fontSize: '16px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
            }}
          >
            Argenteuil · Val-d&apos;Oise · Île-de-France
          </div>
          <h1
            style={{
              color: '#F8F4EF',
              fontSize: '64px',
              fontWeight: 300,
              lineHeight: 1.0,
              margin: 0,
              maxWidth: '900px',
            }}
          >
            Rénovation Intérieure de Qualité
          </h1>
          <p
            style={{
              color: 'rgba(248, 244, 239, 0.6)',
              fontSize: '22px',
              margin: 0,
              maxWidth: '700px',
              lineHeight: 1.5,
            }}
          >
            Cuisine · Salle de bain · Peinture · Électricité · Carrelage · Verrière
          </p>
        </div>

        {/* CTA badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '64px',
            right: '64px',
            backgroundColor: '#D4854A',
            color: '#26211C',
            padding: '14px 28px',
            fontSize: '15px',
            fontWeight: 600,
            letterSpacing: '0.05em',
          }}
        >
          Devis gratuit — 07 66 41 56 39
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
