import { Accordion } from '@/components/Accordion'
import { LandingPageHeader } from '@/components/LandingPageHeader'

export default function Index() {
  return (
    <>
      <LandingPageHeader />
      <div className="container">
        <div className="md:py-[80px] py-[60px]">
          <div className="font-black text-display md:mb-[8px] mb-[6px]">Frequently asked questions</div>
          <hr />
          <div className="flex justify-end font-medium md:pt-[11px] pt-[8px] md:mb-[44px] mb-[33px]">
            Updated on October 14, 2023
          </div>
          <div className="flex flex-col">
            <Accordion title="How are the readings completed?" expanded>
              Our readers use tarot cards primarily, which involves connecting to your energy and then shuffling and
              drawing out tarot cards to interpret the messages and predictions meant for you. We also use pendulum and
              intuition.
            </Accordion>

            <Accordion title="How can you complete a reading online without seeing me?">...</Accordion>

            <Accordion title="What if I book a reading to 'test' you and you get it wrong?">...</Accordion>

            <Accordion title="Are you ever wrong?">...</Accordion>
          </div>
        </div>
      </div>
    </>
  )
}
