import React from 'react'
import CountDown from '../CountDown/Countdown'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import Message from '../Message/Message';
function ComingSoon() {
    const specificEndDate = new Date('2024-08-12T23:59:59');

  return (
    <>
        <section className="flex min-h-screen flex-col w-full items-center justify-between p-5 lg:p-12">
            <Header />
            <CountDown endDate={specificEndDate} />
            <Message />
            <Footer />
        </section>
    </>
  )
}

export default ComingSoon