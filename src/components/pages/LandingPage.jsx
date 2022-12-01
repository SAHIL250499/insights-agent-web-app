import { useTranslation } from 'react-i18next'
import SignUpForm from 'components/elements/SignUp'
import { ReactComponent as Logo } from 'images/logo.svg'
import 'components/pages/LandingPage.css'

function LandingPage() {
  const { t } = useTranslation();

  return (
    <main>
      <div className="organization">
        <Logo />
      </div>

      <div className="px-12 md:px-32 lg:px-56 xl:px-96 xl:text-xl">
        <div className='pt-8'>
          <div className="video-responsive">
            <iframe
              src="https://www.youtube.com/embed/ScMzIvxBSi4"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </div>

        <div className="">
          <p className='pt-8 lg:pt-20'>
            Have you ever felt that "technology is too confusing" or "this is not how I would use technology" or "I need something that actually helps me"? Than you are the right person to help us out...
          </p>

          <p className='pt-8 lg:pt-18'>
            The fact is that technology is often made for technologists by technologists. Current customer information does not include everyone. With your help buildJUSTLY can help technologists understand all kinds of customers.
          </p>

          <p className='pt-10 lg:pt-18'>
            When you agree to the study, we’ll ask you to install something we call the Insight Agent.
          </p>

          <ul className='px-10 lg:pt-18'>
            <li className='pt-10'>Once an hour, the Insight Agent will capture the programs and websites on the computer.</li>
            <li className='pt-10'>This information will be sent by internet to our servers.</li>
            <li className='pt-10'>All of the information will be collected with other information from other participants around the United States.</li>
            <li className='pt-10'>The servers will sort the information by type into categories like social media, entertainment, work productivity, education and more.</li>
          </ul>

          <div className='font-extrabold text-center pt-10 text-xl md:text-2xl lg:text-3xl'>
            <h3>Your Privacy is Important</h3>
          </div>

          <ul className='px-10 lg:pt-18'>
            <li className='pt-10'>We use industry standard practices to safeguard your data.</li>
            <li className='pt-10'>Additionally, your data will be anonymized before we use it for research.</li>
            <li className='pt-10'>You are in control and can opt out of the study at any time. </li>
          </ul>

          <div className='font-extrabold text-center pt-10 text-xl md:text-2xl lg:text-3xl'>
            <h3>What will happen to the data:</h3>
          </div>

          <ul className='px-10 lg:pt-18'>
            <li className='pt-10'>We will share our findings with technology builders so that they can build technology that’s useful for people like you and your community.</li>
            <li className='pt-10'>We want to make sure that all customers are represented.</li>
          </ul>

          <div className='pt-10 lg:pt-18'>
            <p>You are the expert of you and we'll pay you for that expertise. We'll compensate you at the beginning of the study and at the conclusion of the study.</p>
            <p>We'll also ask you for additional information through voluntary surveys and interviews throughout the study period.</p>
          </div>

          <div className="border border-black mt-10 p-4 md:p-6 lg:p-16">
            <h4 className='font-bold'>Purpose of the Research Project</h4>
            <p className='pl-8 pt-4'>Study computer use in underserved populations</p>

            <h4 className='font-bold pt-4'>Data Collected</h4>
            <ul>
              <li className='pl-8 pt-4'>• A one time survey of demographic information</li>
              <li className='pl-8'>• Website and application useage, anonymized for privacy</li>
              <li className='pl-8'>• Internet connectivity statistic</li>
              <li className='pl-8'>• No additional data will be collected as part of this study</li>
              <li className='pl-8'>• No additional PII data will be collected as part of this study</li>
            </ul>

            <h4 className='font-bold pt-4'>Benefits</h4>
            <p className='pl-8 pt-4'>To you: $25 gift card at sign up, $75 gift card at completion.</p>
            <p className='pl-8 pt-4'>To buildJUSTLY: Data to help understand computer usage by demographics</p>

            <h4 className='font-bold'>Risks</h4>
            <p className='pl-8 pt-4'>No computer performance issues identified</p>
          </div>
        </div>
      </div>

      <SignUpForm />
    </main>
  )
}

export default LandingPage;
