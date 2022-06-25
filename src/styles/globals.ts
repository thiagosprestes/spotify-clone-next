import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        height: 100%;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }

    button {
        border: 0;
        margin: 0;
        padding: 0;
    }

    #__next {
    height: 100%;
    }

    :root {
        --background-base: #121212;
        --home-list-item-background: #181818;
        --home-list-item-background-hover: #282828;
        --background-highlight: #1a1a1a;
        --background-press: #000;
        --background-elevated-base: #242424;
        --background-elevated-highlight: #2a2a2a;
        --background-tinted-base: hsla(0,0%,100%,.07);
        --background-tinted-highlight: hsla(0,0%,100%,.1);
        --background-tinted-press: hsla(0,0%,100%,.04);
        --text-base: #fff;
        --text-subdued: #a7a7a7;
        --text-negative: #f15e6c;
        --text-warning: #ffa42b;
        --text-positive: #1ed760;
        --text-announcement: #3d91f4;
        --essential-subdued: #727272;
        --essential-negative: #e91429;
        --essential-warning: #ffa42b;
        --essential-announcement: #0d72ea;
        --decorative-subdued: #292929;
        --last-played-item: #2A2A2A;

        --default-menu-icon-size: 28;
        --default-transition: all 0.3s;
    }
`;

export { GlobalStyles };
