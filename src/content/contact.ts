// İletişim formu talep türleri. id'ler URL'deki ?konu= parametresiyle eşleşir.
export const requestTypes = [
  { id: "servis", label: "Servis talebi" },
  { id: "demo", label: "Demo veya teklif" },
  { id: "bakim", label: "Bakım anlaşması" },
  { id: "genel", label: "Genel soru" },
] as const;

export type RequestTypeId = (typeof requestTypes)[number]["id"];

export const isRequestType = (v: string | null): v is RequestTypeId => requestTypes.some((t) => t.id === v);
