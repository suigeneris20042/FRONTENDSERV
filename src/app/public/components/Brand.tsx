// src/components/Brand.tsx

export default function Brand() {
    return (
      <div className="flex items-center space-x-2">
        {/* Logo */}
        <img
          src="/unsaac_logo.png"  // Coloca la ruta de tu logo aquí
          alt="LOGO UNSAAC"
          className="h-20"  // Altura de la imagen
        />
        
        {/* Texto del logo */}
        <div className="flex flex-col items-left text-white text-lg font-bold">
  {/* Primera parte del texto */}
  <span className="text-sm md:text-lg lg:text-xl">
    DIRECCION GENERAL DE ADMINISTRACION
  </span>
  
  {/* Segunda parte del texto */}
  <span className="text-sm md:text-lg lg:text-xl">
    UNSAAC
  </span>
</div>

      </div>
    );
  }
  