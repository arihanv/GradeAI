import Tools from "@/components/Tools/tools";
import Suggestions from "@/components/suggestions";

export default function EssayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col-reverse items-center md:items-start gap-5 md:flex-row justify-center">
      <div className="w-full max-w-[650px] stagger-1" data-animate>
        {children}
      </div>
      <div
        className="flex flex-row md:flex-col w-[150px] items-start gap-5 justify-center stagger-1"
        data-animate
      >
        <Tools />
        <Suggestions />
      </div>
    </div>
  );
}
