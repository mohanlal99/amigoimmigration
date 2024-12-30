export type Job = {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
  link: string;
};
export async function getJobData(): Promise<Job[]> {
  try {
    const res = await fetch(`/api/latestjobs`, {
      method: "GET",
    });

    if (!res.ok) {
      return []; // Return empty array if request fails
    }

    const data: Job[] = await res.json();

    // Validate and ensure data is an array
    if (!Array.isArray(data)) {
      return [];
    }

    return data;
  } catch {
    return []; // Return empty array on any error
  }
}
