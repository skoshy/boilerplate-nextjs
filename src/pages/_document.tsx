import React from "react";
import Document from "next/document";
import { ServerStyleSheet } from "styled-components";
import { renderToString } from "react-dom/server";

export default class MyDocument extends Document {
  public static async getInitialProps(ctx): Promise<any> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      let css;
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => {
            const styledComponentsData = sheet.collectStyles(
              <App {...props} />
            );
            css = renderToString(styledComponentsData);

            return styledComponentsData;
          }
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <React.Fragment>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </React.Fragment>
        )
      };
    } finally {
      sheet.seal();
    }
  }
}
