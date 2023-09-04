import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Alex!</h3>

      <img
        src="https://github.com/alxmath.png"
        alt="Foto do Alex"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou aluno de Front-end na Alura e estou feliz de te ver
        por aqui.
      </p>

      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat
        pulvinar libero. Sed et diam pulvinar tellus cursus blandit interdum id
        eros. Donec sit amet elementum tortor. Sed tortor purus, egestas id
        tempor et, venenatis sed velit. Donec tempus libero urna, sit amet
        sollicitudin nisl efficitur vel. Vivamus aliquam id augue eu sodales. In
        nec mi sodales, semper est eleifend, scelerisque est.
      </p>

      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat
        pulvinar libero. Sed et diam pulvinar tellus cursus blandit interdum id
        eros. Donec sit amet elementum tortor. Sed tortor purus, egestas id
        tempor et, venenatis sed velit. Donec tempus libero urna, sit amet
        sollicitudin nisl efficitur vel. Vivamus aliquam id augue eu sodales. In
        nec mi sodales, semper est eleifend, scelerisque est.
      </p>

      <p className={styles.paragrafo}>
        Fusce et sapien at ligula volutpat tincidunt non a velit. Duis non
        turpis vitae dui vehicula pretium eu sed massa. Vestibulum vitae justo
        massa. Donec ut dapibus libero. Phasellus lectus neque, pellentesque
        eget sapien vitae, eleifend aliquam ante. Mauris semper arcu eu pretium
        accumsan. Donec a pharetra leo. Pellentesque ut rhoncus dolor, quis
        tempus orci. Nunc eleifend nisi nec nibh dignissim, vitae volutpat ex
        imperdiet. Vestibulum porta nisi a lacus porttitor, id auctor lacus
        vehicula.
      </p>

      <p className={styles.paragrafo}>
        Quisque massa arcu, pulvinar eget nisi lobortis, faucibus accumsan nisl.
        Vestibulum non urna ut dui malesuada iaculis. Cras sollicitudin magna
        eget mollis egestas. Integer iaculis viverra leo, at vulputate dolor
        ornare et. Mauris volutpat, quam eget fringilla ornare, est odio
        pulvinar dui, eu posuere odio metus ac tortor. Curabitur vitae egestas
        mauris, vitae dignissim ligula. In pulvinar magna iaculis tellus finibus
        sagittis.
      </p>

      <p className={styles.paragrafo}>
        Nullam laoreet bibendum orci, ac porta sapien rutrum vitae. Nullam
        molestie iaculis sem venenatis pulvinar. Nulla eget ornare elit. Sed sit
        amet pulvinar risus, a pretium urna. Etiam nunc libero, faucibus sed
        justo eu, sodales mattis lacus. Sed mollis massa vitae velit hendrerit,
        quis euismod nisl pellentesque. Curabitur tincidunt, eros vel pretium
        sollicitudin, turpis justo dignissim sem, eget dignissim felis purus
        quis dui. Duis tincidunt suscipit sapien eu ullamcorper. Quisque
        lobortis lorem et ipsum fermentum, non tincidunt nisi gravida.
      </p>
    </PostModelo>
  );
}
