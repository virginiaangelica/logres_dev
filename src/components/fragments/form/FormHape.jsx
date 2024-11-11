import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function FormHape() {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    phone: "",
    code: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { phone: "", code: "", newPassword: "", confirmPassword: "" };

    // Validasi nomor handphone
    if (!phone) {
      newErrors.phone = "Nomor handphone wajib diisi";
    } else if (!/^[0-9]+$/.test(phone)) {
      newErrors.phone = "Nomor handphone tidak valid";
    }

    // Validasi kode, kata sandi baru, dan konfirmasi kata sandi
    if (!code) newErrors.code = "Kode wajib diisi";
    if (!newPassword) newErrors.newPassword = "Kata sandi baru wajib diisi";
    if (!confirmPassword) {
      newErrors.confirmPassword = "Konfirmasi kata sandi wajib diisi";
    } else if (confirmPassword !== newPassword) {
      newErrors.confirmPassword = "Kata sandi tidak cocok";
    }

    // Jika ada error, set state
    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      return;
    }

    // Proses reset kata sandi di sini
    console.log("Password reset submitted!", { phone, code, newPassword });
    // Reset form
    setPhone("");
    setCode("");
    setNewPassword("");
    setConfirmPassword("");
    setErrors({ phone: "", code: "", newPassword: "", confirmPassword: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="phone">Nomor Handphone</Label>
        <div className="flex space-x-2">
          <Input
            id="phone"
            type="text"
            placeholder="Masukkan nomor handphone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="text-sm py-1 px-2 flex-1"
          />
          <Button type="button" className="text-white text-[13px] py-1 px-2" size="sm">
            Kirim Kode
          </Button>
        </div>
        {errors.phone && <p className="text-red-500">{errors.phone}</p>}
      </div>

      <div className="text-center">
        <a href="/email" className="text-xs font-light text-gray-500">
          Gunakan alamat email?
        </a>
      </div>

      <div className="space-y-1">
        <Label htmlFor="code">Masukkan Kode</Label>
        <Input
          id="code"
          type="text"
          placeholder="Masukkan kode"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="text-sm py-1 px-2"
        />
        {errors.code && <p className="text-red-500">{errors.code}</p>}
      </div>

      <div className="space-y-1">
        <Label htmlFor="newPassword">Kata Sandi Baru</Label>
        <Input
          id="newPassword"
          type="password"
          placeholder="Masukkan kata sandi baru"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="text-sm py-1 px-2"
        />
        {errors.newPassword && <p className="text-red-500">{errors.newPassword}</p>}
      </div>

      <div className="space-y-1">
        <Label htmlFor="confirmPassword">Konfirmasi Kata Sandi Baru</Label>
        <Input
          id="confirmPassword"
          type="password"
          placeholder="Masukkan ulang kata sandi baru"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="text-sm py-1 px-2"
        />
        {errors.confirmPassword && (
          <p className="text-red-500">{errors.confirmPassword}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full bg-primary text-white text-sm py-1 px-2"
        size="sm"
      >
        Ganti Password
      </Button>
    </form>
  );
}
