/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef } from 'react';

const goldGradient = 'linear-gradient(135deg,#A8884A 0%,#E6CE92 50%,#B8954C 100%)';
const QUOTE_FORM_URL = 'https://agencia.iddas.com.br/so/wqt2jo3i';
const WHATSAPP_URL =
  'https://wa.me/5581995357254?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20sobre%20o%20planejamento%20de%20viagem';

export default function App() {
  const ofertasTrackRef = useRef<HTMLDivElement>(null);

  const scrollOffers = (dir: number) => () => {
    const el = ofertasTrackRef.current;
    if (el) {
      el.scrollBy({ left: dir * (el.clientWidth + 32), behavior: 'smooth' });
    }
  };

  return (
    <div
      style={{
        fontFamily: "'Poppins',system-ui,sans-serif",
        color: '#0A0951',
        background: '#F3F4FA',
        lineHeight: 1.55,
      }}
    >
      {/* 1+2. HEADER + HERO */}
      <div
        id="inicio"
        style={{
          position: 'relative',
          background:
            'radial-gradient(ellipse 46% 80% at 74% 60%,rgba(52,68,200,.55) 0%,rgba(10,9,81,0) 72%),linear-gradient(180deg,#000D2D 0%,#06094D 100%)',
          color: '#FFFFFF',
          overflow: 'hidden',
        }}
      >
        <header style={{ position: 'relative', zIndex: 3 }}>
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '22px 24px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '14px 28px',
            }}
          >
            <a href="#inicio" style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="/assets/aistudio/1b70050777b864323514b80af967574c_ccc78647.png"
                alt="Realizze Travel"
                width={900}
                height={230}
                style={{ height: '44px', width: 'auto', display: 'block' }}
              />
            </a>
            <nav
              aria-label="Menu principal"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '8px 26px',
                fontFamily: "'Montserrat',sans-serif",
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '.3px',
              }}
            >
              <a href="#ofertas" style={{ color: '#E6E6F5' }}>
                Ofertas
              </a>
              <a href="#destinos" style={{ color: '#E6E6F5' }}>
                Experiências
              </a>
              <a href="#diferenciais" style={{ color: '#E6E6F5' }}>
                Diferenciais
              </a>
              <a href="#servicos" style={{ color: '#E6E6F5' }}>
                Serviços
              </a>
              <a href="#depoimentos" style={{ color: '#E6E6F5' }}>
                Depoimentos
              </a>
              <a href="#contato" style={{ color: '#E6E6F5' }}>
                Contato
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: goldGradient,
                  color: '#0A0951',
                  padding: '10px 18px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '13px',
                }}
              >
                Falar com consultor
              </a>
            </nav>
          </div>
        </header>

        <section style={{ position: 'relative', zIndex: 2 }}>
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '0 24px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              gap: '0 24px',
              minHeight: '720px',
            }}
          >
            <div
              style={{
                flex: '1 1 440px',
                minWidth: 0,
                maxWidth: '600px',
                display: 'flex',
                flexDirection: 'column',
                gap: '26px',
                padding: '40px 0 96px',
                alignSelf: 'center',
              }}
            >
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  fontFamily: "'Montserrat',sans-serif",
                  color: '#E3C78A',
                }}
              >
                Viagens sob medida · Atendimento humanizado
              </span>
              <h1
                style={{
                  margin: 0,
                  maxWidth: '9.4em',
                  fontFamily: "'Cormorant Garamond',Georgia,serif",
                  fontWeight: 600,
                  fontSize: 'clamp(50px,7vw,96px)',
                  lineHeight: 0.98,
                  letterSpacing: '-1.5px',
                  color: '#FFFFFF',
                }}
              >
                Sua viagem <span style={{ color: '#E3C78A' }}>dos sonhos</span>, sem perrengues do
                início ao fim.
              </h1>
              <p
                style={{
                  margin: 0,
                  fontSize: '16px',
                  lineHeight: 1.65,
                  color: '#D9DAF0',
                  maxWidth: '470px',
                }}
              >
                A Realizze Travel cuida de cada detalhe: roteiro, voos, hospedagem, passeios e
                suporte. Você só se preocupa em aproveitar cada momento com quem ama.
              </p>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '14px 22px',
                }}
              >
                <a
                  href={QUOTE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: goldGradient,
                    color: '#0A0951',
                    padding: '14px 26px',
                    borderRadius: '8px',
                    fontFamily: "'Montserrat',sans-serif",
                    fontWeight: 700,
                    fontSize: '14px',
                  }}
                >
                  Planejar minha viagem
                </a>
                <span
                  style={{
                    fontSize: '11px',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    fontFamily: "'Montserrat',sans-serif",
                    color: '#E3C78A',
                  }}
                >
                  Orçamento gratuito
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '8px 20px',
                  fontSize: '13px',
                  color: '#D9DAF0',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ display: 'flex', gap: '2px' }} aria-hidden="true">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#E3C78A">
                        <polygon points="12,2 15,9 22,9.3 16.5,14 18.3,21 12,17 5.7,21 7.5,14 2,9.3 9,9" />
                      </svg>
                    ))}
                  </span>
                  <span style={{ fontWeight: 600 }}>5,0 · 23 avaliações no Google</span>
                </span>
                <span>Suporte durante toda a viagem</span>
              </div>
            </div>
            <img
              src="/assets/aistudio/hero_cutout_passports.webp"
              alt="Os consultores da Realizze Travel, de uniforme azul, sorrindo e segurando passaportes"
              width={628}
              height={839}
              style={{
                flex: '1 1 360px',
                minWidth: 0,
                width: '100%',
                maxWidth: '480px',
                height: 'auto',
                display: 'block',
                margin: '0 0 0 auto',
                alignSelf: 'flex-end',
              }}
            />
          </div>
        </section>
      </div>

      {/* OFERTAS */}
      <section id="ofertas" style={{ padding: '80px 0 72px', background: '#FFFFFF' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '40px',
          }}
        >
          <div
            style={{
              maxWidth: '620px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '14px',
            }}
          >
            <h2
              style={{
                margin: 0,
                fontFamily: "'Cormorant Garamond',Georgia,serif",
                fontWeight: 600,
                fontSize: 'clamp(38px,4.6vw,56px)',
                lineHeight: 1.15,
                color: '#0A0951',
              }}
            >
              Ofertas
            </h2>
            <span
              aria-hidden="true"
              style={{
                width: '64px',
                height: '3px',
                borderRadius: '3px',
                background: goldGradient,
              }}
            />
            <p style={{ margin: 0, fontSize: '18px', color: '#4A4C80' }}>
              Aéreo, hospedagem e passeios já organizados. Escolha o seu destino e fale com a gente.
            </p>
          </div>
          <div
            id="ofertas-track"
            ref={ofertasTrackRef}
            style={{
              width: '100%',
              display: 'flex',
              gap: '32px',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              padding: '4px 4px 20px',
              boxSizing: 'border-box',
              scrollbarWidth: 'none',
            }}
          >
            <a
              href={QUOTE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pedir orçamento: Oferta Buenos Aires, 08 a 12 de abril, aéreo e hospedagem com saída de Recife, 10x de R$ 295,00"
              style={{
                flex: '0 0 max(calc((100% - 64px) / 3),260px)',
                scrollSnapAlign: 'start',
                display: 'block',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 6px 22px rgba(10,9,77,.16)',
              }}
            >
              <img
                src="/assets/aistudio/af9ae22642d379fb90803a64100957ae_64048776.png"
                alt="Oferta Buenos Aires, 08 a 12 de abril, aéreo e hospedagem com saída de Recife, 10x de R$ 295,00"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </a>
            <a
              href={QUOTE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pedir orçamento: Oferta Lençóis Maranhenses, 11 a 15 de março, aéreo, hospedagem e passeio com saída de Recife, 10x de R$ 225,00"
              style={{
                flex: '0 0 max(calc((100% - 64px) / 3),260px)',
                scrollSnapAlign: 'start',
                display: 'block',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 6px 22px rgba(10,9,77,.16)',
              }}
            >
              <img
                src="/assets/aistudio/d435e323c7e8338f2de80e358335eb03_08fc94e7.png"
                alt="Oferta Lençóis Maranhenses, 11 a 15 de março, aéreo, hospedagem e passeio com saída de Recife, 10x de R$ 225,00"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </a>
            <a
              href={QUOTE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pedir orçamento: Oferta Salvador, 08 a 12 de abril, aéreo, hospedagem e passeio com saída de Recife, 10x de R$ 130,00"
              style={{
                flex: '0 0 max(calc((100% - 64px) / 3),260px)',
                scrollSnapAlign: 'start',
                display: 'block',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 6px 22px rgba(10,9,77,.16)',
              }}
            >
              <img
                src="/assets/aistudio/13987ab382419d2f7bdcbc14785694b5_013c3282.png"
                alt="Oferta Salvador, 08 a 12 de abril, aéreo, hospedagem e passeio com saída de Recife, 10x de R$ 130,00"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </a>
            <a
              href={QUOTE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pedir orçamento: Oferta Beto Carrero, 15 a 19 de abril, aéreo, hospedagem e ingresso com saída de Recife, 10x de R$ 230,00"
              style={{
                flex: '0 0 max(calc((100% - 64px) / 3),260px)',
                scrollSnapAlign: 'start',
                display: 'block',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 6px 22px rgba(10,9,77,.16)',
              }}
            >
              <img
                src="/assets/aistudio/614d521cb204d4feaf6d6af8777b5554_aa69e982.png"
                alt="Oferta Beto Carrero, 15 a 19 de abril, aéreo, hospedagem e ingresso com saída de Recife, 10x de R$ 230,00"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </a>
            <a
              href={QUOTE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pedir orçamento: Oferta Campos do Jordão, 15 a 19 de abril, aéreo, hospedagem e passeio com saída de Recife, 10x de R$ 210,00"
              style={{
                flex: '0 0 max(calc((100% - 64px) / 3),260px)',
                scrollSnapAlign: 'start',
                display: 'block',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 6px 22px rgba(10,9,77,.16)',
              }}
            >
              <img
                src="/assets/aistudio/c06e4833fd3bb577dd413ca14d6d7379_b460b358.png"
                alt="Oferta Campos do Jordão, 15 a 19 de abril, aéreo, hospedagem e passeio com saída de Recife, 10x de R$ 210,00"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </a>
            <a
              href={QUOTE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pedir orçamento: Oferta Fortaleza, 04 a 08 de março, aéreo, hospedagem e passeio com saída de Recife, 10x de R$ 150,00"
              style={{
                flex: '0 0 max(calc((100% - 64px) / 3),260px)',
                scrollSnapAlign: 'start',
                display: 'block',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 6px 22px rgba(10,9,77,.16)',
              }}
            >
              <img
                src="/assets/aistudio/73d698b9299f90c60399504de7cdbc7c_714b95a2.png"
                alt="Oferta Fortaleza, 04 a 08 de março, aéreo, hospedagem e passeio com saída de Recife, 10x de R$ 150,00"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </a>
            <a
              href={QUOTE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pedir orçamento: Oferta Foz do Iguaçu, 08 a 12 de abril, aéreo, hospedagem e passeio com saída de Recife, 10x de R$ 295,00"
              style={{
                flex: '0 0 max(calc((100% - 64px) / 3),260px)',
                scrollSnapAlign: 'start',
                display: 'block',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 6px 22px rgba(10,9,77,.16)',
              }}
            >
              <img
                src="/assets/aistudio/631db8ebee1515d691531952a64ddf4f_1a667448.png"
                alt="Oferta Foz do Iguaçu, 08 a 12 de abril, aéreo, hospedagem e passeio com saída de Recife, 10x de R$ 295,00"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </a>
            <a
              href={QUOTE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pedir orçamento: Oferta Maceió, 08 a 12 de abril, aéreo e hospedagem com saída de Recife, 10x de R$ 247,00"
              style={{
                flex: '0 0 max(calc((100% - 64px) / 3),260px)',
                scrollSnapAlign: 'start',
                display: 'block',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 6px 22px rgba(10,9,77,.16)',
              }}
            >
              <img
                src="/assets/aistudio/6a85b6241ae0a77b5a035850bb88615e_611ea46b.png"
                alt="Oferta Maceió, 08 a 12 de abril, aéreo e hospedagem com saída de Recife, 10x de R$ 247,00"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </a>
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <button
              type="button"
              aria-label="Ofertas anteriores"
              onClick={scrollOffers(-1)}
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '999px',
                border: '2px solid #0A0951',
                background: 'transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0A0951"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 5l-7 7 7 7" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Próximas ofertas"
              onClick={scrollOffers(1)}
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '999px',
                border: '2px solid #0A0951',
                background: '#0A0951',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#E3C78A"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <p style={{ margin: 0, fontSize: '14px', color: '#4A4C80', textAlign: 'center' }}>
            Valores e datas conforme os cartazes. Sujeitos à disponibilidade; confirme com um
            consultor no WhatsApp.
          </p>
        </div>
      </section>

      {/* 3. DIFERENCIAIS */}
      <section id="diferenciais" style={{ padding: '88px 0 72px' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '48px',
          }}
        >
          <div
            style={{
              maxWidth: '680px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            <span
              style={{
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontFamily: "'Montserrat',sans-serif",
                color: '#8A6212',
              }}
            >
              Por que a Realizze
            </span>
            <h2
              style={{
                margin: 0,
                fontFamily: "'Cormorant Garamond',Georgia,serif",
                fontWeight: 600,
                fontSize: 'clamp(36px,4.2vw,52px)',
                lineHeight: 1.15,
              }}
            >
              Sua próxima viagem. Nossa missão é cuidar de tudo.
            </h2>
            <p style={{ margin: 0, fontSize: '18px', color: '#4A4C80' }}>
              Planejamos cada detalhe para você viajar com segurança, tranquilidade e o melhor
              custo-benefício.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
            <div
              style={{
                flex: '1 1 250px',
                minWidth: 0,
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                boxShadow: '0 2px 14px rgba(10,9,77,.07)',
              }}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2A2990"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3z" />
                <path d="M9 3v15M15 6v15" />
              </svg>
              <h3 style={{ margin: 0, fontSize: '20px' }}>Roteiros sob medida</h3>
              <p style={{ margin: 0, color: '#4A4C80' }}>
                Cada viagem é desenhada para o seu estilo, o seu ritmo e o seu orçamento. Nada de
                pacote genérico.
              </p>
            </div>
            <div
              style={{
                flex: '1 1 250px',
                minWidth: 0,
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                boxShadow: '0 2px 14px rgba(10,9,77,.07)',
              }}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2A2990"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 13v-1a8 8 0 0116 0v1" />
                <path d="M4 13h3v5H5a1 1 0 01-1-1zM20 13h-3v5h2a1 1 0 001-1z" />
                <path d="M19 18c0 2-2 3-5 3" />
              </svg>
              <h3 style={{ margin: 0, fontSize: '20px' }}>Suporte do início ao fim</h3>
              <p style={{ margin: 0, color: '#4A4C80' }}>
                Acompanhamento antes, durante e depois da viagem. Se algo acontecer, você fala com
                gente de verdade.
              </p>
            </div>
            <div
              style={{
                flex: '1 1 250px',
                minWidth: 0,
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                boxShadow: '0 2px 14px rgba(10,9,77,.07)',
              }}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2A2990"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M15 9.5c-.6-1-1.7-1.5-3-1.5-1.7 0-3 .8-3 2s1.3 1.8 3 2 3 .8 3 2-1.3 2-3 2c-1.3 0-2.4-.5-3-1.5M12 6v2M12 16v2" />
              </svg>
              <h3 style={{ margin: 0, fontSize: '20px' }}>Melhor custo-benefício</h3>
              <p style={{ margin: 0, color: '#4A4C80' }}>
                Comparamos opções e usamos nossas parcerias para você viajar bem, com condições que
                valem cada centavo.
              </p>
            </div>
            <div
              style={{
                flex: '1 1 250px',
                minWidth: 0,
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                boxShadow: '0 2px 14px rgba(10,9,77,.07)',
              }}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2A2990"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6z" />
                <path d="M8.5 12l2.5 2.5 4.5-5" />
              </svg>
              <h3 style={{ margin: 0, fontSize: '20px' }}>Agência credenciada</h3>
              <p style={{ margin: 0, color: '#4A4C80' }}>
                Segurança na contratação, com todas as reservas e documentos em ordem. Cadastur nº
                63.652.360/0001-98.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" style={{ padding: '80px 0', background: '#0A0951', color: '#FFFFFF' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '48px',
          }}
        >
          <div
            style={{
              maxWidth: '700px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            <span
              style={{
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontFamily: "'Montserrat',sans-serif",
                color: '#E3C78A',
              }}
            >
              Nossos serviços
            </span>
            <h2
              style={{
                margin: 0,
                fontFamily: "'Cormorant Garamond',Georgia,serif",
                fontWeight: 600,
                fontSize: 'clamp(36px,4.2vw,52px)',
                lineHeight: 1.15,
                color: '#FFFFFF',
              }}
            >
              Tudo para a sua viagem em um só lugar.
            </h2>
            <p style={{ margin: 0, fontSize: '18px', color: '#E6E6F5' }}>
              Viajar com mais tranquilidade, praticidade e segurança.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <div
              style={{
                flex: '1 1 300px',
                minWidth: 0,
                background: goldGradient,
                color: '#0A0951',
                borderRadius: '18px',
                padding: '26px 28px',
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0A0951"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ flex: 'none' }}
              >
                <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
              </svg>
              <span style={{ fontWeight: 700, fontSize: '17px' }}>
                Aéreo nacional e internacional
              </span>
            </div>
            <div
              style={{
                flex: '1 1 300px',
                minWidth: 0,
                background: goldGradient,
                color: '#0A0951',
                borderRadius: '18px',
                padding: '26px 28px',
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0A0951"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ flex: 'none' }}
              >
                <rect x="5" y="3" width="14" height="18" rx="1" />
                <path d="M9 7h2M13 7h2M9 11h2M13 11h2M10 21v-4h4v4" />
              </svg>
              <span style={{ fontWeight: 700, fontSize: '17px' }}>
                Hospedagens, hotéis e resorts
              </span>
            </div>
            <div
              style={{
                flex: '1 1 300px',
                minWidth: 0,
                background: goldGradient,
                color: '#0A0951',
                borderRadius: '18px',
                padding: '26px 28px',
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0A0951"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ flex: 'none' }}
              >
                <path d="M4 7h16v3a2 2 0 000 4v3H4v-3a2 2 0 000-4z" />
                <path d="M14 7v10" strokeDasharray="2 2" />
              </svg>
              <span style={{ fontWeight: 700, fontSize: '17px' }}>
                Ingressos para parques, shows e atrações
              </span>
            </div>
            <div
              style={{
                flex: '1 1 300px',
                minWidth: 0,
                background: goldGradient,
                color: '#0A0951',
                borderRadius: '18px',
                padding: '26px 28px',
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0A0951"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ flex: 'none' }}
              >
                <path d="M5 16v-5l2-5h10l2 5v5" />
                <path d="M3 16h18v3H3zM7.5 13h.01M16.5 13h.01" />
              </svg>
              <span style={{ fontWeight: 700, fontSize: '17px' }}>Locação de carros</span>
            </div>
            <div
              style={{
                flex: '1 1 300px',
                minWidth: 0,
                background: goldGradient,
                color: '#0A0951',
                borderRadius: '18px',
                padding: '26px 28px',
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0A0951"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ flex: 'none' }}
              >
                <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6z" />
                <path d="M8.5 12l2.5 2.5 4.5-5" />
              </svg>
              <span style={{ fontWeight: 700, fontSize: '17px' }}>
                Seguro viagem completo e acessível
              </span>
            </div>
            <div
              style={{
                flex: '1 1 300px',
                minWidth: 0,
                background: goldGradient,
                color: '#0A0951',
                borderRadius: '18px',
                padding: '26px 28px',
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0A0951"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ flex: 'none' }}
              >
                <rect x="6" y="7" width="12" height="13" rx="2" />
                <path d="M9 7V4h6v3M10 11v5M14 11v5" />
              </svg>
              <span style={{ fontWeight: 700, fontSize: '17px' }}>Pacotes de viagens</span>
            </div>
            <div
              style={{
                flex: '1 1 300px',
                minWidth: 0,
                background: goldGradient,
                color: '#0A0951',
                borderRadius: '18px',
                padding: '26px 28px',
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0A0951"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ flex: 'none' }}
              >
                <path d="M3 17l2 3h14l2-3z" />
                <path d="M5 17v-5h14v5M9 12V8h6v4M12 4v4" />
              </svg>
              <span style={{ fontWeight: 700, fontSize: '17px' }}>Cruzeiros</span>
            </div>
            <div
              style={{
                flex: '1 1 300px',
                minWidth: 0,
                background: goldGradient,
                color: '#0A0951',
                borderRadius: '18px',
                padding: '26px 28px',
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0A0951"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ flex: 'none' }}
              >
                <rect x="4" y="5" width="16" height="12" rx="2" />
                <path d="M4 11h16M8 17v2M16 17v2M8 14h.01M16 14h.01" />
              </svg>
              <span style={{ fontWeight: 700, fontSize: '17px' }}>Transfer</span>
            </div>
            <div
              style={{
                flex: '1 1 300px',
                minWidth: 0,
                background: goldGradient,
                color: '#0A0951',
                borderRadius: '18px',
                padding: '26px 28px',
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0A0951"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ flex: 'none' }}
              >
                <path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z" />
                <path d="M9 4v14M15 6v14" />
              </svg>
              <span style={{ fontWeight: 700, fontSize: '17px' }}>Passeios e roteiros</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px' }}>
            <a
              href={QUOTE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: goldGradient,
                color: '#0A0951',
                padding: '16px 32px',
                borderRadius: '999px',
                fontFamily: "'Montserrat',sans-serif",
                fontWeight: 700,
                fontSize: '16px',
              }}
            >
              Pedir orçamento
            </a>
            <span
              style={{
                fontFamily: "'Allura',cursive",
                fontSize: '34px',
                lineHeight: 1.1,
                color: '#E3C78A',
              }}
            >
              Você sonha, a gente realiza!
            </span>
          </div>
        </div>
      </section>

      {/* 4. DESTINOS */}
      <section id="destinos" style={{ padding: '72px 0', background: '#FFFFFF' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '48px',
          }}
        >
          <div
            style={{
              maxWidth: '680px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            <span
              style={{
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontFamily: "'Montserrat',sans-serif",
                color: '#8A6212',
              }}
            >
              Experiências
            </span>
            <h2
              style={{
                margin: 0,
                fontFamily: "'Cormorant Garamond',Georgia,serif",
                fontWeight: 600,
                fontSize: 'clamp(36px,4.2vw,52px)',
                lineHeight: 1.15,
              }}
            >
              Cada viagem tem um propósito. A gente cuida de cada detalhe.
            </h2>
            <p style={{ margin: 0, fontSize: '18px', color: '#4A4C80' }}>
              De momentos especiais a compromissos profissionais, criamos soluções de viagem
              personalizadas para pessoas, famílias, empresas e grupos.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: '0 0 max(calc((100% - 72px) / 4),240px)',
                minWidth: 0,
                height: '500px',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 6px 22px rgba(10,9,81,.16)',
              }}
            >
              <div
                role="img"
                aria-label="Família com os braços para o alto, de frente para o mar"
                style={{
                  flex: '1 1 0',
                  minHeight: 0,
                  background:
                    'url(/assets/aistudio/0ee81980295daf6c228b2e8a25e0085d_960af3a8.jpg) 60% 50%/cover',
                }}
              />
              <div
                style={{
                  flex: '0 0 260px',
                  height: '260px',
                  boxSizing: 'border-box',
                  padding: '20px 22px 22px',
                  background: '#0A0951',
                  color: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontFamily: "'Cormorant Garamond',Georgia,serif",
                    fontSize: '28px',
                    fontWeight: 600,
                  }}
                >
                  Lazer
                </h3>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5 }}>
                  Famílias, casais, grupos e viajantes individuais.
                </p>
                <span
                  style={{
                    marginTop: 'auto',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#E3C78A',
                  }}
                >
                  Falar com um consultor
                </span>
              </div>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: '0 0 max(calc((100% - 72px) / 4),240px)',
                minWidth: 0,
                height: '500px',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 6px 22px rgba(10,9,81,.16)',
              }}
            >
              <div
                role="img"
                aria-label="Executivo com mala no saguão de um hotel"
                style={{
                  flex: '1 1 0',
                  minHeight: 0,
                  background:
                    'url(/assets/aistudio/afbe083be795edf6ceaf57c44cc5bc2f_2cec81b8.jpg) 38% 50%/cover',
                }}
              />
              <div
                style={{
                  flex: '0 0 260px',
                  height: '260px',
                  boxSizing: 'border-box',
                  padding: '20px 22px 22px',
                  background: '#0A0951',
                  color: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontFamily: "'Cormorant Garamond',Georgia,serif",
                    fontSize: '28px',
                    fontWeight: 600,
                  }}
                >
                  Corporativo
                </h3>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5 }}>
                  Empresas e profissionais que precisam viajar.
                </p>
                <span
                  style={{
                    marginTop: 'auto',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#E3C78A',
                  }}
                >
                  Falar com um consultor
                </span>
              </div>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: '0 0 max(calc((100% - 72px) / 4),240px)',
                minWidth: 0,
                height: '500px',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 6px 22px rgba(10,9,81,.16)',
              }}
            >
              <div
                role="img"
                aria-label="Grupo de amigos correndo na praia ao pôr do sol"
                style={{
                  flex: '1 1 0',
                  minHeight: 0,
                  background:
                    'url(/assets/aistudio/30d57dcad8a4fe942dd7f826289de136_c37df594.jpg) 40% 50%/cover',
                }}
              />
              <div
                style={{
                  flex: '0 0 260px',
                  height: '260px',
                  boxSizing: 'border-box',
                  padding: '20px 22px 22px',
                  background: '#0A0951',
                  color: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontFamily: "'Cormorant Garamond',Georgia,serif",
                    fontSize: '28px',
                    fontWeight: 600,
                  }}
                >
                  Grupos
                </h3>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5 }}>
                  Excursões, grupos especiais e viagens coletivas.
                </p>
                <span
                  style={{
                    marginTop: 'auto',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#E3C78A',
                  }}
                >
                  Falar com um consultor
                </span>
              </div>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: '0 0 max(calc((100% - 72px) / 4),240px)',
                minWidth: 0,
                height: '500px',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 6px 22px rgba(10,9,81,.16)',
              }}
            >
              <div
                role="img"
                aria-label="Palestrante com microfone diante de uma plateia"
                style={{
                  flex: '1 1 0',
                  minHeight: 0,
                  background:
                    'url(/assets/aistudio/cebc58c0923698d53c38eb4c5b23922b_3c28a54a.jpg) 20% 50%/cover',
                }}
              />
              <div
                style={{
                  flex: '0 0 260px',
                  height: '260px',
                  boxSizing: 'border-box',
                  padding: '20px 22px 22px',
                  background: '#0A0951',
                  color: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontFamily: "'Cormorant Garamond',Georgia,serif",
                    fontSize: '28px',
                    fontWeight: 600,
                  }}
                >
                  Eventos
                </h3>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5 }}>
                  Participantes, convidados e equipes que precisam de logística de viagem.
                </p>
                <span
                  style={{
                    marginTop: 'auto',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#E3C78A',
                  }}
                >
                  Falar com um consultor
                </span>
              </div>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: '0 0 max(calc((100% - 72px) / 4),240px)',
                minWidth: 0,
                height: '500px',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 6px 22px rgba(10,9,81,.16)',
              }}
            >
              <div
                role="img"
                aria-label="Atletas na largada de uma corrida na pista"
                style={{
                  flex: '1 1 0',
                  minHeight: 0,
                  background:
                    'url(/assets/aistudio/4a3cc5625a9bfcf4ff2ceeafd7f6d0b0_c95acd9c.jpg) 50% 50%/cover',
                }}
              />
              <div
                style={{
                  flex: '0 0 260px',
                  height: '260px',
                  boxSizing: 'border-box',
                  padding: '20px 22px 22px',
                  background: '#0A0951',
                  color: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontFamily: "'Cormorant Garamond',Georgia,serif",
                    fontSize: '28px',
                    fontWeight: 600,
                  }}
                >
                  Atletas
                </h3>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5 }}>
                  Atletas, equipes e competições esportivas. Logística completa para viagens
                  esportivas, incluindo passagens, hospedagem e suporte durante competições e
                  campeonatos.
                </p>
                <span
                  style={{
                    marginTop: 'auto',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#E3C78A',
                  }}
                >
                  Falar com um consultor
                </span>
              </div>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: '0 0 max(calc((100% - 72px) / 4),240px)',
                minWidth: 0,
                height: '500px',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 6px 22px rgba(10,9,81,.16)',
              }}
            >
              <div
                role="img"
                aria-label="Viajante sorrindo em uma selfie na pista do aeroporto"
                style={{
                  flex: '1 1 0',
                  minHeight: 0,
                  background:
                    'url(/assets/aistudio/b65da2c0f1bef6a2f2881c77c2b66a37_9b03d6a3.jpg) 58% 50%/cover',
                }}
              />
              <div
                style={{
                  flex: '0 0 260px',
                  height: '260px',
                  boxSizing: 'border-box',
                  padding: '20px 22px 22px',
                  background: '#0A0951',
                  color: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontFamily: "'Cormorant Garamond',Georgia,serif",
                    fontSize: '28px',
                    fontWeight: 600,
                  }}
                >
                  Experiências
                </h3>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5 }}>
                  Clientes que buscam mais do que simplesmente uma passagem ou hotel.
                </p>
                <span
                  style={{
                    marginTop: 'auto',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#E3C78A',
                  }}
                >
                  Falar com um consultor
                </span>
              </div>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: '0 0 max(calc((100% - 72px) / 4),240px)',
                minWidth: 0,
                height: '500px',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 6px 22px rgba(10,9,81,.16)',
              }}
            >
              <div
                role="img"
                aria-label="Casal sentado em um muro olhando as montanhas"
                style={{
                  flex: '1 1 0',
                  minHeight: 0,
                  background:
                    'url(/assets/aistudio/a03f45bd7cb867aa20ffd0e80f417345_db785e6b.jpg) 37% 50%/cover',
                }}
              />
              <div
                style={{
                  flex: '0 0 260px',
                  height: '260px',
                  boxSizing: 'border-box',
                  padding: '20px 22px 22px',
                  background: '#0A0951',
                  color: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontFamily: "'Cormorant Garamond',Georgia,serif",
                    fontSize: '28px',
                    fontWeight: 600,
                  }}
                >
                  Casais
                </h3>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5 }}>
                  Lua de mel, aniversários e viagens a dois. Roteiros personalizados para momentos
                  especiais, com cuidado em cada detalhe da experiência.
                </p>
                <span
                  style={{
                    marginTop: 'auto',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#E3C78A',
                  }}
                >
                  Falar com um consultor
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 5. DEPOIMENTOS */}
      <section id="depoimentos" style={{ padding: '88px 0' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '48px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '24px',
            }}
          >
            <div
              style={{
                maxWidth: '640px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  fontFamily: "'Montserrat',sans-serif",
                  color: '#8A6212',
                }}
              >
                Quem viajou, recomenda
              </span>
              <h2
                style={{
                  margin: 0,
                  fontFamily: "'Cormorant Garamond',Georgia,serif",
                  fontWeight: 600,
                  fontSize: 'clamp(36px,4.2vw,52px)',
                  lineHeight: 1.15,
                }}
              >
                Nossa reputação é feita de viajantes felizes.
              </h2>
            </div>
            <a
              href="https://www.google.com/maps/place/Realizze+Travel/@-9.6711986,-99.7672807,3z/data=!3m1!4b1!4m6!3m5!1s0x29eaed1abae23dcf:0x6af3bf20c5f391b4!8m2!3d-14.4095262!4d-51.3168626!16s%2Fg%2F11yx775pzt"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '14px 20px',
                boxShadow: '0 2px 14px rgba(10,9,77,.07)',
              }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond',Georgia,serif",
                  fontSize: '34px',
                  fontWeight: 600,
                  color: '#0A0951',
                }}
              >
                5,0
              </span>
              <span
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  fontSize: '14px',
                  lineHeight: 1.3,
                }}
              >
                <span style={{ fontWeight: 700 }}>Avaliações no Google</span>
                <span style={{ color: '#4A4C80' }}>
                  23 avaliações ·{' '}
                  <span
                    style={{
                      fontWeight: 700,
                      color: '#B8862E',
                      background:
                        'linear-gradient(90deg,#A8884A 0%,#C79427 50%,#A8884A 100%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    ver no Google Maps
                  </span>
                </span>
              </span>
            </a>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '24px',
            }}
          >
            <figure
              style={{
                flex: '1 1 320px',
                minWidth: 0,
                maxWidth: 'calc((100% - 48px) / 3)',
                margin: 0,
                background: '#FFFFFF',
                borderRadius: '18px',
                padding: '14px 12px',
                boxSizing: 'border-box',
                boxShadow: '0 4px 18px rgba(10,9,81,.10)',
              }}
            >
              <img
                src="/assets/aistudio/959fb1e1d2cd97de9161107039f4c983_fd5c0a8d.png"
                alt="Avaliação de 5 estrelas de Janeide Monteiro no Google: Apesar de nova no mercado, essa agência mostrou que tem potencial. Busca sempre o melhor para o grupo. Quem nunca viajou, recomendo @realizze Travel. Viagem pra Ouro Preto, Minas Gerais."
                width={386}
                height={181}
                style={{ display: 'block', width: '100%', height: 'auto' }}
              />
            </figure>
            <figure
              style={{
                flex: '1 1 320px',
                minWidth: 0,
                maxWidth: 'calc((100% - 48px) / 3)',
                margin: 0,
                background: '#FFFFFF',
                borderRadius: '18px',
                padding: '14px 12px',
                boxSizing: 'border-box',
                boxShadow: '0 4px 18px rgba(10,9,81,.10)',
              }}
            >
              <img
                src="/assets/aistudio/efbf68b245f2936d655c74bc4194b55a_2760f4c2.png"
                alt="Avaliação de 5 estrelas de Ivone Alcoforado no Google: Foi uma viagem maravilhosa a Ouro Preto, MG. Um lugar que respira História. Um retorno ao passado, que nos leva à sensação de que o tempo não passou. Com uma excelente assistência através da agência @Realizzetravel."
                width={399}
                height={208}
                style={{ display: 'block', width: '100%', height: 'auto' }}
              />
            </figure>
            <figure
              style={{
                flex: '1 1 320px',
                minWidth: 0,
                maxWidth: 'calc((100% - 48px) / 3)',
                margin: 0,
                background: '#FFFFFF',
                borderRadius: '18px',
                padding: '14px 12px',
                boxSizing: 'border-box',
                boxShadow: '0 4px 18px rgba(10,9,81,.10)',
              }}
            >
              <img
                src="/assets/aistudio/742c5f245476c524e2f961dc1dcfb638_be98cd3e.png"
                alt="Avaliação de 5 estrelas de Gisele Soares no Google: Agência top, as pessoas super prestativas. Agência de confiança, podem comprar sem medo e eles lhe dão todo suporte durante sua viagem."
                width={392}
                height={150}
                style={{ display: 'block', width: '100%', height: 'auto' }}
              />
            </figure>
            <figure
              style={{
                flex: '1 1 320px',
                minWidth: 0,
                maxWidth: 'calc((100% - 48px) / 3)',
                margin: 0,
                background: '#FFFFFF',
                borderRadius: '18px',
                padding: '14px 12px',
                boxSizing: 'border-box',
                boxShadow: '0 4px 18px rgba(10,9,81,.10)',
              }}
            >
              <img
                src="/assets/aistudio/image_7dd0d21d.png"
                alt="Avaliação de 5 estrelas de Beatriz Souza no Google: Só tenho a agradecer à Realizze por ter organizado tudo exatamente do jeitinho que era possível para mim. A empresa é excepcional! Amei toda a experiência, desde a contratação até o final da viagem. Tive toda a atenção e o suporte necessários no pré-viagem, durante e até mesmo no pós-viagem. Isso fez toda a diferença! Muito obrigada por todo o cuidado, carinho e dedicação. Foi uma experiência incrível!"
                style={{ display: 'block', width: '100%', height: 'auto' }}
              />
            </figure>
            <figure
              style={{
                flex: '1 1 320px',
                minWidth: 0,
                maxWidth: 'calc((100% - 48px) / 3)',
                margin: 0,
                background: '#FFFFFF',
                borderRadius: '18px',
                padding: '14px 12px',
                boxSizing: 'border-box',
                boxShadow: '0 4px 18px rgba(10,9,81,.10)',
              }}
            >
              <img
                src="/assets/aistudio/1feed4e2d9f25dfeb9421ca7241a10fa_246babba.png"
                alt="Avaliação de 5 estrelas de Família França no Google: São bastante atenciosos, e com as melhores orientações e opções para viagens. Ficamos impressionados com tanto cuidado conosco. Agradecemos de coração!"
                width={397}
                height={188}
                style={{ display: 'block', width: '100%', height: 'auto' }}
              />
            </figure>
          </div>
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section style={{ padding: '80px 0', background: '#0A0951', color: '#FFFFFF' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '48px',
          }}
        >
          <div
            style={{
              maxWidth: '640px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            <span
              style={{
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontFamily: "'Montserrat',sans-serif",
                color: '#E3C78A',
              }}
            >
              Como funciona
            </span>
            <h2
              style={{
                margin: 0,
                fontFamily: "'Cormorant Garamond',Georgia,serif",
                fontWeight: 600,
                fontSize: 'clamp(36px,4.2vw,52px)',
                lineHeight: 1.15,
                color: '#FFFFFF',
              }}
            >
              Três passos para você só se preocupar em embarcar.
            </h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
            <div
              style={{
                flex: '1 1 280px',
                minWidth: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                paddingTop: '20px',
                borderTop: '2px solid #E3C78A',
              }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond',Georgia,serif",
                  fontSize: '40px',
                  fontWeight: 600,
                  color: '#E3C78A',
                }}
              >
                01
              </span>
              <h3 style={{ margin: 0, fontSize: '21px', color: '#FFFFFF' }}>
                Entendemos o seu perfil
              </h3>
              <p style={{ margin: 0, color: '#E6E6F5' }}>
                Uma conversa rápida no WhatsApp para saber seus sonhos, datas, quem vai com você e o
                que não pode faltar.
              </p>
            </div>
            <div
              style={{
                flex: '1 1 280px',
                minWidth: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                paddingTop: '20px',
                borderTop: '2px solid #E3C78A',
              }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond',Georgia,serif",
                  fontSize: '40px',
                  fontWeight: 600,
                  color: '#E3C78A',
                }}
              >
                02
              </span>
              <h3 style={{ margin: 0, fontSize: '21px', color: '#FFFFFF' }}>
                Criamos o roteiro personalizado
              </h3>
              <p style={{ margin: 0, color: '#E6E6F5' }}>
                Você recebe uma proposta detalhada, com opções de hospedagem, voos e passeios, e
                ajustamos até ficar do seu jeito.
              </p>
            </div>
            <div
              style={{
                flex: '1 1 280px',
                minWidth: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                paddingTop: '20px',
                borderTop: '2px solid #E3C78A',
              }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond',Georgia,serif",
                  fontSize: '40px',
                  fontWeight: 600,
                  color: '#E3C78A',
                }}
              >
                03
              </span>
              <h3 style={{ margin: 0, fontSize: '21px', color: '#FFFFFF' }}>
                Emissão e suporte completo
              </h3>
              <p style={{ margin: 0, color: '#E6E6F5' }}>
                Cuidamos de reservas e documentação, e seguimos com você antes e durante a viagem, a
                uma mensagem de distância.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA FINAL */}
      <section style={{ padding: '88px 0', background: goldGradient }}>
        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '24px',
          }}
        >
          <h2
            style={{
              margin: 0,
              fontFamily: "'Cormorant Garamond',Georgia,serif",
              fontWeight: 600,
              fontSize: 'clamp(38px,5vw,60px)',
              lineHeight: 1.12,
              color: '#0A0951',
            }}
          >
            Pronto para viver a sua próxima grande viagem?
          </h2>
          <p style={{ margin: 0, fontSize: '19px', color: '#0A0951', maxWidth: '620px' }}>
            Conte para um consultor Realizze o que você sonha e receba um orçamento gratuito, sob
            medida, sem compromisso.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#FFFFFF',
              color: '#0A0951',
              boxShadow: '0 6px 20px rgba(10,9,81,.25)',
              padding: '20px 40px',
              borderRadius: '999px',
              fontFamily: "'Montserrat',sans-serif",
              fontWeight: 700,
              fontSize: '18px',
            }}
          >
            Pedir orçamento gratuito no WhatsApp
          </a>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer id="contato" style={{ background: '#000D2D', color: '#E6E6F5' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '56px 24px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
            <div
              style={{
                flex: '1 1 280px',
                minWidth: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <img
                src="/assets/aistudio/288a58b16cb01e3f5bcfd37322bd0521_cf313eb6.png"
                alt="Realizze Travel"
                width={520}
                height={522}
                style={{ width: '140px', height: 'auto', display: 'block' }}
              />
              <p
                style={{
                  margin: 0,
                  fontFamily: "'Allura',cursive",
                  fontSize: '34px',
                  lineHeight: 1.1,
                  color: '#E3C78A',
                }}
              >
                Você sonha, a gente realiza!
              </p>
            </div>
            <div
              style={{
                flex: '1 1 220px',
                minWidth: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                fontSize: '15px',
              }}
            >
              <span style={{ fontWeight: 700, color: '#FFFFFF' }}>Contato</span>
              <span>WhatsApp: (81) 99535-7254</span>
              <span>E-mail: realizzetravel@gmail.com</span>
            </div>
            <div
              style={{
                flex: '1 1 220px',
                minWidth: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                fontSize: '15px',
              }}
            >
              <span style={{ fontWeight: 700, color: '#FFFFFF' }}>Redes</span>
              <a
                href="https://www.instagram.com/realizzetravel/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#E3C78A', fontWeight: 600 }}
              >
                Instagram @realizzetravel
              </a>
              <a
                href="https://www.google.com/maps/place/Realizze+Travel/@-9.6711986,-99.7672807,3z/data=!3m1!4b1!4m6!3m5!1s0x29eaed1abae23dcf:0x6af3bf20c5f391b4!8m2!3d-14.4095262!4d-51.3168626!16s%2Fg%2F11yx775pzt"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#E3C78A', fontWeight: 600 }}
              >
                Avaliações no Google Maps
              </a>
            </div>
            <div
              style={{
                flex: '1 1 220px',
                minWidth: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                fontSize: '15px',
              }}
            >
              <span style={{ fontWeight: 700, color: '#FFFFFF' }}>Segurança</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E3C78A"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6z" />
                  <path d="M8.5 12l2.5 2.5 4.5-5" />
                </svg>
                Agência credenciada
              </span>
              <span>CADASTUR: 63.652.360/0001-98</span>
            </div>
          </div>
          <div
            style={{
              paddingTop: '24px',
              borderTop: '1px solid rgba(255,255,255,.15)',
              fontSize: '13px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              gap: '12px',
            }}
          >
            <span>© 2026 Realizze Travel. Todos os direitos reservados.</span>
            <span>Política de privacidade</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
