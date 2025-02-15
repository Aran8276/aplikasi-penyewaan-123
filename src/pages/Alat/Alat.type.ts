export interface Alat {
  alatNama: string;
  alatDeskripsi: string;
  alatHargaPerHari: number;
  alatStok: number;
}

export interface AlatProps {
  data: Alat[];
}
