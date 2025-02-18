export interface Alat {
  alat_id: number;
  alat_kategori_id: number;
  alat_nama: string;
  alat_deskripsi: string;
  alat_hargaperhari: number;
  alat_stok: number;
  created_at: Date;
  updated_at: Date;
}

export interface GetAlatResponse {
  success: boolean;
  message: string;
  data: Alat[];
  errors: null;
}

export interface ActionResponse {
  success: boolean;
  message: string;
  data: Alat;
  errors: null;
}

export interface StoreAlatRequest {
  alat_kategori_id: number;
  alat_nama: string;
  alat_deskripsi: string;
  alat_hargaperhari: number;
  alat_stok: number;
}
