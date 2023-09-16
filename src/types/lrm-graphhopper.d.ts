export interface IGraphHopperOptions {
  serviceUrl: string;
  timeout: number;
  urlParameters: any;
}

export type LrmGraphHopperOptions = IGraphHopperOptions & import('leaflet').Routing.RoutingOptions;

declare module 'leaflet' {
  export namespace Routing {
      class GraphHopper {
          constructor(apiKey?: string, options?: Partial<LrmGraphHopperOptions>);
          initialize(apiKey?: string, options?: Partial<LrmGraphHopperOptions>): void;
          buildRouteUrl(waypoints: import('leaflet').Routing.Waypoint[], options?: LrmGraphHopperOptions): string;
          route(
              waypoints: import('leaflet').Routing.Waypoint[],
              callback: (error?: import('leaflet').Routing.IError, routes?: import('leaflet').Routing.IRoute[]) => any,
              context?: {},
              options?: LrmGraphHopperOptions): void;
      }
  }
}