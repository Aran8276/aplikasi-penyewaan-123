"use client"; // Pastikan ini ada di bagian paling atas file

import React, { useState } from 'react';

const Penyewaan = () => {
    // State untuk menyimpan data penyewaan
    const [penyewaan, setPenyewaan] = useState([
        { id: 1, pelanggan: 'John Doe', alat: 'Drill', tanggal: '2023-10-01', durasi: 2, detail: 'Detail penyewaan 1' }
    ]);

    // State untuk form tambah/edit penyewaan
    const [formData, setFormData] = useState({
        id: null,
        pelanggan: '',
        alat: '',
        tanggal: '',
        durasi: 0,
        detail: ''
    });

    // State untuk mengontrol visibilitas form
    const [showForm, setShowForm] = useState(false);

    // Fungsi untuk menghapus penyewaan
    const handleDelete = (id: number) => {
        setPenyewaan(penyewaan.filter(p => p.id !== id));
    };

    // Fungsi untuk menangani perubahan input form
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Fungsi untuk menampilkan form tambah/edit
    const handleShowForm = (penyewaan = { id: null, pelanggan: '', alat: '', tanggal: '', durasi: 0, detail: '' }) => {
        setFormData(penyewaan);
        setShowForm(true);
    };

    // Fungsi untuk menyimpan data (tambah/edit)
    const handleSave = () => {
        if (formData.pelanggan && formData.alat && formData.tanggal && formData.durasi && formData.detail) {
            if (formData.id) {
                // Edit penyewaan yang sudah ada
                setPenyewaan(penyewaan.map(p => (p.id === formData.id ? formData : p)));
            } else {
                // Tambah penyewaan baru
                const newId = penyewaan.length > 0 ? penyewaan[penyewaan.length - 1].id + 1 : 1;
                setPenyewaan([...penyewaan, { id: newId, ...formData }]);
            }
            setShowForm(false); // Sembunyikan form setelah menyimpan
            setFormData({ id: null, pelanggan: '', alat: '', tanggal: '', durasi: 0, detail: '' }); // Reset form
        } else {
            alert('Harap isi semua field!');
        }
    };

    return (
        <div className="min-h-screen w-full p-6">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Penyewaan & Penyewaan Detail</h1>

            {/* Tombol Tambah Penyewaan */}
            <button
                onClick={() => handleShowForm()}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4"
            >
                Tambah Penyewaan
            </button>

            {/* Form Tambah/Edit Penyewaan */}
            {showForm && (
                <div className="mb-6 p-4 bg-white rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4">
                        {formData.id ? 'Edit Penyewaan' : 'Tambah Penyewaan Baru'}
                    </h2>
                    <div className="space-y-4">
                        <input
                            type="text"
                            name="pelanggan"
                            placeholder="Pelanggan"
                            value={formData.pelanggan}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            name="alat"
                            placeholder="Alat"
                            value={formData.alat}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="date"
                            name="tanggal"
                            placeholder="Tanggal"
                            value={formData.tanggal}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="number"
                            name="durasi"
                            placeholder="Durasi (hari)"
                            value={formData.durasi}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                            name="detail"
                            placeholder="Detail Penyewaan"
                            value={formData.detail}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={3}
                        />
                        <button
                            onClick={handleSave}
                            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mr-2"
                        >
                            Simpan
                        </button>
                        <button
                            onClick={() => setShowForm(false)}
                            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                        >
                            Batal
                        </button>
                    </div>
                </div>
            )}

            {/* Tabel Daftar Penyewaan */}
            <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                <table className="min-w-full">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">No</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Pelanggan</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Alat</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Tanggal</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Durasi (hari)</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Detail</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {penyewaan.map((p, index) => (
                            <tr key={p.id} className="border-b hover:bg-gray-50">
                                <td className="px-4 py-2 text-sm text-gray-700">{index + 1}</td>
                                <td className="px-4 py-2 text-sm text-gray-700">{p.pelanggan}</td>
                                <td className="px-4 py-2 text-sm text-gray-700">{p.alat}</td>
                                <td className="px-4 py-2 text-sm text-gray-700">{p.tanggal}</td>
                                <td className="px-4 py-2 text-sm text-gray-700">{p.durasi}</td>
                                <td className="px-4 py-2 text-sm text-gray-700">{p.detail}</td>
                                <td className="px-4 py-2 text-sm">
                                    <button
                                        onClick={() => handleShowForm(p)}
                                        className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600 mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(p.id)}
                                        className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Penyewaan;