import Principal from "@/components/principal/Principal";
import TestTw from "@/components/testComponents/TestTw";
import TestTw2 from "@/components/testComponents/TestTw2";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center p-16">
      <div className="z-10 max-w-5xl w-full">
        <Principal/>
        {/* <TestTw/> */}
        {/* <TestTw2/> */}
      </div>
    </main>
  );
}
