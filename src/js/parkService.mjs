const baseUrl = "https://developer.nps.gov/api/v1/";
const apiKey = import.meta.env.VITE_NPS_API_KEY;

const parkInfoLinks = [
  {
    name: "Current Conditions &#x203A;",
    link: "conditions.html",
    image: "",
    description: "See what conditions to expect in the park before leaving on your trip!"
  },
  {
    name: "Fees and Passes &#x203A;",
    link: "fees.html",
    image: "",
    description: "Learn about the fees and passes that are available."
  },
  {
    name: "Visitor Centers &#x203A;",
    link: "visitor_centers.html",
    image: "",
    description: "Learn about the visitor centers in the park."
  }
];

async function getJson(url) {
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey
    }
  };

  const response = await fetch(baseUrl + url, options);
  if (!response.ok) throw new Error("response not ok");
  return await response.json();
}

export async function getParkData() {
  const parkData = await getJson("parks?parkCode=glac"); // change park here
  return parkData.data[0];
}

export function getInfoLinks(images) {
  // pick 3 images safely (some parks have less images)
  const chosen = (images || []).filter(img => img?.url).slice(1, 4);

  return parkInfoLinks.map((item, index) => ({
    ...item,
    image: chosen[index]?.url || ""
  }));
}
