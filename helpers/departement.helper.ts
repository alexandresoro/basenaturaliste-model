import { Departement } from "../types/departement.object";

export const findDepartementById = (
  departements: Departement[],
  id: number
): Departement => {
  return departements.find((departement) => {
    return id === departement.id;
  });
};
