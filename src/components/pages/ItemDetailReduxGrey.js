import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Clock from "../components/Clock";
import Footer from '../components/footer';
//import { createGlobalStyle } from 'styled-components';
import * as selectors from '../../store/selectors';
import { fetchNftDetail } from "../../store/actions/thunks";
import M_itemdetailRedux from '../components/myAddComponents/M_ItemdetailRedux';
/*import Checkout from "../components/Checkout";*/
import api from "../../core/api";
import moment from "moment";

//IMPORT DYNAMIC STYLED COMPONENT
import { StyledHeader } from '../Styles';
//SWITCH VARIABLE FOR PAGE STYLE
const theme = 'GREY'; //LIGHT, GREY, RETRO

const ItemDetailRedux = ({ nftId }) => {

    const [openMenu0, setOpenMenu0] = React.useState(true);
    const [openMenu, setOpenMenu] = React.useState(false);
    const [openMenu1, setOpenMenu1] = React.useState(false);

    const handleBtnClick0 = () => {
        setOpenMenu0(!openMenu0);
        setOpenMenu(false);
        setOpenMenu1(false);
        document.getElementById("Mainbtn0").classList.add("active");
        document.getElementById("Mainbtn").classList.remove("active");
        document.getElementById("Mainbtn1").classList.remove("active");
    };
    const handleBtnClick = () => {
        setOpenMenu(!openMenu);
        setOpenMenu1(false);
        setOpenMenu0(false);
        document.getElementById("Mainbtn").classList.add("active");
        document.getElementById("Mainbtn1").classList.remove("active");
        document.getElementById("Mainbtn0").classList.remove("active");
    };
    const handleBtnClick1 = () => {
        setOpenMenu1(!openMenu1);
        setOpenMenu(false);
        setOpenMenu0(false);
        document.getElementById("Mainbtn1").classList.add("active");
        document.getElementById("Mainbtn").classList.remove("active");
        document.getElementById("Mainbtn0").classList.remove("active");
    };

    const dispatch = useDispatch();
    const nftDetailState = useSelector(selectors.nftDetailState);
    const nft = nftDetailState.data ? nftDetailState.data : [];

    const [openCheckout, setOpenCheckout] = React.useState(false);
    const [openCheckoutbid, setOpenCheckoutbid] = React.useState(false);

    useEffect(() => {
        dispatch(fetchNftDetail(nftId));
    }, [dispatch, nftId]);

    return (
        <div className="greyscheme">
            <StyledHeader theme={theme} />
            <section className='container'>
                <div className='row mt-md-5 pt-md-4'>
                    <div className="col-md-6 text-center">
                        <img src={nft.preview_image && api.baseUrl + nft.preview_image.url} className="img-fluid img-rounded mb-sm-30" alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="item_info">
                            {nft.item_type === 'on_auction' &&
                                <>
                                    Auctions ends in
                                    <div className="de_countdown">
                                        <Clock deadline={nft.deadline} />
                                    </div>
                                </>
                            }
                            <h2>{nft.title}</h2>
                            <div className="item_info_counts">
                                <div className="item_info_type"><i className="fa fa-image"></i>{nft.category}</div>
                                <div className="item_info_views"><i className="fa fa-eye"></i>{nft.views}</div>
                                <div className="item_info_like"><i className="fa fa-heart"></i>{nft.likes}</div>
                            </div>
                            <p>{nft.description}</p>

                            <div className="d-flex flex-row">
                                <div className="mr40">
                                    <h6>Creator</h6>
                                    <div className="item_author">
                                        <div className="author_list_pp">
                                            <span>
                                                <img className="lazy" src={nft.author && api.baseUrl + nft.author.avatar.url} alt="" />
                                                <i className="fa fa-check"></i>
                                            </span>
                                        </div>
                                        <div className="author_list_info">
                                            <span>{nft.author && nft.author.username}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mr40">
                                    <h6>Collection</h6>
                                    <div className="item_author">
                                        <div className="author_list_pp">
                                            <span>
                                                <img className="lazy" src={nft.author && api.baseUrl + nft.author.avatar.url} alt="" />
                                                <i className="fa fa-check"></i>
                                            </span>
                                        </div>
                                        <div className="author_list_info">
                                            <span>{nft.author && nft.author.username}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="spacer-40"></div>

                            <div className="de_tab">

                                <ul className="de_nav">
                                    <li id='Mainbtn0' className="active"><span onClick={handleBtnClick0}>Details</span></li>
                                    <li id='Mainbtn' ><span onClick={handleBtnClick}>Bids</span></li>
                                    <li id='Mainbtn1' className=''><span onClick={handleBtnClick1}>History</span></li>
                                </ul>

                                <div className="de_tab_content">
                                    {openMenu0 && (
                                        <div className="tab-1 onStep fadeIn">
                                            <div className="d-block mb-3">
                                                <div className="mr40">
                                                    <h6>Owner</h6>
                                                    <div className="item_author">
                                                        <div className="author_list_pp">
                                                            <span>
                                                                <img className="lazy" src={nft.author && api.baseUrl + nft.author.avatar.url} alt="" />
                                                                <i className="fa fa-check"></i>
                                                            </span>
                                                        </div>
                                                        <div className="author_list_info">
                                                            <span>{nft.author && nft.author.username}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row mt-5">
                                                    <M_itemdetailRedux type="Background" part="Yellowish Sky" per="85% have this trait" />
                                                    <M_itemdetailRedux type="Eyes" part="Purple Eyes" per="14% have this trait" />
                                                    <M_itemdetailRedux type="Nose" part="Small Nose" per="45% have this trait" />
                                                    <M_itemdetailRedux type="Mouth" part="Smile Red Lip" per="61% have this trait" />
                                                    <M_itemdetailRedux type="Neck" part="Pink Ribbon" per="27% have this trait" />
                                                    <M_itemdetailRedux type="Hair" part="Pink Short" per="35% have this trait" />
                                                    <M_itemdetailRedux type="Accessories" part="Heart Necklace" per="33% have this trait" />
                                                    <M_itemdetailRedux type="Hat" part="Cute Panda" per="62% have this trait" />
                                                    <M_itemdetailRedux type="Clothes" part="Casual Purple" per="78% have this trait" />
                                                </div>

                                            </div>
                                        </div>
                                    )}

                                    {openMenu && (
                                        <div className="tab-1 onStep fadeIn">
                                            {nft.bids && nft.bids.map((bid, index) => (
                                                <div className="p_list" key={index}>
                                                    <div className="p_list_pp">
                                                        <span>
                                                            <img className="lazy" src={api.baseUrl + bid.author.avatar.url} alt="" />
                                                            <i className="fa fa-check"></i>
                                                        </span>
                                                    </div>
                                                    <div className="p_list_info">
                                                        Bid {bid.author.id === nft.author.id && 'accepted'} <b>{bid.value} ETH</b>
                                                        <span>by <b>{bid.author.username}</b> at {moment(bid.created_at).format('L, LT')}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {openMenu1 && (
                                        <div className="tab-2 onStep fadeIn">
                                            {nft.history && nft.history.map((bid, index) => (
                                                <div className="p_list" key={index}>
                                                    <div className="p_list_pp">
                                                        <span>
                                                            <img className="lazy" src={api.baseUrl + bid.author.avatar.url} alt="" />
                                                            <i className="fa fa-check"></i>
                                                        </span>
                                                    </div>
                                                    <div className="p_list_info">
                                                        Bid {bid.author.id === nft.author.id && 'accepted'} <b>{bid.value} ETH</b>
                                                        <span>by <b>{bid.author.username}</b> at {moment(bid.created_at).format('L, LT')}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}


                                    {/* button for checkout */}
                                    <div className="d-flex flex-row mt-5">
                                        <button className='btn-main lead mb-5 mr15' onClick={() => setOpenCheckout(true)}>Buy Now</button>
                                        <button className='btn-main btn2 lead mb-5' onClick={() => setOpenCheckoutbid(true)}>Place Bid</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            {openCheckout &&
                <div className='checkout'>
                    <div className='maincheckout'>
                        <button className='btn-close' onClick={() => setOpenCheckout(false)}>x</button>
                        <div className='heading'>
                            <h3>Checkout</h3>
                        </div>
                        <p>You are about to purchase a <span className="bold">AnimeSailorClub #304</span>
                            <span className="bold">from Monica Lucas</span></p>
                        <div className='detailcheckout mt-4'>
                            <div className='listcheckout'>
                                <h6>
                                    Enter quantity.
                                    <span className="color">10 available</span>
                                </h6>
                                <input type="text" name="buy_now_qty" id="buy_now_qty" className="form-control" />
                            </div>

                        </div>
                        <div className='heading mt-3'>
                            <p>Your balance</p>
                            <div className='subtotal'>
                                10.67856 ETH
                            </div>
                        </div>
                        <div className='heading'>
                            <p>Service fee 2.5%</p>
                            <div className='subtotal'>
                                0.00325 ETH
                            </div>
                        </div>
                        <div className='heading'>
                            <p>You will pay</p>
                            <div className='subtotal'>
                                0.013325 ETH
                            </div>
                        </div>
                        <button className='btn-main lead mb-5'>Checkout</button>
                    </div>
                </div>
            }
            {openCheckoutbid &&
                <div className='checkout'>
                    <div className='maincheckout'>
                        <button className='btn-close' onClick={() => setOpenCheckoutbid(false)}>x</button>
                        <div className='heading'>
                            <h3>Place a Bid</h3>
                        </div>
                        <p>You are about to purchase a <span className="bold">AnimeSailorClub #304</span>
                            <span className="bold">from Monica Lucas</span></p>
                        <div className='detailcheckout mt-4'>
                            <div className='listcheckout'>
                                <h6>
                                    Your bid (ETH)
                                </h6>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className='detailcheckout mt-3'>
                            <div className='listcheckout'>
                                <h6>
                                    Enter quantity.
                                    <span className="color">10 available</span>
                                </h6>
                                <input type="text" name="buy_now_qty" id="buy_now_qty" className="form-control" />
                            </div>
                        </div>
                        <div className='heading mt-3'>
                            <p>Your balance</p>
                            <div className='subtotal'>
                                10.67856 ETH
                            </div>
                        </div>
                        <div className='heading'>
                            <p>Service fee 2.5%</p>
                            <div className='subtotal'>
                                0.00325 ETH
                            </div>
                        </div>
                        <div className='heading'>
                            <p>You will pay</p>
                            <div className='subtotal'>
                                0.013325 ETH
                            </div>
                        </div>
                        <button className='btn-main lead mb-5'>Checkout</button>
                    </div>
                </div>
            }

        </div>
    );
}

export default memo(ItemDetailRedux);