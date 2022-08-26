export default async function getNews() {
  try {
    const response = await fetch(
      "https://newsdata.io/api/1/news?apikey=pub_102900ccc55746daec3151d536691c88e271b&q=bangladesh"
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("Error while fetching news", error);
    return [];
  }
}
