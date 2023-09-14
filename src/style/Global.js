import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

:root {
  --background-color: #4e01b3;
  --point-color: #40c89a;
  --text-color: #fff;
  --text-color-purple: #b174ff;
  --font-size-root: 16px;
  --font-size-md: 1rem;
  --font-size-big: 2.5rem;
  --font-size-sm: 0.75rem;
  --wrapper-padding: 1.25rem;
  --vh: 100%;
  --input-checked-bg-color: #f3fff3;
  --input-checked-border-color: #40c89a;
}
@media screen and (max-width: 300px) {
  :root {
    --font-size-root: 12px;
  }
}
@media screen and (min-width: 800px) {
  :root {
    --font-size-root: 18px;
  }
}
@media screen and (min-width: 1000px) {
  :root {
    --font-size-root: 22px;
  }
}
*{
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

html {
  font-size: var(--font-size-root);
  background: var(--background-color);
}

body {
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
nav {
  height: 44px;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  width: 100%;
}
button {
  cursor: pointer;
}
label:active{
  transform:scale(0.98);
}
`;

export default GlobalStyle;
