import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const EventFaq = ({ faqData }) => {
  return (
    <div className="container">
      <div className="mt-24 mb-12">
        <h3 className="header mb-12">Frequently Asked Questions</h3>

        <div className="mx-auto max-w-2xl">
          {faqData.map((faq, index) => (
            <Accordion type="single" collapsible key={index}>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  {faq.ques}
                </AccordionTrigger>
                <AccordionContent>{faq.ans}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};
