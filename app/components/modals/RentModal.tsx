"use client"
import React, { useMemo, useState } from 'react'

import Modal from './Modal'

import useRentModal from '@/app/hooks/useRentModal';
import Heading from '../Heading';

enum STEPS {
        CATEGORY = 0,
        LOCATION = 1,
        INFO = 2,
        IMAGES = 3,
        DESCRIPTION = 4,
        PRICE = 5,
}

const RentModal = () => {
const rentModal = useRentModal();
const [step,setStep] = useState(STEPS.CATEGORY)
const onBack = () => {
    setStep((value) =>  value - 1)
};
const onNext = () => {
    setStep((value) => value + 1)
}

const actionLabel = useMemo(() => {
 if(step === STEPS.PRICE) {
    return 'Create'
 }

 return "Next"
},[step]);

const secondaryActionLabel = useMemo(() =>{
    if (step === STEPS.CATEGORY) {
return undefined
    }

    return 'Back'
},[step]); 

const bodyContent = (
    <div className='flex flex-col gap-8 '>
     <Heading
      title="Which of these best describes your place?"
      subtitle="Pick a category"
     />
     <div>
        
     </div>
    </div>
)

  return (
    <Modal  
    isOpen={rentModal.isOpen}
    onClose={rentModal.onClose}
    onSubmit={rentModal.onClose}
    actionLabel={actionLabel}
    secondaryActionLabel={secondaryActionLabel}
    secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
    title='Airbnb your home!'
    body = {bodyContent}
    />
  )
}

export default RentModal