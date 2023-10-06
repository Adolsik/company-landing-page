import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'

const Newsletter = () => {
    const [policy,setPolicy] = useState(false)

    function showPrivacyPolicy() {
        setPolicy(!policy);
    }


  return (
    <Fade right duration={1000} distance='50%'>
    <div className='bg-black py-16 w-full text-white'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl py-2 font-bold ml-3'>Chcesz otrzymywać informacje o zmianach i promocjach?</h1>
                <p className='ml-3'>Zapisz się do naszego newslettera i bądz na bieżąco.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-[95%] rounded-md text-black sm:ml-3' type="email" placeholder='Wpisz swój e-mail' />
                    <button className='bg-[#00df9a] text-black rounded-md font-medium  w-[200px] ml-4 my-6 px-6 py-3 items-center sm:mr-3'>Wyślij</button>
                </div>
                <div>
                <p className='ml-3'>Wciskając przycisk zgadzasz się z <span onClick={showPrivacyPolicy} className='text-[#00df9a] font-medium cursor-pointer hover:font-bold'>zasadami polityki prywatności</span></p>
                <p className={policy ? 'ml-3 opacity-80 inline-block' : 'hidden'}>
                    OBOWIĄZEK INFORMACYJNY <br />
                    1. Administratorem Pana/Pani danych osobowych jest (todo) <br />
                    2. Dane będą przetwarzane w celu udzielenia odpowiedzi na pytanie przesłane przez formularz kontaktowy na podstawie prawnie uzasadnionych interesów realizowanych przez administratora; art. 6 ust. 1 lit. f RODO*.<br />
                    3. Odbiorcą Pana/Pani danych osobowych mogą być dostawcy usług technicznych i organizacyjnych, którzy wspierają proces udzielenia odpowiedzi.<br />
                    4. Dane będą przechowywane do czasu zakończenia procesu komunikacji.<br />
                    5. Ma Pan/Pani prawo dostępu do swoich danych osobowych, ich sprostowania, usunięcia lub ograniczenia przetwarzania.<br />
                    6. Ma Pan/Pani prawo do wniesienia sprzeciwu wobec dalszego przetwarzania.<br />
                    7. Ma Pan/Pani także prawo do przenoszenia danych oraz wniesienia skargi do organu nadzorczego.<br />
                    8. Podanie przez Pana/Panią danych osobowych jest dobrowolne Odmowa podania danych uniemożliwi udzielenie odpowiedzi.<br /> <br />
                    *Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).
                </p>
                </div>
            </div>

        </div>
    </div>
    </Fade>
  )
}

export default Newsletter