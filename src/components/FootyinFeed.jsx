import React from "react";
import "./FootyInFeed.css";
import golf from "../images/golf.png";
import canoe from "../images/canoe.png";
import { defaultImgs } from "../defaultimgs";
import { Icon } from "web3uikit";

const FootyInFeed = () => {
    return (
        <>
            <div className='feedTweet'>
                <img src={defaultImgs[0]} alt='' className='profilePic' />
                <div className='completeTweet'>
                    <div className='who'>
                        Simrit
                        <div className='accWhen'>0x42..314 · 1h</div>
                    </div>
                    <div className='tweetContent'>
                        Nice game of football today!
                        <img src={golf} alt='' className='tweetImg' />
                    </div>
                    <div className='interactions'>
                        <div className='interactionNums'>
                            <Icon fill='#3f3f3f' size={20} svg='messageCircle' />5
                        </div>
                        <div className='interactionNums'>
                            <Icon fill='#3f3f3f' size={20} svg='star' />
                            10
                        </div>
                        <div className='interactionNums'>
                            <Icon fill='#3f3f3f' size={20} svg='matic' />2
                        </div>
                    </div>
                </div>
            </div>
            <div className='feedTweet'>
                <img src={defaultImgs[0]} className='profilePic'></img>
                <div className='completeTweet'>
                    <div className='who'>
                        Juhizzz
                        <div className='accWhen'>0x42..314 · 1h</div>
                    </div>
                    <div className='tweetContent'>
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                        also the leap into electronic typesetting, remaining essentially un
                    </div>
                    <div className='interactions'>
                        <div className='interactionNums'>
                            <Icon fill='#3f3f3f' size={20} svg='messageCircle' />
                        </div>
                        <div className='interactionNums'>
                            <Icon fill='#3f3f3f' size={20} svg='star' />
                            12
                        </div>
                        <div className='interactionNums'>
                            <Icon fill='#3f3f3f' size={20} svg='matic' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='feedTweet'>
                <img src={defaultImgs[0]} className='profilePic'></img>
                <div className='completeTweet'>
                    <div className='who'>
                        Juhizzz
                        <div className='accWhen'>0x42..314 · 1h</div>
                    </div>
                    <div className='tweetContent'>Thoughts on the new Coca-Cola banana 🥤🍌 flavor?</div>
                    <div className='interactions'>
                        <div className='interactionNums'>
                            <Icon fill='#3f3f3f' size={20} svg='messageCircle' />
                        </div>
                        <div className='interactionNums'>
                            <Icon fill='#3f3f3f' size={20} svg='star' />
                            12
                        </div>
                        <div className='interactionNums'>
                            <Icon fill='#3f3f3f' size={20} svg='matic' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='feedTweet'>
                <img src={defaultImgs[0]} className='profilePic'></img>
                <div className='completeTweet'>
                    <div className='who'>
                        Juhizzz
                        <div className='accWhen'>0x42..314 · 1h</div>
                    </div>
                    <div className='tweetContent'>
                        Love spending time on the water 🌊🌅
                        <img src={canoe} className='tweetImg'></img>
                    </div>
                    <div className='interactions'>
                        <div className='interactionNums'>
                            <Icon fill='#3f3f3f' size={20} svg='messageCircle' />
                        </div>
                        <div className='interactionNums'>
                            <Icon fill='#3f3f3f' size={20} svg='star' />
                            12
                        </div>
                        <div className='interactionNums'>
                            <Icon fill='#3f3f3f' size={20} svg='matic' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FootyInFeed;
