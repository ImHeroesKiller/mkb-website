"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validations";
import { SERVICES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API call — replace with real endpoint / server action later
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.info("Contact form submission:", data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-16 text-center">
        <CheckCircle2 className="h-12 w-12 text-emerald-600" />
        <h3 className="mt-4 text-xl font-semibold text-navy">
          Pesan Terkirim!
        </h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Terima kasih. Tim MKB akan menghubungi Anda dalam 1×24 jam kerja.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Kirim pesan lain
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Nama Lengkap"
          error={errors.name?.message}
          htmlFor="name"
        >
          <Input
            id="name"
            placeholder="Nama Anda"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
        </Field>
        <Field label="Email" error={errors.email?.message} htmlFor="email">
          <Input
            id="email"
            type="email"
            placeholder="nama@perusahaan.com"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Perusahaan"
          error={errors.company?.message}
          htmlFor="company"
        >
          <Input
            id="company"
            placeholder="Nama perusahaan"
            aria-invalid={!!errors.company}
            {...register("company")}
          />
        </Field>
        <Field
          label="Nomor Telepon"
          error={errors.phone?.message}
          htmlFor="phone"
        >
          <Input
            id="phone"
            type="tel"
            placeholder="+62 812 3456 7890"
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
        </Field>
      </div>

      <Field
        label="Layanan yang Diminati"
        error={errors.service?.message}
        htmlFor="service"
      >
        <select
          id="service"
          className={cn(
            "flex h-11 w-full rounded-lg border border-input bg-white px-4 py-2 text-sm text-foreground shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky/40 focus-visible:border-sky disabled:cursor-not-allowed disabled:opacity-50",
            errors.service && "border-destructive"
          )}
          aria-invalid={!!errors.service}
          {...register("service")}
        >
          <option value="">Pilih layanan</option>
          {SERVICES.map((s) => (
            <option key={s.id} value={s.id}>
              {s.title}
            </option>
          ))}
          <option value="jupiter">JUPITER Technology</option>
          <option value="other">Lainnya / Konsultasi Umum</option>
        </select>
      </Field>

      <Field label="Pesan" error={errors.message?.message} htmlFor="message">
        <Textarea
          id="message"
          placeholder="Ceritakan kebutuhan manpower, wilayah coverage, atau campaign yang Anda rencanakan..."
          aria-invalid={!!errors.message}
          {...register("message")}
        />
      </Field>

      <Button
        type="submit"
        variant="accent"
        size="lg"
        className="w-full sm:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Mengirim...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Kirim Pesan
          </>
        )}
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {error && (
        <p className="text-xs font-medium text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
