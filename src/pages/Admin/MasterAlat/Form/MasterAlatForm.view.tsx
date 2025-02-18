"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FC } from "react";
import { MasterAlatProps } from "./MasterAlatForm.type";
import LoadableButton from "@/components/LoadableButton/LoadableButton";

const MasterAlatFormView: FC<MasterAlatProps> = ({
  form,
  onSubmit,
  router,
  type,
  loading,
}) => {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full px-[320px] py-10"
      >
        <h2 className="text-3xl font-bold tracking-tight">
          {type === "create" ? "Tambah" : "Update"} Alat
        </h2>
        <FormField
          control={form.control}
          name="alatNama"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Alat</FormLabel>
              <FormControl>
                <Input placeholder="Perkakas" type="text" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="alatDeskripsi"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Deskripsi Alat</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Alat ini digunakan untuk..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="alatHargaPerHari"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Harga per hari</FormLabel>
              <FormControl>
                <Input placeholder="Rp20,000" type="number" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="alatStok"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Stok Alat</FormLabel>
              <FormControl>
                <Input placeholder="50" type="number" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex space-x-3">
          <LoadableButton loading={loading} type="submit">
            {type === "create" ? "Simpan" : "Update"}
          </LoadableButton>
          <Button
            type="button"
            onClick={() => router.back()}
            variant={"outline"}
          >
            Kembali
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default MasterAlatFormView;
