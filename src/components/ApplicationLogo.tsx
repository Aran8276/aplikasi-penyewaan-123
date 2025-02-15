import Image from "next/image";

export default function ApplicationLogo() {
  return (
    <Image
      className="rounded-lg"
      src="/logo-alt.png"
      width={44}
      height={44}
      alt="logo"
    />
  );
}
