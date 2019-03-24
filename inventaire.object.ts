import { EntiteSimple } from "./entite-simple.object";
import { Lieudit } from "./lieudit.object";
import { Meteo } from "./meteo.object";
import { Observateur } from "./observateur.object";

export interface Inventaire extends EntiteSimple {
  associes?: Observateur[];

  associesIds: number[];

  date: Date;

  duree: string;

  heure: string;

  lieudit?: Lieudit;

  lieuditId: number;

  altitude: number;

  longitude: number;

  latitude: number;

  meteos?: Meteo[];

  meteosIds: number[];

  observateur?: Observateur;

  observateurId: number;

  temperature: number;
}
