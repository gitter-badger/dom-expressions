declare module "dom-expressions-runtime" {
  export function template(html: string): HTMLTemplateElement;
  export function wrap<T>(fn: (prev?: T) => T): any;
  export function insert(parent: Node, accessor: any, init?: any, marker?: Node): any;
  export function createComponent(Comp: (props: any) => any, props: any, dynamicKeys?: string[]): any;
  export function delegateEvents(eventNames: string[]): void;
  export function clearDelegatedEvents(): void;
  export function spread(node: HTMLElement, accessor: any, isSVG: Boolean): void;
  export function classList(node: HTMLElement, value: { [k: string]: boolean; }): void;
  export function currentContext(): any;
  export function isSSR(): boolean;
  export function startSSR(): void;
  export function hydration(fn: () => unknown, node: HTMLElement): void;
  export function getNextElement(template: HTMLTemplateElement): Node;
  export function getNextMarker(start: Node): [Node, Array<Node>];
}