/**
 * Device families the service is advertised as working with.
 * Compatibility always depends on the model and the player app; keep this list
 * limited to platforms you have actually confirmed.
 */
export type Device = { id: string; name: string; detail: string; icon: "tv" | "android" | "firestick" | "computer" | "box" };

export const devices: Device[] = [
  { id: "smart-tv", name: "Smart TV", detail: "Samsung et LG, via une application compatible", icon: "tv" },
  { id: "android", name: "Android", detail: "Box Android, Android TV, smartphones et tablettes", icon: "android" },
  { id: "fire-tv", name: "Fire TV Stick", detail: "Clés et boîtiers Amazon Fire TV", icon: "firestick" },
  { id: "ordinateur", name: "Ordinateur", detail: "Windows et macOS, via un lecteur multimédia", icon: "computer" },
  { id: "boitiers", name: "Boîtiers dédiés", detail: "Boîtiers MAG et lecteurs compatibles M3U", icon: "box" },
];
