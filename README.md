# Projeto Kusanagi — site

Página estática de apresentação e diário de produção da tradução independente de *The King of Fighters: Kyo* para PT-BR, por Dulagwagon.

## Publicar na Vercel

Repositório: https://github.com/Dulagwagon/projeto-kusanagi

Coloque os arquivos na raiz do repositório e importe o repositório na Vercel. Framework Preset: **Other**. Não há comando de build nem variáveis de ambiente. O site usa fontes hospedadas pelo Google Fonts, com fontes locais de reserva.

## Diário

A página `diario.html` contém as entradas em ordem cronológica, da mais antiga para a mais recente. Para acrescentar uma entrada, duplique um `<article class="journal-entry">` dentro de `.journal-list`, use um `id` único, ajuste a data (`datetime` em AAAA-MM-DD), o título e o texto. O `index.html` contém apenas uma chamada para o diário.

### Vídeos do YouTube

A entrada do primeiro texto em português já tem um espaço opcional para vídeo:

```html
<div class="journal-media" data-youtube-id="" data-video-title="Primeiro texto em português no jogo"></div>
```

Depois de publicar o vídeo no YouTube, copie somente o ID de 11 caracteres do endereço para `data-youtube-id`. Por exemplo, num endereço `youtube.com/watch?v=ABCDEFGHIJK`, use `data-youtube-id="ABCDEFGHIJK"`. O `journal.js` cria um player incorporado, com carregamento tardio, usando `youtube-nocookie.com`. Sem ID válido, o espaço não aparece. Duplique a mesma linha em qualquer entrada para adicionar outros vídeos.

As quatro capturas ficam na raiz do repositório. A captura em espanhol é creditada a Iroquois na galeria e no rodapé; não a apresente como imagem do patch PT-BR.
