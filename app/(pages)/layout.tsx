import Footer from "@/components/Footer";
import CallButton from "@/components/Home/CallButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <CallButton />
      <Footer />
    </>
  );
}
