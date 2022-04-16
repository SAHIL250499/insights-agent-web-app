import { SignUp } from '../../shared'
import { LoremIpsum, loremIpsum } from 'react-lorem-ipsum'
import './landing.css'

export default function Landing() {
  return (
    <>
      <SignUp />
      <div className='study-description'>
        <LoremIpsum />
        <ul>
          {loremIpsum({ p: 4, avgSentencesPerParagraph: 2, }).map(text => (
            <li className='text' key ={text}>
              {text}
            </li>
          ))}
        </ul>
      </div>
      <div className='yesAndNo'>
        <div className='study-is'>
          <h5>Study is:</h5>
          <ul className='fa-ul'>
            {loremIpsum({ p: 3, avgSentencesPerParagraph: 2, }).map(text => (
              <li className='text' key ={text}>
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div className='study-isNot'>
          <h5>Study Is Not:</h5>
          <ul>
            {loremIpsum({ p: 3, avgSentencesPerParagraph: 2, }).map(text => (
              <li className='text' key ={text}>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}