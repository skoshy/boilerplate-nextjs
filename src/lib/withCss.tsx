import styled, {
  css,

  /* eslint-disable import/named */
  ThemedStyledProps,
  FlattenInterpolation,
  Interpolation,
  CSSObject,
  InterpolationFunction
  /* eslint-enable import/named */
} from "styled-components";
import { FunctionComponent } from "react";
import { Assign } from "utility-types";

interface DefaultWithCssProps {
  children?: any;
  className?: string;
}

// modified from BaseThemedCssFunction interface in styled-components
interface BaseThemedCssFunc<P, T = {}> {
  (
    first:
      | TemplateStringsArray
      | CSSObject
      | InterpolationFunction<ThemedStyledProps<P, T>>,
    ...interpolations: Array<Interpolation<ThemedStyledProps<P, T>>>
  ): FlattenInterpolation<ThemedStyledProps<P, T>>;
}

/**
 * Higher order func that allows you to specify props for both
 * a component and CSS-in-JS styles at the same time
 *
 * @param ComponentToWrap the component to pass in
 * @param cssFunc Function that returns a css tagged template helper to let you pass in CSS. Ex: `` css => css`& { font-weight: bold; }`;``
 */
export const withCss = <
  PropsType extends {} = { [key: string]: any },
  ThemeType extends {} = {}
>(
  ComponentToWrap: FunctionComponent<Assign<PropsType, DefaultWithCssProps>>,
  cssFunc: (
    cssProp: BaseThemedCssFunc<
      Assign<PropsType, DefaultWithCssProps>,
      ThemeType
    >
  ) => any
) => styled(ComponentToWrap)`
  ${cssFunc(css)}
`;
