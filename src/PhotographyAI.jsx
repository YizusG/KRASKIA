import React from 'react';
import { Camera, Layers3, Zap, ArrowRight, ArrowLeft, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';
import './photography.css';

// Archivos aprobados: se incorporarán en public/images/fotografia-ia/
// antes de publicar esta página. Nunca reemplazar imágenes del sitio original.
// Hostinger entrega el sitio desde public_html/index.php, pero los archivos
// de la rama production se encuentran en public_html/kraskia/images.
const base='/kraskia/images/fotografia-ia/';
const photos={
 hero:'hero.webp', original:'antes.webp', enhanced:'despues.webp',
 coffee:'aplicacion-cafe.webp', cosmetics:'aplicacion-cosmetica.webp',
 crafts:'aplicacion-artesanal.webp', gallery1:'galeria-perfume.webp',
 gallery2:'galeria-granos.webp', gallery3:'galeria-crema.webp'
};
function Photo({name,alt,className='',fallback}) {
 const file=photos[name];
 const candidates=[
   base+file,
   '/images/fotografia-ia/'+file,
   './images/fotografia-ia/'+file,
   ...(fallback ? ['/kraskia'+fallback.replace(/^\./,'').replace(/^\/kraskia/,''),
                     fallback] : [])
 ];
 const handleError=event=>{
   const img=event.currentTarget;
   const next=(Number(img.dataset.attempt)||0)+1;
   if(next<candidates.length){img.dataset.attempt=String(next);img.src=candidates[next];}
 };
 return <img className={className} src={candidates[0]} alt={alt} loading={name==='hero'?'eager':'lazy'} decoding="async" onError={handleError}/>;
}
const benefits=[
 {icon:Camera,title:'Imágenes que venden',text:'Fotografías de alto impacto para destacar las cualidades de tus productos.'},
 {icon:Zap,title:'Más versatilidad',text:'Nuevos escenarios, estilos y ambientes sin una sesión fotográfica costosa.'},
 {icon:Layers3,title:'Identidad de marca',text:'Imágenes coherentes con el estilo y la personalidad de tu negocio.'}
];
const applications=[
 {image:'coffee',title:'Café',text:'Fotografías que transmiten origen, aroma y calidad.',alt:'Composición cinematográfica con café'},
 {image:'cosmetics',title:'Cosmética',text:'Imágenes que destacan texturas, ingredientes y presentación.',alt:'Frasco cosmético entre hojas verdes'},
 {image:'crafts',title:'Marcas artesanales',text:'Fotografía que resalta el carácter de productos hechos con dedicación.',alt:'Producto artesanal presentado con luz cálida'}
];
function Logo(){return <a className="photo-brand" href="/#inicio" aria-label="KRASKIA · Volver al inicio"><span className="photo-brand-symbol" aria-hidden="true"><i/><i/><i/><i/></span><span>KRASKIA<small>CREATIVE STUDIO</small></span></a>}
function PhotoPage(){
 return <div className="photo-page">
  <header className="photo-nav"><Logo/><nav aria-label="Navegación de fotografía con IA"><a href="/#inicio">Inicio</a><a href="/#servicios" aria-current="page">Servicios</a><a href="/#portafolio">Portafolio</a><a href="/#contacto">Contacto</a></nav><a className="photo-back" href="/#servicios"><ArrowLeft size={15}/> Volver a servicios</a></header>
  <main>
   <section className="photo-hero">
    <Photo name="hero" className="photo-hero-image" alt="Empaque de café negro y naranja acompañado de una taza y granos de café, iluminación cinematográfica y hojas verdes" fallback="./images/hero.webp"/>
    <div className="photo-hero-shade"/>
    <div className="photo-wrap photo-hero-content"><p className="photo-kicker"><span/> SERVICIO CREATIVO / 01</p><h1>Fotografía <em>con IA</em></h1><p>Transforma las fotografías de tus productos en imágenes comerciales potentes, atractivas y listas para destacar.</p><a className="photo-text-link" href="#transformacion">Descubre las posibilidades <ArrowRight size={17}/></a></div>
   </section>
   <section className="photo-block photo-benefits photo-wrap" aria-labelledby="photo-benefits-title"><h2 id="photo-benefits-title">Qué puedes <em>lograr</em></h2><div className="photo-benefit-grid">{benefits.map(({icon:Icon,title,text})=><article key={title} className="photo-benefit-card"><Icon aria-hidden="true" size={27}/><h3>{title}</h3><p>{text}</p></article>)}</div></section>
   <section className="photo-block photo-comparison photo-wrap" id="transformacion" aria-labelledby="photo-before-title"><div className="photo-section-copy"><h2 id="photo-before-title">Antes y <em>después</em></h2><span className="photo-rule"/><p>Una imagen de producto puede convertirse en una composición publicitaria con dirección de arte y atmósfera propia.</p><small>Ejemplo conceptual: no representa una transformación real documentada de la misma marca.</small></div><div className="photo-before-after"><figure><Photo name="original" alt="Bolsa de café genérica sobre fondo gris, fotografía de estudio sencilla" fallback="./images/producto.webp"/><figcaption>ANTES</figcaption></figure><span className="photo-compare-arrow" aria-hidden="true"><ArrowRight size={22}/></span><figure><Photo name="enhanced" alt="Bolsa creativa de café negro y naranja en entorno cinematográfico" fallback="./images/hero.webp"/><figcaption>DESPUÉS</figcaption></figure></div></section>
   <section className="photo-block photo-wrap photo-applications" aria-labelledby="photo-applications-title"><div className="photo-section-copy"><h2 id="photo-applications-title">Aplicaciones</h2><span className="photo-rule"/><p>Soluciones visuales para distintas clases de productos y negocios.</p></div><div className="photo-app-grid">{applications.map(x=><article key={x.title} className="photo-image-card"><Photo name={x.image} alt={x.alt} fallback="./images/producto-emerald.webp"/><div><h3>{x.title}</h3><p>{x.text}</p></div></article>)}</div></section>
   <section className="photo-block photo-wrap photo-gallery" aria-labelledby="photo-gallery-title"><div className="photo-section-copy"><h2 id="photo-gallery-title">Galería de <em>inspiración</em></h2><span className="photo-rule"/><p>Posibilidades de fotografía publicitaria para productos reales.</p></div><div className="photo-gallery-grid"><Photo name="gallery1" alt="Composición publicitaria de producto con iluminación creativa" fallback="./images/producto-emerald.webp"/><Photo name="gallery2" alt="Granos de café tostado fotografiados con luz cálida" fallback="./images/cafe-reels.avif"/><Photo name="gallery3" alt="Composición visual de identidad de marca" fallback="./images/branding.webp"/></div></section>
   <section className="photo-cta"><div className="photo-wrap photo-cta-content"><div><p className="photo-kicker">KRASKIA CREATIVE STUDIO</p><h2>Lleva tus productos al siguiente nivel <em>con Fotografía con IA</em></h2></div><a className="photo-cta-button" href="/#contacto">Solicita tu proyecto <ArrowUpRight size={20}/></a></div></section>
  </main>
  <footer className="photo-footer photo-wrap"><Logo/><span>Ideas que encienden marcas.</span><a href="/#servicios">Volver a servicios ↑</a></footer>
 </div>;
}
export default PhotoPage;
