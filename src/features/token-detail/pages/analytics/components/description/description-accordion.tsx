import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DescriptionAccordion = () => {
  const titles = [
    "Breaking News: Bitcoin's Latest Developments and Innovations",
    "Exploring the Impact of Bitcoin on Global Markets",
    "The Future of Bitcoin: Trends and Predictions",
    "Is Bitcoin the Future of Currency? A Deep Dive",
    "Understanding Bitcoin's Role in the Digital Economy",
    "How Bitcoin's Technology is Evolving and Improving",
    "Top Companies Leading the Bitcoin Investment Wave",
  ];
  return (
    <div>
      <Accordion type="multiple" className="space-y-[24px]">
        {titles.map((title, index) => (
          <AccordionItem
            key={index}
            className="border-0 space-y-[16px]"
            value={`${index}`}
          >
            <AccordionTrigger className="text-18-27-600 py-0 hover:no-underline">
              {title}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-16-24-600 text-neutral-03">
                Magna scelerisque urna lorem id. Imperdiet pretium sit sed ut
                id. Ultrices nunc sed feugiat blandit aliquam. Turpis libero at
                nibh venenatis. Platea sit tristique nec volutpat id nulla sit.
                Urna dapibus quisque quis non sed odio. Sodales elementum
                interdum eu ac et cras. Dictum lorem sed morbi facilisis id
                sapien consectetur pellentesque molestie. Augue nulla aliquet
                consectetur pretium eget consequat. Hac est aliquet risus at
                ipsum eget. Suspendisse ultrices sagittis leo porttitor.
                Parturient nunc massa ullamcorper . Sit platea eget odio urna
                cum tortor nibh. Ipsum gravida tincidunt parturient sodales sed
                felis eu id sit. Gravida placerat dignissim egestas curabitur.
                Iaculis facilisis aliquam eu eget arcu quam in ultrices euismod.
                Imperdiet netus gravida pharetra condimentum lacus nibh mi. Dui
                neque arcu enim vitae sed. Parturient nunc massa ullamcorper
                viverra massa. Ornare sed cursus nisi lorem auctor libero nulla
                euismod nam. Id eu fringilla massa egestas morbi. Adipiscing
                tempor molestie imperdiet sed duis laoreet amet blandit viverra.
                Ac amet potenti viverra dignissim tortor semper ut. Ut eu
                pellentesque lobortis nisl scelerisque mi.
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default DescriptionAccordion;
