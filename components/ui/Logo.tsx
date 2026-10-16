/**
 * Logo da Aval Veículos (marca fictícia): uma estrada em perspectiva desenhada em linha,
 * com as duas margens convergindo para o horizonte (formando um "A") e a faixa central tracejada.
 * Em fundo escuro, usa a versão negativa (verde claro e textos claros).
 */

/** Geometria da marca no viewBox (-1 -0.5 50 39). Também usada no hero e nos ícones. */
export const MARCA = {
  viewBox: "-1 -0.5 50 39",
  /** Margens da estrada, do primeiro plano até o horizonte */
  margens: "M2 36L20.5 2M46 36L27.5 2",
  /** Faixa central: os traços encurtam com a distância */
  faixa: "M24 35.5V29M24 24.5V19.5M24 15.5V12M24 8.5V6.5",
  traco: 3.2,
  tracoFaixa: 2.6,
};

export function BrandMark({ className = "", cor = "#2D6A53" }: { className?: string; cor?: string }) {
  return (
    <svg viewBox={MARCA.viewBox} className={className} aria-hidden="true" focusable="false">
      <g fill="none" stroke={cor} strokeLinejoin="round" strokeLinecap="round">
        <path d={MARCA.margens} strokeWidth={MARCA.traco} />
        <path d={MARCA.faixa} strokeWidth={MARCA.tracoFaixa} />
      </g>
    </svg>
  );
}

type LogoProps = {
  /** "claro" = sobre fundo escuro (versão negativa); "escuro" = cores originais sobre fundo claro */
  tom?: "claro" | "escuro";
  /** "horizontal" para o header; "empilhada" com a marca em cima do nome */
  variante?: "horizontal" | "empilhada";
  className?: string;
};

export function Logo({ tom = "claro", variante = "horizontal", className = "" }: LogoProps) {
  const negativa = tom === "claro";
  const corMarca = negativa ? "#53B590" : "#2D6A53";
  const nome = negativa ? "text-[#E9ECEE]" : "text-[#6C6D6E]";
  const sub = negativa ? "text-[#A9B1B8]" : "text-[#7A7A7A]";
  const animacao = "transition-transform duration-500 ease-[var(--ease-spring)] group-hover:-rotate-6 group-hover:scale-110";

  if (variante === "empilhada") {
    return (
      <span className={`inline-flex flex-col items-center ${className}`}>
        <BrandMark cor={corMarca} className={`h-11 w-auto ${animacao}`} />
        <span className={`mt-2.5 font-display text-[1.375rem] font-bold leading-none tracking-[0.08em] ${nome}`}>AVAL</span>
        <span className={`mt-1.5 font-display text-[0.75rem] font-semibold leading-none tracking-[0.34em] ${sub}`}>VEÍCULOS</span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <BrandMark cor={corMarca} className={`h-8 w-auto shrink-0 ${animacao}`} />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.125rem] font-bold tracking-[0.08em] ${nome}`}>AVAL</span>
        <span className={`mt-1 font-display text-[0.625rem] font-semibold tracking-[0.36em] ${sub}`}>VEÍCULOS</span>
      </span>
    </span>
  );
}
