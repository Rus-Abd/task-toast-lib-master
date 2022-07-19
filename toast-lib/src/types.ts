export interface ItoastOptions {
  id: string;
  type: 'info' | 'warning' | 'error' | 'success';
  text?: string;
  duration?: number;
  margin?: string;
}
export type Tposition = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
