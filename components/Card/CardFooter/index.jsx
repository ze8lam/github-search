import { useEffect, useState } from "react";
import Icon from "../../../assets/fork-icon.svg";
import {
  Footer,
  ForkContainer,
  ForkIcon,
  ForkLink,
  Forks,
  LanguageBadge,
  LanguageBox,
} from "./styled";

const colorMappings = {
  "c++": "#f34b7d",
  css: "#563d7c",
  html: "#e34c26",
  java: "#b07219",
  javascript: "#f1e05a",
  typescript: "#2b7489",
};

function CardFooter({ languagesUrl, forksUrl }) {
  const [languages, setLanguages] = useState([]);
  const [forks, setForks] = useState([]);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        if (!languagesUrl) return;

        const response = await fetch(languagesUrl);

        if (!response.ok) {
          throw new Error(
            `${response.status} - Error fetching repository languages`
          );
        }

        const data = await response.json();

        // Sorting the languages object based on values in descending order
        const sortedLanguages = Object.entries(data)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 3)
          .map(([key]) => key);

        setLanguages(sortedLanguages);
      } catch (e) {
        setLanguages([]);
      }
    };

    fetchLanguages();
  }, [languagesUrl]);

  useEffect(() => {
    const fetchForks = async () => {
      if (!forksUrl) return;

      try {
        const response = await fetch(`${forksUrl}?per_page=3`);

        if (!response.ok) {
          throw new Error(
            `${response.status} - Error fetching repository forks`
          );
        }

        const data = await response.json();

        setForks(data);
      } catch (e) {
        setForks([]);
      }
    };

    fetchForks();
  }, [forksUrl]);

  return (
    <Footer>
      {languages?.length > 0 &&
        languages.map((language) => (
          <LanguageBox key={language}>
            <LanguageBadge
              color={colorMappings[language.toLowerCase()] || "#808080"}
            />
            {language}
          </LanguageBox>
        ))}
      {forks?.length > 0 && (
        <Forks>
          <ForkIcon src={Icon.src} />
          {forks.map((fork) => (
            <ForkContainer key={fork.id}>
              <ForkLink href={fork.html_url} target="_blank">
                {fork.owner.login}
              </ForkLink>
            </ForkContainer>
          ))}
        </Forks>
      )}
    </Footer>
  );
}

export default CardFooter;
