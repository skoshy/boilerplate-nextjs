import { lighten } from "polished";
import { StyleTypes } from "src/types";

// mark as partial so we can programmatically build up colors
const colors = {} as Partial<StyleTypes.Colors>;

colors.brand = "blue";
colors.brandLight = lighten(0.3, colors.brand);

// finalize colors into a non-Partial type
const colorsFinal = colors as StyleTypes.Colors;
export { colorsFinal as colors };
