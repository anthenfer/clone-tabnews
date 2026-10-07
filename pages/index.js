function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px 20px",
        boxSizing: "border-box",
        backgroundColor: "#faf7f2",
        fontFamily: "Georgia, serif",
        color: "#54463f",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "580px",
          padding: "40px 24px",
          boxSizing: "border-box",
          textAlign: "center",
          backgroundColor: "#ffffff",
          borderRadius: "24px",
          boxShadow: "0 12px 40px rgba(84, 70, 63, 0.08)",
        }}
      >
        <h1
          style={{
            margin: "0 0 24px",
            fontSize: "28px",
            fontWeight: "normal",
            lineHeight: 1.3,
          }}
        >
          Projeto em andamento 🤍
        </h1>

        <p style={{ margin: "0 0 20px", fontSize: "18px", lineHeight: 1.8 }}>
          Uma linda homenagem nascerá aqui.
          <br />
          E, com o tempo, não apenas a minha, mas também a de tantas
          outras pessoas.
        </p>

        <p
          style={{
            margin: "0 0 32px",
            fontSize: "17px",
            lineHeight: 1.8,
            fontStyle: "italic",
            color: "#897269",
          }}
        >
          É o meu amor tomando forma.
          <br />
          Talvez essa seja a palavra. s2
        </p>

        <small
          style={{
            display: "block",
            paddingTop: "20px",
            borderTop: "1px solid #eee6df",
            fontFamily: "Arial, sans-serif",
            fontSize: "12px",
            color: "#94877f",
          }}
        >
          Ícone por{" "}
          <a
            href="https://www.flaticon.com/br/icones-gratis/cachorro"
            title="cachorro ícones"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#897269",
              textUnderlineOffset: "3px",
            }}
          >
            Jongrak
          </a>
        </small>
      </div>
    </main>
  );
}

export default Home;