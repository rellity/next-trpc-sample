import Image from "next/image";
import Todos from "./_components/Todos";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Todos/>
      </div>
    </main>
  );
}
