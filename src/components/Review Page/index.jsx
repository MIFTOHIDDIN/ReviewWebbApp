import { Rate } from 'antd';

import React, { useState } from 'react'
import { AllComments, Btn, Container, Form, Icon, Image, Info, Recommend, ReviewName, Username, Wrap, Wrapper } from './style'
import HarryPotterBook from '../../assets/img/harry-potter-book.png'
import { useNavigate } from 'react-router-dom';
import UserImg from '../../assets/img/01 copy.jpg'

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
export const ReviewPage = ({ url }) => {
    const navigate = useNavigate()
    const [value, setValue] = useState(3);
    return (
        <>
            <Container>
                <Wrap>
                    <Image src={url || HarryPotterBook} />
                    <span>
                        <Rate tooltips={desc} onChange={setValue} value={value} />
                        {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                    </span>
                </Wrap>

                <ReviewName>
                    <div className="reviewName">
                        Name : {`Harry Potter Book`}
                    </div>
                </ReviewName>
                <Recommend>
                    <Icon>
                        <Icon.Like />
                        <div>
                            Like
                        </div>
                    </Icon>
                    <Icon>
                        <Icon.Comment />
                        <div>
                            Comment
                        </div>
                    </Icon>
                </Recommend>

                <Info >
                    One of my favourite books is Harry Potter and the Philosopher's Stone by J.K. Rowling. It is a story about Harry Potter, an orphan brought up by his aunt and uncle because his parents w
                    ere killed when he was a baby. Harry is unloved by his uncle and aunt but every
                    thing changes when he is invited to join Hogwarts School of Witchcraft and Wizar
                    dry and he finds out he's a wizard. At Hogwarts Harry realises he's special and his adventures begin when he and his new friends Ron and Hermione attempt to unravel the mystery of the Philosopher's Stone

                    I can read this book over and over again. From the very beginning until the end
                    J.K. Rowling has me gripped! There is never a dull moment, whether it's battlin
                    g with trolls, a three-headed dog, or Harry facing Lord Voldermort. I would defi
                    nitely recommend this book because it keeps you reading without ever wanting to
                    put the book down. By the end of the book you come to love the characters and yo
                    u want to read more. You won't be disappointed because the second book in the se
                    ries, Harry Potter and the Chamber of Secrets is just as great! If you haven't read any of the Harry Potter books you are missing out on the best series ever!
                    Harry Potter and the Prisoner of Azkaban, written by J.K Rowling is the third book in the phenomenal Harry Potter series. The genre of this book is fantasy which involves magic, spells and Hogwarts, School of Witchcraft and Wizardry. I chose this book because the whole series is incredible, and J.K Rowling is by far one of the all-time greatest authors in the world.
                    The adventure of Harry Potter, along with his best friends Ron Weasley and Hermione Granger, takes place in Hogwarts, home to many young wizards and witches. In their third year, Harry is forced to go on another roller coaster ride with many challenges that occur in the book.
                    The plot starts when Sirius Black, a convicted murderer, escapes the prison of Azkaban. As Harry learns about Sirius Black’s unforgivable pass, he’s emotions start to rise and boil. As the book twists and turns, it follows Harry in his magical world not only with his friends Ron and Hermione, but also with the troubles that occur. The Dementors (huge cloaked, black, figures that float in the air) plays a huge part in the story. As part of a precaution, Dementors are put on Hogwarts ground to catch Sirius Black and protect students and teachers of Hogwarts. A new teacher was also introduced in this story, Professor Remus Lupin, who takes “Defence Against the Dark Arts”. Lupin also becomes very close to Harry. My favourite part of the story was when Harry caught the Snitch in the Quidditch Finals against the Slytherins.
                    Main characters in this book include Harry, Ron, Hermione, Sirius Black, Professor Lupin, Dumbledore (Headmaster) , Professor Snape and Hagrid (Keeper Of The Keys and Grounds Keeper).
                    As a reader, “Harry Potter and The Prisoner of Azkaban”, could well possibly be my favourite book. It is also the best, in my opinion, Harry Potter book J.K Rowling ever written. The storyline of this book flows very well and every aspect of the book is detailed. There was not a single bit of this book that I do not enjoy. The book can be described as funny, adventurous, quirky and very imaginative.
                    I score this book 10/10 and I’ll give it 5 stars. I would recommend this book to children and parents, 7+.
                </Info>

                <AllComments>Comments</AllComments>
                <Wrapper>
                    <Wrapper.Img src={UserImg} />

                    <Wrapper.Comment>
                        <Username>
                            Miftohiddin
                        </Username>
                        <Wrapper.Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde sunt mollitia ad ipsa ut dolor aperiam, ea nihil adipisci cupiditate explicabo molestiae voluptate ipsum repellat doloribus reiciendis ex quisquam quis esse libero iure similique. Nesciunt vero officiis pudiandae eveniet error saepe labore quae fuga.
                            <Wrapper.Reply>
                                <Icon.Reply />
                                Reply
                            </Wrapper.Reply>
                        </Wrapper.Text>
                        <Form>
                            <Wrapper.Inp type="text" placeholder="Add comment..." />
                            <Btn>
                                Add
                            </Btn>
                        </Form>

                    </Wrapper.Comment>
                </Wrapper>
            </Container>
        </>
    )
}
