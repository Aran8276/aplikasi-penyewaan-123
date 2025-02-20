"use client"; // Pastikan ini ada di bagian paling atas file

import React, { useState, useEffect } from 'react';

const KategoriAlat = () => {
    // State untuk menyimpan data kategori alat
    const [kategoriAlat, setKategoriAlat] = useState([]);

    // State untuk form tambah/edit kategori alat
    const [formData, setFormData] = useState({
        id: null,
        nama: '',
        deskripsi: ''
    });

    // State untuk mengontrol visibilitas form
    const [showForm, setShowForm] = useState(false);

    // Fungsi untuk memuat data dari localStorage saat komponen pertama kali di-render
    useEffect(() => {
        const savedData = localStorage.getItem('kategoriAlat');
        if (savedData) {
            setKategoriAlat(JSON.parse(savedData));
        }
    }, []);

    // Fungsi untuk menyimpan data ke localStorage setiap kali ada perubahan
    useEffect(() => {
        localStorage.setItem('kategoriAlat', JSON.stringify(kategoriAlat));
    }, [kategoriAlat]);

    // Fungsi untuk menghapus kategori alat
    const handleDelete = (id) => {
        setKategoriAlat(kategoriAlat.filter(k => k.id !== id));
    };

    // Fungsi untuk menangani perubahan input form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Fungsi untuk menampilkan form tambah/edit
    const handleShowForm = (kategori = { id: null, nama: '', deskripsi: '' }) => {
        setFormData(kategori);
        setShowForm(true);
    };

    // Fungsi untuk menyimpan data (tambah/edit)
    const handleSave = () => {
        if (formData.nama && formData.deskripsi) {
            if (formData.id) {
                // Edit kategori alat yang sudah ada
                setKategoriAlat(kategoriAlat.map(k => (k.id === formData.id ? formData : k)));
            } else {
                // Tambah kategori alat baru
                const newId = kategoriAlat.length > 0 ? kategoriAlat[kategoriAlat.length - 1].id + 1 : 1;
                setKategoriAlat([...kategoriAlat, { id: newId, ...formData }]);
            }
            setShowForm(false); // Sembunyikan form setelah menyimpan
            setFormData({ id: null, nama: '', deskripsi: '' }); // Reset form
        } else {
            alert('Harap isi semua field!');
        }
    };

    return (
        <div className="min-h-screen w-full p-6">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Kategori Alat</h1>

            {/* Tombol Tambah Kategori Alat */}
            <button
                onClick={() => handleShowForm()}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4"
            >
                Tambah Kategori Alat
            </button>

            {/* Form Tambah/Edit Kategori Alat */}
            {showForm && (
                <div className="mb-6 p-4 bg-white rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4">
                        {formData.id ? 'Edit Kategori Alat' : 'Tambah Kategori Alat Baru'}
                    </h2>
                    <div className="space-y-4">
                        <input
                            type="text"
                            name="nama"
                            placeholder="Nama Kategori"
                            value={formData.nama}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                            name="deskripsi"
                            placeholder="Deskripsi Kategori"
                            value={formData.deskripsi}
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

            {/* Tabel Daftar Kategori Alat */}
            <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                <table className="min-w-full">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">No</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Nama Kategori</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Deskripsi</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {kategoriAlat.map((k, index) => (
                            <tr key={k.id} className="border-b hover:bg-gray-50">
                                <td className="px-4 py-2 text-sm text-gray-700">{index + 1}</td>
                                <td className="px-4 py-2 text-sm text-gray-700">{k.nama}</td>
                                <td className="px-4 py-2 text-sm text-gray-700">{k.deskripsi}</td>
                                <td className="px-4 py-2 text-sm">
                                    <button
                                        onClick={() => handleShowForm(k)}
                                        className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600 mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(k.id)}
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

export default KategoriAlat;