# Sara Nossa Terra Cajamar — Site

Site oficial da Igreja Sara Nossa Terra Cajamar (Portal dos Ipês & Jordanésia).
HTML, CSS e JavaScript puros: não precisa instalar nada.

## Arquivos

| Arquivo      | O que é                                                        |
|--------------|----------------------------------------------------------------|
| `index.html` | Estrutura e textos fixos do site                               |
| `style.css`  | Visual e animações                                             |
| `script.js`  | **Conteúdo editável** (células, eventos, líderes, WhatsApp…)   |
| `img/`       | Coloque aqui as fotos                                          |

## Como atualizar o conteúdo

Abra `script.js`. No topo estão:

- `CONFIG`: número do WhatsApp (só números, ex.: `5511987654321`), Instagram, YouTube e Facebook.
- `CELULAS`: células por bairro, com dia, horário e frequência.
- `EVENTOS`: próximos eventos.
- `LIDERES`, `MINISTERIOS`, `GALERIA`, `FAQ`, `LOCAIS`.

Para usar uma foto, envie o arquivo para a pasta `img/` e preencha o campo `foto`.
Exemplo: `foto: "img/louvor.jpg"`.

As fotos da fachada e dos pastores ficam no `index.html`. Procure os comentários `<!-- Troque por: ... -->` e siga o exemplo.

## Publicar no GitHub Pages (grátis)

1. No GitHub, abra o repositório e vá em **Settings → Pages**.
2. Em **Source**, escolha **Deploy from a branch**.
3. Selecione a branch `main` e a pasta `/ (root)`, depois clique em **Save**.
4. Em cerca de 1 minuto o site estará em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

Para usar um domínio próprio (ex.: `saracajamar.com.br`), configure-o em **Settings → Pages → Custom domain**.
