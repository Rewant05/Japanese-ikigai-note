import type { CSSProperties } from "react";

type HandwritingLineProps = {
  text: string;
  delay?: number;
};

export function HandwritingLine({ text, delay = 0 }: HandwritingLineProps) {
  return (
    <span className="handwriting-line" style={{ "--line-delay": `${delay}s` } as CSSProperties}>
      <span className="handwriting-line__text" aria-label={text}>
        {Array.from(text).map((char, index) => (
          <span className="handwriting-char" aria-hidden="true" key={`${char}-${index}`}>
            {char}
          </span>
        ))}
      </span>
      <svg className="handwriting-line__stroke" viewBox="0 0 360 18" aria-hidden="true" focusable="false">
        <path d="M4 11 C 76 5, 118 17, 184 10 S 301 6, 356 12" />
      </svg>
    </span>
  );
}
