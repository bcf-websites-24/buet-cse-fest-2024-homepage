import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="center w-full flex flex-col gap-2">
      <Link href="/admin/ctf">CTF</Link>
      <Link href="/admin/dlsprint">DL Sprint</Link>
      <Link href="/admin/gamejam">Gamejam</Link>
      <Link href="/admin/hackathon">Hackathon</Link>
      <Link href="/admin/iupc">IUPC</Link>
      <Link href="/admin/poster-presentation">Poster Presentation</Link>
    </div>
  );
}
