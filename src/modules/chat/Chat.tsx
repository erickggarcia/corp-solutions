import styles from "./Chat.module.css";
export const Chat = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSideContent}>
        <div className={styles.logo}>
          <img src="logo_preto.png" alt="Logo Corp Solutions" />
        </div>

        <div className={styles.leftHeading}>
          <h1>Uma Oportunidade para crescer juntos</h1>
        </div>
        <div className={styles.leftParagraph}>
          <p>
            Nós valorizamos sua opinião e queremos ouvi-la! <br />
            Caso seja crítica, nos ajude e sugira também uma solução. Juntos,
            podemos transformar desafios em oportunidades e fortalecer nossa
            equipe.
          </p>
        </div>
      </div>

      <div className={styles.rightSide}>
        <form action="">
          <input
            type="text"
            placeholder="Escreva um título"
            className={styles.formTitle}
          />
          <textarea
            placeholder="Deixe aqui sua mensagem"
            className={styles.formText}
          ></textarea>
          <div className={styles.submitButtonContainer}>
            <input
              type="submit"
              value="Enviar mensagem"
              className={styles.formSend}
            />
          </div>
          <br />
          <button
            type="button"
            onClick={() => (window.location.href = "/")}
            className={styles.formCancel}
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};
