import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

export default function App() {
  const personalDetails = {
    name: "Cassandre Lavallard",
    location: "Paris, FR",
    email: "canacepa@gmail.com",
    availability: "Open for work",
    brand:
      "Highly motivated junior full stack developer with a background in tourism seeking a challenging position in a dynamic organization. With experience in customer service and operations within the tourism industry, I possess strong communication and problem-solving skills. I am committed to creating robust and user-friendly web applications.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}
