export interface Pelanggan {
  pelanggan_id: number;
  pelanggan_nama: string;
  pelanggan_alamat: string;
  pelanggan_notelp: string;
  pelanggan_email: string;
  created_at: Date;
  updated_at: Date;
}

export interface GetPelangganResponse {
  success: boolean;
  message: string;
  data: Pelanggan[];
  errors: null;
}

export interface ActionResponse {
  success: boolean;
  message: string;
  data: Pelanggan;
  errors: null;
}

export interface StorePelangganRequest {
  pelanggan_nama: string;
  pelanggan_alamat: string;
  pelanggan_notelp: string;
  pelanggan_email: string;
}
