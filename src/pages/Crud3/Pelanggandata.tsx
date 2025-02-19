"use client"; // Pastikan ini ada di bagian paling atas file

import React, { useState } from 'react';

const PelangganData = () => {
    // State untuk menyimpan data pelanggan
    const [pelanggan, setPelanggan] = useState([
        { id: 1, nama: 'John Doe', alamat: 'Jl. Contoh No. 123', telepon: '08123456789' }
    ]);

    // State untuk form tambah/edit pelanggan
    const [formData, setFormData] = useState({ id: null, nama: '', alamat: '', telepon: '' });

    // State untuk mengontrol visibilitas form
    const [showForm, setShowForm] = useState(false);

    // Fungsi untuk menghapus pelanggan
    const handleDelete = (id: number) => {
        setPelanggan(pelanggan.filter(p => p.id !== id));
    };

    // Fungsi untuk menangani perubahan input form
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Fungsi untuk menampilkan form tambah/edit
    const handleShowForm = (pelanggan = { id: null, nama: '', alamat: '', telepon: '' }) => {
        setFormData(pelanggan);
        setShowForm(true);
    };

    // Fungsi untuk menyimpan data (tambah/edit)
    const handleSave = () => {
        if (formData.nama && formData.alamat && formData.telepon) {
            if (formData.id) {
                // Edit pelanggan yang sudah ada
                setPelanggan(pelanggan.map(p => (p.id === formData.id ? formData : p)));
            } else {
                // Tambah pelanggan baru
                const newId = pelanggan.length > 0 ? pelanggan[pelanggan.length - 1].id + 1 : 1;
                setPelanggan([...pelanggan, { id: newId, ...formData }]);
            }
            setShowForm(false); // Sembunyikan form setelah menyimpan
            setFormData({ id: null, nama: '', alamat: '', telepon: '' }); // Reset form
        } else {
            alert('Harap isi semua field!');
        }
    };

    return (
        <div className="min-h-screen w-full p-6">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Pelanggan Data</h1>

            {/* Tombol Tambah Pelanggan */}
            <button
                onClick={() => handleShowForm()}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4"
            >
                Tambah Pelanggan
            </button>

            {/* Form Tambah/Edit Pelanggan */}
            {showForm && (
                <div className="mb-6 p-4 bg-white rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4">
                        {formData.id ? 'Edit Pelanggan' : 'Tambah Pelanggan Baru'}
                    </h2>
                    <div className="space-y-4">
                        <input
                            type="text"
                            name="nama"
                            placeholder="Nama"
                            value={formData.nama}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            name="alamat"
                            placeholder="Alamat"
                            value={formData.alamat}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            name="telepon"
                            placeholder="Telepon"
                            value={formData.telepon}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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

            {/* Tabel Daftar Pelanggan */}
            <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                <table className="min-w-full">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">No</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Nama</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Alamat</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Telepon</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pelanggan.map((p, index) => (
                            <tr key={p.id} className="border-b hover:bg-gray-50">
                                <td className="px-4 py-2 text-sm text-gray-700">{index + 1}</td>
                                <td className="px-4 py-2 text-sm text-gray-700">{p.nama}</td>
                                <td className="px-4 py-2 text-sm text-gray-700">{p.alamat}</td>
                                <td className="px-4 py-2 text-sm text-gray-700">{p.telepon}</td>
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

export default PelangganData;