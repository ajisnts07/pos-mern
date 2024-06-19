import { notifyWarning } from "@/components/ui/feedback/Toast";
import FormatNameUtil from "@/utils/helpers/FormatNameUtil";

export const OnInvalidUtil = (e) => {
  e.preventDefault();

  const { name } = e.target;
  const value = e.target.value;
  const minLength = e.target.minLength;

  if (name === "email") {
    const { typeMismatch } = e.target.validity;

    if (typeMismatch) {
      notifyWarning(`Silahkan isi ${FormatNameUtil(name)} yang valid`);
    } else {
      notifyWarning(
        `Silahkan isi kolom ${FormatNameUtil(name)} terlebih dahulu`,
      );
    }
  }

  if (
    (name === "password") |
    (name === "new_password") |
    (name === "confirmation_password")
  ) {
    if (value && value.length < minLength) {
      notifyWarning(
        `Kata sandi harus terdiri dari minimal ${minLength} karakter`,
      );
    } else {
      notifyWarning(
        `Silahkan isi kolom ${FormatNameUtil(name)} terlebih dahulu`,
      );
    }
  }
};

