function loadCSS(href) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}

function loadJS(src) {
  const script = document.createElement("script");
  script.type = "module";
  script.src = src;
  document.body.appendChild(script);
}

function createChatDiv() {
  // Verifica se o body está completamente carregado
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      const chatDiv = document.createElement("div");
      chatDiv.id = "704chat";
      document.body.appendChild(chatDiv);
    });
  } else {
    // Caso o DOM já esteja carregado
    const chatDiv = document.createElement("div");
    chatDiv.id = "704chat";
    document.body.appendChild(chatDiv);
  }
}

createChatDiv();

const projectUrl = "https://api.newchat.fb704.com.br";

const cssURL = `${projectUrl}/static/chat-bubble/index.css`;
const jsURL = `${projectUrl}/static/chat-bubble/index.js`;

loadCSS(cssURL);
loadJS(jsURL);
