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
import { FC } from "react";
import { MasterPelangganProps } from "./MasterPelangganForm.type";
import LoadableButton from "@/components/LoadableButton/LoadableButton";

const MasterPelangganFormView: FC<MasterPelangganProps> = ({
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
          {type === "create" ? "Tambah" : "Update"} Pelanggan
        </h2>
        <FormField
          control={form.control}
          name="pelangganNama"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Pelanggan</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" type="text" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="pelangganAlamat"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Alamat Pelanggan</FormLabel>
              <FormControl>
                <Input placeholder="Jalan Ikan Ikanan" type="text" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="pelangganNotelp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nomor Telepon Pelanggan</FormLabel>
              <FormControl>
                <Input placeholder="088212345678" type="text" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="pelangganEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Pelanggan</FormLabel>
              <FormControl>
                <Input
                  placeholder="admin@localhost.com"
                  type="email"
                  {...field}
                />
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

export default MasterPelangganFormView;
