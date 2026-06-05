"use client";

import CTAButton from "./CTAButton";
import FAQBlock from "./FAQBlock";
import Heading from "./Heading";
import Hero from "./Hero";
import ImageBlock from "./ImageBlock";
import LeadForm from "./LeadForm";
import Paragraph from "./Paragraph";
import SubHeading from "./SubHeading";
import TableBlock from "./TableBlock";

const componentMap = {
  hero: Hero,
  heading: Heading,
  subheading: SubHeading,
  paragraph: Paragraph,
  image: ImageBlock,
  table: TableBlock,
  faq: FAQBlock,
  cta: CTAButton,
  lead_form: LeadForm,
};

export default function BlogRenderer({ blocks = [] }) {
  return (
    <>
      {blocks.map((block, index) => {
        const Component = componentMap[block.type];

        if (!Component) {
          return null;
        }

        return <Component key={`${block.type}-${index}`} {...block} />;
      })}
    </>
  );
}
