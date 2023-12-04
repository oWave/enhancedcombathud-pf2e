export class ArgonComponent {
  element: HTMLElement
  _tooltip: Tooltip
  _parent: any
  get parent(): any
  get actor(): any
  get token(): any
  get template(): string
  get classes(): any[]
  get elementType(): string
  get colorScheme(): any
  get visible(): boolean
  get hasTooltip(): boolean
  get tooltipOrientation(): any
  setColorScheme(): void
  setVisibility(): void
  /**
   * @typedef {Object} TooltipData
   * @property {string} title - The name or title of the item.
   * @property {string} description - The detailed description of the item, enriched as HTML content.
   * @property {string} subtitle - A brief subtitle providing additional context about the item.
   * @property {Array<{ label: string, value: any }>} details - An array of objects containing specific details about the item.
   * @property {string} propertiesLabel - The label for the properties section.
   * @property {Array<{ label: string, primary?: boolean, secondary?: boolean }>} properties - An array of objects representing the properties of the item.
   * @property {Array<string>} footerText - An array of strings providing additional footer text.
   */
  getTooltipData(): Promise<any>
  getData(): Promise<{}>
  activateTooltipListeners(): Promise<void>
  _onTooltipMouseEnter(event: any): Promise<void>
  _onTooltipMouseLeave(event: any): Promise<void>
  render(): Promise<HTMLElement>
  _renderInner(): Promise<void>
  activateListeners(html: any): Promise<void> | void
}
import { Tooltip } from "../tooltip.js"
//# sourceMappingURL=component.d.ts.map
