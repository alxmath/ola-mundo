import React from "react";
import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá, Mundo!</h1>
        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou Alex Santo Pinto, estudande
          de Front-end da Alura. Aqui compartilho vários conhecimentos, espero
          que aprenda algo novo <span>😀</span>
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
        />

        <img
          className={styles.minhaFoto}
          src="https://github.com/alxmath.png"
          alt="Foto do Alex Santos Pinto"
        />
      </div>
    </div>
  );
}
