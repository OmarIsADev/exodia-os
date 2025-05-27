import { IoIosLink } from "react-icons/io";

export default function CopyLink({ href }: { href: string }) {
  return (
    <IoIosLink
      size={32}
      className="hover:text-primary cursor-pointer w-fit"
      onClick={() => navigator.clipboard.writeText(href)}
    />
  );
}
