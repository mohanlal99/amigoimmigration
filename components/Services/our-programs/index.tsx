import { unstable_cache } from "next/cache";

import Diploma from "@/components/Services/programs";
import { getAllDiplomas } from "@/lib/GlobalApi";
import { Diploma as DiplomaType } from "@/types/diploma";

const getCachedDiplomas = unstable_cache(
  async () => {
    const diplomas: DiplomaType[] = await getAllDiplomas();

    return diplomas;
  },
  ["diplomas"], // Cache key
  { revalidate: 60, tags: ["diplomas"] }, // Revalidate every 3600 seconds (1 hour)
);

const Diplomas = async () => {
  const diplomas: DiplomaType[] = await getCachedDiplomas();

  return (
    <>
      <Diploma diplomas={diplomas} />
    </>
  );
};

export default Diplomas;
