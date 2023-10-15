import ClientOnly from "@/components/ClientOnly";
import Markets from "@/components/Markets";
const MarketsPage = () => {
  return (
    <ClientOnly>
      <Markets />
    </ClientOnly>
  );
};

export default MarketsPage;
