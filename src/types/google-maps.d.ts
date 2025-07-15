/* eslint-disable @typescript-eslint/no-unused-vars */
declare global {
  interface Window {
    google: typeof google;
  }
}

declare namespace google {
  namespace maps {
    class StreetViewPanorama {
      constructor(container: HTMLElement, opts?: StreetViewPanoramaOptions);
      setPosition(latLng: LatLngLiteral): void;
      setPov(pov: StreetViewPov): void;
      setZoom(zoom: number): void;
    }

    interface StreetViewPanoramaOptions {
      position?: LatLngLiteral;
      pov?: StreetViewPov;
      zoom?: number;
      addressControl?: boolean;
      panControl?: boolean;
      zoomControl?: boolean;
      fullscreenControl?: boolean;
      enableCloseButton?: boolean;
    }

    interface StreetViewPov {
      heading: number;
      pitch: number;
    }

    interface LatLngLiteral {
      lat: number;
      lng: number;
    }
  }
}

export {};
