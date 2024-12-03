import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn about my background in the Tech industry.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>About Me</H1>
      <section className="space-y-3">
        <H2>Who am I?</H2>
        <p>
          I am Isadru Santos, a passionate computer science professional with
          hands-on experience in data science, AI/LLM, data analysis, and data
          engineering. Explore my GitHub profile to see some of the exciting
          projects I’ve worked on:{" "}
          <a
            href="https://github.com/KofiAnaan0"
            className="text-primary hover:underline"
          >
            Github
          </a>
          .
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Skills</H2>
        <p>
          I am proficient in <strong>Python</strong> for data manipulation and
          exploratory data analysis, <strong>Power BI</strong> for creating
          insightful data visualizations, and <strong>Hugging Face</strong> for
          leveraging large language models (LLMs).
        </p>
      </section>
      <hr className="border-muted" />
    </section>
  );
}
