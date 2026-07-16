"use client";

import { useEffect, useState } from "react";
import { COVERAGE_CITIES } from "@/lib/constants";

interface MapComponents {
  MapContainer: typeof import("react-leaflet").MapContainer;
  TileLayer: typeof import("react-leaflet").TileLayer;
  Marker: typeof import("react-leaflet").Marker;
  Popup: typeof import("react-leaflet").Popup;
  L: typeof import("leaflet");
}

export function CoverageMap() {
  const [map, setMap] = useState<MapComponents | null>(null);

  useEffect(() => {
    let mounted = true;

    async function load() {
      const leaflet = await import("leaflet");
      const reactLeaflet = await import("react-leaflet");

      // Fix default marker icons in bundlers
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (leaflet.Icon.Default.prototype as any)._getIconUrl;
      leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
        iconUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
      });

      if (mounted) {
        setMap({
          MapContainer: reactLeaflet.MapContainer,
          TileLayer: reactLeaflet.TileLayer,
          Marker: reactLeaflet.Marker,
          Popup: reactLeaflet.Popup,
          L: leaflet,
        });
      }
    }

    load();
    return () => {
      mounted = false;
    };
  }, []);

  if (!map) {
    return (
      <div className="flex h-[420px] w-full items-center justify-center rounded-2xl border border-border bg-slate-100 sm:h-[520px]">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-sky border-t-transparent" />
          <p className="mt-3 text-sm text-muted-foreground">Memuat peta...</p>
        </div>
      </div>
    );
  }

  const { MapContainer, TileLayer, Marker, Popup, L } = map;

  const createIcon = () =>
    L.divIcon({
      className: "custom-marker",
      html: `<div style="
        width: 28px;
        height: 28px;
        background: #0ea5e9;
        border: 3px solid white;
        border-radius: 50%;
        box-shadow: 0 2px 8px rgba(15,23,42,0.3);
      "></div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 14],
      popupAnchor: [0, -14],
    });

  return (
    <div className="h-[420px] w-full overflow-hidden rounded-2xl border border-border shadow-sm sm:h-[520px]">
      <MapContainer
        center={[-2.5, 118]}
        zoom={5}
        scrollWheelZoom={false}
        className="h-full w-full"
        style={{ background: "#e2e8f0" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {COVERAGE_CITIES.map((city) => (
          <Marker
            key={city.name}
            position={[city.lat, city.lng]}
            icon={createIcon()}
          >
            <Popup>
              <div className="min-w-[140px] p-1">
                <p className="text-sm font-bold text-slate-900">{city.name}</p>
                <p className="text-xs text-slate-500">{city.region}</p>
                <p className="mt-1 text-xs font-semibold text-sky-600">
                  Tim: {city.teamSize}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
