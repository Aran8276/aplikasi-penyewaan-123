import { FormData } from "./Kontak.type";

interface TentangViewProps {
  formData: FormData;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const TentangView: React.FC<TentangViewProps> = ({
  formData,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Hubungi Kami
        </h1>
        <p className="text-gray-600 text-center mb-4">
          Isi formulir ini untuk menghubungi kami.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nama Lengkap */}
          <div>
            <label className="block text-gray-700 font-medium">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          {/* Alamat Email */}
          <div>
            <label className="block text-gray-700 font-medium">
              Alamat Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          {/* Nomor Telepon */}
          <div>
            <label className="block text-gray-700 font-medium">
              Nomor Telepon
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Subjek Pesan */}
          <div>
            <label className="block text-gray-700 font-medium">
              Subjek Pesan
            </label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="">Pilih Subjek</option>
              <option value="Informasi Penyewaan">Informasi Penyewaan</option>
              <option value="Keluhan">Keluhan</option>
              <option value="Pertanyaan Umum">Pertanyaan Umum</option>
            </select>
          </div>

          {/* Pesan / Deskripsi */}
          <div>
            <label className="block text-gray-700 font-medium">
              Pesan / Deskripsi
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          {/* Tombol Kirim */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  );
};

export default TentangView;
