
import * as  icons  from 'lucide-react';

interface IconProps {
    icon: string;   
    size?: number;
    style?: React.CSSProperties; // Permite passar estilos inline
    className?: string; // Permite passar classes CSS
}

export const Icon = ({ icon, size = 24, style, className }: IconProps) => {
  // Verifica se o ícone solicitado existe na biblioteca
  const IconComponent = (icons as any)[icon];

  // Se o ícone não existir, exibe uma mensagem ou um ícone padrão
  if (!IconComponent) {
    console.error(`Ícone "${icon}" não encontrado.`);
    return <div>Ícone não encontrado</div>;
  }

  return <IconComponent size={size} className={className} style={style}  />;
};
