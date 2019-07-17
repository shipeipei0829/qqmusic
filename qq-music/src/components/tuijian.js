import React, { Component } from 'react'
import { Carousel } from 'antd';
import { Icon } from 'antd';
import Footer from '../components/footer'
import { recommend } from '../utli/API'
import './tuijian.css'

class Tuijian extends Component {
    constructor() {
        super()
        this.state = {
            slider: [],
            radioList:[]
        }
    }
    componentDidMount() {
        this.$http({
            url: recommend,
        }).then(d => {
            // console.log(d)
            this.setState({
                slider: d.data.data.slider,
                radioList:d.data.data.radioList
            })
        })
    }
    render() {
        // console.log(this.state.radioList)
        var el = this.state.slider.map(item => {
            return (
                <div key={item}>
                    <img src={item} alt="" />
                </div>
            )
        })
        var el1=this.state.radioList.map(item=>{
            return(
                <li key={item.id}>
                    <a href="javascript:;" className="list_main ">
                        <div className="radioCon">
                            <img src={item.picUrl} alt="" />
                            <Icon type="play-circle" theme="filled" className="iconStyleT" />
                        </div>
                        <div className="radioTitle">{item.title}</div>
                    </a>
                </li>
            )
        })
        return (
            <div>
                {/* 轮播图 */}
                <Carousel autoplay >
                    {el}
                    {/* <div>
                        <img src="http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1378870.jpg" alt="" />
                    </div>
                    <div>
                        <img src="http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1396330.jpg" alt="" />
                    </div> */}
                </Carousel>
                {/* 电台 */}
                <div className="radio">
                    <h2 className="radioHeader">电台</h2>
                    <ul>
                        {el1}
                        {/* <li>
                            <a href="javascript:;" className="list_main ">
                                <div className="radioCon">
                                    <img src="https://y.gtimg.cn/music/photo/radio/track_radio_199_13_1.jpg?max_age=2592000" alt="" />
                                    <Icon type="play-circle" theme="filled" className="iconStyleT" />
                                </div>
                                <div className="radioTitle">热歌</div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" className="list_main ">
                                <div className="radioCon">
                                    <img src="https://y.gtimg.cn/music/photo/radio/track_radio_199_13_1.jpg?max_age=2592000" alt="" />
                                    <Icon type="play-circle" theme="filled" className="iconStyleT" />
                                </div>
                                <div className="radioTitle">热歌</div>
                            </a>
                        </li> */}
                    </ul>
                </div>
                {/* footer */}
                <Footer />
            </div>
        )
    }
}
export default Tuijian