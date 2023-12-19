import { Heading, Stack, Text, Box, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import messages from "../assets/messaje.json"
import CarouselStatic from './CarouselStatic';
import { Fade } from 'react-awesome-reveal';
import BGPoints from './BGPoints';

import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Message() {

    const mobile = useBreakpointValue({ base: true, md: false });

    return (
        <BGPoints>
            <CarouselStatic names={[1, 2, 3]} folder='img_maya' />
            <section className="_main container" >
                <section>
                    <Fade direction="down">
                        <section className="text-center">
                            <h2 class="section-title" style={{ paddingTop: 30, }}>Mensaje de nuestra <span className="text-primary-blue">Presidencia</span></h2>
                        </section>
                    </Fade>
                    <center>
                        <img
                            src={"./logo.png"}
                            style={{ height: 75, objectFit: 'scale-down', marginTop: 20, borderRadius: 40 }}
                        />
                        <p>Ticonsa Inmobiliaria S.A. de C.V.</p>
                    </center>
                    <div class="row-base row">
                        {messages.map(mess =>
                            <div class="col-base col-md-offset-1" key={mess.id}>
                                <div class="col-about-info">
                                    <p>{mess.text}</p>
                                </div>
                            </div>
                        )}
                        <div class="col-about-info">
                            <p style={{ textAlign: 'end' }}><br /><strong>Ing. Iñaki Zugasti Zalvidea</strong><br />PRESIDENTE</p>
                        </div>
                    </div>
                </section>
                {/*<div className=" mx-auto max-w-7xl px-6 lg:px-8">
                    <Tab.Group>
                        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                            {Object.keys(categories).map((category) => (
                                <Tab
                                    key={category}
                                    className={({ selected }) =>
                                        `w-full py-2.5 text-sm font-medium leading-5 ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 ${selected ? "bg-white text-blue-700 shadow" : "text-blue-100 hover:bg-white/[0.12] hover:text-white"}`
                                    }
                                    style={{ borderRadius: '10rem' }}
                                >
                                    {category}
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels className="mt-2">
                            {Object.values(categories).map((posts, idx) => (
                                <Tab.Panel
                                    key={idx}
                                    className={classNames('rounded-xl bg-white p-3', 'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2')}
                                >
                                    <div>
                                        {posts.map((post) => (
                                            <h5
                                                key={post.id}
                                                className="relative rounded-md p-3 hover:bg-gray-100"
                                            >
                                                <h3 className="text-sm font-medium leading-5">
                                                    {post.title}
                                                </h3>

                                                <div className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                                                    <h5>{post.date}</h5>
                                                    <h5>&middot;</h5>
                                                    <h5>{post.commentCount} comments</h5>
                                                    <h5>&middot;</h5>
                                                    <h5>{post.shareCount} shares</h5>
                                                </div>

                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        'absolute inset-0 rounded-md',
                                                        'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                                                    )}
                                                />
                                            </h5>
                                        ))}
                                    </div>
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                                                    </div>*/}
            </section>
        </BGPoints>
    )
}