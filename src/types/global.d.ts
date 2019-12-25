declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.sass" {
  const content: { [className: string]: string };
  export default content;
}

/// <reference types="styled-components/cssprop" />
// Add support for css prop
declare namespace React {
  interface DOMAttributes<T> {
    css?: CSSProp;
  }
}
