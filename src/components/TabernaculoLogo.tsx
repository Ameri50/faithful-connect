export function TabernaculoLogo() {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        {/* Fondo circular */}
        <circle cx="24" cy="24" r="22" fill="currentColor" opacity="0.1" />
        
        {/* Símbolo de tabernáculo/iglesia */}
        <g fill="currentColor">
          {/* Techo principal (triángulo) */}
          <path d="M24 6 L36 18 L12 18 Z" />
          
          {/* Estructura principal */}
          <rect x="16" y="18" width="16" height="18" rx="2" />
          
          {/* Puerta */}
          <rect x="20" y="24" width="8" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
          
          {/* Luz/brillo en la cúpula */}
          <circle cx="24" cy="10" r="2" fill="currentColor" opacity="0.6" />
        </g>
      </svg>
    );
  }