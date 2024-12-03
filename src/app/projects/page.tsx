import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Experiences",
  description:
    "Learn more about the projects I have worked on the past experiences I had.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>Projects</H1>
      <section className="space-y-3">
        <H2>LLM D&apos;vt | Portfolio Creation</H2>
        <p>
          This portfolio was built using <strong>Next.js</strong> and{" "}
          <strong>TypeScript</strong> for both the frontend and backend, with
          <strong>LangChain</strong> , <strong>OpenAI</strong> , and{" "}
          <strong>Vercel AI SDK</strong> powering the AI functionalities. The
          project provided hands-on experience with integrating advanced AI
          tools and frameworks, enhancing my expertise in{" "}
          <strong>Next.js</strong>, <strong>TypeScript</strong>, and{" "}
          <strong>AI API</strong>
          integration.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Data Science | Medical Imaging</H2>
        <p>
          In this project, I developed a Convolutional Neural Network (CNN)
          model to predict whether a patient has pneumonia, achieving a model
          accuracy of approximately 74%. The project involved critical steps
          such as data preprocessing, model building and training, and detailed
          analysis of the trained model. This experience enhanced my skills in
          data science, particularly in handling medical imaging datasets and
          implementing deep learning solutions.
        </p>
        <p>
          Find the complete project here:{" "}
          <a
            href="https://www.kaggle.com/code/isadrusantos/diagnosis-of-pediatric-pneumonia-using-chest-x-ray"
            className="text-primary hover:underline"
          >
            Medical Imaging
          </a>
          .
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Data Analysis | Marketing Campaign</H2>
        <p>
          In this project, I utilized Excel, SQL, and Power BI to conduct a
          comprehensive data analysis, identifying top UK YouTubers for
          potential marketing partnerships. The goal was to support a marketing
          manager in launching a successful campaign. Key tasks included data
          cleaning, transformation, analysis, and visualization. This project
          significantly enhanced my data analysis and storytelling skills.
        </p>
        <p>
          Find the complete project here:{" "}
          <a
            href="https://github.com/KofiAnaan0/top_uk_youtubers"
            className="text-primary hover:underline"
          >
            Marketing Campaign
          </a>
          .
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Web Scripting | Data Extraction</H2>
        <p>
          In this project, I developed a Python script using Playwright to
          automate the extraction of hotel and apartment data from Google Maps
          in Mexico. This process involved scripting and automating data
          collection to retrieve specific information efficiently. The project
          sharpened my Python programming and automation skills while addressing
          real-world data extraction needs.
        </p>
        <p>
          Find the complete project here:{" "}
          <a
            href="https://github.com/KofiAnaan0/google_map_scraper"
            className="text-primary hover:underline"
          >
            Google Map Scrapper
          </a>
          .
        </p>
      </section>
      <hr className="border-muted" />
    </section>
  );
}
