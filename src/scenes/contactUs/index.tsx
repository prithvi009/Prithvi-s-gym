import React from 'react'
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import {appendErrors, useForm} from 'react-hook-form';
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png';
import HText from '@/shared/HText';
import { triggerAsyncId } from 'async_hooks';

type Props = {
    setSelectedPage: (page: SelectedPage) => void;
}

const inputStyles = `w-full mt-4 rounded-lg bg-primary-300 px-5 py-3 placeholder-white`

const ContactUs = ({setSelectedPage}: Props) => {

    const {register, formState: { errors } , trigger} = useForm();
    const onSubmit= async(e: any) =>{
        const isValid = await trigger();
        if(!isValid) e.preventDefault();
    }

  return (
    <section id='contactus' className='mx-auto w-5/6 pt-24 pb-20'>
        <motion.div className=""
            onViewportEnter={()=> setSelectedPage(SelectedPage.ContactUs)}
        >

            {/* Header */}
            <motion.div className='md:w-3/5'
                initial="hidden" 
                whileInView="visible" 
                viewport={{once:true, amount: 0.5}} 
                transition={{duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <HText>
                    Join Now
                </HText> TO GE IN SHAPE
                <p className='my-5'>
                Thank you for your interest in Prithvi's Gym! We're here to assist you with any questions, feedback, or inquiries you may have. Please feel free to reach out to us using the contact information below, and we'll get back to you as soon as possible.
                </p>
            </motion.div>

            <div className='mt-10 justify-between gap-8 md:flex items-center'>
                <motion.div className='mt-10 basis-3/5 md:mt-0'
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{once:true, amount: 0.5}} 
                    transition={{duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <form target='_blank'
                        onSubmit={onSubmit}
                        method='POST'
                        action='https://formsubmit.co/awatadeprithviraj@gmail.com'
                    >
                        <input type="text"
                            className={inputStyles}
                            placeholder='Name'
                            {...register('name', {required: true, maxLength: 80})}
                        />
                        {errors.name &&(
                            <p className='mt-1 text-primary-500'>
                                {errors.name.type === "required" && 'this is required'}
                                {errors.name.type === "maxLength" && 'max length is 80'}
                            </p>
                        )}


                        <input type="text"
                            className={inputStyles}
                            placeholder='Email'
                            {...register('email', {required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})}
                        />
                        {errors.email &&(
                            <p className='mt-1 text-primary-500'>
                                {errors.email.type === "required" && 'this is required'}
                                {errors.email.type === "pattern" && 'invalid email'}
                            </p>
                        )}


                        <textarea
                            rows={4}
                            cols={50}
                            className={inputStyles}
                            placeholder='Message'
                            {...register('message', {required: true, maxLength: 2000})}
                        />
                        {errors.message &&(
                            <p className='mt-1 text-primary-500'>
                                {errors.message.type === "required" && 'this is required'}
                                {errors.message.type === "maxLength" && 'max length is 2000'}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white hover:bg-primary-500"
                        >
                            SUBMIT
                        </button>

                    </form>

                </motion.div>
                <motion.div
                    className="relative mt-16 basis-2/5 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
                    <img
                        className="w-full rounded-xl"
                        alt="contact-us-page-graphic"
                        src={ContactUsPageGraphic}
                    />
                    </div>
                </motion.div>
            </div>
        </motion.div>
        



    </section>
  )
}

export default ContactUs