import { LandingPageHeader } from '@/components/LandingPageHeader'

export default function Index() {
  return (
    <>
      <LandingPageHeader />
      <div className="container">
        <div className="md:py-[80px] py-[60px]">
          <div className="font-black text-display md:mb-[8px] mb-[6px]">Privacy Policy</div>
          <hr />
          <div className="flex justify-end font-medium md:pt-[11px] pt-[8px] md:mb-[44px] mb-[33px]">
            Updated on October 14, 2023
          </div>
          <div className="flex flex-col gap-d-20">
            <h4 className="font-bold">Consent</h4>
            <div className="text-body">
              By using our website, you hereby consent to our Privacy Policy and agree to its terms.
            </div>
            <h4 className="font-bold">Information we collect</h4>
            <div className="text-body">
              The personal information that you are asked to provide, and the reasons why you are asked to provide it,
              will be made clear to you at the point we ask you to provide your personal information. If you contact us
              directly, we may receive additional information about you such as your name, email address, phone number,
              the contents of the message and/or attachments you may send us, and any other information you may choose
              to provide. When you register for an Account, we may ask for your contact information, including items
              such as name, company name, address, email address, and telephone number.
            </div>

            <h4 className="font-bold">How we use your information</h4>
            <div className="text-body">
              We use the information we collect in various ways, including to: Provide, operate, and maintain our
              website Improve, personalize, and expand our website Understand and analyze how you use our website
              Develop new products, services, features, and functionality Communicate with you, either directly or
              through one of our partners, including for customer service, to provide you with updates and other
              information relating to the website, and for marketing and promotional purposes Send you emails Find and
              prevent fraud
            </div>
            <h4 className="font-bold">Log Files</h4>
            <div className="text-body">
              NorthTensor follows a standard procedure of using log files. These files log visitors when they visit
              websites. All hosting companies do this and a part of hosting services&apos; analytics. The information
              collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider
              (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked
              to any information that is personally identifiable. The purpose of the information is for analyzing
              trends, administering the site, tracking users&apos; movement on the website, and gathering demographic
              information.
            </div>
            <h4 className="font-bold">Cookies and Web Beacons</h4>
            <div className="text-body">
              Like any other website, NorthTensor uses &quot;cookies&quot;. These cookies are used to store information
              including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited.
              The information is used to optimize the users&apos; experience by customizing our web page content based
              on visitors&apos; browser type and/or other information.
            </div>
            <h4 className="font-bold">Advertising Partners Privacy Policies</h4>
            <div className="text-body">
              You may consult this list to find the Privacy Policy for each of the advertising partners of NorthTensor.
              Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are
              used in their respective advertisements and links that appear on NorthTensor, which are sent directly to
              users&apos; browser. They automatically receive your IP address when this occurs. These technologies are
              used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising
              content that you see on websites that you visit. Note that NorthTensor has no access to or control over
              these cookies that are used by third-party advertisers.
            </div>
            <h4 className="font-bold">Third Party Privacy Policies</h4>
            <div className="text-body">
              NorthTensor&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising
              you to consult the respective Privacy Policies of these third-party ad servers for more detailed
              information. It may include their practices and instructions about how to opt-out of certain options. You
              can choose to disable cookies through your individual browser options. To know more detailed information
              about cookie management with specific web browsers, it can be found at the browsers&apos; respective
              websites.
            </div>
            <h4 className="font-bold">CCPA Privacy Rights (Do Not Sell My Personal Information)</h4>
            <div className="text-body">
              Under the CCPA, among other rights, California consumers have the right to: Request that a business that
              collects a consumer&apos;s personal data disclose the categories and specific pieces of personal data that
              a business has collected about consumers. Request that a business delete any personal data about the
              consumer that a business has collected. Request that a business that sells a consumer&apos;s personal
              data, not sell the consumer&apos;s personal data. If you make a request, we have one month to respond to
              you. If you would like to exercise any of these rights, please contact us.
            </div>
            <h4 className="font-bold">GDPR Data Protection Rights</h4>
            <div className="text-body">
              We would like to make sure you are fully aware of all of your data protection rights. Every user is
              entitled to the following: The right to access - You have the right to request copies of your personal
              data. We may charge you a small fee for this service. The right to rectification – You have the right to
              request that we correct any information you believe is inaccurate. You also have the right to request that
              we complete the information you believe is incomplete. The right to erasure – You have the right to
              request that we erase your personal data, under certain conditions. The right to restrict processing – You
              have the right to request that we restrict the processing of your personal data, under certain conditions.
              The right to object to processing – You have the right to object to our processing of your personal data,
              under certain conditions. The right to data portability – You have the right to request that we transfer
              the data that we have collected to another organization, or directly to you, under certain conditions. If
              you make a request, we have one month to respond to you. If you would like to exercise any of these
              rights, please contact us.
            </div>
            <h4 className="font-bold">Children&apos;s Information</h4>
            <div className="text-body">
              Another part of our priority is adding protection for children while using the internet. We encourage
              parents and guardians to observe, participate in, and/or monitor and guide their online activity.
              NorthTensor does not knowingly collect any Personal Identifiable Information from children under the age
              of 13. If you think that your child provided this kind of information on our website, we strongly
              encourage you to contact us immediately and we will do our best efforts to promptly remove such
              information from our records.
            </div>
            <h4 className="font-bold">Changes to This Privacy Policy</h4>
            <div className="text-body">
              We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically
              for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These
              changes are effective immediately, after they are posted on this page.
            </div>
            <h4 className="font-bold">Contact Us</h4>
            <div className="text-body">
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
